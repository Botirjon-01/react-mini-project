import React from 'react'
import "./footerCom.css";
import { BsLinkedin } from "react-icons/bs";
import {SiTelegram} from "react-icons/si"
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";


const FooterCom = () => {
  return (
    <div className="footer">
      <div className="brend"></div>
      <div className="create">
        Botirjon Tursunaliyev 06:06:2023 yil o'z faoliyatin boshladi
      </div>
      <div className="blogIcon">
        <a
          href="https://www.linkedin.com/in/botirjon-tursunaliyev-279949208/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a href="https://t.me/Deep_w_1919" target="_blank">
          <SiTelegram />
        </a>
        <a href="">
          <AiFillFacebook />
        </a>
        <a href="https://github.com/programing-BT" target="_blank">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
}

export default FooterCom