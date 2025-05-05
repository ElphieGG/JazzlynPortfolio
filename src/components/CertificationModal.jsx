import React from "react";
import "./style1.css";

const CertificationsModal = ({ category, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2 className="category-title">{category.category}</h2>
        <p className="category-description">{category.description}</p>

        <div className="certificates-list">
          {category.certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <h3>{cert.title}</h3>
              {/* <p><strong>Provider:</strong> {cert.provider}</p> */}
              <p><strong>Hours:</strong> {cert.hours}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-certificate"
              >
                View Certificate
              </a>

              {/* <ul>
                {cert.details.map((detail, i) => (
                  <li key={i}>➜ {detail}</li>
                ))}
              </ul> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsModal;
