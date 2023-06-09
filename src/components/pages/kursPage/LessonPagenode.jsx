import React from 'react'
import "./LessonPage.css";
import BasicTabs from '../../tabcomponent/BasicTabs';
import StremYoutubeNode from '../kursVideoComponent/StremYoutubeNode';


const LessonPagenode = () => {

  let Nodee = {
    nom: "NodeJS",
    img: "https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FmDcwhbguQpyM74jb18M5&w=1920&q=75",
    post: ` 
    JavaScript-ni server tomonida ishlab chiqish. Kurs NodeJS-ni o'rnatishdan tortib, tugallangan dasturni joylashtirish va uni serverda joylashtirishgacha bo'lgan asosiy ma'lumotlarni taqdim etadi. Kursning asosiy maqsadi sizga nafaqat nazariy hamda amaliy mashg'ulotlar va loyihalar bilan chuqur o'rgatishdir. 
           `
  }

  
  return (
    <div className = "LessonPage">
    
      <BasicTabs til={Nodee.nom}
        post={Nodee.post} 
        img = {Nodee.img}
        />
      <StremYoutubeNode/>
    
    </div>
  )
}

export default LessonPagenode