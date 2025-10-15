import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GrokChat from '@/components/GrokChat';

const GrokDemoPage: React.FC = () => {
  const navigateToHome = () => {
    window.location.hash = '';
  };

  const features = [
    {
      icon: '🧠',
      title: 'Advanced AI Understanding',
      description: 'Grok leverages cutting-edge AI to understand complex tax scenarios and provide accurate guidance.'
    },
    {
      icon: '💬',
      title: 'Natural Conversation',
      description: 'Chat naturally about your tax questions - no need to learn special commands or syntax.'
    },
    {
      icon: '⚡',
      title: 'Real-time Responses',
      description: 'Get instant answers to your tax questions without waiting for human support.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your conversations are processed securely with enterprise-grade privacy protection.'
    }
  ];

  const useCases = [
    'Tax law clarifications',
    'Deduction eligibility questions',
    'Filing status guidance',
    'Document requirements',
    'Deadline reminders',
    'Error explanations'
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px 20px'
    }}>
      {/* Navigation Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
        maxWidth: '1200px',
        margin: '0 auto 40px auto'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '800',
          color: 'white',
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}>
          🤖 Grok AI Integration
        </h1>
        <Button 
          onClick={navigateToHome}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            color: 'white',
            backdropFilter: 'blur(10px)'
          }}
        >
          ← Back to Home
        </Button>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Hero Section */}
        <Card style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          marginBottom: '40px'
        }}>
          <CardContent style={{ padding: '60px 40px', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🚀</div>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: 'white',
              marginBottom: '20px',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}>
              Grok AI Successfully Installed!
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: '800px',
              margin: '0 auto 30px auto'
            }}>
              Your Tax Web application now has access to xAI's Grok AI assistant. 
              Experience the future of AI-powered tax support with real-time conversations and intelligent guidance.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Badge style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                padding: '8px 16px',
                fontSize: '1rem'
              }}>
                ✅ @ai-sdk/xai installed
              </Badge>
              <Badge style={{ 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                padding: '8px 16px',
                fontSize: '1rem'
              }}>
                ✅ AI SDK core ready
              </Badge>
              <Badge style={{ 
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                color: 'white',
                padding: '8px 16px',
                fontSize: '1rem'
              }}>
                ✅ Chat interface created
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {features.map((feature, index) => (
            <Card key={index} style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(20px)'
            }}>
              <CardContent style={{ padding: '30px', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{feature.icon}</div>
                <h3 style={{
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  color: 'white',
                  marginBottom: '10px'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use Cases */}
        <Card style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)',
          marginBottom: '40px'
        }}>
          <CardHeader>
            <CardTitle style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}>
              Perfect For These Tax Scenarios
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '15px'
            }}>
              {useCases.map((useCase, index) => (
                <div key={index} style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '15px 20px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>✨</span>
                  {useCase}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Live Demo */}
        <Card style={{
          background: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(20px)'
        }}>
          <CardHeader>
            <CardTitle style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}>
              Try Grok AI Now
            </CardTitle>
          </CardHeader>
          <CardContent>
            <GrokChat />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GrokDemoPage;