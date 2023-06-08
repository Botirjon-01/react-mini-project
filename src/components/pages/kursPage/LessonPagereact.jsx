import React from "react";
import "./LessonPage.css";
import "./LessonPagereact.css";
import BasicTabs from "../../tabcomponent/BasicTabs";
import VideoDBreact from "../../DB/VideoDBreact";
import Kurscom from "./kurscomponent/Kurscom";


const LessonPagereact = () => {

  const video = VideoDBreact.map((data) => {
    return (
      <>
        <Kurscom
          key={data.id}
          kName={data.kName}
          img={data.img}
          linkvideo={data.linkvideo}
          post={data.post}
        />
      </>
    );
  });
  return (
    <div className="LessonPage">
      <div className="comments">
        <img
          src="https://uzbekdevs.uz/media/articles/react-js-nima-react-js-haqida-tushuncha_uzbekdevs.png"
          alt=""
        />

        <div className="izohlar">
          <h1>React js </h1>
        </div>
      </div>
      LessonPagereact
      <BasicTabs />
      <p>{video}</p>


    </div>
  );
};

export default LessonPagereact;
