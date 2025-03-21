
import React from "react";
import SpecialOffer from "@/components/special-offer";

export default function Offers() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Special Offers</h1>
        <SpecialOffer />
      </div>
    </main>
  );
}
