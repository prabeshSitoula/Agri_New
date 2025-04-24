import React from "react";
import FeatureCard from "./FeatureCard";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode; // Assuming icon is a React node (e.g., an SVG component)
}

interface FeaturesSectionProps {
  features: Feature[];
}

export default function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">
            Premium Features
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            Transparency in Every Cup
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Our blockchain technology ensures complete traceability and
            authenticity of your favorite teas.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
