import React from 'react'
import "./LessonPage.css";
import Kurscom from './kurscomponent/Kurscom';
import BasicTabs from '../../tabcomponent/BasicTabs';

import VideoDBnode from '../../DB/VideoDBnode';


const LessonPagenode = () => {

  let Nodee = {
    nom: "NodeJS",
    img: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FmDcwhbguQpyM74jb18M5&w=1920&q=75",
    post: ` 
    JavaScript-ni server tomonida ishlab chiqish. Kurs NodeJS-ni o'rnatishdan tortib, tugallangan dasturni joylashtirish va uni serverda joylashtirishgacha bo'lgan asosiy ma'lumotlarni taqdim etadi. Kursning asosiy maqsadi sizga nafaqat nazariy hamda amaliy mashg'ulotlar va loyihalar bilan chuqur o'rgatishdir. 
           `
  }

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
    
      <BasicTabs til={Nodee.nom}
        post={Nodee.post} 
        img = {Nodee.img}
        />
    
      <p>{videonode}</p>
    </div>
  )
}

export default LessonPagenode