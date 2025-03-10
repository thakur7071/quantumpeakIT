import { FaArrowRight } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-main">
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Empowering Your Business with
            <span> Advanced IT Solutions</span>
          </h1>

          <p className="hero-description">
            Unlock the full potential of technology with our expert IT consulting
            services tailored to your business needs.
          </p>

          <div className="hero-buttons">
            <a className="hero-button primary" href="#">
              Get a Quick Consultation <FaArrowRight />
            </a>
          </div>
        </div>

        <div className="hero-image"></div>
      </section>
    </div>
  );
};

export default Hero;
