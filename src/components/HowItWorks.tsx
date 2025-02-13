import { useState } from "react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);

  const technologies = [
    {
      name: "Red Light",
      wavelength: "630-660nm",
      description: "Penetrates skin cells and stimulates collagen production, reducing fine lines and improving skin texture.",
      benefits: ["Skin Rejuvenation", "Collagen Production", "Surface Healing"],
      color: "bg-primary",
      gradient: "from-primary/20 via-primary/10 to-transparent"
    },
    {
      name: "Near-Infrared",
      wavelength: "810-850nm",
      description: "Reaches deeper tissues, promoting cellular repair and reducing inflammation throughout the body.",
      benefits: ["Deep Tissue Repair", "Inflammation Reduction", "Muscle Recovery"],
      color: "bg-secondary",
      gradient: "from-secondary/20 via-secondary/10 to-transparent"
    },
    {
      name: "Infrared",
      wavelength: "900-1200nm",
      description: "Penetrates deepest into the body, supporting full-body healing and cellular regeneration.",
      benefits: ["Joint Pain Relief", "Deep Healing", "Circulation Boost"],
      color: "bg-primary",
      gradient: "from-primary/20 via-primary/10 to-transparent"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(211,228,253,0.1),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(254,247,205,0.1),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                  ? `${tech.color} text-primary-foreground shadow-lg scale-105`
                  : "bg-white text-neutral-600 hover:bg-neutral-100 hover:scale-105 hover:shadow-md"
              }`}
            >
              {tech.name} ({tech.wavelength})
            </button>
          ))}
        </div>

        {/* Technology Details */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Representation */}
          <div className="relative group">
            <div className={`aspect-square rounded-3xl bg-gradient-radial ${technologies[activeTab].gradient} p-8 flex items-center justify-center transform transition-transform duration-700 hover:scale-105`}>
              <div className={`w-32 h-32 rounded-full ${technologies[activeTab].color} filter blur-xl opacity-50 animate-pulse group-hover:opacity-75`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-dark backdrop-blur-sm bg-white/30 px-4 py-2 rounded-lg">
                  {technologies[activeTab].wavelength}
                </span>
              </div>
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-1 ${technologies[activeTab].color} rounded-full animate-float`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${5 + Math.random() * 5}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-semibold text-neutral-900 animate-fade-in">
              {technologies[activeTab].name} Therapy
            </h3>
            <p className="text-neutral-600 leading-relaxed animate-fade-in">
              {technologies[activeTab].description}
            </p>
            <ul className="space-y-3">
              {technologies[activeTab].benefits.map((benefit, index) => (
                <li 
                  key={benefit} 
                  className="flex items-center text-neutral-700 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
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
