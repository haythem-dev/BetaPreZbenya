import React from "react";
import { StarsBackground } from "@/components/ui/animated-background";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <StarsBackground className="py-16 md:py-24 overflow-hidden" density="high" speed="slow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Badge variant="featured" className="mb-4 backdrop-blur-sm bg-white/30">
              Innovation Technology
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4 backdrop-blur-sm bg-white/30 inline-block p-2 rounded-lg">
              Innovative <span className="text-primary">Tech Solutions</span> for Your Business
            </h1>
            <p className="text-lg text-gray-800 mb-6 backdrop-blur-sm bg-white/50 p-3 rounded-lg">
              Zbenya Systems delivers cutting-edge software development, IT consulting, and digital transformation services to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="/services" className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg shadow-md transition duration-300 text-center">
                Our Services
              </a>
              <a href="/contact" className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-lg border border-gray-200 shadow-sm transition duration-300 text-center">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden p-6 relative border border-white/50">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                  <h3 className="text-sm font-semibold text-gray-900">Software Development</h3>
                </div>
                <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  <h3 className="text-sm font-semibold text-gray-900">IT Consulting</h3>
                </div>
                <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  <h3 className="text-sm font-semibold text-gray-900">Cloud Solutions</h3>
                </div>
                <div className="bg-primary/10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center text-center transform transition-transform hover:scale-105 hover:shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <h3 className="text-sm font-semibold text-gray-900">Talent Solutions</h3>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-gray-600 text-sm">Trusted by businesses worldwide to deliver exceptional tech solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StarsBackground>
  );
}
