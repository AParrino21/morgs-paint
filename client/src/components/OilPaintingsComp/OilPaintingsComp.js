import React, { useEffect, useState, useContext } from "react";
import "./oilPaintingsComp.css";
import NavComp from "../NavComp/NavComp";
import { useNavigate } from "react-router-dom";

import { ArtContext } from "../../contexts/ArtContext";

const OilPaintingsComp = () => {
  const navigate = useNavigate();
  const { getAllOils, oils } = useContext(ArtContext);

  useEffect(() => {
    getAllOils();
  }, []);

  function handleClick(e) {
    navigate("/oilpaintings/" + e.target.id);
  }

  const reversedOils = []
  for (let i = oils.length - 1; i + 1 > 0; i--) {
    reversedOils.push(oils[i])
  }

  return (
    <div>
      <div className="nav-container">
        <NavComp />
      </div>
      <div className="oilpainting-container">
        {reversedOils.map((art) => (
          <div key={Math.random()}>
            <h1 className="oilpainting-name">{art.name}</h1>
            <img
              id={art._id}
              onClick={handleClick}
              className="oilpainting-img"
              src={art.image}
              alt="paintings"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OilPaintingsComp;
