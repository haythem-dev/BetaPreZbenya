
import React from "react";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Zbenya Systems
          </Link>
          <div className="flex gap-6">
            <Link 
              to="/categories" 
              className={`hover:text-primary transition-colors ${location.pathname === '/categories' ? 'text-primary font-medium' : ''}`}
            >
              Categories
            </Link>
            <Link 
              to="/products" 
              className={`hover:text-primary transition-colors ${location.pathname === '/products' ? 'text-primary font-medium' : ''}`}
            >
              Products
            </Link>
            <Link 
              to="/offers" 
              className={`hover:text-primary transition-colors ${location.pathname === '/offers' ? 'text-primary font-medium' : ''}`}
            >
              Offers
            </Link>
            <Link 
              to="/subscribe" 
              className={`hover:text-primary transition-colors ${location.pathname === '/subscribe' ? 'text-primary font-medium' : ''}`}
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
