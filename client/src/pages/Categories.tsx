
import React from "react";
import { Categories as CategoriesSection } from "@/components/categories";

export default function Categories() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Our Categories</h1>
        <CategoriesSection />
      </div>
    </main>
  );
}
