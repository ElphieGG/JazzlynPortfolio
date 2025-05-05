// BlogModal.jsx

import React, { useState } from "react";
import "./styles.css";

const BlogModal = ({ blog, onClose }) => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{blog.day}: {blog.title}</h2>
        <p>{blog.details}</p>

        <div className="images-gallery">
          {blog.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Day ${blog.day} - ${index}`}
              onClick={() => setActiveImage(img)}
            />
          ))}
        </div>

        {activeImage && (
          <div className="lightbox" onClick={() => setActiveImage(null)}>
            <img src={activeImage} alt="Enlarged view" />
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogModal;
