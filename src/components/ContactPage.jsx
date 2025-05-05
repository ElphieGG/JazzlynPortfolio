import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      {/* <h1 className="contact-heading">Get in Touch</h1> */}
      <div className="hello-text">
        <h1>Get in Touch</h1>
      </div>
      <p className="contact-subheading">
        I'm always open to new opportunities and collaborations. Feel free to reach out!
      </p>

      <div className="contact-email">
        <a href="mailto:jazzlynpancho18@gmail.com" className="email-link">
          <FaEnvelope className="icon" />
          jazzlynpancho18@gmail.com
        </a>
      </div>

      <h2 className="social-heading">Connect with me</h2>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/jazzlyn-chryz-pancho-a7b821360" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/ElphieGG" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://www.facebook.com/jazzlyn.pancho/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
