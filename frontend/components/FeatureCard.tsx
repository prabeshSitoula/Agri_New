import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode; // Assuming icon is a React node
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="h-12 w-12 rounded-md bg-emerald-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-2 text-base text-gray-500">{description}</p>
    </div>
  );
}
