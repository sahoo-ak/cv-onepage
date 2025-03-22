
import React, { useState } from 'react';
import { cn } from "@/lib/utils";
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      toast({
        title: "Message sent successfully",
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all",
              "bg-white/90 backdrop-blur-sm"
            )}
            placeholder="John Doe"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={cn(
              "w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all",
              "bg-white/90 backdrop-blur-sm"
            )}
            placeholder="john@example.com"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all",
            "bg-white/90 backdrop-blur-sm"
          )}
          placeholder="Research collaboration"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          className={cn(
            "w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-1 focus:ring-gray-400 focus:border-gray-400 outline-none transition-all",
            "bg-white/90 backdrop-blur-sm"
          )}
          placeholder="Your message here..."
        />
      </div>
      
      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "w-full sm:w-auto px-8 py-3 bg-black text-white rounded-md font-medium transition-all",
            "hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",
            isSubmitting && "opacity-70 cursor-not-allowed"
          )}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
