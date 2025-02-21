import { FaArrowRight } from "react-icons/fa";
import "./hero.css";

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
            Get Started <FaArrowRight />
          </a>

          <a className="hero-button secondary" href="#">
            Learn More <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
