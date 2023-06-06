import "./Takliflar.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Takliflar = () => {

   const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      <div className="taklif-post">
        <h1>
          Bizga qandaydur savollaringiz bo'lsa bizga murojat qling biz alba
          ko'rib chiqamiz va biz sizning savol va takliflaringizga javob
          qaytaramiz
        </h1>
      </div>

      <form className="formsent" ref={form} onSubmit={sendEmail}>
        <div>
          {" "}
          {/* <label>Name</label> */}
          <input type="text" name="to_name" placeholder="foydalanuvchi ism" />
        </div>
        <div>
          {/* <label>Email</label> */}
          <input type="email" name="from_name" placeholder="usmon@gmail.com" />
        </div>
        <div className="texar">
          {/* <label>Message</label> */}
          <textarea name="message" placeholder="message" />
        </div>
        <div>
          <input className="submit" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}

export default Takliflar