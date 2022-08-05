const router = require("express").Router();
const db = require("../../models");

router.get('/', (req, res) => {
    db.Paintings.find({})
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)
      });
  })

module.exports = router;