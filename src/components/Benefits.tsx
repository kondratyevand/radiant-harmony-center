
import { useState } from "react";

const Benefits = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      title: "Anti-Aging",
      description: "Stimulate collagen production and reduce fine lines with clinically proven wavelengths.",
      stats: ["87%", "Reported improved skin texture"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
          <path d="M12 18C15.3137 18 18 15.3137 18 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Pain Relief",
      description: "Target inflammation and accelerate healing for chronic and acute pain conditions.",
      stats: ["92%", "Experienced reduced pain levels"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 22V2M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Sleep Enhancement",
      description: "Regulate circadian rhythm and improve sleep quality naturally.",
      stats: ["76%", "Reported better sleep quality"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
          <path d="M9 16C9.85038 16.6303 10.8846 17 12 17C14.7614 17 17 14.7614 17 12C17 10.8846 16.6303 9.85038 16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Cell Regeneration",
      description: "Enhance mitochondrial function and boost natural cellular repair processes.",
      stats: ["95%", "Increased cellular regeneration"],
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 4C13.6569 4 15 5.34315 15 7C15 8.65685 13.6569 10 12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-playfair font-semibold text-neutral-900 mb-4">
            Scientifically Proven Benefits
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our light therapy solutions deliver measurable results across multiple areas 
            of health and wellness, backed by clinical research and user testimonials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="h-full p-8 bg-neutral-50 rounded-2xl transition-all duration-300 hover:bg-primary hover:text-white">
                <div className={`w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white ${
                  hoveredIndex === index ? "scale-110" : ""
                }`}>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className={`text-sm mb-6 transition-colors duration-300 ${
                  hoveredIndex === index ? "text-white/90" : "text-neutral-600"
                }`}>
                  {benefit.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold">{benefit.stats[0]}</span>
                  <span className={`text-sm transition-colors duration-300 ${
                    hoveredIndex === index ? "text-white/90" : "text-neutral-600"
                  }`}>
                    {benefit.stats[1]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
