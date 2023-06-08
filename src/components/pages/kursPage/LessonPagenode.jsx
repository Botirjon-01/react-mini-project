import React from 'react'
import "./LessonPage.css";
import Kurscom from './kurscomponent/Kurscom';

import VideoDBnode from '../../DB/VideoDBnode';


const LessonPagenode = () => {

  const videonode = VideoDBnode.map((data) => {
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
    <div className = "LessonPage">LessonPagenode
    
    
      <p>{videonode}</p>
    </div>
  )
}

export default LessonPagenode