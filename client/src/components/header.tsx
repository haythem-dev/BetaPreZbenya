import React, { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">ZBENYA</span>
              <span className="text-gray-800 font-semibold ml-1 text-sm">SYSTEMS</span>
            </Link>
            <nav className="hidden md:ml-8 md:flex space-x-6">
              <Link href="/" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/services" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Services</Link>
              <Link href="/freelance" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Freelance</Link>
              <Link href="/apply" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Apply</Link>
              <Link href="/about" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">About</Link>
              <Link href="/contact" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Contact</Link>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <a href="/chat" className="bg-primary text-white hover:bg-primary/90 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Smart Chat
              </a>
            </div>
            <button 
              className="md:hidden p-2 rounded-md text-gray-800 hover:text-primary"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-2 border-t border-gray-100">
            <nav className="flex flex-col space-y-1">
              <Link href="/" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/services" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Services</Link>
              <Link href="/freelance" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Freelance</Link>
              <Link href="/apply" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Apply</Link>
              <Link href="/about" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">About</Link>
              <Link href="/contact" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Contact</Link>
              <Link href="/chat" className="text-primary hover:text-primary/90 px-3 py-2 text-sm font-medium">Smart Chat</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
