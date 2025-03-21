import React from "react";
import { DotsPattern, PrimaryGradient } from "@/components/ui/background-patterns";

export default function ContactSection() {
  return (
    <DotsPattern className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl shadow-lg overflow-hidden">
          <PrimaryGradient>
            <div className="md:flex items-center">
              <div className="p-8 md:p-12 md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Get in Touch With Our Team
                </h2>
                <p className="text-white/80 mb-6 max-w-md">
                  Have questions about our IT services, high-tech solutions, or freelance opportunities? Reach out to us today.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </h3>
                    <p className="text-white/90 text-sm">contact.beta.zbenyasystems@gmail.com</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Phone
                    </h3>
                    <p className="text-white/90 text-sm">+1 (888) ZBN-TECH</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Business Hours
                    </h3>
                    <p className="text-white/90 text-sm">Monday - Friday: 9AM - 6PM</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h3 className="text-white font-semibold mb-2 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      Live Chat
                    </h3>
                    <p className="text-white/90 text-sm">Available 24/7 through our Smart Chat</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <input 
                    type="email" 
                    placeholder="Enter your email for a callback" 
                    className="px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white flex-grow"
                  />
                  <button className="bg-white hover:bg-gray-100 text-primary font-medium py-3 px-6 rounded-lg shadow transition duration-300 whitespace-nowrap">
                    Request Callback
                  </button>
                </div>
              </div>
              <div className="hidden md:block md:w-1/3">
                <div className="h-full w-full bg-gradient-to-br from-primary/40 to-primary/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="bg-white/20 rounded-full p-6 inline-block mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                      </svg>
                    </div>
                    <h3 className="text-white font-bold text-xl mb-2">Ready to Transform Your Tech?</h3>
                    <p className="text-white/80">Our IT, high-tech, and freelance experts are ready to help you achieve your digital goals</p>
                  </div>
                </div>
              </div>
            </div>
          </PrimaryGradient>
        </div>
      </div>
    </DotsPattern>
  );
}
