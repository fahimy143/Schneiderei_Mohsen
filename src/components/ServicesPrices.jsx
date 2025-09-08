import React from "react";

const servicesData = [
  {
    category: "Hose",
    items: [
      { service: "Hose kürzen", price: "Ab 15 €" },
      { service: "Bund enger oder weiter", price: "Ab 20 €" },
      { service: "Jeans Hose Bund enger", price: "Ab 20 €" },
      { service: "Hosenbein enger", price: "Ab 15 €" },
      { service: "Zippverschluss erneuern", price: "Ab 20 €" },
      { service: "Skihose/Trainingshose", price: "Ab 25 €" },
    ],
  },
  {
    category: "Kleid",
    items: [
      { service: "Kleid/Abendkleid kürzen", price: "Ab 25€/55 €" },
      { service: "Reißverschluss erneuern", price: "Ab 30 €" },
      { service: "Taillieren", price: "Ab 30 €" },
    ],
  },
  {
    category: "Hemd",
    items: [
      { service: "Ärmellänge kürzen normal", price: "Ab 15 €" },
      {
        service: "Ärmellänge kürzen mit Schlitzverlängerung",
        price: "Ab 20 €",
      },
      { service: "Enger machen", price: "Ab 20 €" },
    ],
  },
  {
    category: "Rock",
    items: [
      { service: "Rocklänge kürzen", price: "Ab 20 €" },
      { service: "Reißverschluss erneuern", price: "Ab 20 €" },
      { service: "Rock enger machen", price: "Ab 25 €" },
      { service: "Rockfutter einsetzen", price: "Ab 45 €" },
    ],
  },
  {
    category: "Brautkleid",
    items: [
      { service: "Länge kürzen", price: "Ab 90 €" },
      { service: "Taillieren / Weiten oder Engen", price: "Ab 80 €" },
    ],
  },
  {
    category: "Leder",
    items: [
      { service: "Reißverschluss erneuern", price: "Ab 70 €" },
      { service: "Lederjacke enger machen", price: "Ab 60 €" },
      { service: "Lederhose enger machen", price: "Ab 45 €" },
    ],
  },
  {
    category: "Anzughose",
    items: [
      { service: "Ärmel kürzen", price: "Ab 35 €" },
      { service: "Enger machen", price: "Ab 45 €" },
      { service: "Neue Naht / Anpassung", price: "Ab 90 €" },
    ],
  },
  {
    category: "Rucksack",
    items: [
      { service: "Reißverschluss reparieren", price: "Ab 90 €" },
      { service: "Rückseite Reißverschluss reparieren", price: "Ab 90 €" },
    ],
  },
  {
    category: "Sonnenschutz",
    items: [{ service: "Vollständiger Service / Alle Reparaturen" }],
  },
  {
    category: "Traditionelle Artikel",
    items: [
      { service: "Enger oder weiter machen", price: "Ab 35 €" },
      { service: "Kürzen", price: "Ab 35 €" },
    ],
  },
  {
    category: "Motorradjacke",
    items: [
      { service: "Reißverschluss erneuern", price: "Ab 75 €" },
      { service: "Hosenreißverschluss reparieren", price: "Ab 35 €" },
    ],
  },
  {
    category: "Vorhang",
    items: [{ service: "Länge anpassen / Kürzen", price: "Ab 15 €" }],
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
      <div className="grid gap-8 md:grid-cols-2">
        {servicesData.map(({ category, items }) => (
          <div
            key={category}
            className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              {category}
            </h3>
            <ul className="space-y-3">
              {items.map(({ service, price }, idx) => (
                <li
                  key={idx}
                  className="flex justify-between text-gray-700 border-b border-gray-200 pb-2"
                >
                  <span>{service}</span>
                  <span className="font-medium">{price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Announcement Section */}
      <div className="mt-12 bg-gray-100 rounded-xl p-6 text-center shadow-md">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          Teppiche, Kleidung und mehr waschen
        </h3>
        <p className="text-gray-700 text-lg">
          Wir bieten professionelles Waschen von Teppichen, Kleidung und
          weiteren Artikeln an.
        </p>
      </div>
    </section>
  );
}
