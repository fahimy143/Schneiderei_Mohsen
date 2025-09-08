import React, { useState, useEffect } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

const images = [banner1, banner2, banner3];
export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="home">
      <div className="relative w-full max-w-7xl mx-auto mt-16 rounded overflow-hidden shadow-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-64 sm:h-96 object-cover"
        />

        {/* Welcome message overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-white text-3xl sm:text-5xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded mb-4">
            Willkommen bei SCHNEIDEREI und ÄNDERUNG SCHNEIDEREI MOHSEN
          </h1>
          <p className="text-white text-sm sm:text-lg bg-black bg-opacity-40 px-4 py-2 rounded max-w-3xl">
            Ihr vertrauensvoller Partner für perfekte Maßarbeit und
            erstklassigen Service.
            <br />
            Wo Tradition auf moderne Handwerkskunst trifft – für Kleidung, die
            genau zu Ihnen passt.
          </p>
        </div>

        {/* Left arrow */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-70 transition"
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}
