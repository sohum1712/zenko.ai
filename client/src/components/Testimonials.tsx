import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      role: 'Electronics Store Owner',
      initials: 'RP',
      testimonial: "Zenko transformed my electronics business completely. Their e-commerce solution increased my online sales by 300% within just 3 months. The team's attention to detail has been exceptional.",
    },
    {
      name: 'Priya Shah',
      role: 'Professional Photographer',
      initials: 'PS',
      testimonial: "My portfolio website created by Zenko is absolutely stunning. It perfectly showcases my photography work with elegant galleries. I've booked 40% more shoots since launch.",
    },
    {
      name: 'Arjun Mehta',
      role: 'Restaurant Owner',
      initials: 'AM',
      testimonial: "The online ordering system and digital marketing strategy Zenko developed improved our restaurant's revenue by 250%. Their mobile-optimized website brought in countless new customers.",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#11120D] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-dots opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#565449]/30 rounded-full border border-[#565449] mb-6">
            <span className="w-2 h-2 bg-[#D8CFBC] rounded-full"></span>
            <span className="text-[#D8CFBC] text-sm font-medium tracking-wide">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#FFFBF4] leading-tight mb-6">
            What Our <span className="text-[#D8CFBC]">Clients</span> Say
          </h2>
          <p className="text-[#D8CFBC] text-lg max-w-2xl mx-auto font-sans">
            Real success stories from businesses that transformed their digital presence with our solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 border transition-all duration-300 hover-lift ${
                idx === 1 
                  ? 'bg-[#D8CFBC] border-[#D8CFBC] lg:-mt-8 lg:mb-8' 
                  : 'bg-[#565449]/20 border-[#565449]/50 hover:border-[#D8CFBC]/50'
              }`}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                  idx === 1 ? 'bg-[#11120D]' : 'bg-[#D8CFBC]'
                }`}>
                  <span className={`text-2xl font-display font-black ${
                    idx === 1 ? 'text-[#D8CFBC]' : 'text-[#11120D]'
                  }`}>
                    {item.initials}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={`fill-current ${idx === 1 ? 'text-[#11120D]' : 'text-[#D8CFBC]'}`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className={`text-center text-base leading-relaxed mb-6 font-sans ${
                idx === 1 ? 'text-[#11120D]' : 'text-[#D8CFBC]'
              }`}>
                "{item.testimonial}"
              </p>
              
              {/* Author */}
              <div className={`text-center pt-6 border-t ${
                idx === 1 ? 'border-[#11120D]/20' : 'border-[#565449]'
              }`}>
                <p className={`font-display font-bold text-lg ${
                  idx === 1 ? 'text-[#11120D]' : 'text-[#FFFBF4]'
                }`}>
                  {item.name}
                </p>
                <p className={`text-sm font-sans ${
                  idx === 1 ? 'text-[#565449]' : 'text-[#D8CFBC]'
                }`}>
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
