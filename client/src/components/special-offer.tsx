import React, { useState, useEffect } from "react";
import { BackgroundWithCircles } from "@/components/ui/background-patterns";
import { Badge } from "@/components/ui/badge";
import { formatTimeRemaining } from "@/lib/utils";

export default function SpecialOffer() {
  const [timeRemaining, setTimeRemaining] = useState({
    days: "02",
    hours: "18",
    minutes: "45",
    seconds: "20"
  });

  useEffect(() => {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    endDate.setHours(23, 59, 59, 0);
    
    const interval = setInterval(() => {
      setTimeRemaining(formatTimeRemaining(endDate));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundWithCircles className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <Badge variant="limited" className="inline-block text-sm px-3 py-1 rounded-full mb-4">
                Limited Time Offer
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get 25% Off on All Wireless Earbuds
              </h2>
              <p className="text-gray-600 mb-6">
                Experience crystal-clear sound quality with our premium range of wireless earbuds. Limited stock available.
              </p>
              <div className="flex space-x-4 mb-6">
                <div className="bg-gray-50 rounded-lg px-4 py-3 text-center">
                  <span className="block text-2xl font-bold text-primary">{timeRemaining.days}</span>
                  <span className="text-gray-500 text-sm">Days</span>
                </div>
                <div className="bg-gray-50 rounded-lg px-4 py-3 text-center">
                  <span className="block text-2xl font-bold text-primary">{timeRemaining.hours}</span>
                  <span className="text-gray-500 text-sm">Hours</span>
                </div>
                <div className="bg-gray-50 rounded-lg px-4 py-3 text-center">
                  <span className="block text-2xl font-bold text-primary">{timeRemaining.minutes}</span>
                  <span className="text-gray-500 text-sm">Mins</span>
                </div>
                <div className="bg-gray-50 rounded-lg px-4 py-3 text-center">
                  <span className="block text-2xl font-bold text-primary">{timeRemaining.seconds}</span>
                  <span className="text-gray-500 text-sm">Secs</span>
                </div>
              </div>
              <a href="#" className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300 w-full sm:w-auto text-center">
                Shop the Sale
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2lyZWxlc3MlMjBjaGFyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=80" 
                alt="Special offer on wireless earbuds" 
                className="w-full h-72 md:h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundWithCircles>
  );
}
