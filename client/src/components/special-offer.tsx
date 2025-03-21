import React from "react";
import { Badge } from "@/components/ui/badge";

export default function SpecialOffer() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="bg-primary p-8 md:p-12 text-white">
              <Badge variant="secondary" className="mb-4">Limited Time Offer</Badge>
              <h2 className="text-3xl font-bold mb-4">20% Off Enterprise Solutions</h2>
              <p className="text-white/90 mb-6">
                Get enterprise-grade technology solutions at a fraction of the cost. Perfect for growing businesses.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Premium support included</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>24/7 monitoring</span>
                </div>
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-4">Contact Us Today</h3>
              <p className="text-gray-600 mb-6">
                Don't miss out on this limited-time offer. Reach out to our team to get started.
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}