import { Cloud, Shield, Code, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import "./HomePageServices.css";

const services = [
  {
    icon: <Briefcase size={40} />,
    title: "IT Strategy & Consulting",
    description: "Guiding businesses towards smarter technology decisions."
  },
  {
    icon: <Cloud size={40} />,
    title: "Cloud Solutions",
    description: "Scalable and cost-efficient cloud services for seamless business operations."
  },
  {
    icon: <Shield size={40} />,
    title: "Cybersecurity",
    description: "Protecting your assets with advanced security measures."
  },
  {
    icon: <Code size={40} />,
    title: "Software Development",
    description: "Custom software solutions tailored to your business requirements."
  }
];

const HomePageService = () => {
  const handleNavigation = () => {
    window.scrollTo(0, 0); // Instantly jumps to the top
  };

  return (
    <section className="homepage-service-section">
      <div className="homepage-service-container">
        <h2 className="homepage-service-title">Our Services</h2>
        
        <div className="homepage-service-grid">
          {services.map((service, index) => (
            <div key={index} className="homepage-service-card">
              <div className="homepage-service-icon">{service.icon}</div>
              <h3 className="homepage-service-heading">{service.title}</h3>
              <p className="homepage-service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* "More Services" Button with Instant Scroll */}
        <div className="homepage-service-button">
          <Link to="/services" className="know-more-btn" onClick={handleNavigation}>
            More Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePageService;
