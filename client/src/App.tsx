import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Services from "@/pages/Services";
import Freelance from "@/pages/Freelance";
import Apply from "@/pages/Apply";
import Contact from "@/pages/Contact";
import { useEffect } from "react";

//Added Navigation Component
const Navigation = () => (
  <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
    <ul className="flex justify-center space-x-4">
      <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
      <li><a href="#services" className="text-white hover:text-gray-300">Services</a></li>
      <li><a href="#freelance" className="text-white hover:text-gray-300">Freelance</a></li>
      <li><a href="#apply" className="text-white hover:text-gray-300">Apply</a></li>
      <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
    </ul>
  </nav>
);


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/services" component={Services}/>
      <Route path="/freelance" component={Freelance}/>
      <Route path="/apply" component={Apply}/>
      <Route path="/contact" component={Contact}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Add smooth scrolling behavior to all anchor links
  useEffect(() => {
    const handleClick = (e: Event) => {
      e.preventDefault();
      const anchor = e.currentTarget as HTMLAnchorElement;
      const targetId = anchor.getAttribute('href')?.substring(1);
      if (!targetId) return;

      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleClick);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navigation />
        <div className="pt-16"> {/* Add padding to account for fixed header */}
          <Router />
          <Toaster />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;