import React from "react";
import { DotsPattern, PrimaryGradient } from "@/components/ui/background-patterns";

export default function Newsletter() {
  return (
    <DotsPattern className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <PrimaryGradient>
            <div className="md:flex items-center">
              <div className="p-8 md:p-12 md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Subscribe to Our Newsletter
                </h2>
                <p className="text-white/80 mb-6 max-w-md">
                  Stay updated with our latest products, exclusive deals, and tech news.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white flex-grow"
                  />
                  <button className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-lg shadow transition duration-300 whitespace-nowrap">
                    Subscribe
                  </button>
                </div>
                <p className="text-white/60 text-sm mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
              <div className="hidden md:block md:w-1/3">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" 
                  alt="Subscribe to newsletter" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </PrimaryGradient>
        </div>
      </div>
    </DotsPattern>
  );
}
