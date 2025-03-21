import React from "react";
import { HeroPattern } from "@/components/ui/background-patterns";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <HeroPattern className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Discover Premium Tech <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Explore our curated collection of high-quality electronics and tech accessories for your professional and personal needs.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 text-center">
                Shop Now
              </a>
              <a href="#" className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg border border-gray-200 shadow-sm transition duration-300 text-center">
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden p-6 relative">
              <Badge variant="featured" className="absolute top-0 right-0 rounded-bl-lg py-1 px-3">
                Featured
              </Badge>
              <img 
                src="https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Featured product" 
                className="w-full h-64 object-cover object-center rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Wireless Pro Headphones</h3>
              <p className="text-gray-600 mb-3">Premium noise-cancelling headphones for immersive audio experience</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-bold text-xl">$249.99</span>
                <span className="line-through text-gray-400">$299.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeroPattern>
  );
}
