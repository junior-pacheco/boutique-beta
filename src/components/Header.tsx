import React from 'react';
import { useState } from "react";
import { ShoppingBag, User, Heart, Search, UserIcon as Female, UserIcon as Male, Watch, Grid, Menu } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-black shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4  flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only text-white">Tu Boutique</span>
              <div className="h-12 w-12 rounded-full overflow-hidden">
                <img
                  src="https://img.freepik.com/vector-premium/logotipo-empresa-boutique-percha-estilo-simple_278222-6983.jpg?ga=GA1.1.1653515673.1712756887&semt=ais_hybrid"
                  alt="Logo"
                  className="h-full w-full object-cover"
                />
              </div>
            </a>
          </div>

          {/* Menú en móvil */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Menú en escritorio */}
          <div className="hidden lg:flex space-x-8">
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white flex items-center">
              <Female className="w-5 h-5 mr-2" />
              Mujer
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white flex items-center">
              <Male className="w-5 h-5 mr-2" />
              Hombre
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white flex items-center">
              <Watch className="w-5 h-5 mr-2" />
              Accesorios
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white flex items-center">
              <Grid className="w-5 h-5 mr-2" />
              Colecciones
            </a>
          </div>

          {/* Iconos de acciones */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <Search className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="white" d="M8 0a8 8 0 1 1-4.075 14.886L.658 15.974a.5.5 0 0 1-.632-.632l1.089-3.266A8 8 0 0 1 8 0m0 1a7 7 0 0 0-5.915 10.745a.5.5 0 0 1 .052.426l-.846 2.539l2.54-.846a.5.5 0 0 1 .425.052A7 7 0 1 0 8 1M5.214 4.004c.131 0 .262 0 .376.005c.12.008.282-.05.443.363c.164.425.558 1.472.607 1.577c.05.105.082.23.018.371c-.066.142-.1.231-.198.353c-.098.125-.206.277-.296.371c-.098.107-.201.22-.085.433c.113.211.51.908 1.094 1.469c.753.724 1.386.949 1.584 1.054c.196.106.312.086.425-.053c.116-.14.491-.619.623-.832c.131-.211.263-.178.443-.105c.18.07 1.149.582 1.345.687c.198.108.33.162.378.25c.05.09.05.514-.113 1.008c-.165.496-.95.949-1.329 1.01c-.34.053-.77.075-1.241-.086a11 11 0 0 1-1.121-.447c-1.975-.92-3.265-3.06-3.363-3.2C4.705 8.092 4 7.082 4 6.038c0-1.042.508-1.556.688-1.767a.7.7 0 0 1 .526-.266z"/></svg>
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <Heart className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <ShoppingBag className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Menú desplegable en móvil */}
        {menuOpen && (
          <div className="lg:hidden absolute top-24 left-[59%] -translate-x-1/2 w-[250px] bg-black text-white p-4 rounded-lg shadow-lg">
            <a href="#" className="flex items-center py-2 text-gray-300 hover:text-white">
              <Female className="w-5 h-5 mr-2" /> Mujer
            </a>
            <a href="#" className="flex items-center py-2 text-gray-300 hover:text-white">
              <Male className="w-5 h-5 mr-2" /> Hombre
            </a>
            <a href="#" className="flex items-center py-2 text-gray-300 hover:text-white">
              <Watch className="w-5 h-5 mr-2" /> Accesorios
            </a>
            <a href="#" className="flex items-center py-2 text-gray-300 hover:text-white">
              <Grid className="w-5 h-5 mr-2" /> Colecciones
            </a>
          </div>
        )}


      </div>
    </div>
  );
}

