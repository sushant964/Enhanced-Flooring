import { motion } from "motion/react";
import { Hammer, Home, Briefcase, Key, RefreshCcw, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  {
    title: "LVP Flooring Installation",
    desc: "Beautiful, durable flooring installed with precision. We handle subfloor prep, laying the planks, and installing trim for a flawless finish.",
    icon: Hammer,
    img: "https://i.ibb.co/F4T2vjfK/b50302aeefc9d98d9211ab147785534c.jpg"
  },
  {
    title: "Residential Flooring",
    desc: "Upgrade your home with stylish, long-lasting floors. From living rooms to kitchens, we provide flooring that withstands daily family life.",
    icon: Home,
    img: "https://i.ibb.co/dwKFYQc2/688d38de3eb03bfe63bc0098b43721ce.jpg"
  },
  {
    title: "Office Flooring",
    desc: "Professional flooring solutions for commercial spaces. Impress clients and create a comfortable environment for your team.",
    icon: Briefcase,
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Rental Property Flooring",
    desc: "Durable flooring designed for high-traffic rental properties. We offer solutions that look great and minimize maintenance costs.",
    icon: Key,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Floor Replacement",
    desc: "Replace old flooring with modern, high-quality materials. We handle the tear-out, disposal, and installation of your new floors.",
    icon: RefreshCcw,
    img: "https://i.ibb.co/v4mrG5V5/273994e5dc30c704854319f3ea75f4cd.jpg"
  },
  {
    title: "Flooring Repairs",
    desc: "Restore damaged flooring and extend its life. From scratches to water damage, we can fix localized issues seamlessly.",
    icon: Wrench,
    img: "https://i.ibb.co/hxVtFZgT/69ad3f33123b28b4bd34cfa1bb226cfc.jpg"
  }
];

export function Services() {
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
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Flooring detail" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            Our Flooring <span className="font-serif italic text-warm-oak">Services</span>
          </h1>
          <div className="w-12 h-px bg-warm-oak mx-auto"></div>
          <p className="mt-6 text-white/60 font-light text-lg max-w-2xl mx-auto">
            Comprehensive solutions for every space, executed with precision and care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {SERVICES.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1A1A1A] border border-white/5 overflow-hidden transition-all duration-300 group flex flex-col h-full hover:border-warm-oak/30"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#0F0F0F] border border-white/10 flex items-center justify-center">
                    <service.icon className="text-warm-oak" size={18} />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-xl font-light tracking-wide mb-4 group-hover:text-warm-oak transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/60 font-light mb-6 flex-1 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="w-full h-px bg-white/5 mb-6"></div>
                  <Link to="/contact" className="text-warm-oak text-xs uppercase tracking-widest font-bold hover:text-white transition-colors flex items-center gap-2 mt-auto">
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#111111] text-center px-4 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-6">Not sure which service you need?</h2>
          <p className="text-white/60 font-light text-lg mb-10">Schedule a free consultation and let our experts guide you to the perfect flooring solution.</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#C19A6B] text-black px-10 py-5 text-xs font-bold uppercase tracking-widest hover:bg-[#a67c52] transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

    </motion.div>
  );
}
