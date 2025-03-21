import React, { useState, useEffect } from "react";
import { ParticlesBackground } from "@/components/ui/animated-background";

interface TechItem {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  animation: "fade" | "slide" | "scale" | "rotate";
}

const technologies: TechItem[] = [
  {
    id: 1,
    name: "Artificial Intelligence",
    description: "Implementing cutting-edge AI solutions to solve complex business problems and automate decision-making processes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"></path>
        <circle cx="7.5" cy="14.5" r="1.5"></circle>
        <circle cx="16.5" cy="14.5" r="1.5"></circle>
      </svg>
    ),
    animation: "fade"
  },
  {
    id: 2,
    name: "Blockchain Technology",
    description: "Developing secure, transparent, and decentralized applications using blockchain technology for various industries.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
      </svg>
    ),
    animation: "slide"
  },
  {
    id: 3,
    name: "Quantum Computing",
    description: "Researching and exploring quantum computing applications to solve problems beyond the capabilities of classical computing.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M12 2a4.5 4.5 0 0 0 0 9 4.5 4.5 0 0 1 0 9 4.5 4.5 0 0 0 0-9 4.5 4.5 0 0 1 0-9"></path>
        <line x1="2" y1="12" x2="22" y2="12"></line>
      </svg>
    ),
    animation: "scale"
  },
  {
    id: 4,
    name: "Extended Reality (XR)",
    description: "Creating immersive AR, VR, and MR experiences that transform how businesses interact with their customers and train employees.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    animation: "rotate"
  }
];

export default function TechShowcase() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    // Initially animate all items with a staggered delay
    technologies.forEach((tech, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => [...prev, tech.id]);
      }, index * 300);
    });
  }, []);

  const getAnimationClass = (item: TechItem) => {
    if (!animatedItems.includes(item.id)) return "opacity-0";

    switch (item.animation) {
      case "fade":
        return "animate-fadeIn";
      case "slide":
        return "animate-slideInRight";
      case "scale":
        return "animate-scaleIn";
      case "rotate":
        return "animate-rotateIn";
      default:
        return "animate-fadeIn";
    }
  };

  return (
    <ParticlesBackground className="py-16 overflow-hidden" density="low" speed="slow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 backdrop-blur-sm bg-white/50 inline-block px-4 py-2 rounded-lg">
            Cutting-Edge Technologies
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto backdrop-blur-sm bg-white/50 p-3 rounded-lg inline-block">
            Exploring the frontiers of technology to deliver innovative solutions for tomorrow's challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {technologies.map((tech) => (
            <div 
              key={tech.id}
              className={`bg-white/80 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-all duration-500 border border-white/50 overflow-hidden ${getAnimationClass(tech)}`}
              onMouseEnter={() => setActiveItem(tech.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <div className="p-6 flex flex-col md:flex-row items-center gap-4">
                <div 
                  className={`bg-primary/10 rounded-full p-4 transform transition-transform duration-500 ${activeItem === tech.id ? 'scale-110' : ''}`}
                >
                  {tech.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-700">{tech.description}</p>
                </div>
              </div>
              
              <div 
                className={`h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500 transform origin-left transition-all duration-700 ${activeItem === tech.id ? 'scale-x-100' : 'scale-x-0'}`}
              ></div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-2xl border border-white/50">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Become an Innovation Partner</h3>
            </div>
            
            <p className="text-gray-700 mb-4">
              Join us in exploring the future of technology. At Zbenya Systems, we're constantly pushing the boundaries of what's possible in IT, high-tech, and digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-primary hover:bg-primary/90 text-white font-medium px-5 py-2 rounded-lg transition flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                Explore Our Services
              </a>
              <a 
                href="/contact" 
                className="bg-white hover:bg-gray-50 text-primary border border-primary font-medium px-5 py-2 rounded-lg transition flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-15deg); }
          to { opacity: 1; transform: rotate(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.8s ease forwards;
        }
        
        .animate-rotateIn {
          animation: rotateIn 0.8s ease forwards;
        }
      `}</style>
    </ParticlesBackground>
  );
}