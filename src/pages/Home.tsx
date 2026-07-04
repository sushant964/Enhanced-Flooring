import { Link } from "react-router-dom";
import { CheckCircle2, ChevronRight, Star, ShieldCheck, Wrench, Home as HomeIcon } from "lucide-react";
import { motion } from "motion/react";

const HIGHLIGHTS = [
  "LVP Flooring Specialists",
  "Homes • Offices • Rentals",
  "Quality Workmanship",
  "Fair & Honest Pricing",
];

const PROCESS_STEPS = [
  { num: "01", title: "Free Consultation", desc: "We discuss your needs, budget, and timeline to find the perfect flooring solution." },
  { num: "02", title: "Measure & Plan", desc: "Accurate measurements and precise planning to ensure minimal waste and flawless execution." },
  { num: "03", title: "Professional Installation", desc: "Our experienced team installs your new floors with meticulous attention to detail." },
  { num: "04", title: "Final Inspection", desc: "We walk through the finished project with you to guarantee 100% satisfaction." },
];

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full"
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden border-b border-white/10">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern LVP Flooring" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8"
            >
              Quality Floors.<br/>
              <span className="text-[#C19A6B] italic font-serif">Fair Pricing.</span><br/>
              Lasting Results.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed font-light"
            >
              Professional Luxury Vinyl Plank (LVP) flooring installation for homes, offices, and rental properties. We deliver clean workmanship, dependable service, and floors built to last.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/contact"
                className="bg-[#C19A6B] text-black font-bold uppercase tracking-widest text-xs px-10 py-5 hover:bg-[#a67c52] transition-colors flex justify-center items-center gap-2"
              >
                Get a Free Quote
                <ChevronRight size={16} />
              </Link>
              <a
                href="tel:+12083393627"
                className="border border-white/30 text-white uppercase tracking-widest text-xs px-10 py-5 hover:bg-white/5 transition-all flex justify-center items-center"
              >
                Call Now
              </a>
            </motion.div>

            {/* Highlights */}
            <motion.div 
              initial={{ opacity: 0, mt: 40 }}
              animate={{ opacity: 1, mt: 40 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-4 mt-16 max-w-2xl border-t border-white/10 pt-8"
            >
              {HIGHLIGHTS.map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <div className="w-1 h-1 bg-[#C19A6B] shrink-0"></div>
                  <span className="text-xs uppercase tracking-widest font-light">{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#111111] relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] text-warm-oak uppercase tracking-widest mb-4 block">The Enhanced Difference</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Why Choose <span className="font-serif italic text-warm-oak">Enhanced</span> Flooring?</h2>
            <div className="w-12 h-px bg-warm-oak mx-auto mb-6"></div>
            <p className="text-lg text-white/60 font-light">We don't just lay planks; we craft foundations for your life. Our commitment to excellence sets us apart in every project we undertake.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: ShieldCheck, title: "Professional Installation", desc: "Expert technicians trained in the latest LVP installation techniques." },
              { icon: CheckCircle2, title: "Attention to Detail", desc: "Flawless edges, seamless transitions, and perfectly aligned patterns." },
              { icon: Star, title: "Affordable Pricing", desc: "Premium quality without the premium price tag. Honest quotes always." },
              { icon: Wrench, title: "Reliable Service", desc: "We show up on time, work efficiently, and respect your property." },
              { icon: HomeIcon, title: "Premium Materials", desc: "We work with top-tier LVP brands that stand the test of time." },
              { icon: Star, title: "Customer Satisfaction", desc: "Your happiness is our priority. We don't consider the job done until you love it." }
            ].map((feature, i) => (
              <div key={i} className="bg-[#1A1A1A] border border-white/5 p-8 flex flex-col justify-between group hover:border-warm-oak/30 transition-all duration-300">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-warm-oak/10 transition-all duration-300 text-warm-oak">
                  <feature.icon size={20} />
                </div>
                <div>
                  <h3 className="text-lg uppercase tracking-wider font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-[#111111] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-[10px] text-warm-oak uppercase tracking-widest mb-4 block">Simple & Transparent</span>
            <h2 className="text-4xl md:text-5xl font-light mb-6">Our Process</h2>
            <div className="w-12 h-px bg-warm-oak mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center p-6 border border-white/5 bg-[#1A1A1A] hover:border-warm-oak/30 transition-colors">
                <div className="w-12 h-12 flex items-center justify-center mb-6 text-warm-oak border border-white/10 text-xs font-bold font-serif">
                  {step.num}
                </div>
                <h3 className="text-sm uppercase tracking-widest font-semibold mb-3">{step.title}</h3>
                <p className="text-white/60 font-light text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-[#C19A6B] text-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif italic mb-8">Ready for Beautiful New Floors?</h2>
          <p className="text-black/70 text-lg mb-10 max-w-2xl mx-auto font-medium">Transform your space with premium flooring installed by experts. Get in touch today for a transparent, no-obligation estimate.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-black/80 transition-colors"
          >
            Request Your Free Quote
            <ChevronRight size={16} />
          </Link>
        </div>
      </section>

    </motion.div>
  );
}
