import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player'
import "./Kurscom.css";
const Kurscom = (props) => {

  // const [yotubeUrl, setyotubeUrl] = useState("")

  // useEffect(() => {
    
  //     setyotubeUrl(props.linkvideo)
  //     console.log(" video url ", yotubeUrl);
  
  // });

  // function whatchvideo() {
  //   setyotubeUrl(props.linkvideo)
  //   console.log(" video url ", yotubeUrl);
  // }

  return (
    <div className="Kurscom">
      <details>
        <summary> {props.kName} </summary>
        <p> {props.post} </p>
         

        {/* <video width="750" height="500" controls >
          <source src={yotubeUrl} type="video/mp4" />
          <source src="movie.ogg" type="video/ogg"/>
        </video> */}
        
        <ReactPlayer url={props.linkvideo} controls /> 

        <a href={props.linkvideo} target="_blank">open  </a>
        
      </details>
    </div>
  );
};

export default Kurscom;
