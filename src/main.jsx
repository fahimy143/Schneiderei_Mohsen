import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
    <h1>👔 Schneiderei Mohsen</h1>
    <p>
      Welcome to our tailoring service. Excellence stitched into every seam.
    </p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
