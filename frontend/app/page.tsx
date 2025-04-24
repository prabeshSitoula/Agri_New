"use client";

// import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// Removed Footer import
import HeroSlider from "../components/HeroSlider";
import FeaturesSection from "../components/FeaturesSection";
import SupplyChainStages from "../components/SupplyChainStages";
import TestimonialsSection from "../components/TestimonialsSection";

export default function Home() {
  // Removed unused activeTab, setActiveTab, currentSlide state and useEffect

  // Hero section slider images with high-quality images
  const heroImages = [
    "/landing/tea1.jpg",
    "/landing/tea2.jpg",
    "/landing/tea3.jpg",
    "/landing/tea4.jpg",
    "/landing/tea5.jpg",
  ];

  // Removed useEffect for auto-rotating slider

  const features = [
    {
      title: "Blockchain Verification",
      description:
        "Track the authenticity of your tea from plantation to cup with immutable blockchain records.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2-2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
    },
    {
      title: "Origin Transparency",
      description:
        "Discover the exact plantation, harvest date, and processing methods of every tea batch.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Assurance",
      description:
        "Each tea undergoes multiple quality checks, with results stored permanently on the blockchain.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Ethical Sourcing",
      description:
        "Verify fair trade practices and sustainable farming methods used in your tea production.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-emerald-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
  ];

  const testimonials = [
    {
      quote:
        "This platform has transformed how we manage our tea supply chain. Our customers love the transparency it provides.",
      author: "Jessica Chen",
      role: "Director, Green Leaf Tea Estates",
      image: "/api/placeholder/80/80",
    },
    {
      quote:
        "The blockchain verification gave our customers confidence in our organic certification and ethical sourcing claims.",
      author: "Michael Patel",
      role: "CEO, Highland Tea Company",
      image: "/api/placeholder/80/80",
    },
    {
      quote:
        "Since implementing this system, we've seen a 35% increase in premium tea sales as customers value the transparency.",
      author: "Sarah Williams",
      role: "Marketing Director, Pure Ceylon",
      image: "/api/placeholder/80/80",
    },
  ];

  return (
    <div className="bg-white">
      <Navbar />
      <HeroSlider images={heroImages} />
      <FeaturesSection features={features} />
      <SupplyChainStages />
      <TestimonialsSection testimonials={testimonials} />
      {/* Removed Footer component usage as it wasn't imported/used */}
    </div>
  );
}
