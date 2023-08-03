import React from "react";
import "../assests/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact">Contact</h2>
      <p className="para">
        You can reach out to me through the following channels:
      </p>
      <ul className="email">
        <li>Email: rangachimalgi123@gmail.com</li>
        <li>Phone: 7259672141</li>
      </ul>
      <p>
        "I was earning an annual CTC of 5 lakhs, and I am seeking a salary of
        6.5 lakhs per annum for my next role."
      </p>
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
