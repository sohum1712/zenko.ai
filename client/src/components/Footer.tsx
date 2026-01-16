import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-16 bg-[#11120D] border-t border-[#565449]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-[#D8CFBC] rounded-xl flex items-center justify-center">
                <span className="text-xl font-display font-black text-[#11120D]">Z</span>
              </div>
              <span className="text-2xl font-display font-black text-[#FFFBF4]">
                ZEN<span className="text-[#D8CFBC]">KO</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#D8CFBC] mb-8 max-w-md text-base leading-relaxed font-sans"
            >
              Empowering businesses with innovative digital solutions that transform visions into reality. We combine creativity, strategy, and cutting-edge technology.
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
                  className="w-10 h-10 bg-[#565449]/50 rounded-xl flex items-center justify-center hover:bg-[#D8CFBC] text-[#D8CFBC] hover:text-[#11120D] transition-all duration-300"
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
            <h4 className="font-display font-bold mb-6 text-[#FFFBF4] text-lg">Services</h4>
            <ul className="space-y-3 text-[#D8CFBC] font-sans">
              {['Business Websites', 'E-commerce', 'Portfolios', 'SEO & Marketing', 'Hosting & Support'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-[#FFFBF4] transition-colors text-left text-sm"
                  >
                    {item}
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
            <h4 className="font-display font-bold mb-6 text-[#FFFBF4] text-lg">Quick Links</h4>
            <ul className="space-y-3 text-[#D8CFBC] font-sans">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-[#FFFBF4] transition-colors text-left text-sm"
                  >
                    {item.label}
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
          className="border-t border-[#565449] mt-12 pt-8 text-center text-[#D8CFBC] text-sm font-sans"
        >
          <p>
            © 2024 <span className="text-[#FFFBF4] font-bold">Zenko Digital</span>. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
