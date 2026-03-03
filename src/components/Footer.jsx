import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* ================= TOP ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* ===== Brand ===== */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">
            ForthWorth G.
          </h3>
          <p className="text-sm leading-relaxed text-gray-400">
            A multidisciplinary consulting and business facilitation firm
            connecting governments, investors, and enterprises to structured
            opportunities across borders.
          </p>
        </div>

        {/* ===== Navigation ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/projects" className="hover:text-white transition">Projects</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* ===== Focus Areas ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">Focus Areas</h4>
          <ul className="space-y-3 text-sm">
            <li>Consulting & Advisory</li>
            <li>Government Projects</li>
            <li>Building & Construction</li>
            <li>International Trade</li>
            <li>Project Brokerage</li>
          </ul>
        </div>

        {/* ===== Contact & Socials ===== */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <FiMail /> support@forthworthg.com
            </p>
            <p className="flex items-center gap-2">
              <FiPhone /> +233 244643965
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-white hover:text-gray-900 transition"
              aria-label="X (Twitter)"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/*  BOTTOM  */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-3">
          <p>© {new Date().getFullYear()} ForthWorth G. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
