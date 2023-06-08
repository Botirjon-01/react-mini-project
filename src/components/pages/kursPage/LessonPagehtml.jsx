import React from 'react'
import "./LessonPage.css";
import VideoDB from "../../DB/VideoDBhtml"
import Kurscom from './kurscomponent/Kurscom';



const LessonPagehtml = () => {

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
  let doc = "<!DOCTYPE html>", html = "<html> ", head = "<head>", title = "<title>", body = "<body>", h = "<h1>", p = "<p>"
  return (
   <div className=''>
      <div className='lessonkurs'>
        <div >
          <h1>HTML: Kirish</h1>
          <p>HTML   bu  ​veb sahifalarni yaratish uchun ishlatiladigan ​standart gipermatnli belgilash tili.</p>
          <p>Html ni dasturlash tili deb tan olishmaydi. Bizga farqi yo'q bu dasturlash tilimi yo'qmi. Eng asosiysi uni o'rganishimiz kerak.

          </p>       <br /><br />
          <h2>HTML  o'zi nima? </h2>
          <p>HTML so'zini inglizcha qisqartma bo'lib, Hyper Text Markup Language so'zining qisqa ko'rinishi.</p>
          <p>HTML - ​veb sahifalarni yaratish uchun ishlatiladigan ​standart gipermatnli belgilash tili.</p>
          <p>HTML - veb sahifaning strukturasini tasvirlovchi hujjat.</p>
          <p>HTML -  hujjatlar bir necha elementlardan tashkil topgan bo'ladi.</p>
          <p>HTML - elementlar brauzerlarga kontentni (veb sahifadagi ma'lumotlarni) qanday ko'rsatishni tushuntiradi.</p>
          <p>HTML - elementlar web sahifadagi kontentlarni " head (bosh qism) ", " body (tana qism) ", " link (boshqa web sahifaga giper-yo'llanma) " kabi guruhlarga ajratadi.

          </p>       <br /><br />
          <h3>HTML hujjat namuna</h3><br />
          <img src="https://www.webfx.com/wp-content/uploads/2021/10/start-indent.png" alt="" />

          <br /><br /><br /><br />
          <h2>Barchasi haqida batafsil</h2>
          <ul>
            <li> {doc}  bu hujjat HTML5 da yozilganini bildiradi. Ya'ni HTML5 da yozilgan hujjat ekanligini bildiradi.</li>
            <li>{html} -  HTML hujjatning eng asosiy (root) elementi hisoblanadi. </li>
            <li> {head}-  ​web sahifa haqida meta-ma'lumotlarni saqlovchi element. Meta ma'lumotlar haqida keyingi darslarda gaplashamiz.</li>
            <li>{title}  - ​  web sahifaning nomini saqlovchi element ( brauzerda ochilgan har bir oynaning sarlavhalar qatorida ochilgan sahifa nomi ko'rinadi bu o'sha nom).</li>
            <li>{body} -​  web sahifaning tana (body) qismidagi  foydalanuvchilarga ko'rinadigan sarlavha, paragraflar, rasmlar, girep-yo'llanmalar(hyperlink), jadvallar, ro'yxatlar kabi kontentni saqlovchi element.</li>
            <li> {h}    - ​  eng katta o'lchamdagi sarlavha elementi.</li>
            <li>{p}      -   paragraf elementi.
            </li>
          </ul>
          <br /><br />
          <h2>HTML sahifa strukturasi</h2>
          <p>HTML sahifadagi elementlarning vizualizatsiyasi</p>
          <br />
          <img width={1000} src="https://api.dasturjon.uz/api/v1/attach/image/2020-07-01-18-18-25.png" alt="" />

        </div>
        <div>
        <p>
            {video}
        </p>

        </div>
     </div>
   
   </div>
  )
}

export default LessonPagehtml