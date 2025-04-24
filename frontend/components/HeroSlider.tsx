"use client";

import { useState, useEffect, FC } from "react";
import Image from "next/image";
import Link from "next/link";

type HeroSliderProps = {
  images: string[];
};

const HeroSlider: FC<HeroSliderProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slider images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-screen">
      {/* Sliding background images */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image: string, index: number) => (
          <div
            key={index}
            className={`absolute inset-0  h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <Image
              src={image}
              alt={`Tea Supply Chain Slide ${index + 1}`}
              fill
              className="object-cover"
              priority={true}
              quality={100}
              sizes="100vw"
              unoptimized={true}
            />
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            <span className="block text-emerald-400">Tea Supply Chain</span>
            <span className="block">From Garden to Cup</span>
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl mx-auto">
            Experience the journey of your tea with complete transparency and
            authenticity, secured by blockchain technology at every step.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-100 shadow-lg transition-all duration-300"
            >
              Explore Teas
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 shadow-lg transition-all duration-300"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="flex justify-center space-x-2">
          {images.map((_, index: number) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-8 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-emerald-500"
                  : "bg-white bg-opacity-50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
