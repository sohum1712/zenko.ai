import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* CTA Section */}
      <section className="py-24 bg-[#11120D] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#565449]/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#FFFBF4] leading-tight mb-6">
              Ready to Transform Your <span className="text-[#D8CFBC]">Business</span>?
            </h2>
            <p className="text-[#D8CFBC] text-xl mb-10 font-sans">
              Join hundreds of successful businesses that chose Zenko for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#D8CFBC] text-[#11120D] px-8 py-4 rounded-full font-bold text-lg font-sans hover:bg-[#FFFBF4] transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#565449] text-[#FFFBF4] px-8 py-4 rounded-full font-bold text-lg font-sans hover:border-[#D8CFBC] hover:text-[#D8CFBC] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Schedule Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#11120D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#565449]/30 rounded-full border border-[#565449] mb-6">
              <span className="w-2 h-2 bg-[#D8CFBC] rounded-full"></span>
              <span className="text-[#D8CFBC] text-sm font-medium tracking-wide">CONTACT US</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black text-[#FFFBF4] leading-tight mb-6">
              Let's Build Something <span className="text-[#D8CFBC]">Amazing</span>
            </h2>
            <p className="text-[#D8CFBC] text-lg max-w-2xl mx-auto font-sans">
              Ready to take your business online? Get in touch with our team and let's discuss your project!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#565449]/20 border border-[#565449]/50 p-8"
            >
              <h3 className="text-2xl font-display font-bold text-[#FFFBF4] mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#D8CFBC] font-sans">Full Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className="rounded-xl bg-[#565449] text-[#FFFBF4] border-[#565449] placeholder:text-[#D8CFBC]/50 focus:border-[#D8CFBC]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#D8CFBC] font-sans">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="rounded-xl bg-[#565449] text-[#FFFBF4] border-[#565449] placeholder:text-[#D8CFBC]/50 focus:border-[#D8CFBC]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#D8CFBC] font-sans">Project Details</label>
                  <Textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project requirements"
                    className="rounded-xl resize-none bg-[#565449] text-[#FFFBF4] border-[#565449] placeholder:text-[#D8CFBC]/50 focus:border-[#D8CFBC]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold bg-[#D8CFBC] text-[#11120D] hover:bg-[#FFFBF4] transition-all duration-300"
                >
                  <Send className="mr-2" size={20} />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="rounded-3xl bg-[#565449]/20 border border-[#565449]/50 p-8 hover:border-[#D8CFBC]/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#D8CFBC] rounded-2xl flex items-center justify-center">
                    <Phone className="text-[#11120D]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#FFFBF4]">Call Us</h4>
                    <p className="text-[#D8CFBC]">+91 98765 43210</p>
                  </div>
                </div>
                <p className="text-[#D8CFBC] text-sm font-sans">
                  Available 24/7 for urgent support and consultations
                </p>
              </div>

              <div className="rounded-3xl bg-[#565449]/20 border border-[#565449]/50 p-8 hover:border-[#D8CFBC]/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#565449] rounded-2xl flex items-center justify-center border border-[#D8CFBC]/50">
                    <Mail className="text-[#D8CFBC]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#FFFBF4]">Email Us</h4>
                    <p className="text-[#D8CFBC]">hello@zenko.com</p>
                  </div>
                </div>
                <p className="text-[#D8CFBC] text-sm font-sans">
                  Send detailed project requirements and get comprehensive proposals
                </p>
              </div>

              <div className="rounded-3xl bg-[#565449]/20 border border-[#565449]/50 p-8 hover:border-[#D8CFBC]/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-[#D8CFBC] rounded-2xl flex items-center justify-center">
                    <MapPin className="text-[#11120D]" size={24} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[#FFFBF4]">Visit Us</h4>
                    <p className="text-[#D8CFBC]">Ahmedabad, Gujarat</p>
                  </div>
                </div>
                <p className="text-[#D8CFBC] text-sm font-sans">
                  Schedule an in-person meeting to discuss your project in detail
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
