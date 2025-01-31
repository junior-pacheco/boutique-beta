// import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "lucide-react";
import React from 'react';
const products = [
  {
    id: 1,
    name: "Vestido Floral",
    href: "#",
    price: "$48",
    imageSrc: "https://i.pinimg.com/736x/24/01/38/24013831eb95ab2659c1e6ab6b283080.jpg",
    imageAlt: "Vestido floral de verano",
  },
  {
    id: 2,
    name: "Chaqueta de Cuero",
    href: "#",
    price: "$120",
    imageSrc: "https://i.pinimg.com/736x/18/8d/52/188d52837fd2b838c4f9c9813668417f.jpg",
    imageAlt: "Chaqueta de cuero negra",
  },
  {
    id: 3,
    name: "Jeans Slim Fit",
    href: "#",
    price: "$65",
    imageSrc: "https://i.pinimg.com/736x/00/30/d3/0030d3cae80b5b36bc100dd3a10c674d.jpg",
    imageAlt: "Jeans azules slim fit",
  },
  {
    id: 4,
    name: "Blusa de Seda",
    href: "#",
    price: "$89",
    imageSrc: "https://i.pinimg.com/736x/ab/80/85/ab8085e5907001d497454fa4e558d540.jpg",
    imageAlt: "Blusa de seda blanca",
  },
]

const FeaturedProducts = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-6 text-center sm:text-left">
          Productos Destacados
        </h2>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200">
                <img
                  src={product.imageSrc || "/placeholder.svg"}
                  alt={product.imageAlt}
                  className="w-full h-48 object-center object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href} className="hover:underline">
                    {product.name}
                  </a>
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                  <Badge className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                    Nuevo
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default FeaturedProducts