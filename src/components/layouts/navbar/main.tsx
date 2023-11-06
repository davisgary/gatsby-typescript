import React, { useState } from 'react';
import { Link } from 'gatsby';
import Logo from './assets/logo.svg';
import './main.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 lg:px-24">
      <div className={`flex items-center flex-shrink-0 text-white mr-6 z-10 ${isOpen ? 'whitelogo' : ''}`}>
        <Link to="/">
          <img className="h-8 w-8 logo" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="text-sm flex-grow flex items-center justify-end lg:flex">
        <div className="hidden lg:flex">
          <Link
            to="/"
            className="inline-block flex items-center mr-9 text-base font-sans font-semibold text-black hover:text-blue-900"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="inline-block flex items-center mr-9 text-base font-sans font-semibold text-black hover:text-blue-900"
          >
            About
          </Link>
          <Link to="/contact" className="inline-block flex items-center">
            <button className="px-6 py-1.5 text-base font-sans font-semibold text-white bg-black hover:bg-blue-900 rounded-md">
              Contact
            </button>
          </Link>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className={`hamburger ${isOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="overlay" onClick={() => setIsOpen(false)}>
            <div className="offcanvas">
              <div className="flex flex-col items-center">
                <Link to="/" className="block w-full text-center py-2 mt-2 text-3xl font-sans font-semibold text-white">
                  Home
                </Link>
                <Link to="/about" className="block w-full text-center py-2 mt-2 text-3xl font-sans font-semibold text-white">
                  About
                </Link>
                <Link to="/contact" className="block w-full text-center py-2 mt-2 text-3xl font-sans font-semibold text-white">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
