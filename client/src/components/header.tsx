import React from "react";
import { Link } from "wouter";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-primary font-bold text-xl">ZBENYA</span>
              <span className="text-gray-800 font-semibold ml-1 text-sm">SYSTEMS</span>
            </Link>
            <nav className="hidden md:ml-8 md:flex space-x-8">
              <Link href="/" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Home</Link>
              <Link href="/shop" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Shop</Link>
              <Link href="/categories" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Categories</Link>
              <Link href="/deals" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">Deals</Link>
              <Link href="/about" className="text-gray-800 hover:text-primary px-3 py-2 text-sm font-medium">About</Link>
            </nav>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-800 hover:text-primary p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button className="text-gray-800 hover:text-primary p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </button>
              <button className="relative text-gray-800 hover:text-primary p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span className="absolute top-0 right-0 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </button>
            </div>
            <button className="md:hidden p-2 rounded-md text-gray-800 hover:text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
