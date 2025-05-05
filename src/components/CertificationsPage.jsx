import React from "react";
import { certifications } from "./certificationsData";
import "./style1.css";

const getCategoryClass = (category) => {
  switch (category) {
    case "Programming & Development":
      return "bg-programming";
    case "Cybersecurity":
      return "bg-cybersecurity";
    case "Data Science & AI/ML":
      return "bg-datascience";
    case "Cloud Computing":
      return "bg-cloud";
    case "Networking & System Administration":
      return "bg-networking";
    case "Mobile & Web Development":
      return "bg-mobileweb";
      case "Amazon Web Services":
      return "bg-aws";
    case "Project Management & Soft Skills":
      return "bg-projectmanagement";
    default:
      return "";
  }
};

const CertificationsPage = ({ onSelectCategory }) => {
  return (
    <div className="blog-page">
      <div className="hello-text">
        <h1>My Certifications</h1>
      </div>
      <div className="blog-grid">
        {certifications.map((cert, index) => (
          <div
            className={`blog-card animate ${getCategoryClass(cert.category)}`}
            key={cert.id}
            onClick={() => onSelectCategory(cert)}
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3>{cert.category}</h3>
            {/* <p>{cert.description}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
