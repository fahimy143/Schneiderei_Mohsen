import React, { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 py-16"
    >
      <div className="max-w-xl w-full bg-white/10 backdrop-blur-md rounded-xl shadow-2xl p-8 border border-white/20 transition-all duration-300 hover:scale-[1.02]">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Kontakt aufnehmen
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Ihr Name"
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">E-Mail</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="sie@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-white mb-1">Nachricht</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Schreiben Sie Ihre Nachricht..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300"
          >
            Nachricht senden
          </button>
        </form>
        {submitted && (
          <p className="mt-4 text-green-400 text-center animate-pulse">
            Danke! Ihre Nachricht wurde gesendet.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
