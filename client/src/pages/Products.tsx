
import React from "react";
import { FeaturedProducts } from "@/components/featured-products";

export default function Products() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <FeaturedProducts />
      </div>
    </main>
  );
}
