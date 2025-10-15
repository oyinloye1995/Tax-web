import React, { useState } from 'react';
import { generateText } from 'ai';
import { xai } from '@ai-sdk/xai';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { getGrokApiKey, setGrokApiKey, isGrokConfigured, SETUP_INSTRUCTIONS } from '@/lib/grok-config';
import { useEmail } from '@/hooks/use-email';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function GrokChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKeyState] = useState('');
  const [showApiKeyInput, setShowApiKeyInput] = useState(!isGrokConfigured());
  const { sendGrokInteraction } = useEmail();

  const handleApiKeySubmit = () => {
    if (apiKey.trim()) {
      setGrokApiKey(apiKey.trim());
      setShowApiKeyInput(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const currentApiKey = getGrokApiKey();
    if (!currentApiKey) {
      setShowApiKeyInput(true);
      return;
    }

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const grokModel = xai('grok-beta');
      const { text } = await generateText({
        model: grokModel,
        messages: [
          ...messages.map(m => ({ role: m.role, content: m.content })),
          { role: 'user', content: input }
        ],
        // Note: API key should be configured via environment variables
        // or the xAI provider configuration
      });

      const assistantMessage: Message = { role: 'assistant', content: text };
      setMessages(prev => [...prev, assistantMessage]);

      // Send email notification of the conversation
      try {
        await sendGrokInteraction({
          userMessage: input,
          grokResponse: text,
          timestamp: new Date().toLocaleString()
        });
      } catch (emailError) {
        console.warn('Failed to send email notification:', emailError);
        // Continue normally even if email fails
      }
    } catch (error) {
      console.error('Error calling Grok:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error. Please check your API key and try again.' 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Chat with Grok AI</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* API Key Input */}
        {showApiKeyInput && (
          <Alert>
            <AlertDescription>
              <div className="space-y-3">
                <p className="font-medium">API Key Required</p>
                <p className="text-sm">Enter your xAI API key to start chatting with Grok.</p>
                <div className="flex space-x-2">
                  <Input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKeyState(e.target.value)}
                    placeholder="Enter your xAI API key..."
                    className="flex-1"
                  />
                  <Button onClick={handleApiKeySubmit}>Save</Button>
                </div>
                <p className="text-xs text-gray-600">
                  Get your API key from <a href="https://console.x.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">xAI Console</a>
                </p>
              </div>
            </AlertDescription>
          </Alert>
        )}

        {/* Messages Display */}
        <div className="h-96 overflow-y-auto space-y-3 p-4 border rounded-lg bg-gray-50">
          {messages.length === 0 ? (
            <p className="text-gray-500 text-center">Start a conversation with Grok!</p>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white ml-auto max-w-[80%]'
                    : 'bg-white border max-w-[80%]'
                }`}
              >
                <p className="text-sm font-medium mb-1">
                  {message.role === 'user' ? 'You' : 'Grok'}
                </p>
                <p className="whitespace-pre-wrap">{message.content}</p>
              </div>
            ))
          )}
          {isLoading && (
            <div className="bg-white border max-w-[80%] p-3 rounded-lg">
              <p className="text-sm font-medium mb-1">Grok</p>
              <p className="text-gray-500">Thinking...</p>
            </div>
          )}
        </div>

        {/* Input Section */}
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask Grok anything..."
            disabled={isLoading}
            className="flex-1"
          />
          <Button 
            onClick={sendMessage} 
            disabled={isLoading || !input.trim()}
          >
            Send
          </Button>
        </div>

        {/* Setup Instructions */}
        <div className="text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
          <p className="font-medium">Setup Instructions:</p>
          <p>1. {SETUP_INSTRUCTIONS.step1}</p>
          <p>2. {SETUP_INSTRUCTIONS.step2}</p>
          <p>3. {SETUP_INSTRUCTIONS.step3}</p>
          <p>4. {SETUP_INSTRUCTIONS.step4}</p>
          <p className="mt-2 font-medium">Alternative: {SETUP_INSTRUCTIONS.alternative}</p>
        </div>
      </CardContent>
    </Card>
  );
}