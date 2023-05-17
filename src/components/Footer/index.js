import React from "react";
import {
  AiFillCode,
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="row">
      <div class="container-fluid d-flex justify-content-center bg-body-tertiary footer">
        <div className="socials">
          <a href="https://github.com/arslanng/arslanng.github.io" className="social">
            <AiFillCode />
          </a>
          <a href="https://github.com/arslanng" className="social">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/dr_murat_gokduman/" className="social">
            <AiFillInstagram />
          </a>
          <a href="https://www.linkedin.com/in/murat-g%C3%B6kduman-6aa876a7/" className="social">
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
