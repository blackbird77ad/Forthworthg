import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/forthworth.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-blue-700 font-semibold"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[9999]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Forthworth Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li>
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/profiles" className={navLinkClass}>
              Profiles
            </NavLink>
          </li>

          {/* Contact CTA */}
          <li>
            <Link
              to="/contact"
              className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition shadow-sm"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-sm">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/profiles" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Profiles
            </NavLink>

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
