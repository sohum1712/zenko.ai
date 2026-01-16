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
      <section className="py-20 md:py-28 bg-[#1a1a2e] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4d8af0]/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Ready to Transform Your <span className="text-[#4d8af0]">Business</span>?
            </h2>
            <p className="text-white/70 text-base md:text-xl mb-8 md:mb-10" style={{ fontFamily: "'Inter', sans-serif" }}>
              Join hundreds of successful businesses that chose Zenko for their digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#4d8af0] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg hover:bg-[#3b7ae0] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg hover:border-[#4d8af0] hover:text-[#4d8af0] transition-all duration-300"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Schedule Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-[#f8fbfe]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4d8af0]/10 rounded-full border border-[#4d8af0]/20 mb-6">
              <span className="w-2 h-2 bg-[#4d8af0] rounded-full"></span>
              <span className="text-[#4d8af0] text-sm font-medium tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>CONTACT US</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#1a1a2e] leading-tight mb-6" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              Let's Build Something <span className="text-[#4d8af0]">Amazing</span>
            </h2>
            <p className="text-[#6b7280] text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
              Ready to take your business online? Get in touch with our team and let's discuss your project!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl md:rounded-3xl bg-white border border-gray-100 p-6 md:p-8 shadow-sm"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-[#1a1a2e] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>Full Name</label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Your name"
                    className="rounded-xl bg-[#f8fbfe] text-[#1a1a2e] border-gray-200 placeholder:text-[#9ca3af] focus:border-[#4d8af0] focus:ring-[#4d8af0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 98765 43210"
                    className="rounded-xl bg-[#f8fbfe] text-[#1a1a2e] border-gray-200 placeholder:text-[#9ca3af] focus:border-[#4d8af0] focus:ring-[#4d8af0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>Project Details</label>
                  <Textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project requirements"
                    className="rounded-xl resize-none bg-[#f8fbfe] text-[#1a1a2e] border-gray-200 placeholder:text-[#9ca3af] focus:border-[#4d8af0] focus:ring-[#4d8af0]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-3 md:py-4 rounded-xl font-medium bg-[#4d8af0] text-white hover:bg-[#3b7ae0] transition-all duration-300 shadow-lg shadow-blue-200/50"
                >
                  <Send className="mr-2" size={18} />
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
              className="space-y-4 md:space-y-6"
            >
              <div className="rounded-2xl md:rounded-3xl bg-white border border-gray-100 p-6 md:p-8 hover:border-[#4d8af0]/30 transition-colors shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4d8af0] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50">
                    <Phone className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e]" style={{ fontFamily: "'Inter', sans-serif" }}>Call Us</h4>
                    <p className="text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>+91 98765 43210</p>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Available 24/7 for urgent support and consultations
                </p>
              </div>

              <div className="rounded-2xl md:rounded-3xl bg-white border border-gray-100 p-6 md:p-8 hover:border-[#4d8af0]/30 transition-colors shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#e8f4fc] rounded-xl md:rounded-2xl flex items-center justify-center border border-[#4d8af0]/20">
                    <Mail className="text-[#4d8af0]" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e]" style={{ fontFamily: "'Inter', sans-serif" }}>Email Us</h4>
                    <p className="text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>hello@zenko.com</p>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Send detailed project requirements and get comprehensive proposals
                </p>
              </div>

              <div className="rounded-2xl md:rounded-3xl bg-white border border-gray-100 p-6 md:p-8 hover:border-[#4d8af0]/30 transition-colors shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4d8af0] rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200/50">
                    <MapPin className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a2e]" style={{ fontFamily: "'Inter', sans-serif" }}>Visit Us</h4>
                    <p className="text-[#6b7280]" style={{ fontFamily: "'Inter', sans-serif" }}>Ahmedabad, Gujarat</p>
                  </div>
                </div>
                <p className="text-[#6b7280] text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
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
