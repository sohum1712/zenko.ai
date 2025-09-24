import nodemailer from 'nodemailer';

// Email configuration
const EMAIL_CONFIG = {
  // For Gmail, you can use these settings
  service: 'gmail',
  auth: {
    user: 'sohamvaghela1712@gmail.com', // Your email
    pass: process.env.EMAIL_PASSWORD || '', // Your app password (not regular password)
  },
};

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransporter(EMAIL_CONFIG);
};

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessType: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const transporter = createTransporter();

    const mailOptions = {
      from: 'sohamvaghela1712@gmail.com',
      to: 'sohamvaghela1712@gmail.com',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #D1FF00; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
            <p><strong>Business Type:</strong> ${formData.businessType || 'Not specified'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #D1FF00; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message:</h3>
            <p style="line-height: 1.6;">${formData.message}</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 0; color: #2d5a2d;">
              <strong>Reply to:</strong> <a href="mailto:${formData.email}" style="color: #0066FF;">${formData.email}</a>
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            This email was sent from the Zenko Digital contact form.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone || 'Not provided'}
        Business Type: ${formData.businessType || 'Not specified'}
        
        Message:
        ${formData.message}
        
        Reply to: ${formData.email}
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    return false;
  }
};

// Test email configuration
export const testEmailConnection = async (): Promise<boolean> => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('Email server connection verified');
    return true;
  } catch (error) {
    console.error('Email server connection failed:', error);
    return false;
  }
};
