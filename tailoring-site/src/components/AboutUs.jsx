// AboutUs.jsx
import React from "react";
import tailorImage from "../assets/tailor-portrait.jpg";

export default function AboutUs() {
  return (
    <section id="about" className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Bildseite */}
        <div className="relative group">
          <img
            src={tailorImage}
            alt="Schneider in Salzburg"
            className="rounded-xl shadow-lg transform group-hover:scale-105 transition duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 px-4 py-2 rounded-lg shadow-md text-sm text-gray-800">
            Gegründet in Salzburg
          </div>
        </div>

        {/* Textseite */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Maßarbeit mit Seele
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            In unserem Atelier in Salzburg ist Schneiderei nicht nur ein
            Handwerk – es ist eine Kunst. Wir verbinden traditionelle Techniken
            mit modernem Design, um Kleidungsstücke zu schaffen, die Ihre
            Persönlichkeit stilvoll widerspiegeln.
          </p>
          <p className="mt-4 text-gray-600">
            Ob für das Business, den großen Tag oder einfach für sich selbst –
            wir fertigen Stücke, die perfekt zu Ihrem Körper und Ihrer
            Geschichte passen. Jeder Stich ist durchdacht. Jedes Detail ist
            veredelt.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
            >
              Termin vereinbaren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
