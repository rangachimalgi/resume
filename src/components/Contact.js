import React from "react";
import "../assests/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact-container">
      <FontAwesomeIcon icon={faEnvelope} className="icon" />
      <h2 className="contact">Contact</h2>
      <p className="para">
        You can reach out to me through the following channels:
      </p>
      <ul className="email">
        <li>Email: rangachimalgi123@gmail.com</li>
        <li>Phone: 7259672141</li>
      </ul>

      <p className="social-para">For social media, contact:</p>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/ranga-chimalgi-351715154/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/rangachimalgi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
