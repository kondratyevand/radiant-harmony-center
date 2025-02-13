
import { useState } from "react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      name: "Red Light",
      wavelength: "630-660nm",
      description: "Penetrates skin cells and stimulates collagen production, reducing fine lines and improving skin texture.",
      benefits: ["Skin Rejuvenation", "Collagen Production", "Surface Healing"],
      color: "bg-primary"
    },
    {
      name: "Near-Infrared",
      wavelength: "810-850nm",
      description: "Reaches deeper tissues, promoting cellular repair and reducing inflammation throughout the body.",
      benefits: ["Deep Tissue Repair", "Inflammation Reduction", "Muscle Recovery"],
      color: "bg-secondary"
    },
    {
      name: "Infrared",
      wavelength: "900-1200nm",
      description: "Penetrates deepest into the body, supporting full-body healing and cellular regeneration.",
      benefits: ["Joint Pain Relief", "Deep Healing", "Circulation Boost"],
      color: "bg-accent"
    }
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-semibold text-neutral-900 mb-4">
            Advanced Light Therapy Technology
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our FDA-cleared devices utilize specific wavelengths of light to trigger 
            natural biological processes, promoting healing and regeneration at the cellular level.
          </p>
        </div>

        {/* Technology Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {technologies.map((tech, index) => (
            <button
              key={tech.name}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? `${tech.color} text-white shadow-lg scale-105`
                  : "bg-white text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              {tech.name} ({tech.wavelength})
            </button>
          ))}
        </div>

        {/* Technology Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Representation */}
          <div className="relative">
            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${technologies[activeTab].color}/10 to-${technologies[activeTab].color}/5 p-8 flex items-center justify-center`}>
              <div className={`w-32 h-32 rounded-full ${technologies[activeTab].color} filter blur-xl opacity-50 animate-pulse`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-dark">
                  {technologies[activeTab].wavelength}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold text-neutral-900">
              {technologies[activeTab].name} Therapy
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              {technologies[activeTab].description}
            </p>
            <ul className="space-y-3">
              {technologies[activeTab].benefits.map((benefit) => (
                <li key={benefit} className="flex items-center text-neutral-700">
                  <span className={`w-2 h-2 rounded-full ${technologies[activeTab].color} mr-3`} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
