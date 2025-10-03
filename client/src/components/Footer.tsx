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
    <footer id="footer" className="py-16 bg-[#1b1b1b] border-t-4 border-[#D1FF00]" role="contentinfo">
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
              <div className="w-12 h-12 bg-gradient-to-br from-[#111ac3] to-[#D1FF00] rounded-xl flex items-center justify-center neon-glow">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              <span className="text-3xl font-bold text-white">
                ZEN<span className="text-[#D1FF00]">KO</span>
              </span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-white/80 mb-8 max-w-md text-base leading-relaxed"
            >
Empowering businesses with innovative digital solutions that transform visions into reality. We combine creativity, strategy, and cutting-edge technology to deliver exceptional results.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              <motion.a
                href="#"
                className="w-12 h-12 bg-[#242424] rounded-xl flex items-center justify-center hover:bg-[#D1FF00] hover:text-black transition-all duration-300 transform hover:scale-110 neon-glow"
                whileHover={{ scale: 1.1 }}
                data-testid="social-facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-[#242424] rounded-xl flex items-center justify-center hover:bg-[#D1FF00] hover:text-black transition-all duration-300 transform hover:scale-110 neon-glow"
                whileHover={{ scale: 1.1 }}
                data-testid="social-instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-[#242424] rounded-xl flex items-center justify-center hover:bg-[#D1FF00] hover:text-black transition-all duration-300 transform hover:scale-110 neon-glow"
                whileHover={{ scale: 1.1 }}
                data-testid="social-linkedin"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-12 h-12 bg-[#242424] rounded-xl flex items-center justify-center hover:bg-[#D1FF00] hover:text-black transition-all duration-300 transform hover:scale-110 neon-glow"
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
            <h4 className="font-bold mb-6 text-white text-xl">Services</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
                  data-testid="footer-business-websites"
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
                  data-testid="footer-ecommerce"
                >
                  E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
                  data-testid="footer-portfolios"
                >
                  Portfolios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
                  data-testid="footer-seo-marketing"
                >
                  SEO & Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
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
            <h4 className="font-bold mb-6 text-white text-xl">Quick Links</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
                  data-testid="footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
                  data-testid="footer-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
                  data-testid="footer-testimonials"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-[#D1FF00] transition-colors text-left text-sm"
                  data-testid="footer-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-[#D1FF00] transition-colors text-sm" data-testid="footer-blog">
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
          className="border-t-2 border-[#D1FF00]/30 mt-16 pt-8 text-center text-white/60"
        >
          <p className="text-base">
            © 2024 <span className="text-[#D1FF00] font-bold">Zenko Digital</span>. All rights reserved. Built with <span className="text-[#D1FF00]">❤️</span> for the digital future.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
