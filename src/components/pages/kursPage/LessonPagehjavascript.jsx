import React from 'react'
import "./LessonPage.css";
import "./jsLessonpage.css";
import BasicTabs from '../../tabcomponent/BasicTabs';
import StremYoutubeJs from '../kursVideoComponent/StremYoutubeJs';
const LessonPagehjavascript = () => {
  let Nodee = {
    nom: "Javascript ",
    img: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F36T4JDuzTpeUtdsuh8cC&w=1920&q=75",
    post: ` 
   Javascript toʻliq oʻzbek tilida. JavaScript "From 0 To Guru": Eng mashhur dasturlash tilini o'zlashtirib oling va uni amalda qo'llashni o'rganing. Ushbu kurs JavaScript-ni chuqur o'rganishga qaratilgan, ammo asosiy maqsad uni darhol amalda qo'llashdir. Bu shuni anglatadiki, siz ishlash uchun material olasiz va birgalikda biz bosqichma-bosqich haqiqiy loyihalarni yaratamiz.
    `
  }


  return (
    <div className="LessonPage">
      <BasicTabs til={Nodee.nom}
        post={Nodee.post}
        img={Nodee.img}
      />
      <div className="none">

        <StremYoutubeJs/>
      </div>
      
      
    </div>
  );
}

export default LessonPagehjavascript