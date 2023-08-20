import React from "react";
import "../assests/Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBuilding,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const Portfolio = () => {
  return (
    <div className="experience-container">
      <FontAwesomeIcon icon={faBriefcase} />
      <h2>Experience</h2>
      <div className="experience-item">
        <FontAwesomeIcon icon={faBuilding} className="company-logo" />
        <p>
          <span className="company-name">
            Company (CustomerXPs) - Software Engineer (Trainee)
          </span>{" "}
          <br />
          <span className="duration">Duration: 2 months</span> <br />
          - Received comprehensive training on the company's product stack,
          including technologies such as React.js, Java, and GitHub. <br />
          - Developed a full-stack website for KYC validation using React.js,
          Java, and MySQL during the training period. <br />- Gained hands-on
          experience in building responsive user interfaces and backend
          functionalities.
        </p>
      </div>
      <div className="experience-item">
        <p>
          <span className="company-name">
            Company (CustomerXPs) - Software Engineer
          </span>{" "}
          <br />
          <span className="duration">Duration: 3 months</span> <br />
          - Worked on Java-based product development, resolving critical issues,
          and enhancing product features. <br />- Collaborated with the team to
          deliver high-quality solutions and ensured the product's stability and
          performance.
        </p>
      </div>
      <div className="experience-item">
        <p>
          <span className="company-name">
            Company (CustomerXPs) - Software Engineer
          </span>{" "}
          <br />
          <span className="duration">Duration: 4 months</span> <br />
          - Transitioned to a new team and project, primarily focusing on
          React.js frontend development. <br />
          - Led the design and implementation of the user interface for a new
          project within the product. <br />- Collaborated with cross-functional
          teams to ensure seamless integration and user experience.
        </p>
      </div>
      <div className="experience-item">
        <FontAwesomeIcon icon={faUserTie} className="freelancing-logo" />

        <p>
          <span className="company-name">Freelance Software Engineer</span>{" "}
          <br />
          <span className="duration">Project 1: Ongoing</span> <br />- Developed
          a web application using MERN for a client who owns an Engineering shop
          for electricals. <br />
          - Collaborated closely with the client to understand requirements and
          implement custom features. <br />- Currently working on enhancements
          and updates for the same project. <br />
        </p>
      </div>
      <div className="experience-item">
        <p>
          <span className="company-name">Freelance Software Engineer</span>{" "}
          <br />
          <span className="duration">Project 2: In Progress</span> <br />
          - Building a web application for a client who owns an electronic shop
          using MERN. <br />- Responsible for frontend development and
          integrating backend APIs. <br />
        </p>
      </div>
    </div>
  );
};

export default Portfolio;
