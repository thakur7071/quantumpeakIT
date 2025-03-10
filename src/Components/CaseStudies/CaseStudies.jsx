import "./CaseStudies.css";

const caseStudies = [
  {
    title: "Modernizing IT",
    client: "XYZ Corp",
    overview: "XYZ Corp is a multinational company specializing in finance and technology.",
    challenge:
      "XYZ Corp struggled with outdated infrastructure that caused frequent downtime and increased operational costs.",
    solution:
      "We implemented a fully integrated IT system, moved operations to the cloud, and enhanced security protocols.",
    results:
      "Post-implementation, XYZ Corp saw a 40% reduction in IT-related downtime and a 20% increase in operational efficiency.",
    testimonial:
      "Thanks to our collaboration with [Your Company Name], we’ve seen tremendous growth.",
  },
  {
    title: "Cybersecurity",
    client: "ABC Ltd",
    overview: "ABC Ltd is a leading e-commerce company facing security threats.",
    challenge:
      "ABC Ltd experienced multiple cyber attacks, compromising sensitive customer data and leading to regulatory concerns.",
    solution:
      "We deployed an advanced cybersecurity framework, including AI-driven threat detection and multi-factor authentication.",
    results:
      "ABC Ltd reduced security breaches by 75% and enhanced customer trust significantly.",
    testimonial:
      "With [Your Company Name]'s expertise, we now have a secure and resilient infrastructure.",
  },
  {
    title: "Optimizing Supply",
    client: "LMN Industries",
    overview: "A global manufacturing firm aiming to reduce supply chain inefficiencies.",
    challenge:
      "LMN Industries faced delays and increased costs due to inefficient supply chain management.",
    solution:
      "We integrated real-time tracking, predictive analytics, and automated logistics management.",
    results:
      "LMN Industries achieved a 30% improvement in supply chain efficiency and reduced costs by 20%.",
    testimonial:
      "[Your Company Name] transformed our supply chain operations, boosting efficiency and cost savings.",
  },
  {
    title: "Boosting Customer",
    client: "DEF Retail",
    overview: "DEF Retail is a major retail chain looking to improve customer experience.",
    challenge:
      "Customer retention rates were dropping due to lack of personalized engagement.",
    solution:
      "We implemented a personalized AI-driven recommendation engine and omnichannel communication strategy.",
    results:
      "DEF Retail saw a 45% increase in customer retention and a 35% boost in sales.",
    testimonial:
      "[Your Company Name] helped us create a truly engaging shopping experience for our customers.",
  }
];

const CaseStudies = () => {
  return (
    <section className="case-studies-container">
      <h2 className="case-studies-title">Case Studies</h2>
      <div className="case-studies-grid">
        {caseStudies.map((study, index) => (
          <div key={index} className="case-study-card animated-card">
            <h3 className="case-study-title">{study.title}</h3>
            <p><strong>Client:</strong> {study.client}</p>
            <p><strong>Client Overview:</strong> {study.overview}</p>
            <p><strong>The Challenge:</strong> {study.challenge}</p>
            <p><strong>The Solution:</strong> {study.solution}</p>
            <p><strong>Results:</strong> {study.results}</p>
            <blockquote className="case-study-testimonial">
              {study.testimonial}
            </blockquote>
            <button className="case-study-button" style={{ background: "#191b3d" }}>
              Request a Consultation
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
