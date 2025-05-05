import React from "react";
import "./hero.css";
import profileImage from "../assets/profile.png";

const Hero= () => {
  return (

    <div className="container">

  {/* Hero Section */}
  <section className="hero">
    <img src={profileImage} alt="Jazzlyn Pancho" className="profile-img" />
    <div className="hero-text">
      <div className="hello-text">
        <h1>Hello!</h1>
      </div>
      <div className="description">
        <p>
          I'm Jazzlyn. A Website Developer. <br />
          Welcome to my Website Portfolio.
        </p>
      </div>
    </div>
  </section>
</div>
  );
};

export default Hero;
