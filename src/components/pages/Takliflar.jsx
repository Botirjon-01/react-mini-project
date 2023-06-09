import "./Takliflar.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Takliflar = () => {

   const form = useRef();

  const sendEmail = (e) => {
  
    // e.preventDefault();
   


    emailjs
      .sendForm(
        "service_jvj37n3",
        "template_3ajlg2q",
        form.current,
        "Y8HMNuU_tt6UJomBV"
      )
      .then(
        (result) => {
          console.log(result.text);

          
          console.log("sent message");
        },
        (error) => {
          console.log(error.text);
          console.log("Not requair message erroe");
        }
      );
  };
  return (
    <div className="taklif">
      <div className="post">
        <div className="post-mess" >
          <div className="taklif-post">
            <h1>
              Bog'lanish
            </h1>
            <p>Platformaga oid savol va takilf yozishingiz mumkin.</p><br />
            <span> Botirjon Tursunaliyev ko'rib chiqadi</span>
          </div>

          <form className="formsent" ref={form} onSubmit={sendEmail}>
            <div>
              {" "}
              <label>Name</label>
              <input type="text" name="to_name" placeholder="foydalanuvchi ismi" />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="from_name" placeholder="google@gmail.com" />
            </div>
            <div className="texar">
              <label>Message</label>
              <textarea name="message" placeholder="message" />
            </div>
            <div>
              <input className="submit" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
   </div>
  );
}

export default Takliflar