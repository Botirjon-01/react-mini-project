import React from "react";
import "./LessonPage.css";
import "./LessonPagereact.css";
import BasicTabs from "../../tabcomponent/BasicTabs";
import VideoDBreact from "../../DB/VideoDBreact";
import Kurscom from "./kurscomponent/Kurscom";


const LessonPagereact = (props) => {
let reactt = {
  nom:"ReactJS",
  img:" https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F65rcPxsLT9ysJDisXF80&w=1920&q=75",
  post:` ReactJS darslari oʻzbek tilida toʻliq kurs. ReactJS. Eng mashhur JavaScript kutubxonasini o'zlashtirib oling va uni amalda qo'llashni o'rganing! Ushbu kurs ReactJS-ni chuqur o'rganishga qaratilgan, ammo asosiy maqsad uni hayotda qo'llashdir. Bu shuni anglatadiki, siz ishlash uchun material olasiz va birgalikda biz bosqichma-bosqich haqiqiy loyihalarni yaratamiz.
                            `
}

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
      {/* <div className="comments">
        <img
          src="https://uzbekdevs.uz/media/articles/react-js-nima-react-js-haqida-tushuncha_uzbekdevs.png"
          alt=""
        />

        <div className="izohlar">
          <h1>React js </h1>
        </div>
      </div> */}
     <div className="bloglog">

        <BasicTabs til= {reactt.nom}
        post = {reactt.post}
        img = {reactt.img}
        />
        <div className="videomaps">{video}</div>
     </div>


    </div>
  );
};

export default LessonPagereact;
