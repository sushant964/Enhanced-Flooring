import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CORE_VALUES = [
  "Quality",
  "Reliability",
  "Honesty",
  "Professionalism",
  "Customer Satisfaction"
];

export function About() {
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
          <img 
            src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Flooring texture" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Built on <span className="font-serif italic text-warm-oak">Quality</span> & Trust
          </h1>
          <div className="w-12 h-px bg-warm-oak mx-auto"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[#1A1A1A] overflow-hidden relative z-10 border border-white/5">
              <img 
                src="https://i.ibb.co/0pkDZ1ZZ/055f30f7713d506d4c4f529569be97d4.jpg" 
                alt="Installer working on flooring" 
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-700"
              />
            </div>
            {/* Decorative block */}
            <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border border-white/10 -z-0 hidden md:block"></div>
            <div className="absolute -top-8 -right-8 w-1/2 h-1/2 bg-[#C19A6B]/5 -z-0 hidden md:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-[10px] text-warm-oak uppercase tracking-widest mb-4 block">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Expert Craftsmanship for Every Space
            </h2>
            
            <div className="space-y-6 text-lg text-white/60 mb-10 font-light">
              <p>
                At Enhanced Flooring, we specialize in professional Luxury Vinyl Plank (LVP) flooring installations for homes, offices, and rental properties.
              </p>
              <p>
                We believe every floor should combine beauty, durability, and expert craftsmanship. Our commitment to quality work, fair pricing, and customer satisfaction has made us a trusted choice for flooring projects of all sizes.
              </p>
              <p>
                Whether you're renovating one room or an entire property, we're here to deliver flooring you'll be proud of.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-sm uppercase tracking-widest font-semibold mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {CORE_VALUES.map((value, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-[#C19A6B] shrink-0"></div>
                    <span className="font-light text-white/80">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#C19A6B] text-black px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#a67c52] transition-colors"
            >
              Start Your Project
            </Link>
          </motion.div>

        </div>
      </section>

    </motion.div>
  );
}
