"use client";

import {
  BarChart2Icon,
  ShieldCheckIcon,
  WifiIcon,
  ZapIcon,
} from "lucide-react";

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: WifiIcon,
    title: "Universal Connectivity",
    description:
      "Connect and control all your smart devices from a single, intuitive interface.",
  },
  {
    icon: BarChart2Icon,
    title: "Smart Analytics",
    description:
      "Gain insights into your home's energy consumption and optimize efficiency.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Advanced Security",
    description:
      "Real-time monitoring and instant alerts to keep your home safe and secure.",
  },
  {
    icon: ZapIcon,
    title: "Energy Management",
    description:
      "Reduce costs and environmental impact with intelligent energy tracking.",
  },
];

const Features = () => {
  const renderHeading = () => (
    <div className="text-center mb-12">
      <h2
        id="features-heading"
        className="text-3xl md:text-4xl font-bold text-[#14213D] mb-4"
      >
        Powerful Features at Your Fingertips
      </h2>
      <p className="text-xl text-black/70 max-w-2xl mx-auto">
        Our smart home dashboard is designed to simplify your life, providing
        comprehensive control and insights.
      </p>
    </div>
  );

  const renderFeatureCard = (feature: Feature, index: number) => (
    <div
      key={index}
      className="bg-[#14213D]/5 p-6 rounded-xl text-center 
      hover:bg-[#FCA311]/10 transition-colors duration-300 
      transform hover:-translate-y-2"
      aria-labelledby={`feature-title-${index}`}
      aria-describedby={`feature-description-${index}`}
    >
      <div
        className="bg-[#FCA311] text-black p-4 rounded-full 
      inline-flex items-center justify-center mb-4"
      >
        <feature.icon className="w-8 h-8" aria-hidden="true" />
      </div>
      <h3
        id={`feature-title-${index}`}
        className="text-xl font-semibold text-[#14213D] mb-3"
      >
        {feature.title}
      </h3>
      <p id={`feature-description-${index}`} className="text-black/70">
        {feature.description}
      </p>
    </div>
  );

  const renderFeaturesGrid = () => (
    <div
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
      role="list"
      aria-labelledby="features-heading"
    >
      {features.map((feature, index) => renderFeatureCard(feature, index))}
    </div>
  );

  return (
    <section
      className="bg-white py-16 lg:py-24"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-4">
        {renderHeading()}
        {renderFeaturesGrid()}
      </div>
    </section>
  );
};

export default Features;
