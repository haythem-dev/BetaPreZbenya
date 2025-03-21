import React, { useState, useRef, useEffect } from "react";
import { WavesBackground } from "@/components/ui/animated-background";

interface ChatMessage {
  id: number;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    content: "👋 Hello! Welcome to Zbenya Systems Smart Chat. How can I help you today?",
    sender: "bot",
    timestamp: new Date()
  }
];

// Predefined responses for demo purposes
const botResponses: Record<string, string> = {
  "services": "Zbenya Systems offers a range of services including custom software development, web and mobile app development, IT consulting, cloud solutions, and DevOps automation. Would you like to know more about any specific service?",
  "about": "Zbenya Systems is a technology company specializing in innovative software solutions. We help businesses transform their digital presence through cutting-edge technology and expert consulting.",
  "contact": "You can reach us at contact.beta.zbenyasystems@gmail.com or through the contact form on our website. Our team typically responds within 24 hours.",
  "careers": "We're always looking for talented individuals to join our team! Check out the 'Apply' section of our website to submit your CV or a spontaneous application.",
  "freelance": "We offer various freelance opportunities for developers, designers, and IT professionals. Visit our 'Freelance' section to browse current openings and apply.",
  "hello": "Hi there! How can I assist you with Zbenya Systems' services today?",
  "technology": "We specialize in a wide range of technologies including React, Node.js, TypeScript, Python, AWS, Docker, and many more. Our technical expertise allows us to deliver cutting-edge solutions.",
  "cloud": "Our cloud services help businesses leverage the power of AWS, Azure, or Google Cloud to build scalable, secure, and cost-effective infrastructure.",
  "ai": "We're exploring innovative AI solutions for businesses, including machine learning models, natural language processing, and data analytics to drive intelligent decision-making."
};

export default function SmartChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      content: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsSending(true);

    // Simulate processing time
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: messages.length + 2,
        content: generateBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsSending(false);
    }, 1000);
  };

  const generateBotResponse = (message: string): string => {
    const normalizedMessage = message.toLowerCase();
    
    // Check for keywords in the user's message
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (normalizedMessage.includes(keyword.toLowerCase())) {
        return response;
      }
    }

    // Default response if no keywords match
    return "Thank you for your message. For more specific information about Zbenya Systems, please visit our website or contact us directly at contact.beta.zbenyasystems@gmail.com";
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <WavesBackground className="py-16 overflow-hidden" speed="medium" density="high">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 backdrop-blur-sm bg-white/50 inline-block px-4 py-2 rounded-lg">
            Smart Chat Assistant
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto backdrop-blur-sm bg-white/50 p-3 rounded-lg inline-block">
            Have questions about our IT, high-tech, or freelance services? Our AI assistant is here to help you 24/7
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-white/50">
          <div className="bg-primary text-white p-4">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Zbenya Systems Assistant</h3>
                <p className="text-xs text-white/80">Online | Typically replies instantly</p>
              </div>
            </div>
          </div>
          
          <div className="h-80 sm:h-96 overflow-y-auto p-4 bg-gray-50/80">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[75%] rounded-lg px-4 py-2 ${
                    message.sender === "user" 
                      ? "bg-primary text-white rounded-tr-none" 
                      : "bg-white text-gray-800 shadow rounded-tl-none"
                  }`}
                >
                  <p className="break-words">{message.content}</p>
                  <p className={`text-xs mt-1 ${message.sender === "user" ? "text-white/80" : "text-gray-500"}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            {isSending && (
              <div className="flex justify-start mb-4">
                <div className="bg-white text-gray-800 rounded-lg rounded-tl-none px-4 py-2 shadow max-w-[75%]">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    <div className="h-2 w-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message here..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-lg transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 justify-center">
              <button 
                onClick={() => setInputMessage("Tell me about your services")}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition"
              >
                Services
              </button>
              <button 
                onClick={() => setInputMessage("Tell me about freelance opportunities")}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition"
              >
                Freelance
              </button>
              <button 
                onClick={() => setInputMessage("How can I contact you?")}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition"
              >
                Contact
              </button>
              <button 
                onClick={() => setInputMessage("What technologies do you work with?")}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full transition"
              >
                Technologies
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              This is a demonstration of our smart chat. For complex inquiries, please contact us directly.
            </p>
          </div>
        </div>
      </div>
    </WavesBackground>
  );
}
