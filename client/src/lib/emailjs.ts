import emailjs from '@emailjs/browser';

// EmailJS configuration - You'll need to replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'service_w9mo3ru'; // Replace with your service ID
const EMAILJS_TEMPLATE_ID = 'template_lc2n48s'; // Replace with your template ID
const EMAILJS_PUBLIC_KEY = 'l-cebVhssjDBIrFfo'; // Replace with your public key

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
      to_email: 'sohamvaghela1712@gmail.com', // Your email address
      reply_to: formData.email,
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Fallback function for development/testing
export const sendContactEmailFallback = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // For development, we'll just log the email data
    console.log('Email would be sent with the following data:', {
      to: 'sohamvaghela1712@gmail.com',
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
    console.error('Failed to send email (fallback):', error);
    return false;
  }
};
