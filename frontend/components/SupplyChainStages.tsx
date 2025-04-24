"use client";

import { useState } from "react";
import StageContent from "./StageContent";

export default function SupplyChainStages() {
  const [activeTab, setActiveTab] = useState("plantation");

  const stages = [
    { id: "plantation", label: "Plantation" },
    { id: "processing", label: "Processing" },
    { id: "quality", label: "Quality Testing" },
    { id: "packaging", label: "Packaging" },
    { id: "distribution", label: "Distribution" },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">
            The Tea Journey
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
            From Garden to Cup
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Track every step of your tea&apos;s journey with blockchain
            verification.
          </p>
        </div>

        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 justify-center">
              {stages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveTab(stage.id)}
                  className={`${
                    activeTab === stage.id
                      ? "border-emerald-500 text-emerald-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300`}
                >
                  {stage.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8">
            <StageContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
