import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/Wizstack.png';

/**
 * Footer component represents the website's footer section.
 */
const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8 border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img 
                className="h-8" 
                src={Logo}
                alt="Wizstack Logo" 
              />
            </Link>
      
            <div className="flex -mx-2">
              <Link
                to="/"
                className="mx-2 text-gray-700 hover:text-orange-500"  
              >
                Home
              </Link>
      
              <Link
                to="/about"
                className="mx-2 text-gray-700 hover:text-orange-500"
              >
                About
              </Link>
      
              <Link
                to="/contact"
                className="mx-2 text-gray-700 hover:text-orange-500"
              >
                Contact
              </Link>
      
              <Link
                to="https://github.com/Hi-kue/Wizstack" 
                className="mx-2 text-gray-700 hover:text-orange-500"
              >
                Github
              </Link>
            </div>
          </div>
      
          <div className="pt-6 flex justify-center text-gray-700 text-sm">
            © 2023 Wizstack. All rights reserved.
          </div>
        </div>
      </footer>
    );
}

export default Footer;