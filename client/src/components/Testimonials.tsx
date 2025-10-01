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
      role: 'Electronics Owner',
      initials: 'RP',
      testimonial: "Zenko transformed my business...",
    },
    {
      name: 'Priya Shah',
      role: 'Photographer',
      initials: 'PS',
      testimonial: "My portfolio website is stunning...",
    },
    {
      name: 'Arjun Mehta',
      role: 'Restaurant Owner',
      initials: 'AM',
      testimonial: "The online ordering system improved...",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-[#1b1b1b] min-h-[60vh]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-[#d9d917] px-2 rounded text-black">What Our Clients Say</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Real stories from real businesses...
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl shadow-lg p-8 flex-1 ${cardBgColors[idx]} ${idx === 1 ? 'z-10' : ''}`}
              style={idx === 1 ? { marginTop: '-2rem' } : {}}
            >
              {/* Avatar */}
              <div className={`absolute -top-14 left-1/2 transform -translate-x-1/2`}>
                <div className={`w-28 h-28 rounded-full border-4 flex items-center justify-center shadow-lg ${avatarBgColors[idx]}`}>
                  <span className={`text-5xl font-bold ${idx === 1 ? "bg-white text-[#111ac3] px-3 py-2 rounded-full" : "text-[#232323]"}`}>{item.initials}</span>
                </div>
              </div>
              {/* Stars */}
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} className={`text-yellow-400`} />
                ))}
              </div>
              {/* Name and role */}
              <div className="text-center mb-2">
                <div className={`font-extrabold text-xl ${idx === 1 ? "text-white" : "text-gray-100"}`}>{item.name}</div>
                <div className={`text-sm font-semibold ${idx === 1 ? "text-indigo-300" : "text-gray-400"}`}>{item.role}</div>
              </div>
              {/* Quote mark */}
              <div className={`flex justify-center mb-2`}>
                <svg height={32} width={32} fill={idx === 1 ? '#fff' : '#d9d917'}>
                  <text x="6" y="28" fontSize={32} fontWeight="bold">“</text>
                </svg>
              </div>
              <p className={`text-center text-sm ${idx === 1 ? "text-indigo-200" : "text-gray-400"}`}>{item.testimonial}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
