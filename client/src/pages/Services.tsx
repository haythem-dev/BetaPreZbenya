
import React from "react";
import { Categories } from "@/components/categories";
import { TechShowcase } from "@/components/tech-showcase";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
        <Categories />
        <TechShowcase />
      </div>
    </div>
  );
}
