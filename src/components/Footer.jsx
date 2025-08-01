import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-indigo-400" />
              <a
                href="mailto:mustafa@example.com"
                className="hover:text-indigo-400 transition"
              >
                schneidereimohsen@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-indigo-400" />
              <span>+43 662 434090</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-indigo-400" />
              <span>Schneiderei Mustafa, Kleßheimer Allee 29a</span>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">
            Folgen Sie uns
          </h3>
          <div className="flex gap-5 text-xl">
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Branding */}
        <div className="text-sm text-gray-400 flex flex-col justify-between">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Schneiderei Mohsen Stil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
