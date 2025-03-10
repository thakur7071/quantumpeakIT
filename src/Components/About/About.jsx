import "./About.css";
import img from "../Assets/new.jpg";

const About = () => {
  return (
    <div className="about">
      {/* Title Section */}
      <div className="title">
        <h1>QuantumPeakIT</h1>
        <p>
          Founded in 2025, we are a leading IT consulting firm dedicated to helping businesses optimize their technology infrastructure, mitigate risks, and drive innovation. With years of experience across various industries, we specialize in tailored IT strategies that align with your business goals.
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="mv">
        <div className="our-mission">
          <h2>Mission</h2>
          <p>
            To empower organizations with state-of-the-art IT solutions that drive efficiency, security, and growth.
          </p>
        </div>
        <div className="vision">
          <h2>Vision</h2>
          <p>
            To be a globally recognized IT consulting firm that transforms businesses through innovation and technology.
          </p>
        </div>
      </div>

      {/* Meet Our Expert Section */}
      <div className="meet-expert">
        <h2>Meet Our Experts</h2>
        <p>Our team consists of highly skilled professionals with extensive experience in IT consulting and digital transformation.</p>
      </div>

      {/* About Card Section */}
      <div className="about-card-container">
        {[
          {
            name: "John Doe",
            image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1180&q=80",
          },
          {
            name: "Jane Smith",
            image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=1180&q=80",
          },
          {
            name: "Jane Smith",
            image: img,
          },
        ].map((expert, index) => (
          <div key={index} className="about-card">
            <div className="about-header">
              <div className="about-content-wrapper">
                <h3 className="about-title">IT Consultant</h3>
                <p className="about-author">By {expert.name}</p>
              </div>
              <img alt={expert.name} src={expert.image} className="about-image" />
            </div>
            <p className="about-content">
              With over 15 years of experience in the IT consulting industry, {expert.name} leads the team with a vision to bring groundbreaking solutions to clients globally.
            </p>
          </div>
        ))}
      </div>

      {/* Partnerships Section */}
      <div className="certifications">
        <h2>Our Partnerships</h2>
        <div className="partners">
          {[
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              alt: "Microsoft",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
              alt: "AWS",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
              alt: "Cisco",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
              alt: "Microsoft",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
              alt: "AWS",
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
              alt: "Cisco",
            },
          ].map((partner, index) => (
            <img key={index} src={partner.src} alt={partner.alt} className="partner-logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
