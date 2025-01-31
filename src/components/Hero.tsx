import React from 'react';
const  Hero = () => {
  return (
    <div className="relative bg-white mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Contenedor del texto */}
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-2/3 lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Descubre tu estilo en</span>{" "}
                <span className="block text-pink-200 xl:inline">nuestra boutique</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
                Explora nuestra colección de moda exclusiva y encuentra las prendas perfectas para expresar tu
                personalidad única.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center">
                <div className="rounded-md shadow">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10">
                    Comprar ahora
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
                    Ver catálogo
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
  
        {/* Imagen a la derecha en PC */}
        <div className="lg:w-1/3 md:h-[60vh] 2xl:h-[50vh] rounded-lg">
          <img
            className="h-56 w-full rounded-xl object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://i.pinimg.com/736x/f0/57/3d/f0573df3fe50e1419845d2a3f54fd9c1.jpg"
            alt="Modelo vistiendo ropa de la boutique"
          />
        </div>
      </div>
    </div>
  );
  
}

export default Hero;