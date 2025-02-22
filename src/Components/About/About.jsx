import "./About.css";
import img from '../Assets/new.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="title">
        <h1>QuantumPeakIT</h1>
        <p>
          Founded in 2025, we are a leading IT consulting firm dedicated to
          helping businesses optimize their technology infrastructure, mitigate
          risks, and drive innovation. With years of experience across various
          industries, we specialize in tailored IT strategies that align with
          your business goals.
        </p>
      </div>

      <div className="mv">
        <div className="our-mission">
          <h2>Mission</h2>
          <p>
            To empower businesses with innovative IT solutions that accelerate
            growth and ensure long-term success.
          </p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>
            To be a trusted partner in the digital transformation journey,
            delivering cutting-edge solutions that help businesses thrive in a
            technology-driven world.
          </p>
        </div>
      </div>

      {/* Meet Our Expert Section */}
      <div className="meet-expert">
        <h2>Meet Our Expert</h2>
        <p>Our team consists of highly skilled professionals with extensive experience in IT consulting and digital transformation.</p>
      </div>

      {/* About Card Section */}
      <div className="about-card-container">
        <div className="about-card">
          <div className="about-header">
            <div className="about-content-wrapper">
              <h3 className="about-title">XYZ</h3>
              <p className="about-author">By John Doe</p>
            </div>
            <img
              alt="Author"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1180&q=80"
              className="about-image"
            />
          </div>
          <p className="about-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <div className="about-card">
          <div className="about-header">
            <div className="about-content-wrapper">
              <h3 className="about-title">XYZ</h3>
              <p className="about-author">By Jane Smith</p>
            </div>
            <img
              alt="Author"
              src="https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=1180&q=80"
              className="about-image"
            />
          </div>
          <p className="about-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <div className="about-card">
          <div className="about-header">
            <div className="about-content-wrapper">
              <h3 className="about-title">XYZ</h3>
              <p className="about-author">By Jane Smith</p>
            </div>
            <img alt="Author" src={img} className="about-image" />
          </div>
          <p className="about-content">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>
      </div>

      {/* Certifications & Partnerships Section */}
      <div className="certifications">
        <h2> Partnerships</h2>

        {/* Partner Logos */}
        <div className="partners">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="partner-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="partner-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" alt="Cisco" className="partner-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="partner-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="partner-logo" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" alt="Cisco" className="partner-logo" />
        </div>
      </div>
    </div>
  );
};

export default About;
