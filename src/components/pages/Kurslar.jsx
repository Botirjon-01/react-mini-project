import React from 'react'
import "./Kurslar.css";
import { KursComponents } from '../kurs/KursComponents';
import DBData from '../DB/DBData';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LessonPage from './kursPage/LessonPageExpress';

const Kurslar = () => {
  
   const dataLink = DBData.map((data) => {
     return <KursComponents 
     key = {data.key}
     title = {data.title}
     link = {data.link}
     pagelink = {data.pagelink}
     />;
   });
  return <div className="kurslar">{dataLink}</div>;
}

export default Kurslar