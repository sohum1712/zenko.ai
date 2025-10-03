import React from 'react';

import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const avatarBgColors = [
  'bg-[#e0f1ff] border-[#4ba8ff]',
  'bg-[#4777f1] border-[#80bef7]',
  'bg-[#d7d9df] border-[#bbbbbb]',
];

const cardBgColors = [
  'bg-[#242424] text-white',
  'bg-[#111ac3] text-white',
  'bg-[#242424] text-white',
];

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      role: 'Electronics Store Owner',
      initials: 'RP',
      testimonial: "Zenko transformed my electronics business completely. Their e-commerce solution increased my online sales by 300% within just 3 months. The team's attention to detail and ongoing support has been exceptional.",
    },
    {
      name: 'Priya Shah',
      role: 'Professional Photographer',
      initials: 'PS',
      testimonial: "My portfolio website created by Zenko is absolutely stunning. It perfectly showcases my photography work with elegant galleries and smooth animations. Clients are constantly impressed, and I've booked 40% more shoots since launch.",
    },
    {
      name: 'Arjun Mehta',
      role: 'Restaurant Owner',
      initials: 'AM',
      testimonial: "The online ordering system and digital marketing strategy Zenko developed improved our restaurant's revenue by 250%. Their mobile-optimized website and social media campaigns brought in countless new customers.",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#1b1b1b] relative overflow-hidden">
      {/* Background decoration */}
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-8 bg-[#D1FF00] rounded-full flex items-center justify-center animate-pulse">
              <span className="block w-3 h-3 bg-black rounded-full"></span>
            </div>
            <span className="uppercase text-sm font-bold tracking-widest text-[#D1FF00]">TESTIMONIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            What Our <span className="text-[#D1FF00]">Clients</span> Say
          </h2>
          <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
            Real success stories from businesses that transformed their digital presence with our innovative solutions.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl shadow-xl p-8 border-2 hover-lift group transition-all duration-300 ${
                cardBgColors[idx]
              } ${
                idx === 1 
                  ? 'border-[#D1FF00] lg:-mt-8 lg:mb-8 neon-glow-blue z-10' 
                  : 'border-transparent hover:border-[#D1FF00]/30'
              }`}
            >
              {/* Avatar */}
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
                <div className={`w-32 h-32 rounded-full border-4 flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 ${
                  idx === 1 
                    ? 'bg-[#D1FF00] border-white shadow-[#D1FF00]/50' 
                    : 'bg-[#242424] border-[#D1FF00] shadow-black/50'
                }`}>
                  <span className={`text-3xl font-black ${
                    idx === 1 ? 'text-[#111ac3]' : 'text-[#D1FF00]'
                  }`}>
                    {item.initials}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="pt-20">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={24} 
                      className="text-[#D1FF00] fill-current mx-1 animate-pulse" 
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </div>
                
                {/* Quote */}
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <svg width="48" height="36" viewBox="0 0 48 36" className="mx-auto opacity-50">
                      <path 
                        d="M10 0C4.5 0 0 4.5 0 10v16c0 5.5 4.5 10 10 10h8c5.5 0 10-4.5 10-10v-8c0-5.5-4.5-10-10-10h-8v-8z M38 0C32.5 0 28 4.5 28 10v16c0 5.5 4.5 10 10 10h8c5.5 0 10-4.5 10-10v-8c0-5.5-4.5-10-10-10h-8v-8z" 
                        fill={idx === 1 ? '#D1FF00' : '#D1FF00'}
                        opacity="0.3"
                      />
                    </svg>
                  </div>
                  <p className={`text-center text-base leading-relaxed italic ${
                    idx === 1 ? 'text-white' : 'text-white/90'
                  }`}>
                    {item.testimonial}
                  </p>
                </div>
                
                {/* Author info */}
                <div className="text-center border-t border-white/10 pt-6">
                  <div className={`font-black text-xl mb-1 ${idx === 1 ? 'text-white' : 'text-white'}`}>
                    {item.name}
                  </div>
                  <div className={`text-sm font-medium ${idx === 1 ? 'text-[#D1FF00]' : 'text-[#D1FF00]/80'}`}>
                    {item.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
