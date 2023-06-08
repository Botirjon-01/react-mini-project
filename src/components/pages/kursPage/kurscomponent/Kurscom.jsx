import React from "react";
import "./Kurscom.css";
const Kurscom = (props) => {
  return (
    <div className="Kurscom">
     
      <details>
        <summary>{props.kName}</summary>
        <p>
          {props.post}
        </p>
        <img
          src={props.link}
          alt={props.linkimg}
        />
        <br />
        <iframe
          width="560"
          height="315"
          src={props.linkvideo}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </details>
    </div>
  );
};

export default Kurscom;
