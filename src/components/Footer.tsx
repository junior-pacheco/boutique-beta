import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-black text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm sm:text-base">2025 Boutique Elegante. Todos los derechos reservados.</p>
  
        <div className="mt-4 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
          <a href="#" className="hover:text-gray-400 transition duration-300 flex items-center">
            <BsInstagram size={18} className="mr-2" />
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300 flex items-center">
            <FaFacebook size={18} className="mr-2" />
            Facebook
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-300 flex items-center">
            <BsTwitter size={18} className="mr-2" />
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default Footer;
