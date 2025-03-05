import { 
  Briefcase, 
  Cloud, 
  Shield, 
  Code, 
  Network, 
  Headphones, 
  Database, 
  Paintbrush, 
  MonitorSmartphone, 
  Layers 
} from "lucide-react"; // Import icons
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
    icon: <Briefcase size={40} className="service-icon" />,
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
    icon: <Cloud size={40} className="service-icon" />,
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
    icon: <Shield size={40} className="service-icon" />,
  },
  {
    title: "Software Development",
    description:
      "We provide custom software solutions tailored to your business needs, ensuring efficiency and scalability in your operations.",
    benefits: ["Custom applications", "Scalable architectures", "Agile development process"],
    cta: "Explore Software Development",
    link: "#",
    icon: <Code size={40} className="service-icon" />,
  },
  {
    title: "Network Marketing",
    description:
      "Leverage our expertise in network marketing to grow your business through effective strategies and partnerships.",
    benefits: ["Strategic growth planning", "Lead generation", "Optimized networking"],
    cta: "Explore Network Marketing",
    link: "#",
    icon: <Network size={40} className="service-icon" />,
  },
  {
    title: "Tech Support",
    description:
      "Our dedicated tech support team ensures that your business runs smoothly with prompt and effective solutions.",
    benefits: ["24/7 Support", "Quick issue resolution", "Expert guidance"],
    cta: "Explore Tech Support",
    link: "#",
    icon: <Headphones size={40} className="service-icon" />,
  },
  {
    title: "Data Backup & Recovery",
    description:
      "Ensure your critical business data is always secure with our comprehensive backup and recovery solutions.",
    benefits: ["Automated backups", "Disaster recovery", "Data integrity protection"],
    cta: "Explore Data Backup & Recovery",
    link: "#",
    icon: <Database size={40} className="service-icon" />,
  },
  {
    title: "UI/UX Designing",
    description:
      "We create user-friendly and visually appealing digital experiences to enhance customer engagement.",
    benefits: ["User research", "Wireframing & prototyping", "Responsive designs"],
    cta: "Explore UI/UX Designing",
    link: "#",
    icon: <Paintbrush size={40} className="service-icon" />,
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your brand’s online presence with our digital marketing strategies, including SEO, social media, and PPC.",
    benefits: ["SEO optimization", "Social media marketing", "Paid advertising campaigns"],
    cta: "Explore Digital Marketing",
    link: "#",
    icon: <MonitorSmartphone size={40} className="service-icon" />,
  },
  {
    title: "3D & 2D Modeling",
    description:
      "Bring your ideas to life with high-quality 3D and 2D modeling for games, architecture, and animation.",
    benefits: ["High-detail 3D models", "2D illustrations", "Animation-ready assets"],
    cta: "Explore 3D & 2D Modeling",
    link: "#",
    icon: <Layers size={40} className="service-icon" />,
  }
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