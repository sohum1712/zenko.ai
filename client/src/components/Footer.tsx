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
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Zenko</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-muted-foreground mb-6 max-w-md"
            >
              Empowering businesses with modern web solutions that drive growth and success in the digital age.
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
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                data-testid="social-facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                data-testid="social-instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                whileHover={{ scale: 1.1 }}
                data-testid="social-linkedin"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
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
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-foreground transition-colors text-left"
                  data-testid="footer-business-websites"
                >
                  Business Websites
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-foreground transition-colors text-left"
                  data-testid="footer-ecommerce"
                >
                  E-commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-foreground transition-colors text-left"
                  data-testid="footer-portfolios"
                >
                  Portfolios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-foreground transition-colors text-left"
                  data-testid="footer-seo-marketing"
                >
                  SEO & Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-foreground transition-colors text-left"
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
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-foreground transition-colors text-left"
                  data-testid="footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="hover:text-foreground transition-colors text-left"
                  data-testid="footer-portfolio"
                >
                  Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="hover:text-foreground transition-colors text-left"
                  data-testid="footer-testimonials"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-foreground transition-colors text-left"
                  data-testid="footer-contact"
                >
                  Contact
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors" data-testid="footer-blog">
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
          className="border-t border-border mt-12 pt-8 text-center text-muted-foreground"
        >
          <p>
            © 2024 Zenko. All rights reserved. Built with ❤️ for digital future.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
