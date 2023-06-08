import React from 'react'
import Tabs from "@mui/material/Tabs";
import "./LessonPage.css";
import "./jsLessonpage.css";
import VideoDBjs from '../../DB/VideoDBjs';
import Kurscom from './kurscomponent/Kurscom';

const LessonPagehjavascript = () => {


  const video = VideoDBjs.map((data) => {
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
    )
  })
  return (
    <div className="LessonPage">
      <div className="none"></div>
      <div className="articl">
        <div className="textArticle">
          <div>
            <h1>JavaScript darslari to'liq kurs</h1>
            <p>
              Javascript toʻliq oʻzbek tilida. JavaScript "From 0 To Guru": Eng
              mashhur dasturlash tilini o'zlashtirib oling va uni amalda
              qo'llashni o'rganing. Ushbu kurs JavaScript-ni chuqur o'rganishga
              qaratilgan, ammo asosiy maqsad uni darhol amalda qo'llashdir. Bu
              shuni anglatadiki, siz ishlash uchun material olasiz va birgalikda
              biz bosqichma-bosqich haqiqiy loyihalarni yaratamiz.
            </p>
          </div>

         
        </div>

        <div className="imgArticle"></div>
      </div>
      <p>{video}</p>
    </div>
  );
}

export default LessonPagehjavascript