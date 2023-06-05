import React from 'react'
import "./KursComponents.css";
import DBData from '../DB/DBData';
import Kurslar from '../pages/Kurslar';

export const KursComponents = (props) => {
 
  return (
    <div className="kurs">
      <div className="kurs_img">
        <div class="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
            title="YouTube video"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="kurs_title"> {props.title}</div>
    </div>
  );
}
