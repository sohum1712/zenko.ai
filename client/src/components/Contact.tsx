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
    email: '',
    phone: '',
    businessType: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
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
      email: '',
      phone: '',
      businessType: '',
      budget: '',
      message: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      {/* CTA Section */}
      <section className="relative py-20 bg-[#1b1b1b] overflow-hidden rounded-t-[4rem] min-h-[60vh]">
        <div className="absolute -top-20 -right-28 w-[500px] h-[500px] rounded-full bg-[#D1FF00] opacity-20 blur-[120px]"></div>
        <div className="relative container mx-auto px-6 text-center z-10 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-[#D1FF00] mb-12 max-w-3xl mx-auto"
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
              className="bg-[#D1FF00] hover:bg-[#c4e71a] text-black px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl group flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="cta-free-quote-now"
            >
              <Gift size={24} className="text-black" />
              Get Free Quote Now
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#111ac3] hover:bg-[#232344] text-[#D1FF00] px-10 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl group flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-testid="cta-schedule-call"
            >
              <Phone size={24} className="text-[#D1FF00]" />
              Schedule Call
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-[#D1FF00] font-medium"
          >
            <p>💰 No upfront costs • 🚀 Fast delivery • 🎯 Guaranteed results</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#242424]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-[#e3e3e3] max-w-3xl mx-auto">
                Ready to take your business online? Get in touch with our team and let's discuss your project!
              </p>
            </motion.div>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="floating-card bg-[#1b1b1b] rounded-3xl border border-[#111ac3]">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-[#D1FF00]">
                      Send us a message
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-[#D1FF00]">
                            Full Name
                          </label>
                          <Input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder='Your name'
                            className="rounded-xl bg-[#242424] text-white"
                            data-testid="input-name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-[#D1FF00]">
                            Email Address
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            placeholder="your@email.com"
                            className="rounded-xl bg-[#242424] text-white"
                            data-testid="input-email"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2 text-[#D1FF00]">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                            placeholder="+91 98765 43210"
                            className="rounded-xl bg-[#242424] text-white"
                            data-testid="input-phone"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-[#D1FF00]">
                            Business Type
                          </label>
                          <Select value={formData.businessType} onValueChange={(value: string) => handleChange('businessType', value)}>
                            <SelectTrigger className="rounded-xl bg-[#242424] text-white" data-testid="select-business-type">
                              <SelectValue placeholder='Select your business type' />
                            </SelectTrigger>
                            <SelectContent className="bg-[#242424] text-white">
                              <SelectItem value="retail">Retail Store</SelectItem>
                              <SelectItem value="restaurant">Restaurant</SelectItem>
                              <SelectItem value="services">Services</SelectItem>
                              <SelectItem value="manufacturing">Manufacturing</SelectItem>
                              <SelectItem value="freelancer">Freelancer</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[#D1FF00]">
                          Project Budget
                        </label>
                        <Select value={formData.budget} onValueChange={(value: string) => handleChange('budget', value)}>
                          <SelectTrigger className="rounded-xl bg-[#242424] text-white" data-testid="select-budget">
                            <SelectValue placeholder='Select your budget range' />
                          </SelectTrigger>
                          <SelectContent className="bg-[#242424] text-white">
                            <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                            <SelectItem value="50k-100k">₹50,000 - ₹1,00,000</SelectItem>
                            <SelectItem value="100k-200k">₹1,00,000 - ₹2,00,000</SelectItem>
                            <SelectItem value="200k+">₹2,00,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2 text-[#D1FF00]">
                          Project Details
                        </label>
                        <Textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          placeholder='Tell us about your project requirements'
                          className="rounded-xl resize-none bg-[#242424] text-white"
                          data-testid="textarea-message"
                        />
                      </div>
                      <Button
                        type="submit"
                        className="w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group bg-[#D1FF00] text-black"
                        data-testid="button-send-message"
                      >
                        <Send className="mr-2 group-hover:animate-bounce" size={20} />
                        Send Message
                      </Button>
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
                <Card className="floating-card bg-[#1b1b1b] rounded-3xl border border-[#111ac3] text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#D1FF00] rounded-2xl flex items-center justify-center mr-4">
                        <Phone className="text-black" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#D1FF00]">Call Us</h4>
                        <p className="text-[#e3e3e3]">+91 98765 43210</p>
                      </div>
                    </div>
                    <p className="text-[#e3e3e3]">
                      Available 24/7 for urgent support and consultations
                    </p>
                  </CardContent>
                </Card>
                <Card className="floating-card bg-[#1b1b1b] rounded-3xl border border-[#111ac3] text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#111ac3] rounded-2xl flex items-center justify-center mr-4">
                        <Mail className="text-[#D1FF00]" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#D1FF00]">Email Us</h4>
                        <p className="text-[#e3e3e3]">hello@zenko.com</p>
                      </div>
                    </div>
                    <p className="text-[#e3e3e3]">
                      Send detailed project requirements and get comprehensive proposals
                    </p>
                  </CardContent>
                </Card>
                <Card className="floating-card bg-[#1b1b1b] rounded-3xl border border-[#111ac3] text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-[#242424] rounded-2xl flex items-center justify-center mr-4">
                        <MapPin className="text-[#D1FF00]" size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#D1FF00]">Visit Us</h4>
                        <p className="text-[#e3e3e3]">Ahmedabad, Gujarat</p>
                      </div>
                    </div>
                    <p className="text-[#e3e3e3]">
                      Schedule an in-person meeting to discuss your project in detail
                    </p>
                  </CardContent>
                </Card>
                {/* Additional CTAs */}
                <div className="space-y-4">
                  <Button
                    className="w-full bg-[#111ac3] hover:bg-[#232344] text-[#D1FF00] py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
                    data-testid="button-video-call"
                  >
                    <Video className="mr-2 group-hover:animate-pulse" size={20} />
                    Schedule Video Call
                  </Button>
                  <Button
                    className="w-full bg-[#D1FF00] hover:bg-[#c4e71a] text-black py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
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

