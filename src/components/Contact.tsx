import React, { useState } from 'react';
import { Send, Loader, Mail, Linkedin, MapPin } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-tactical-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-military text-white text-center mb-16">
          CONTACT
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-8 mb-12">
            <a
              href="https://www.linkedin.com/in/mohanad-khalifa-85a90a318/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-tactical-red transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="font-military">LinkedIn</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-6 h-6" />
              <span className="font-military">Riyadh, Saudi Arabia</span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-white font-military mb-2">
                NAME
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-tactical-gray text-white p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-tactical-red"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-white font-military mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-tactical-gray text-white p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-tactical-red"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-white font-military mb-2">
                MESSAGE
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className="w-full bg-tactical-gray text-white p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-tactical-red"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-tactical-red hover:bg-red-700 text-white font-military py-3 rounded-sm transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader className="w-5 h-5 animate-spin" />
                  SENDING...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  SEND MESSAGE
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}