import React from 'react';
import { Link } from 'gatsby';
import Logo from './assets/logo.svg';

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 lg:px-24">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">
          <img className="h-8 w-8" src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="text-sm flex-grow flex items-center justify-end">
        <Link
          to="/"
          className="inline-block flex items-center mr-9 text-sm font-sans font-medium text-black"
        >
          About
        </Link>
        <Link to="/contact" className="inline-block flex items-center">
          <button className="px-6 py-2 text-sm font-sans font-medium text-white bg-black rounded-md">
            Contact
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;