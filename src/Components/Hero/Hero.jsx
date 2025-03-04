import { FaArrowRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          Understand User Flow.
          <span>Increase Conversion.</span>
        </h1>

        <p className="hero-description">
          Optimize your user experience, boost engagement, and drive more conversions with data-driven insights.
        </p>

        <div className="hero-buttons">
          <a className="hero-button primary" href="#">
            Get a Quick Consultation <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Right-side Image */}
      <div className="hero-image"></div>
    </section>
  );
};

export default Hero;
