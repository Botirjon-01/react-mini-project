import React from 'react'
import "./Kurslar.css";
import { KursComponents } from '../kurs/KursComponents';
import DBData from '../DB/DBData';
const Kurslar = () => {
   const dataLink = DBData.map((data) => {
     return <KursComponents 
     key = {data.key}
     title = {data.title}
     />;
   });
  return (
    <div className="kurslar">
      
      {dataLink}
     
    </div>
  );
}

export default Kurslar