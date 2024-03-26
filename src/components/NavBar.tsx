import React from "react";
import style from "./NavBar.module.css
import { saveAs } from "file-saver";

const NavBar: React.FC = () => {
  const pdfUrl =
    "https://www.dropbox.com/scl/fi/gcmkdpz7ymqil8dor9g5p/rashaadsresume.pdf?rlkey=qt4oaudak12k7akqlci809zub&dl=0";

  const downloadPdf = () => {
    saveAs(pdfUrl, "resume.pdf");
  };
  
  return (
    <nav
      className={`${style.backgroundColor} flex items-center justify-between px-4 py-2`}
    >
      <div className="text-white front-bold text-lg">RJ</div>
      <ul className="flex space-x-4">
        <li key="home">
          <a href="/" className="text-white">
            Home
          </a>
        </li>
        <li key="contact">
          <a href="/contact" className="text-white">
            Contact
          </a>
        </li>
        <li key="resume">
          <a onClick={downloadPdf} className="text-white">
            Resume/CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
