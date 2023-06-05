import React from 'react'
import "./KursHaritasi.css";

import { useState } from 'react';


const KursHaritasi = () => {

let ChangName = "Alisher";

// const useState()


function ChangNameFunction() {

  ChangName = "Usmon"

  console.log(ChangName);
  
}


  return (
    <div className='roudmaps'>3 salom bu Kurs Haritasi bo'lim
    
    <h1>{ChangName}</h1>
    <button onClick={ChangNameFunction} >ok ism o'zgartrish uchun</button>
    
    </div>




  )
}

export default KursHaritasi