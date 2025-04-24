import Image from "next/image";
import React from "react";

interface StageData {
  [key: string]: {
    title: string;
    description: string;
    points: string[];
    image: string;
    alt: string;
  };
}

interface StageContentProps {
  activeTab: keyof StageData;
}

export default function StageContent({ activeTab }: StageContentProps) {
  const stageData: StageData = {
    plantation: {
      title: "Tea Gardens",
      description:
        "Our tea begins its journey in pristine, high-altitude gardens where each plant is carefully nurtured.",
      points: [
        "Geotagged plantations with altitude and climate data",
        "Verified organic and sustainable farming practices",
        "Precise harvest dates and picking methods recorded",
      ],
      image: "/plantation.jpg",
      alt: "Tea Plantation",
    },
    processing: {
      title: "Processing Facilities",
      description:
        "Each leaf is carefully processed using traditional and modern techniques to develop its unique flavor profile.",
      points: [
        "Traditional withering, rolling, and oxidation methods",
        "Temperature and humidity-controlled environments",
        "Detailed processing records for each batch",
      ],
      image: "/processing.jpg",
      alt: "Tea Processing",
    },
    quality: {
      title: "Quality Testing",
      description:
        "Every batch undergoes rigorous quality testing to ensure it meets our premium standards.",
      points: [
        "Sensory evaluation by certified tea masters",
        "Laboratory testing for purity and composition",
        "Quality certifications and scoring stored on blockchain",
      ],
      image: "/qualitytesting.jpg",
      alt: "Tea Quality Testing",
    },
    packaging: {
      title: "Eco-Friendly Packaging",
      description:
        "Our teas are packaged in sustainable materials to preserve freshness and protect the environment.",
      points: [
        "Biodegradable and compostable packaging materials",
        "Unique QR codes linking to blockchain data",
        "Airtight sealing for maximum freshness",
      ],
      image: "/packaging.jpg",
      alt: "Tea Packaging",
    },
    distribution: {
      title: "Global Distribution",
      description:
        "We carefully track and verify each step of the distribution process to ensure quality and authenticity.",
      points: [
        "Temperature-controlled shipping conditions",
        "Real-time location tracking with blockchain verification",
        "Direct farm-to-consumer traceability",
      ],
      image: "/distrubutationtea.jpg",
      alt: "Tea Distribution",
    },
  };

  const currentStage = stageData[activeTab];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">
          {currentStage.title}
        </h3>
        <p className="mt-4 text-lg text-gray-500">{currentStage.description}</p>
        <ul className="mt-6 space-y-4">
          {currentStage.points.map((point, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <p className="ml-3 text-base text-gray-500">{point}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg shadow-inner">
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
          <Image
            src={currentStage.image}
            alt={currentStage.alt}
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
