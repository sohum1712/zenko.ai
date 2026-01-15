import React, { useState } from 'react';

import { Phone, Mail, MapPin, Send, Video, MessageCircle, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    setFormData({
      name: '',
      phone: '',
      message: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* CTA Section */}
      <section className="relative py-20 bg-[#01583F] overflow-hidden rounded-t-[4rem] min-h-[60vh]">
        <div className="absolute -top-20 -right-28 w-[500px] h-[500px] rounded-full bg-[#CDF546] opacity-20 blur-[120px]"></div>
        <div className="relative container mx-auto px-6 text-center z-10 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold mb-6 text-[#FDF9DC] tracking-tight font-display"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-[#CDF546] mb-12 max-w-3xl mx-auto font-sans"
            >
            Join hundreds of successful businesses that chose Zenko for their digital transformation journey
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#F56013] hover:opacity-90 text-[#01583F] px-10 py-4 rounded-full text-xl font-semibold font-sans transition-all duration-300 shadow-xl hover:shadow-2xl group flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="cta-free-quote-now"
              >
                <Gift size={24} className="text-[#01583F]" />
                Get Free Quote Now
              </motion.button>
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#1A6950] hover:opacity-90 text-[#CDF546] px-10 py-4 rounded-full text-xl font-semibold font-sans transition-all duration-300 shadow-xl hover:shadow-2xl group flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="cta-schedule-call"
              >
              <Phone size={24} className="text-[#CDF546]" />
              Schedule Call
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-[#CDF546] font-medium"
          >
            <p>💰 No upfront costs • 🚀 Fast delivery • 🎯 Guaranteed results</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#01583F]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#FDF9DC] font-display">
                  Let's Build Something Amazing Together
                </h2>
                <p className="text-xl text-[#FDF9DC] max-w-3xl mx-auto font-sans">
                Ready to take your business online? Get in touch with our team and let's discuss your project!
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="floating-card bg-[#01583F] rounded-2xl border border-[#1A6950]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-[#CDF546] font-display">
                        Send us a message
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2 text-[#CDF546] font-sans">
                            Full Name
                          </label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder='Your name'
                            className="rounded-xl bg-[#1A6950] text-[#FDF9DC] border-[#1A6950]"
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2 text-[#CDF546] font-sans">
                              Phone Number (WhatsApp)
                            </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className="rounded-xl bg-[#1A6950] text-[#FDF9DC] border-[#1A6950]"
                            data-testid="input-phone"
                          />
                        </div>
                      </div>
                      <div>
                          <label className="block text-sm font-medium mb-2 text-[#CDF546] font-sans">
                            Project Details
                          </label>
                        <Textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder='Tell us about your project requirements'
                          className="rounded-xl resize-none bg-[#1A6950] text-[#FDF9DC] border-[#1A6950]"
                          data-testid="textarea-message"
                        />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Button
                          type="submit"
                          className="w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group bg-[#F56013] text-[#01583F] hover:bg-[#CDF546]"
                          data-testid="button-send-message"
                        >
                          <Send className="mr-2" size={20} />
                          Request Callback
                        </Button>
                        <a
                          href={`https://wa.me/919000000000?text=${encodeURIComponent('Hi Zenko team, I need help with a website.')}`}
                          className="w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group bg-[#1A6950] text-[#CDF546] text-center flex items-center justify-center"
                          target="_blank" rel="noreferrer"
                        >
                          WhatsApp Us
                        </a>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Contact Cards */}
                <Card className="floating-card bg-[#01583F] rounded-3xl border border-[#1A6950] text-[#FDF9DC]">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#F56013] rounded-2xl flex items-center justify-center mr-4">
                        <Phone className="text-[#01583F]" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#CDF546]">Call Us</h4>
                        <p className="text-[#FDF9DC]">+91 98765 43210</p>
                      </div>
                    </div>
                    <p className="text-[#FDF9DC]">
                      Available 24/7 for urgent support and consultations
                    </p>
                  </CardContent>
                </Card>
                <Card className="floating-card bg-[#01583F] rounded-3xl border border-[#1A6950] text-[#FDF9DC]">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#1A6950] rounded-2xl flex items-center justify-center mr-4">
                        <Mail className="text-[#CDF546]" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#CDF546]">Email Us</h4>
                        <p className="text-[#FDF9DC]">hello@zenko.com</p>
                      </div>
                    </div>
                    <p className="text-[#FDF9DC]">
                      Send detailed project requirements and get comprehensive proposals
                    </p>
                  </CardContent>
                </Card>
                <Card className="floating-card bg-[#01583F] rounded-3xl border border-[#1A6950] text-[#FDF9DC]">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#CDF546] rounded-2xl flex items-center justify-center mr-4">
                        <MapPin className="text-[#01583F]" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#CDF546]">Visit Us</h4>
                        <p className="text-[#FDF9DC]">Ahmedabad, Gujarat</p>
                      </div>
                    </div>
                    <p className="text-[#FDF9DC]">
                      Schedule an in-person meeting to discuss your project in detail
                    </p>
                  </CardContent>
                </Card>
                {/* Additional CTAs */}
                <div className="space-y-4">
                  <Button
                    className="w-full bg-[#1A6950] hover:bg-[#CDF546] hover:text-[#01583F] text-[#CDF546] py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                    data-testid="button-video-call"
                  >
                    <Video className="mr-2 group-hover:animate-pulse" size={20} />
                    Schedule Video Call
                  </Button>
                  <Button
                    className="w-full bg-[#F56013] hover:bg-[#CDF546] text-[#01583F] py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                    data-testid="button-whatsapp"
                  >
                    <MessageCircle className="mr-2 group-hover:animate-bounce" size={20} />
                    WhatsApp Chat
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
