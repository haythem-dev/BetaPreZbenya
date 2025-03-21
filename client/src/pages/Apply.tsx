
import React, { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";

export default function Apply() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    skills: '',
  });
  const [cv, setCV] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState<File | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!cv) {
      alert('Please attach your CV');
      return;
    }

    const form = new FormData();
    form.append('name', formData.fullName);
    form.append('email', formData.email);
    form.append('message', formData.skills);
    form.append('cv', cv);
    if (coverLetter) {
      form.append('coverLetter', coverLetter);
    }

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: form
      });
      
      if (response.ok) {
        alert('Application submitted successfully!');
      } else {
        alert('Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit application');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Apply With Us</h1>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <Input
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Skills</label>
              <textarea
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                rows={4}
                value={formData.skills}
                onChange={(e) => setFormData({...formData, skills: e.target.value})}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">CV (Required)</label>
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setCV(e.target.files?.[0] || null)}
                required
                className="mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Cover Letter (Optional)</label>
              <Input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={(e) => setCoverLetter(e.target.files?.[0] || null)}
                className="mt-1"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-md py-2 hover:bg-primary/90 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
