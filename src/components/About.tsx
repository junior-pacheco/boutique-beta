import React from 'react';

const About = () => {
  return (
    <div className="relative bg-white py-8 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Imagen y cita */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg relative">
              <img
                className="w-full h-96 object-cover"
                src="https://i.pinimg.com/736x/c4/af/60/c4af60f3eb1a4190e2de3b1d59c87f36.jpg"
                alt="Nuestra tienda"
              />
              <div className="absolute inset-0 bg-black opacity-40 mix-blend-multiply"></div>
              <div className="absolute inset-0 "></div>
              <div className="relative bg-black p-6 sm:p-8">
                <blockquote className="text-lg sm:text-xl text-white">
                  <svg className="h-8 w-8 text-pink-200 mb-4" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">Nuestra pasión es vestir a nuestros clientes con estilo y confianza.</p>
                </blockquote>
                <footer className="mt-4">
                  <p className="text-base font-semibold text-pink-200">Ana Martínez, Fundadora</p>
                </footer>
              </div>
            </div>
          </div>

          {/* Sección de información */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Sobre Nuestra Boutique
            </h2>
            <div className="mt-6 text-gray-500 space-y-6">
              <p className="text-lg sm:text-xl">
                Fundada en 2010, nuestra boutique nació de la pasión por la moda y el deseo de ofrecer prendas únicas y de alta calidad a nuestros clientes.
              </p>
              <p className="text-base leading-7">
                Nos enorgullece seleccionar cuidadosamente cada pieza de nuestra colección, trabajando con diseñadores locales e internacionales para traerte lo mejor en moda contemporánea.
              </p>
              <p className="text-base leading-7">
                Nuestro compromiso es no solo vestirte, sino ayudarte a expresar tu personalidad única a través de la moda.
              </p>
            </div>

            <div className="mt-8">
              <button className="px-6 py-3 text-lg font-medium text-white bg-black hover:bg-gray-800 rounded-lg transition">
                Conoce nuestra historia
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
