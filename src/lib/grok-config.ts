// Grok AI Configuration
// To use Grok AI, you need to set up your API key

export const getGrokApiKey = (): string | undefined => {
  // First check Vite environment variables
  if (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_XAI_API_KEY) {
    return (import.meta as any).env.VITE_XAI_API_KEY;
  }
  
  // Check regular environment variable (Node.js)
  if (typeof process !== 'undefined' && process.env?.XAI_API_KEY) {
    return process.env.XAI_API_KEY;
  }
  
  // Check localStorage for development
  if (typeof window !== 'undefined') {
    return localStorage.getItem('xai_api_key') || undefined;
  }
  
  return undefined;
};

export const setGrokApiKey = (apiKey: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('xai_api_key', apiKey);
  }
};

export const clearGrokApiKey = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('xai_api_key');
  }
};

export const isGrokConfigured = (): boolean => {
  return !!getGrokApiKey();
};

// Configuration instructions
export const SETUP_INSTRUCTIONS = {
  step1: "Get your API key from https://console.x.ai/",
  step2: "Create a .env file in your project root",
  step3: "Add: VITE_XAI_API_KEY=your_api_key_here",
  step4: "Restart your development server",
  alternative: "Or use the API key input in the chat interface"
};