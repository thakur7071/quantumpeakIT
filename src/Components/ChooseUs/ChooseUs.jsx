import "./ChooseUs.css";
import { CheckCircle } from "lucide-react";

const ChooseUs = () => {
  const points = [
    {
      title: "Expertise & Experience",
      description: "Decades of combined industry experience.",
    },
    {
      title: "Tailored Solutions",
      description: "Custom strategies based on your unique business needs.",
    },
    {
      title: "Client-Centric Approach",
      description: "We prioritize your success with personalized services.",
    },
  ];

  return (
    <section className="choose-us">
      <h2 className="section-title">Why QuantumPeakIT?</h2>
      <div className="points-container">
        {points.map((point, index) => (
          <div key={index} className="point">
            <CheckCircle className="icon" />
            <div className="text-content">
              <h3>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
