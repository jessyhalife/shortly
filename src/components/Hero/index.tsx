import React from "react";

import "./styles.css";

import illustration from "../../images/illustration-working.svg";
const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__body">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <a href="#" className="hero__button">
          Get Started
        </a>
      </div>
      <div className="hero__image">
        <img src={illustration} alt="" />
      </div>
    </section>
  );
};

export default Hero;
