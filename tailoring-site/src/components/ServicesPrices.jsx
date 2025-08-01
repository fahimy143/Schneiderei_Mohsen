import React from "react";

import pantsBg from "../assets/pants-bg.jpg";
import dressBg from "../assets/dress-bg.jpg";
import shirtBg from "../assets/shirt-bg.jpg";
import skirtBg from "../assets/skirt-bg.jpg";

const servicesData = [
  {
    category: "Hose",
    bgImage: pantsBg,
    items: [
      { service: "Hose kürzen", price: "Ab 9 €" },
      { service: "Bund enger oder weiter", price: "Ab 13 €" },
      { service: "Jeans Hose Bund enger", price: "Ab 15 €" },
      { service: "Hosenbein enger", price: "Ab 12 €" },
      { service: "Zippverschluss erneuern", price: "Ab 12 €" },
      { service: "Skihose/Trainingshose", price: "Ab 20 €" },
    ],
  },
  {
    category: "Kleid",
    bgImage: dressBg,
    items: [
      { service: "Kleid/Abendkleid kürzen", price: "Ab 17€/20 €" },
      { service: "Zipp erneuern", price: "Ab 20 €" },
      { service: "Taillieren", price: "Ab 20 €" },
      { service: "Brautkleid kürzen", price: "Ab 45 €" },
      { service: "Brautkleid enger/weiter", price: "Ab 60 €" },
    ],
  },
  {
    category: "Hemd",
    bgImage: shirtBg,
    items: [
      { service: "Ärmellänge kürzen normal", price: "Ab 10 €" },
      {
        service: "Ärmellänge kürzen mit Schlitzverlängerung",
        price: "Ab 15 €",
      },
      { service: "Enger", price: "Ab 15 €" },
    ],
  },
  {
    category: "Rock",
    bgImage: skirtBg,
    items: [
      { service: "Rocklänge kürzen", price: "Ab 15 €" },
      { service: "Zippverschluss erneuern", price: "Ab 12 €" },
      { service: "Rock enger machen", price: "Ab 15 €" },
      { service: "Rockfutter ansetzen", price: "Ab 30 €" },
    ],
  },
];

export default function ServicesPrices() {
  return (
    <section
      id="services"
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
        Leistungen & Preise
      </h2>
      <div className="grid gap-12 md:grid-cols-2">
        {servicesData.map(({ category, bgImage, items }) => (
          <div
            key={category}
            className="relative rounded-lg overflow-hidden shadow-lg text-white"
          >
            {/* Background Image with blur */}
            <img
              src={bgImage}
              alt={`${category} background`}
              className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
              loading="lazy"
            />

            {/* Overlay to darken for text contrast */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content */}
            <div className="relative p-8">
              <h3 className="text-3xl font-semibold mb-6">{category}</h3>
              <ul className="space-y-3">
                {items.map(({ service, price }, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between text-lg font-medium border-b border-white border-opacity-30 pb-2"
                  >
                    <span>{service}</span>
                    <span>{price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
