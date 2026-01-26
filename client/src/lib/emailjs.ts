import emailjs from '@emailjs/browser';

// EmailJS configuration - Using environment variables for security
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_w9mo3ru';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_lc2n48s';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'l-cebVhssjDBIrFfo';
const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'sohamvaghela1712@gmail.com';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      business_type: formData.businessType,
      message: formData.message,
      to_email: CONTACT_EMAIL,
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return response.status === 200;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};

export const sendContactEmailFallback = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // For development, we'll just log the email data
    console.log('Email would be sent with the following data:', {
      to: CONTACT_EMAIL,
      from: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      body: `
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Business Type: ${formData.businessType}
        Message: ${formData.message}
      `,
    });
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    return true;
  } catch (error) {
    console.error('Fallback email service error:', error);
    return false;
  }
};