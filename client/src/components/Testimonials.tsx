import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import TranslatedText from './TranslatedText';

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
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4d8af0]/10 rounded-full border border-[#4d8af0]/20 mb-6">
            <span className="w-2 h-2 bg-[#4d8af0] rounded-full"></span>
            <span className="text-[#4d8af0] text-sm font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              <TranslatedText>TESTIMONIALS</TranslatedText>
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a2e] leading-tight mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
            <TranslatedText>What Our</TranslatedText> <span className="text-[#4d8af0]"><TranslatedText>Clients</TranslatedText></span> <TranslatedText>Say</TranslatedText>
          </h2>
          <p className="text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            <TranslatedText>Real success stories from businesses that transformed their digital presence with our solutions.</TranslatedText>
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl md:rounded-3xl p-6 md:p-8 border transition-all duration-300 ${
                idx === 1 
                  ? 'bg-[#4d8af0] border-[#4d8af0] lg:-mt-4 lg:mb-4 shadow-xl shadow-blue-200/50' 
                  : 'bg-[#f8fbfe] border-gray-100 hover:border-[#4d8af0]/30 hover:shadow-lg'
              }`}
            >
              {/* Avatar */}
              <div className="flex justify-center mb-5 md:mb-6">
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center ${
                  idx === 1 ? 'bg-white' : 'bg-[#4d8af0]'
                }`}>
                  <span className={`text-xl md:text-2xl font-bold ${
                    idx === 1 ? 'text-[#4d8af0]' : 'text-white'
                  }`} style={{ fontFamily: "'Inter', sans-serif" }}>
                    {item.initials}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5 md:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    className={`fill-current ${idx === 1 ? 'text-white' : 'text-[#4d8af0]'}`}
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className={`text-center text-sm md:text-base leading-relaxed mb-5 md:mb-6 ${
                idx === 1 ? 'text-white' : 'text-[#6b7280]'
              }`} style={{ fontFamily: "'Inter', sans-serif" }}>
                "{item.testimonial}"
              </p>
              
              {/* Author */}
              <div className={`text-center pt-5 md:pt-6 border-t ${
                idx === 1 ? 'border-white/20' : 'border-gray-200'
              }`}>
                <p className={`font-semibold text-base md:text-lg ${
                  idx === 1 ? 'text-white' : 'text-[#1a1a2e]'
                }`} style={{ fontFamily: "'Inter', sans-serif" }}>
                  {item.name}
                </p>
                <p className={`text-sm ${
                  idx === 1 ? 'text-white/70' : 'text-[#6b7280]'
                }`} style={{ fontFamily: "'Inter', sans-serif" }}>
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
