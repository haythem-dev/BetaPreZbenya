import React, { useState } from "react";
import { DotsPattern } from "@/components/ui/background-patterns";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function ApplicationSection() {
  const [activeTab, setActiveTab] = useState("cv");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    message: "",
    file: null as File | null,
    position: "",
    experience: "",
    portfolioUrl: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        file: e.target.files[0]
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Create form data for file upload
      const submitData = new FormData();
      submitData.append("name", formData.name);
      submitData.append("email", formData.email);
      submitData.append("message", formData.message);
      
      if (formData.phone) submitData.append("phone", formData.phone);
      if (formData.linkedin) submitData.append("linkedin", formData.linkedin);
      
      if (activeTab === "cv") {
        if (formData.position) submitData.append("position", formData.position);
        if (formData.experience) submitData.append("experience", formData.experience);
      } else {
        if (formData.portfolioUrl) submitData.append("portfolioUrl", formData.portfolioUrl);
      }
      
      // Append file if it exists
      if (formData.file) {
        submitData.append("cv", formData.file);
      }
      
      // Call API endpoint
      const response = await fetch("/api/apply", {
        method: "POST",
        body: submitData,
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit application");
      }
      
      // Show success message
      setFormSubmitted(true);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          linkedin: "",
          message: "",
          file: null,
          position: "",
          experience: "",
          portfolioUrl: ""
        });
      }, 5000);
      
    } catch (error) {
      console.error("Error submitting application:", error);
      
      toast({
        title: "Submission Failed",
        description: error instanceof Error ? error.message : "Failed to submit application. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DotsPattern className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-primary p-8 md:p-12 flex flex-col justify-center">
              <Badge variant="limited" className="bg-white/20 text-white inline-block text-sm px-3 py-1 rounded-full mb-4 border border-white/30">
                Join Our Team
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Build Your Career With Zbenya Systems
              </h2>
              <p className="text-white/90 mb-6">
                Whether you're looking for full-time opportunities or freelance projects, we offer exciting roles in software development, design, and IT consulting.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-white/10 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <span className="text-white">Competitive compensation packages</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/10 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-white">Flexible remote work options</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/10 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-white">Professional growth opportunities</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/10 rounded-full p-2 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-white">Collaborative work environment</span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`py-3 px-4 font-medium text-sm focus:outline-none ${
                      activeTab === "cv" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("cv")}
                  >
                    Submit CV
                  </button>
                  <button
                    className={`py-3 px-4 font-medium text-sm focus:outline-none ${
                      activeTab === "spontaneous" ? "border-b-2 border-primary text-primary" : "text-gray-500 hover:text-gray-700"
                    }`}
                    onClick={() => setActiveTab("spontaneous")}
                  >
                    Spontaneous Application
                  </button>
                </div>
              </div>

              {formSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-green-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Application Submitted!</h3>
                  <p className="text-green-700">
                    Thank you for your interest in Zbenya Systems. We'll review your application and contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                      <input
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                    
                    {activeTab === "cv" ? (
                      <>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Position of Interest</label>
                          <select
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select a position</option>
                            <option value="Software Developer">Software Developer</option>
                            <option value="Web Developer">Web Developer</option>
                            <option value="Mobile Developer">Mobile Developer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="DevOps Engineer">DevOps Engineer</option>
                            <option value="Project Manager">Project Manager</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                          <select
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          >
                            <option value="">Select experience level</option>
                            <option value="0-1 years">0-1 years</option>
                            <option value="1-3 years">1-3 years</option>
                            <option value="3-5 years">3-5 years</option>
                            <option value="5-7 years">5-7 years</option>
                            <option value="7+ years">7+ years</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Portfolio or Personal Website</label>
                          <input
                            type="url"
                            name="portfolioUrl"
                            value={formData.portfolioUrl}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          />
                        </div>
                      </>
                    )}
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Upload {activeTab === "cv" ? "CV/Resume" : "Portfolio"} *</label>
                      <input
                        type="file"
                        name="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX. Maximum file size: 5MB.</p>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Additional Information</label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300">
                      Submit Application
                    </button>
                    <p className="text-xs text-gray-500 mt-3 text-center">
                      By submitting this form, you agree to our privacy policy and terms of service.
                      Your application will be sent to contact.beta.zbenyasystems@gmail.com
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </DotsPattern>
  );
}
