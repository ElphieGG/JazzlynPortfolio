import React from 'react';
import './Experience.css';
import { FaProjectDiagram } from 'react-icons/fa';

const experience = {
  company: "WebCrafters Axis",
  role: "Back-End Developer",
  duration: "Jan 2024 - Apr 2024",
  description: (
    <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
      <li>Designed and managed the project’s database, ensuring efficient, secure data storage and retrieval.</li>
      <li>Developed robust RESTful APIs to facilitate seamless communication between front-end and back-end systems.</li>
      <li>Created and maintained routes for user registration, authentication, form submissions, and other key functionalities.</li>
      <li>Implemented core server-side logic to process data, enforce business rules, and manage client-server interactions.</li>
      
    </ul>
  ),
  icon: <FaProjectDiagram size={40} color="#2a8dd2" />
};

const Experience = () => {
  return (
    <div className="experience single-card">
      <h1 className="experience-title">My Experience</h1>
      
      <div className="experience-card fade-in">
        <div className="icon-container">{experience.icon}</div>
        <h2>{experience.company}</h2>
        <h3>{experience.role}</h3>
        <p className="duration">{experience.duration}</p>
        <div>{experience.description}</div>
      </div>
    </div>
  );
};

export default Experience;
