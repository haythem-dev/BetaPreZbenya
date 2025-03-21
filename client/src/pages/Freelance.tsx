
import React from "react";
import { FeaturedProducts } from "@/components/featured-products";
import SpecialOffer from "@/components/special-offer";

export default function Freelance() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Freelance Services</h1>
        <FeaturedProducts />
        <SpecialOffer />
      </div>
    </div>
  );
}
