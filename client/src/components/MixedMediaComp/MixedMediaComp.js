import React, { useEffect, useState, useContext } from "react";
import "./mixedMediaComp.css";
import NavComp from "../NavComp/NavComp";

import { ArtContext } from "../../contexts/ArtContext";
import { useNavigate } from "react-router-dom";

const MixedMediaComp = () => {
  const navigate = useNavigate();
  const { mixedMedia, getAllMixedMedia } = useContext(ArtContext);

  useEffect(() => {
    getAllMixedMedia();
  }, []);

  const reversedMedia = [];
  for (let i = mixedMedia.length - 1; i + 1 > 0; i--) {
    reversedMedia.push(mixedMedia[i]);
  }

  function handleClick(e) {
    navigate("/mixed-media/" + e.target.id);
  }

  return (
    <div>
      <div className="nav-container">
        <NavComp />
      </div>
      <br />
      <br />
      <br />

      <div className="mixed-media-container">
        {reversedMedia.map((media) => (
          <div key={media._id}>
            <h1>{media.name}</h1>
            <br />
            <img
              onClick={handleClick}
              id={media._id}
              className="mixed-img"
              src={media.src}
              alt={media.name}
            />
            <br />
            <br />
            <br />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MixedMediaComp;
