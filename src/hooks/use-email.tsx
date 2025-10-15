import { useState } from 'react';
import { sendEmail, EmailTemplates, initializeEmailService, EmailTemplate } from '@/lib/email-service';

interface UseEmailReturn {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  sendUserSignup: (userData: any) => Promise<boolean>;
  sendContactForm: (contactData: any) => Promise<boolean>;
  sendTaxFiling: (filingData: any) => Promise<boolean>;
  sendGrokInteraction: (interactionData: any) => Promise<boolean>;
  sendCustomEmail: (emailData: EmailTemplate) => Promise<boolean>;
  reset: () => void;
}

export const useEmail = (): UseEmailReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const reset = () => {
    setIsLoading(false);
    setIsSuccess(false);
    setError(null);
  };

  const handleEmailSend = async (emailPromise: Promise<boolean>): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Initialize email service if not already done
      initializeEmailService();
      
      const result = await emailPromise;
      
      if (result) {
        setIsSuccess(true);
        setError(null);
      } else {
        setError('Failed to send email. Please check your configuration.');
      }
      
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      setIsSuccess(false);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const sendUserSignup = async (userData: any): Promise<boolean> => {
    const emailTemplate = EmailTemplates.userSignup(userData);
    return handleEmailSend(sendEmail(emailTemplate));
  };

  const sendContactForm = async (contactData: any): Promise<boolean> => {
    const emailTemplate = EmailTemplates.contactForm(contactData);
    return handleEmailSend(sendEmail(emailTemplate));
  };

  const sendTaxFiling = async (filingData: any): Promise<boolean> => {
    const emailTemplate = EmailTemplates.taxFiling(filingData);
    return handleEmailSend(sendEmail(emailTemplate));
  };

  const sendGrokInteraction = async (interactionData: any): Promise<boolean> => {
    const emailTemplate = EmailTemplates.grokInteraction(interactionData);
    return handleEmailSend(sendEmail(emailTemplate));
  };

  const sendCustomEmail = async (emailData: EmailTemplate): Promise<boolean> => {
    return handleEmailSend(sendEmail(emailData));
  };

  return {
    isLoading,
    isSuccess,
    error,
    sendUserSignup,
    sendContactForm,
    sendTaxFiling,
    sendGrokInteraction,
    sendCustomEmail,
    reset
  };
};