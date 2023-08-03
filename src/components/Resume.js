import React from "react";
import "../assests/Resume.css";

function Resume() {
  return (
    <div className="resume-container">
      {/* Personal Details */}
      <section className="resume-section">
        <h3 className="proj">About me</h3>
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
        <h3 className="proj">Education</h3>
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
        <h3 className="proj">Skillsets</h3>
        <h1 className="skill">
          <p>JavaScript</p>
          <p>React.js</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>MongoDB</p>
          <p>MySQL</p>
          {/* Add more skills as needed */}
        </h1>
      </section>
      {/* Projects */}
      <section className="resume-section">
        <h3 className="proj">Projects</h3>

        <h1 className="project-heading">
          {" "}
          Major Project - Shop with Augmented Reality
        </h1>
        <p>
          Developed an application using Augmented Reality for online shopping,
          which allows customers to view 3D models of products in their own
          environment using their mobile devices.
          <br />
          Technologies used: Unity3D, Vuforia, C#
        </p>

        <h1 className="project-heading">Minor Project - Two Wheeler Safety</h1>
        <p>
          Designed and developed an Android application to promote safe driving
          practices for two-wheeler riders, which includes features such as
          real-time weather updates and alerts for overspeeding.
          <br />
          Technologies used: Java, NetBeans
        </p>

        <h1 className="project-heading">
          Minor Project - Blood Donation Management System
        </h1>
        <p>
          Developed a web-based system to manage blood donations, including
          features such as donor registration, blood bank inventory management,
          and appointment scheduling.
          <br />
          Technologies used: HTML, CSS, JavaScript, PHP, MySQL
        </p>

        {/* Add more projects as needed */}
      </section>{" "}
    </div>
  );
}

export default Resume;
