import React, { useState } from 'react';
import { Phone, Send, ArrowRight, MessageCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { sendContactEmail, sendContactEmailFallback } from '@/lib/emailjs';
import { useTranslation } from '@/hooks/useTranslation';
import { TranslatedInput, TranslatedTextarea } from './TranslatedInput';
import type { ContactFormData, ContactFormErrors } from '@/types';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: ContactFormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t('form.fill_required_fields');
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t('form.fill_required_fields');
    } else if (!/^\+?[\d\s-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = t('form.fill_required_fields');
    } else if (formData.message.length > 5000) {
      newErrors.message = 'Message is too long (max 5000 characters)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: t('form.validation_error'),
        description: t('form.fill_required_fields'),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const emailData = {
        name: formData.name,
        email: formData.email || 'noemail@provided.com',
        phone: formData.phone,
        businessType: 'General Inquiry',
        message: formData.message,
      };

      let success = false;
      try {
        success = await sendContactEmail(emailData);
      } catch (error) {
        console.log('EmailJS failed, using fallback:', error);
        success = await sendContactEmailFallback(emailData);
      }

      if (success) {
        toast({
          title: t('form.message_sent_success'),
          description: t('form.thank_you_message'),
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: t('form.error_title'),
        description: t('form.send_error_message'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-br from-[#f8fbfe] via-white to-[#e8f4fc] relative overflow-hidden min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#4d8af0]/5 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#4d8af0]/10 rounded-full border border-[#4d8af0]/20 mb-6">
                <Zap className="w-4 h-4 text-[#4d8af0]" />
                <span className="text-[#4d8af0] text-sm font-semibold tracking-wide font-sans">
                  {t('contact.contact_us')}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans text-[#1a1a2e] leading-tight mb-6">
                {t('contact.send_message')}
              </h2>
              <p className="text-[#6b7280] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-sans">
                {t('contact.response_promise')}
              </p>
            </motion.div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Centered Form */}
            <motion.div 
              className="w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-100/20 border border-[#4d8af0]/10 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#4d8af0]/5 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#4d8af0]/5 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-[#4d8af0] to-[#6ba3f5] rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-blue-200/50"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Send className="text-white w-8 h-8" />
                    </motion.div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-4 text-[#1a1a2e] font-sans">
                          {t('contact.full_name')} <span className="text-[#4d8af0]">*</span>
                        </label>
                        <TranslatedInput
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your name"
                          className={`w-full rounded-2xl bg-[#e8f4fc] text-[#1a1a2e] border-2 ${errors.name ? 'border-red-500' : 'border-[#4d8af0]/20'} placeholder:text-[#6b7280] focus:border-[#4d8af0] focus:ring-0 focus:bg-[#e8f4fc] h-16 px-6 text-lg transition-all duration-300 hover:border-[#4d8af0]/40 hover:bg-[#e8f4fc] hover:shadow-lg font-sans`}
                          required
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-2 font-sans">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-4 text-[#1a1a2e] font-sans">
                          {t('contact.phone_number')} <span className="text-[#4d8af0]">*</span>
                        </label>
                        <TranslatedInput
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+91 98765 43210"
                          className={`w-full rounded-2xl bg-[#e8f4fc] text-[#1a1a2e] border-2 ${errors.phone ? 'border-red-500' : 'border-[#4d8af0]/20'} placeholder:text-[#6b7280] focus:border-[#4d8af0] focus:ring-0 focus:bg-[#e8f4fc] h-16 px-6 text-lg transition-all duration-300 hover:border-[#4d8af0]/40 hover:bg-[#e8f4fc] hover:shadow-lg font-sans`}
                          required
                        />
                        {errors.phone && <p className="text-red-500 text-sm mt-2 font-sans">{errors.phone}</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-4 text-[#1a1a2e] font-sans">
                        {t('contact.email_address')} <span className="text-gray-400 text-sm font-normal">({t('contact.optional')})</span>
                      </label>
                      <TranslatedInput
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        className={`w-full rounded-2xl bg-[#e8f4fc] text-[#1a1a2e] border-2 ${errors.email ? 'border-red-500' : 'border-[#4d8af0]/20'} placeholder:text-[#6b7280] focus:border-[#4d8af0] focus:ring-0 focus:bg-[#e8f4fc] h-16 px-6 text-lg transition-all duration-300 hover:border-[#4d8af0]/40 hover:bg-[#e8f4fc] hover:shadow-lg font-sans`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-2 font-sans">{errors.email}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-4 text-[#1a1a2e] font-sans">
                        {t('contact.project_details')} <span className="text-[#4d8af0]">*</span>
                      </label>
                      <TranslatedTextarea
                        rows={6}
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us about your project requirements"
                        className={`w-full rounded-2xl resize-none bg-[#e8f4fc] text-[#1a1a2e] border-2 ${errors.message ? 'border-red-500' : 'border-[#4d8af0]/20'} placeholder:text-[#6b7280] focus:border-[#4d8af0] focus:ring-0 focus:bg-[#e8f4fc] px-6 py-5 text-lg transition-all duration-300 hover:border-[#4d8af0]/40 hover:bg-[#e8f4fc] hover:shadow-lg font-sans`}
                        required
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-2 font-sans">{errors.message}</p>}
                    </div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-6 rounded-2xl font-medium text-xl bg-gradient-to-r from-[#4d8af0] to-[#6ba3f5] text-white hover:from-[#3b7ae0] hover:to-[#5a92f0] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl shadow-blue-300/30 flex items-center justify-center gap-4 hover:shadow-2xl hover:shadow-blue-400/40 font-sans"
                      >
                        <Send className="w-6 h-6" />
                        {isSubmitting ? t('contact.sending') : t('contact.send_message_btn')}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  export default Contact;