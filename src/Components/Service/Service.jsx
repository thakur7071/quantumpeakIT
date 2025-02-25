import { Briefcase, Cloud, Shield } from "lucide-react"; // Import icons
import "./Service.css";

const services = [
  {
    title: "IT Consulting",
    description:
      "Our IT strategy consultants work with you to understand your business goals and create a comprehensive technology roadmap that aligns with your objectives, helping you streamline operations and gain a competitive edge.",
    benefits: [
      "Strategic planning for IT infrastructure.",
      "Cost-effective solutions aligned with business goals.",
      "Long-term scalability and efficiency.",
    ],
    cta: "Explore IT Strategy",
    link: "#",
    icon: <Briefcase size={40} className="service-icon" />, // Icon for IT Strategy
  },
  {
    title: "Cloud Solutions",
    description:
      "We offer secure and scalable cloud solutions that allow businesses to increase efficiency, reduce costs, and enhance collaboration. Whether you’re moving to the cloud or optimizing your existing cloud environment, we’ve got you covered.",
    benefits: [
      "Scalable infrastructure to meet business growth.",
      "Secure and compliant with industry standards.",
      "Reduced IT overhead and maintenance costs.",
    ],
    cta: "Explore Cloud Solutions",
    link: "#",
    icon: <Cloud size={40} className="service-icon" />, // Icon for Cloud Solutions
  },
  {
    title: "Cybersecurity",
    description:
      "In an increasingly digital world, cybersecurity is critical. We provide end-to-end security services to safeguard your business from emerging threats, with solutions tailored to your specific needs.",
    benefits: [
      "Comprehensive risk assessment.",
      "Advanced encryption and data protection.",
      "Ongoing monitoring and response strategies.",
    ],
    cta: "Explore Cybersecurity",
    link: "#",
    icon: <Shield size={40} className="service-icon" />, // Icon for Cybersecurity
  },
  {
    title: "Cybersecurity",
    description:
      "In an increasingly digital world, cybersecurity is critical. We provide end-to-end security services to safeguard your business from emerging threats, with solutions tailored to your specific needs.",
    benefits: [
      "Comprehensive risk assessment.",
      "Advanced encryption and data protection.",
      "Ongoing monitoring and response strategies.",
    ],
    cta: "Learn More About Cybersecurity",
    link: "#",
    icon: <Shield size={40} className="service-icon" />, // Icon for Cybersecurity
  },
  {
    title: "Cybersecurity",
    description:
      "In an increasingly digital world, cybersecurity is critical. We provide end-to-end security services to safeguard your business from emerging threats, with solutions tailored to your specific needs.",
    benefits: [
      "Comprehensive risk assessment.",
      "Advanced encryption and data protection.",
      "Ongoing monitoring and response strategies.",
    ],
    cta: "Learn More About Cybersecurity",
    link: "#",
    icon: <Shield size={40} className="service-icon" />, // Icon for Cybersecurity
  },
  {
    title: "Cybersecurity",
    description:
      "In an increasingly digital world, cybersecurity is critical. We provide end-to-end security services to safeguard your business from emerging threats, with solutions tailored to your specific needs.",
    benefits: [
      "Comprehensive risk assessment.",
      "Advanced encryption and data protection.",
      "Ongoing monitoring and response strategies.",
    ],
    cta: "Learn More About Cybersecurity",
    link: "#",
    icon: <Shield size={40} className="service-icon" />, // Icon for Cybersecurity
  },
];

const Service = () => {
  return (
    <div className="service">   
       <div className="services-container">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-header">
            {service.icon}
            <h2 className="service-title">{service.title}</h2>
          </div>
          <p className="service-description">{service.description}</p>
          <ul className="service-benefits">
            {service.benefits.map((benefit, i) => (
              <li key={i}>{benefit}</li>
            ))}
          </ul>
          <a href={service.link} className="service-cta">
            {service.cta}
          </a>
        </div>
      ))}
    </div>
    </div>

  );
};

export default Service;
