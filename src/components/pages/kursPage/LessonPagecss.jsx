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

      <div className="commentcss">
      <h1>Css Kirish</h1>
      <h2>Css bu nima ?</h2>
      <ul>
        <li>CSS bu Cascading Style Sheets so'zlari bosh harflari dan olingan bo'lib, Kaskadli Stillar Sahifasi degan ma'noni anglatadi.</li>
        <li>Css  brauserda Html elementlarini qanday ko'rinishi kerakligini aniqlaydi.</li>
        <li>CSS fayli kengaytmasi .css bo'lib uning ichida stil kodlari yoziladi va saqlanadi. </li>
        <li>CSS ni o'rganish juda ham oson.</li>
    

      </ul>
      <br /><br />
      <h2>Css nimaga kerak ?</h2>
      <p>CSS dan oldin web dasturchilar HTML tegi ko'rinishini o'zgartirish uchun atributlar va maxsus teglardan foydalanishgan.</p>
      <p>Masalan {"<p>"} tegini olsak uni ko'rinishini {"<font>"} maxsus tegi orqali o'zgartirishgan:</p>
      <span>{` <p><font size="15" color="red" face="Arial">Salom dunyo!</font></p>`}</span>
      <p>Izoh. Agar veb saxifaga faqat html taglaridan foydalanib  dizayn (bezak) qilib chiqsak natijada juda katta html kodlari hosil bo'ladi va ularni o'qishga va ularni o'zgartirish juda qiyin bo'lib ketadi. </p>
      <p>Sababi barcha stillar va yozuvlar katta chiroyli qasha holda bo'ladi.</p>
      <h2>Css dan foydalanishning afzalliklari. </h2>
     <ul>
        <li>CSS alohida tashqi faylga yozilgani bois HTML kodlar qisqaradi bu esa browser bizning sahifamizni o'qishini tezlashtiradi.</li>
        <li>CSS da bir qancha dizayn imkoniyatlar mavjud. Masalan animatsiya, gradientlar va hokazo.</li>
        <li>Bitta veb saxifani bir qancha katta, kichik uskunalar uchun moslashtish mumkin. Masalan mobil telefonlar, komputer ekranlari, planshet va h.k.</li>
        <li>Css  yana juda ko'p muommolarni yechadi va dasturchilarga ancha qulayliklar yaratib beradi. Qisqasi hayotni yengillashtiradi.</li>
        <li>Css veb saxifa uchun  bamisoli qizlarning  pardoz andozi dir. pardoz andozni ham meyyori bo'lgani yaxshi. </li>
        <li>CSS ni ishlatish va o'rganish juda oson. Ingliz tilini kamida o'rtacha boshqichda bilsangiz nur ustiga ola nur. </li>
        

     </ul>
      <p>Darslar davomida css  boshlang'iz bosqichdan professional darajagacha qadamma qadam o'rgatiladi.

</p>
      </div>

    <p>{video}</p>
  </div>;
}

export default LessonPagecss