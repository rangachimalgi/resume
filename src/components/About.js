import React from "react";
import "../assests/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


function About() {
  return (
    <div className="box">
    <FontAwesomeIcon icon={faUser} className="icon" />
      <h1>I am Ranganath Chimalgi.</h1>
      <div className="box-content">
        <p>
          As a MERN stack developer, I bring a strong foundation in JavaScript,
          React, Node.js, and MongoDB. With a passion for creating dynamic and
          responsive web applications, I am eager to contribute my skills and
          collaborate with a team to build innovative solutions. I am a
          dedicated learner, adaptable problem-solver, and committed team
          player.
        </p>
      </div>
    </div>
  );
}

export default About;
