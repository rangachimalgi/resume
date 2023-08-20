import React from "react";
import "../assests/Resume.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCode } from "@fortawesome/free-solid-svg-icons";

function Resume() {
  return (
    <div className="resume-container">
      {/* Personal Details */}
      <section className="resume-section">
        <div className="icon-heading">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <h3 className="proj">About me</h3>
        </div>
        <p className="para-first">
          Name: Ranganath Chimalgi <br />
          "I am a diligent professional seeking opportunities in MERN / React
          developer, having completed my 10th standard at Shree Guru Vidya
          Peetha and pursued my 2nd PU at Chimalgi PU College of Science, both
          in Gulbarga, Karnataka. For my engineering studies, I graduated from
          Information Science department. Alongside my academics, I gained 9
          months of valuable experience as an intern at CustomerXPs, followed by
          2 months of successful freelancing, during which I honed my skills and
          gained valuable insights in the industry."
        </p>
      </section>
      {/* Education */}
      <section className="resume-section">
        <div className="education-header">
          <h3 className="proj"> 🎓Education</h3>
        </div>
        <h1 className="proj">Bachelor of Engineering</h1>
        Information Science And Engineering SDM College of Engineering and
        Technology - Dharwad
        <h1 className="proj">Pre-University</h1>
        Science: Chimalgi PU College of science - Dharwad
        <h1 className="proj">SSLC</h1>
        Shree Guru Vidya Peetha - Gulbarga, Karnataka
      </section>
      {/* Skills */}
      <section className="resume-section">
        <div className="icon-heading">
          <FontAwesomeIcon icon={faCode} className="icon" />
          <h3 className="proj">Skillsets</h3>
        </div>
        <h1 className="skill">
          <p>JavaScript</p>
          <p>React.js</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MongoDB</p>
          <p>MySQL</p>
        </h1>
      </section>
    </div>
  );
}

export default Resume;
