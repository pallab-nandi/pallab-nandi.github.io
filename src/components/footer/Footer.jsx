import React from "react";
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Pallab Nandi</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>

          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://in.linkedin.com/in/pallabnandi" className="footer__social-link" target="_blank">
            <i class='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/pallab-nandi" className="footer__social-link" target="_blank">
            <i class='bx bxl-github' ></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Pallab Nandi | All rights reserved</span>
      </div>
    </footer>
  )
}