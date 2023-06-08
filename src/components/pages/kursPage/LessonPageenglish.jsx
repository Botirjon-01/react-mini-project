import React from 'react'
import "./LessonPage.css";

import Kurscom from './kurscomponent/Kurscom';




const LessonPageenglish = () => {

  const video = VideoDB.map((data) => {
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
  return <div className="LessonPage">LessonPageenglish
  
    <p>{video}</p>
  
  </div>;
}

export default LessonPageenglish