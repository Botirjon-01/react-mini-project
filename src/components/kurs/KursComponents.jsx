import React from 'react'
import "./KursComponents.css";
import { Link } from 'react-router-dom';


export const KursComponents = (props) => {
 
  return (
    <div className="kurs">
      <Link to={props.pagelink}>
        <div className="kurs_img">
          <img src={props.link} alt="not fount img" />
        </div>
        <div className="kurs_title">
          <h1>{props.title}</h1>
        </div>
        <div className="btn">
          <button>Batafsil</button> <span>Bepul</span>
        </div>
      </Link>
    </div>
  );
}
