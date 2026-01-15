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
    <footer id="footer" className="py-10 bg-[#171717] border-t-4 border-[#F25C23]" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-10 bg-[#4D4D4D] rounded-xl flex items-center justify-center">
<span className="text-xl font-bold text-[#DEDEDE] font-display">Z</span>
              </div>
              <span className="text-2xl font-bold text-[#DEDEDE] font-display">
                ZEN<span className="text-[#F25C23]">KO</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#DEDEDE]/80 mb-8 max-w-md text-base leading-relaxed font-sans"
            >
Empowering businesses with innovative digital solutions that transform visions into reality. We combine creativity, strategy, and cutting-edge technology to deliver exceptional results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-3"
            >
              <motion.a
                href="#"
className="w-10 h-10 bg-[#4D4D4D] rounded-xl flex items-center justify-center hover:bg-[#F25C23] hover:text-[#171717] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                data-testid="social-facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
className="w-10 h-10 bg-[#4D4D4D] rounded-xl flex items-center justify-center hover:bg-[#F25C23] hover:text-[#171717] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                data-testid="social-instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
className="w-10 h-10 bg-[#4D4D4D] rounded-xl flex items-center justify-center hover:bg-[#F25C23] hover:text-[#171717] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                data-testid="social-linkedin"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
className="w-10 h-10 bg-[#4D4D4D] rounded-xl flex items-center justify-center hover:bg-[#F25C23] hover:text-[#171717] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                data-testid="social-twitter"
              >
                <Twitter size={20} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-6 text-[#DEDEDE] text-xl font-display">Services</h4>
            <ul className="space-y-3 text-[#DEDEDE]/70 font-sans">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-business-websites"
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-ecommerce"
                >
                  E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-portfolios"
                >
                  Portfolios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-seo-marketing"
                >
                  SEO & Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-hosting-support"
                >
                  Hosting & Support
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold mb-6 text-[#DEDEDE] text-xl font-display">Quick Links</h4>
            <ul className="space-y-3 text-[#DEDEDE]/70 font-sans">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-testimonials"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
className="hover:text-[#F25C23] transition-colors text-left text-sm"
                  data-testid="footer-contact"
                >
                  Contact
                </button>
              </li>
              <li>
<a href="#" className="hover:text-[#F25C23] transition-colors text-sm" data-testid="footer-blog">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t-2 border-[#4D4D4D] mt-10 pt-6 text-center text-[#DEDEDE]/60 text-sm"
        >
          <p className="text-base font-sans">
              © 2024 <span className="text-[#F25C23] font-bold">Zenko Digital</span>. All rights reserved. Built with <span className="text-[#F25C23]">❤️</span> for the digital future.
            </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
