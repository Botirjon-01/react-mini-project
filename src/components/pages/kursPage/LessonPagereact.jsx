import React from "react";
import "./LessonPage.css";
import "./LessonPagereact.css";
import BasicTabs from "../../tabcomponent/BasicTabs";
import StremYoutubeReact from "../kursVideoComponent/StremYoutubeReact";


const LessonPagereact = (props) => {
let reactt = {
  nom:"ReactJS",
  img:" https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F65rcPxsLT9ysJDisXF80&w=1920&q=75",
  post:` ReactJS darslari oʻzbek tilida toʻliq kurs. ReactJS. Eng mashhur JavaScript kutubxonasini o'zlashtirib oling va uni amalda qo'llashni o'rganing! Ushbu kurs ReactJS-ni chuqur o'rganishga qaratilgan, ammo asosiy maqsad uni hayotda qo'llashdir. Bu shuni anglatadiki, siz ishlash uchun material olasiz va birgalikda biz bosqichma-bosqich haqiqiy loyihalarni yaratamiz.
                            `
}

  return (
    <div className="LessonPage">
     
     <div className="bloglog">

        <BasicTabs til= {reactt.nom}
        post = {reactt.post}
        img = {reactt.img}
        />
        <div className="videomaps">
          <StremYoutubeReact/>

        </div>
     </div>


    </div>
  );
};

export default LessonPagereact;
