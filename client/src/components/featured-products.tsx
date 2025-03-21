import React from "react";
import { ParticlesBackground } from "@/components/ui/animated-background";
import { Badge } from "@/components/ui/badge";

interface FreelanceOpportunity {
  id: number;
  title: string;
  description: string;
  skills: string[];
  location: string;
  type: string;
  experience: string;
  badge?: {
    type: "urgent" | "remote" | "featured";
    label: string;
  };
}

const opportunities: FreelanceOpportunity[] = [
  {
    id: 1,
    title: "Senior Full-Stack Developer",
    description: "Lead development of enterprise-grade web applications for FinTech clients",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    location: "Remote",
    type: "Contract (6 months)",
    experience: "5+ years",
    badge: {
      type: "urgent",
      label: "Urgent"
    }
  },
  {
    id: 2,
    title: "Mobile App Developer",
    description: "Create cross-platform mobile applications using React Native for healthcare solutions",
    skills: ["React Native", "JavaScript", "iOS", "Android"],
    location: "Hybrid",
    type: "Contract (3 months)",
    experience: "3+ years",
    badge: {
      type: "remote",
      label: "Remote"
    }
  },
  {
    id: 3,
    title: "DevOps Engineer",
    description: "Implement CI/CD pipelines and automate infrastructure for scalable applications",
    skills: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    location: "Remote",
    type: "Contract (12 months)",
    experience: "4+ years",
    badge: {
      type: "featured",
      label: "Featured"
    }
  },
  {
    id: 4,
    title: "UI/UX Designer",
    description: "Design intuitive user interfaces for enterprise software applications",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing"],
    location: "Remote",
    type: "Contract (6 months)",
    experience: "3+ years"
  }
];

export default function FreelanceOpportunities() {
  return (
    <ParticlesBackground className="py-16 overflow-hidden" density="medium" speed="medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10">
          <div className="mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 mb-2 backdrop-blur-sm bg-white/50 inline-block px-4 py-1 rounded-lg">
              Freelance Opportunities
            </h2>
            <p className="text-gray-700 backdrop-blur-sm bg-white/50 p-2 rounded-lg inline-block">
              Join our network of tech professionals and work on exciting projects
            </p>
          </div>
          <a href="/freelance" className="hidden md:flex items-center text-primary font-medium backdrop-blur-sm bg-white/50 p-2 rounded-lg">
            View All Opportunities
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {opportunities.map((opportunity) => (
            <div 
              key={opportunity.id} 
              className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden shadow hover:shadow-lg hover:translate-y-[-5px] transition-all duration-300 border border-white/50"
            >
              <div className="p-5 md:p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mr-2">{opportunity.title}</h3>
                  {opportunity.badge && (
                    <Badge 
                      variant={
                        opportunity.badge.type === "urgent" ? "accent" : 
                        opportunity.badge.type === "remote" ? "secondary" : "featured"
                      } 
                      className="text-xs px-2 py-1 rounded-full"
                    >
                      {opportunity.badge.label}
                    </Badge>
                  )}
                </div>
                <p className="text-gray-700 mb-4">{opportunity.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.skills.map((skill, index) => (
                    <span key={index} className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                  <div>
                    <span className="text-gray-500 block">Location</span>
                    <span className="font-medium text-gray-900">{opportunity.location}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Type</span>
                    <span className="font-medium text-gray-900">{opportunity.type}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Experience</span>
                    <span className="font-medium text-gray-900">{opportunity.experience}</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-between items-center gap-3 mt-2">
                  <a 
                    href={`/freelance/${opportunity.id}`} 
                    className="text-primary font-medium flex items-center hover:underline"
                  >
                    View Details
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="/apply" 
                    className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="/freelance" className="inline-block bg-white hover:bg-gray-100 text-primary font-medium py-2 px-6 rounded-lg border border-primary/20 transition duration-300">
            View All Opportunities
          </a>
        </div>
      </div>
    </ParticlesBackground>
  );
}
