import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import TranslatedText from './TranslatedText';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-12 md:py-16 bg-[#1a1a2e] border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-5 md:mb-6"
              >
                  <img src="/Zenko.svg" alt="Zenko Digital" className="w-8 h-8 md:w-10 md:h-10 object-contain brightness-0 invert" />
              </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/60 mb-6 md:mb-8 max-w-md text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              <TranslatedText>Empowering businesses with innovative digital solutions that transform visions into reality. We combine creativity, strategy, and cutting-edge technology.</TranslatedText>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex gap-3"
            >
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 md:w-10 md:h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-[#4d8af0] text-white/60 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-5 md:mb-6 text-white text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              <TranslatedText>Services</TranslatedText>
            </h4>
            <ul className="space-y-2 md:space-y-3 text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
              {['Business Websites', 'E-commerce', 'Portfolios', 'SEO & Marketing', 'Hosting & Support'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-[#4d8af0] transition-colors text-left text-sm"
                  >
                    <TranslatedText>{item}</TranslatedText>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-5 md:mb-6 text-white text-base md:text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              <TranslatedText>Quick Links</TranslatedText>
            </h4>
            <ul className="space-y-2 md:space-y-3 text-white/60" style={{ fontFamily: "'Inter', sans-serif" }}>
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-[#4d8af0] transition-colors text-left text-sm"
                  >
                    <TranslatedText>{item.label}</TranslatedText>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-10 md:mt-12 pt-6 md:pt-8 text-center text-white/60 text-sm"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <p>
            © 2024 <span className="text-white font-semibold">Zenko Digital</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
