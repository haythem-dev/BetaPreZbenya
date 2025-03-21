
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
          filter: "brightness(0.7)"
        }}
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-3xl mx-auto p-8 bg-black/30 backdrop-blur-sm rounded-xl">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Zbenya Systems
          </h1>
          <p className="text-xl text-white/90 mb-8">
            We are a leading technology company specializing in innovative software solutions, IT consulting, and digital transformation. Our mission is to help businesses thrive in the digital age through cutting-edge technology and expert services.
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              to="/services" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition duration-300"
            >
              Our Services
            </Link>
            <Link 
              to="/contact" 
              className="inline-block bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-8 rounded-lg transition duration-300 backdrop-blur-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
