import React from "react";
import { DotsPattern } from "@/components/ui/background-patterns";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: {
    type: "discount" | "new";
    value?: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "Smart Watch Pro",
    description: "All-day fitness tracking and notifications",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4.5,
    reviews: 42,
    badge: {
      type: "discount",
      value: "-20%"
    }
  },
  {
    id: 2,
    name: "Wireless Charging Pad",
    description: "Fast-charging for compatible devices",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 4.0,
    reviews: 28
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    description: "Waterproof with 12-hour battery life",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBzcGVha2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 5.0,
    reviews: 56,
    badge: {
      type: "new"
    }
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    description: "Tactile switches with RGB lighting",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1600003263720-95b45a4035d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    rating: 3.5,
    reviews: 34
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex text-amber-500">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= Math.floor(rating) ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          ) : star === Math.ceil(rating) && !Number.isInteger(rating) ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          )}
        </span>
      ))}
    </div>
  );
};

export default function FeaturedProducts() {
  return (
    <DotsPattern className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
            <p className="text-gray-600">Our best-selling items this season</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-primary font-medium">
            View All 
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300 card-hover"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                {product.badge && (
                  <Badge 
                    variant={product.badge.type === "discount" ? "accent" : "new"} 
                    className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded"
                  >
                    {product.badge.type === "discount" ? product.badge.value : "NEW"}
                  </Badge>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <StarRating rating={product.rating} />
                  <span className="text-gray-500 text-xs ml-2">({product.reviews})</span>
                </div>
                <h3 className="text-gray-900 font-semibold mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 text-sm line-through ml-2">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <button className="bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-block bg-white hover:bg-gray-100 text-primary font-medium py-2 px-6 rounded-lg border border-primary/20 transition duration-300">
            View All Products
          </a>
        </div>
      </div>
    </DotsPattern>
  );
}
