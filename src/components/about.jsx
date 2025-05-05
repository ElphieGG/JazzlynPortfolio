import React from "react";
import "./about.css";
import profileImage1 from "../assets/profile1.png";

const About= () => {
  return (

    <div className="container">

  {/* Hero Section */}
  <section className="hero">
    <img src={profileImage1} alt="Jazzlyn Pancho" className="profile1-img" />
    <div className="hero-text">
      <div className="hello-text">
        <h1>About Me</h1>
      </div>
      <div className="description">
        <p>
        "I'm Jazzlyn, a creative and dedicated Website Developer who builds visually stunning, user-friendly, and responsive websites. 
        <br />With a blend of design and coding expertise, I transform ideas into seamless digital experiences."
        </p>
      </div>
    </div>
  </section>
</div>
  );
};

export default About;
