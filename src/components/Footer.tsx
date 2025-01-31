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
          <a href="#" className="hover:text-gray-400  transition duration-300 flex items-center">
          <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="white" strokeWidth="1.5"><path d="M16.82 20.768L3.753 3.968A.6.6 0 0 1 4.227 3h2.48a.6.6 0 0 1 .473.232l13.067 16.8a.6.6 0 0 1-.474.968h-2.48a.6.6 0 0 1-.473-.232Z"/><path strokeLinecap="round" d="M20 3L4 21"/></g></svg>
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
  
}

export default Footer;
