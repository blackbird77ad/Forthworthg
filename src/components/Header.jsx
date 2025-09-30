import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import Logo from '../assets/images/forthworth.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-[9999]">
      <nav className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Forthworth G Logo" className="h-10 w-auto" />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-500 transition">HOME</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 transition">ABOUT US</Link></li>
          <li><Link to="/services" className="hover:text-blue-500 transition">SERVICES</Link></li>
          <li><Link to="/profiles" className="hover:text-blue-500 transition">PROFILES</Link></li>
          {/* <li><Link to="/contact" className="hover:text-blue-500 transition"></Link></li> */}
         
          <Link
  to="footer"
  smooth={true}
  duration={500}
  offset={-50} // Adjust this if you have a fixed nav bar
  className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
>
  Contact Us
</Link>

        </ul>

      </nav>
    </header>
  );
};

export default Header;
