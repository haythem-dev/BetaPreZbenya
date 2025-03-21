
import React from "react";

export default function Apply() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Apply With Us</h1>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Skills</label>
              <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm" rows={4}></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white rounded-md py-2">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
}
