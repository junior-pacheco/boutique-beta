import React from 'react';
const categories = [
  {
    name: "Mujer",
    href: "#",
    imageSrc: "https://i.pinimg.com/736x/8c/6c/4f/8c6c4f93848939482b47f4fe65455f9a.jpg",
  },
  {
    name: "Hombre",
    href: "#",
    imageSrc: "https://i.pinimg.com/736x/2a/52/a2/2a52a24b6b1ea26d17fb7059e33288d3.jpg",
  },
  {
    name: "Accesorios",
    href: "#",
    imageSrc: "https://i.pinimg.com/736x/19/82/58/198258897f9397510e4dbe2ee73bb4a7.jpg",
  },
]

export default function Categories() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-12 sm:py-16 lg:py-20 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center sm:text-left">
            Categorías
          </h2>
  
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div key={category.name} className="group relative">
                <div className="relative w-full h-auto bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                  <img
                    src={category.imageSrc || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-64 sm:h-48 lg:h-80 object-center object-cover"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-500 text-center sm:text-left">
                  <a href={category.href}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 text-center sm:text-left">
                  Explora la colección
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
  
}