import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Send } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full bg-[#0F0F0F] text-[#F5F5F5]"
    >
      {/* Page Header */}
      <section className="bg-[#111111] pt-32 pb-24 relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-warm-oak to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Let's Upgrade Your <span className="font-serif italic text-warm-oak">Floors</span>
          </h1>
          <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mb-6">
            Get in touch today for a free estimate.
          </p>
          <div className="w-12 h-px bg-warm-oak mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-light mb-8">Contact Information</h2>
            
            <div className="space-y-8 mb-12">
              <a href="tel:+12083393627" className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:bg-warm-oak/10 transition-colors shrink-0">
                  <Phone className="text-warm-oak" size={20} />
                </div>
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-semibold mb-1 text-white/80">Phone</h3>
                  <p className="text-white/60 font-light text-lg">+1 208-339-3627</p>
                </div>
              </a>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:bg-warm-oak/10 transition-colors shrink-0">
                  <MapPin className="text-warm-oak" size={20} />
                </div>
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-semibold mb-1 text-white/80">Service Area</h3>
                  <p className="text-white/60 font-light text-lg">Serving the local community.<br/>Contact us for our exact service radius.</p>
                </div>
              </div>

              <a href="mailto:info@enhancedflooring.com" className="flex items-start gap-4 group">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:bg-warm-oak/10 transition-colors shrink-0">
                  <Mail className="text-warm-oak" size={20} />
                </div>
                <div>
                  <h3 className="uppercase tracking-widest text-xs font-semibold mb-1 text-white/80">Email</h3>
                  <p className="text-white/60 font-light text-lg">info@enhancedflooring.com</p>
                </div>
              </a>
            </div>

            <h3 className="text-sm uppercase tracking-widest font-semibold mb-6 text-white/80">Connect With Us</h3>
            <a 
              href="https://www.facebook.com/profile.php?id=61590531925916" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#1A1A1A] border border-white/10 text-white px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-warm-oak/30 transition-colors"
            >
              <Facebook size={16} className="text-blue-500" />
              Follow on Facebook
            </a>
            

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#1A1A1A] p-8 md:p-10 border border-white/5"
          >
            <h2 className="text-3xl font-light mb-6">Request a Quote</h2>
            <p className="text-white/60 font-light mb-8">Fill out the form below and we'll get back to you as soon as possible to discuss your project.</p>

            {formStatus === "success" ? (
              <div className="bg-[#111111] border border-white/10 p-8 text-center">
                <div className="w-16 h-16 border border-warm-oak/30 text-warm-oak flex items-center justify-center mx-auto mb-6">
                  <Send size={24} />
                </div>
                <h3 className="text-xl font-light mb-2">Message Sent!</h3>
                <p className="text-white/60 font-light text-sm">Thank you for reaching out. We will contact you shortly.</p>
                <button 
                  onClick={() => setFormStatus("idle")}
                  className="mt-8 text-warm-oak text-xs uppercase tracking-widest font-bold hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 focus:outline-none focus:border-warm-oak/50 text-white placeholder-white/30 transition-all font-light"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-3 bg-[#111111] border border-white/10 focus:outline-none focus:border-warm-oak/50 text-white placeholder-white/30 transition-all font-light"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-[#111111] border border-white/10 focus:outline-none focus:border-warm-oak/50 text-white placeholder-white/30 transition-all font-light"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">Service Needed *</label>
                  <select 
                    id="service"
                    required
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 focus:outline-none focus:border-warm-oak/50 text-white/80 transition-all font-light"
                  >
                    <option value="" className="bg-[#1A1A1A]">Select a service...</option>
                    <option value="lvp" className="bg-[#1A1A1A]">LVP Flooring Installation</option>
                    <option value="residential" className="bg-[#1A1A1A]">Residential Flooring</option>
                    <option value="office" className="bg-[#1A1A1A]">Office Flooring</option>
                    <option value="rental" className="bg-[#1A1A1A]">Rental Property Flooring</option>
                    <option value="replacement" className="bg-[#1A1A1A]">Floor Replacement</option>
                    <option value="repair" className="bg-[#1A1A1A]">Flooring Repair</option>
                    <option value="other" className="bg-[#1A1A1A]">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest font-semibold text-white/80 mb-3">Message Details *</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-[#111111] border border-white/10 focus:outline-none focus:border-warm-oak/50 text-white placeholder-white/30 transition-all resize-none font-light"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "submitting"}
                  className="w-full bg-[#C19A6B] text-black py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#a67c52] transition-colors disabled:opacity-70 flex items-center justify-center gap-3 mt-4"
                >
                  {formStatus === "submitting" ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}
