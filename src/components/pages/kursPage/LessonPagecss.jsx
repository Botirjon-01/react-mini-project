import React from 'react'
import "./LessonPage.css";
import Kurscom from './kurscomponent/Kurscom';
import VideoDBcss from '../../DB/VideoDBcss';



const LessonPagecss = () => {

const video = VideoDBcss.map((data) => {
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
  return <div className="LessonPage">LessonPagecss
  
    <p>{video}</p>
  </div>;
}

export default LessonPagecss