import React from "react";

interface Testimonial {
  id: number;
  content: string;
  name: string;
  initials: string;
  role: string;
  avatarColor: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "The wireless headphones I purchased exceeded my expectations. The sound quality is amazing and the battery lasts for days. Highly recommend!",
    name: "John Doe",
    initials: "JD",
    role: "Verified Buyer",
    avatarColor: "primary",
    rating: 5
  },
  {
    id: 2,
    content: "Fast shipping and excellent customer service. When I had questions about my order, the support team was quick to respond and very helpful.",
    name: "Amanda Smith",
    initials: "AS",
    role: "Verified Buyer",
    avatarColor: "secondary",
    rating: 5
  },
  {
    id: 3,
    content: "I've been shopping here for years and have always had a positive experience. The product selection is great and prices are competitive.",
    name: "Robert Johnson",
    initials: "RJ",
    role: "Verified Buyer",
    avatarColor: "accent",
    rating: 4.5
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience shopping with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow transition-all duration-300">
              <div className="flex text-amber-500 mb-4">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <p className="text-gray-600 mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className={`h-10 w-10 rounded-full bg-${testimonial.avatarColor}/20 flex items-center justify-center text-${testimonial.avatarColor} font-bold mr-3`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
