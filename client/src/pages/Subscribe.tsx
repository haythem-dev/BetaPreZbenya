
import React from "react";
import Newsletter from "@/components/newsletter";

export default function Subscribe() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Newsletter</h1>
        <Newsletter />
      </div>
    </main>
  );
}
