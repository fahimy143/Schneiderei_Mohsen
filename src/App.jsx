import React from "react";
import Navbar from "./components/Navbar";
import Slideshow from "./components/Slideshow";
import ServicesPrices from "./components/ServicesPrices";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-0">
        <Slideshow />
        <ServicesPrices />
        <AboutUs />
        <Contact />
        <Footer />
        {/* Other sections */}
      </main>
    </>
  );
}

export default App;
