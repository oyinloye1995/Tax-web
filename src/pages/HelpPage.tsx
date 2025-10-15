import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import GrokChat from '@/components/GrokChat';

const HelpPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigateToHome = () => {
    window.location.hash = '';
  };

  const faqData = [
    {
      category: 'Getting Started',
      icon: '🚀',
      questions: [
        {
          question: 'How do I create an account?',
          answer: 'Click on the "Sign Up" button and follow the guided process to create your account. You\'ll need to provide basic information and verify your email address.'
        },
        {
          question: 'What documents do I need?',
          answer: 'You\'ll need your Social Security Number, driver\'s license, and banking information for direct deposit. We also accept W-2s, 1099s, and other tax documents.'
        }
      ]
    },
    {
      category: 'Tax Filing',
      icon: '📋',
      questions: [
        {
          question: 'How long does tax filing take?',
          answer: 'Most simple returns can be completed in 10-15 minutes. More complex returns with multiple income sources may take 30-45 minutes.'
        },
        {
          question: 'When will I receive my refund?',
          answer: 'E-filed returns with direct deposit typically receive refunds within 21 days. Paper returns can take 6-8 weeks to process.'
        }
      ]
    }
  ];

  const helpTopics = [
    'Account Setup', 'Tax Filing', 'Payment Methods', 'Refund Status',
    'Document Upload', 'Security', 'Technical Support', 'Billing'
  ];

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 25%, #581c87 50%, #7c2d12 75%, #991b1b 100%)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", "SF Pro Display", Roboto, system-ui, sans-serif',
      padding: '20px',
      position: 'relative'
    }}>
      {/* Background Effects */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
        pointerEvents: 'none'
      }}></div>
      
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Enhanced Navigation Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '40px',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(25px) saturate(200%)',
          borderRadius: '24px',
          padding: '20px 35px',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}>
          <div style={{
            fontSize: '2rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #dbeafe 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-1.5px',
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)'
          }}>
            🎧 TaxEasy Support
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <Button 
              onClick={() => window.location.hash = '#signup'}
              style={{
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                border: 'none',
                color: 'white',
                padding: '14px 28px',
                fontSize: '0.95rem',
                fontWeight: '700',
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.4)',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              📝 Sign Up Free
            </Button>
            <Button 
              onClick={navigateToHome}
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: 'white',
                padding: '14px 28px',
                fontSize: '0.95rem',
                fontWeight: '600',
                borderRadius: '16px',
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s ease'
              }}
            >
              ← Home
            </Button>
          </div>
        </div>

        {/* Enhanced Professional Header Section */}
        <div style={{ 
          marginBottom: '50px',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(40px) saturate(200%)',
          borderRadius: '32px',
          padding: '60px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 40px 100px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Floating Background Elements */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-20%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30%',
            left: '-10%',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(50px)'
          }}></div>
          
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px' }}>
              <div style={{ maxWidth: '65%' }}>
                <h1 style={{ 
                  fontSize: '4.5rem', 
                  fontWeight: '950', 
                  margin: '0 0 20px 0',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #dbeafe 70%, #bfdbfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                  letterSpacing: '-3px',
                  lineHeight: '1.1'
                }}>
                  🎧 Enterprise Support Hub
                </h1>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.95)', 
                  fontSize: '1.6rem', 
                  marginTop: '20px',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  letterSpacing: '0.5px'
                }}>
                  AI-powered 24/7 support with instant answers, expert guidance, and personalized solutions for all your tax needs
                </p>
              </div>
              
              <div style={{ 
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                borderRadius: '28px',
                padding: '35px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                textAlign: 'center',
                minWidth: '180px',
                backdropFilter: 'blur(20px)'
              }}>
                <div style={{ 
                  fontSize: '4rem', 
                  marginBottom: '15px',
                  filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))'
                }}>⚡</div>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.95)', 
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  margin: '0',
                  lineHeight: '1.3',
                  letterSpacing: '0.5px'
                }}>
                  Instant<br/>Expert Response
                </p>
              </div>
            </div>
            
            {/* Enhanced action buttons */}
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <Button style={{
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                border: 'none',
                color: 'white',
                padding: '18px 36px',
                fontSize: '1.2rem',
                fontWeight: '700',
                borderRadius: '18px',
                boxShadow: '0 15px 40px rgba(16, 185, 129, 0.4)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px'
              }}>
                💬 Start Live Chat
              </Button>
              <Button style={{
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: 'white',
                padding: '18px 36px',
                fontSize: '1.2rem',
                fontWeight: '600',
                borderRadius: '18px',
                backdropFilter: 'blur(15px)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px'
              }}>
                📞 Expert Call
              </Button>
              <Button 
                onClick={() => window.location.hash = '#signup'}
                style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                border: 'none',
                color: 'white',
                padding: '18px 36px',
                fontSize: '1.2rem',
                fontWeight: '700',
                borderRadius: '18px',
                boxShadow: '0 15px 40px rgba(245, 158, 11, 0.4)',
                transition: 'all 0.3s ease',
                letterSpacing: '0.5px'
              }}>
                🚀 Get Started Free
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced Intelligent Search Section */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(35px) saturate(180%)',
          borderRadius: '32px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          overflow: 'hidden',
          marginBottom: '50px'
        }}>
          <div style={{ padding: '60px' }}>
            <Alert style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(147, 197, 253, 0.1) 100%)', 
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '24px',
              padding: '30px',
              marginBottom: '50px',
              backdropFilter: 'blur(20px)'
            }}>
              <AlertDescription style={{ 
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: '1.2rem',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                letterSpacing: '0.3px'
              }}>
                <div style={{ fontSize: '2.5rem', filter: 'drop-shadow(0 0 15px rgba(59, 130, 246, 0.5))' }}>🤖</div>
                <div>
                  <strong style={{ fontWeight: '800' }}>AI-Powered Intelligence:</strong> Our advanced search engine understands natural language, context, and provides instant, personalized answers to complex tax questions.
                </div>
              </AlertDescription>
            </Alert>

            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <h2 style={{ 
                fontSize: '3rem', 
                fontWeight: '900', 
                margin: '0 0 20px 0',
                background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 50%, #dbeafe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '-1.5px',
                textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
              }}>
                🔍 Smart Knowledge Search
              </h2>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                fontSize: '1.3rem', 
                marginTop: '15px',
                lineHeight: '1.6',
                fontWeight: '400',
                letterSpacing: '0.3px'
              }}>
                Get instant, contextual answers powered by AI that understands your unique tax situation
              </p>
            </div>

            <div style={{ maxWidth: '900px', margin: '0 auto', marginBottom: '50px' }}>
              <div style={{ position: 'relative' }}>
                <Input
                  placeholder="💬 Ask anything... 'How do I upload my W-2?' or 'When will I get my refund?'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ 
                    fontSize: '1.2rem', 
                    padding: '25px 70px 25px 25px',
                    height: '80px',
                    borderRadius: '24px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
                    color: 'white',
                    fontWeight: '500',
                    letterSpacing: '0.3px'
                  }}
                />
                <Button style={{
                  position: 'absolute',
                  right: '10px',
                  top: '10px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  border: 'none',
                  borderRadius: '20px',
                  padding: '0 30px',
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)'
                }}>
                  🔍
                </Button>
              </div>
              
              <div style={{ marginTop: '30px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center' }}>
                  {helpTopics.slice(0, 8).map((topic, index) => (
                    <Badge 
                      key={index}
                      variant="outline" 
                      style={{ 
                        cursor: 'pointer',
                        padding: '12px 22px',
                        fontSize: '1rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '20px',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                        color: 'rgba(255, 255, 255, 0.9)',
                        backdropFilter: 'blur(15px)',
                        letterSpacing: '0.3px'
                      }}
                      onClick={() => setSearchQuery(topic)}
                    >
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Content Container */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(35px) saturate(180%)',
          borderRadius: '32px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          overflow: 'hidden'
        }}>
          <Tabs defaultValue="faq" style={{ backgroundColor: 'transparent' }}>
            {/* Enhanced Tab Navigation */}
            <TabsList style={{ 
              width: '100%', 
              justifyContent: 'flex-start', 
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
              padding: '15px',
              borderRadius: '0',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              gap: '10px'
            }}>
              <TabsTrigger 
                value="faq" 
                style={{ 
                  fontSize: '1.3rem', 
                  padding: '20px 45px',
                  fontWeight: '800',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '20px',
                  transition: 'all 0.4s ease',
                  boxShadow: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  letterSpacing: '0.5px'
                }}
              >
                ❓ Smart FAQ
              </TabsTrigger>
              <TabsTrigger 
                value="contact" 
                style={{ 
                  fontSize: '1.3rem', 
                  padding: '20px 45px',
                  fontWeight: '800',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '20px',
                  transition: 'all 0.4s ease',
                  boxShadow: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  letterSpacing: '0.5px'
                }}
              >
                📞 Contact Expert
              </TabsTrigger>
              <TabsTrigger 
                value="resources" 
                style={{ 
                  fontSize: '1.3rem', 
                  padding: '20px 45px',
                  fontWeight: '800',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '20px',
                  transition: 'all 0.4s ease',
                  boxShadow: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  letterSpacing: '0.5px'
                }}
              >
                📚 Premium Resources
              </TabsTrigger>
              <TabsTrigger 
                value="ai-chat" 
                style={{ 
                  fontSize: '1.3rem', 
                  padding: '20px 45px',
                  fontWeight: '800',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '20px',
                  transition: 'all 0.4s ease',
                  boxShadow: 'none',
                  color: 'rgba(255, 255, 255, 0.9)',
                  letterSpacing: '0.5px'
                }}
              >
                🤖 AI Assistant
              </TabsTrigger>
            </TabsList>

            {/* FAQ Tab - Smart Knowledge Base */}
            <TabsContent value="faq" style={{ padding: '0' }}>
              <div style={{ padding: '50px' }}>
                {searchQuery && (
                  <Alert style={{ 
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)', 
                    border: '2px solid #3b82f6',
                    borderRadius: '20px',
                    padding: '25px',
                    marginBottom: '40px'
                  }}>
                    <AlertDescription style={{ 
                      color: '#1e40af',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '15px'
                    }}>
                      <div style={{ fontSize: '2rem' }}>🔍</div>
                      <div>
                        <strong>Search Results for:</strong> "{searchQuery}"
                        <br />
                        <span style={{ fontWeight: '400', fontSize: '1rem' }}>
                          Found {filteredFAQs.reduce((acc, cat) => acc + cat.questions.length, 0)} relevant articles
                        </span>
                      </div>
                    </AlertDescription>
                  </Alert>
                )}

                <div style={{ display: 'grid', gap: '35px' }}>
                  {(searchQuery ? filteredFAQs : faqData).map((category, categoryIndex) => (
                    <div key={categoryIndex} style={{
                      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                      borderRadius: '24px',
                      border: '2px solid #e2e8f0',
                      overflow: 'hidden',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
                    }}>
                      <div style={{
                        background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
                        color: 'white',
                        padding: '30px',
                        borderRadius: '22px 22px 0 0'
                      }}>
                        <h3 style={{
                          fontSize: '1.8rem',
                          fontWeight: '800',
                          margin: '0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '15px'
                        }}>
                          <span style={{ fontSize: '2.2rem' }}>{category.icon}</span>
                          {category.category}
                          <Badge style={{
                            background: 'rgba(255, 255, 255, 0.2)',
                            color: 'white',
                            border: '1px solid rgba(255, 255, 255, 0.3)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            padding: '6px 12px'
                          }}>
                            {category.questions.length} answers
                          </Badge>
                        </h3>
                      </div>

                      <div style={{ padding: '0' }}>
                        <Accordion type="single" collapsible>
                          {category.questions.map((faq, faqIndex) => (
                            <AccordionItem key={faqIndex} value={`item-${categoryIndex}-${faqIndex}`} style={{
                              border: 'none',
                              borderBottom: faqIndex < category.questions.length - 1 ? '1px solid #e2e8f0' : 'none'
                            }}>
                              <AccordionTrigger style={{
                                fontSize: '1.2rem',
                                fontWeight: '700',
                                color: '#1e293b',
                                padding: '30px',
                                textAlign: 'left',
                                background: 'transparent',
                                transition: 'all 0.3s ease'
                              }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                  <div style={{
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    padding: '8px',
                                    fontSize: '1rem',
                                    minWidth: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: '800'
                                  }}>
                                    Q{faqIndex + 1}
                                  </div>
                                  <span>{faq.question}</span>
                                </div>
                              </AccordionTrigger>
                              <AccordionContent style={{
                                fontSize: '1.1rem',
                                lineHeight: '1.8',
                                color: '#475569',
                                padding: '0 30px 30px 30px',
                                background: 'rgba(248, 250, 252, 0.5)'
                              }}>
                                <div style={{
                                  background: 'white',
                                  borderRadius: '16px',
                                  padding: '25px',
                                  border: '1px solid #e2e8f0',
                                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)'
                                }}>
                                  <div style={{ 
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '15px'
                                  }}>
                                    <div style={{
                                      background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                                      color: 'white',
                                      borderRadius: '12px',
                                      padding: '8px',
                                      fontSize: '1.2rem',
                                      minWidth: '40px',
                                      height: '40px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontWeight: '800'
                                    }}>
                                      A
                                    </div>
                                    <div style={{ flex: 1 }}>
                                      <div style={{
                                        fontSize: '1.1rem',
                                        lineHeight: '1.7',
                                        color: '#374151'
                                      }}>
                                        {faq.answer}
                                      </div>
                                      <div style={{
                                        marginTop: '20px',
                                        paddingTop: '20px',
                                        borderTop: '1px solid #f3f4f6'
                                      }}>
                                        <Button style={{
                                          background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                                          border: '1px solid #d1d5db',
                                          color: '#374151',
                                          fontSize: '0.95rem',
                                          fontWeight: '600',
                                          borderRadius: '12px',
                                          padding: '10px 16px',
                                          marginRight: '10px'
                                        }}>
                                          👍 Helpful
                                        </Button>
                                        <Button style={{
                                          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                                          border: 'none',
                                          color: 'white',
                                          fontSize: '0.95rem',
                                          fontWeight: '600',
                                          borderRadius: '12px',
                                          padding: '10px 16px'
                                        }}>
                                          💬 Need More Help?
                                        </Button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    </div>
                  ))}

                  {searchQuery && filteredFAQs.length === 0 && (
                    <div style={{
                      textAlign: 'center',
                      padding: '80px 40px',
                      background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                      borderRadius: '24px',
                      border: '2px solid #e2e8f0'
                    }}>
                      <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🔍</div>
                      <h3 style={{
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        color: '#1e293b',
                        margin: '0 0 15px 0'
                      }}>
                        No Results Found
                      </h3>
                      <p style={{ 
                        fontSize: '1.1rem', 
                        color: '#64748b',
                        marginBottom: '30px',
                        lineHeight: '1.6'
                      }}>
                        We couldn't find any articles matching "<strong>{searchQuery}</strong>".<br/>
                        Try different keywords or contact our support team for personalized help.
                      </p>
                      <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
                        <Button 
                          onClick={() => setSearchQuery('')}
                          style={{
                            background: 'linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)',
                            border: '1px solid #d1d5db',
                            color: '#374151',
                            fontSize: '1rem',
                            fontWeight: '600',
                            borderRadius: '16px',
                            padding: '15px 25px'
                          }}
                        >
                          🔄 Clear Search
                        </Button>
                        <Button style={{
                          background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                          border: 'none',
                          color: 'white',
                          fontSize: '1rem',
                          fontWeight: '600',
                          borderRadius: '16px',
                          padding: '15px 25px'
                        }}>
                          💬 Contact Support
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* Enhanced Contact Support Tab */}
            <TabsContent value="contact" style={{ padding: '60px' }}>
              <div style={{ display: 'grid', gap: '35px' }}>
                {/* Sign Up Call-to-Action */}
                <div style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.1) 100%)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  borderRadius: '28px',
                  padding: '40px',
                  textAlign: 'center',
                  backdropFilter: 'blur(20px)'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🚀</div>
                  <h3 style={{
                    fontSize: '2.2rem',
                    fontWeight: '900',
                    background: 'linear-gradient(135deg, #ffffff 0%, #fef3c7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    margin: '0 0 15px 0',
                    letterSpacing: '-1px'
                  }}>
                    Ready to Get Started?
                  </h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '1.3rem',
                    marginBottom: '30px',
                    lineHeight: '1.6',
                    fontWeight: '400'
                  }}>
                    Join thousands of users who file their taxes stress-free with our AI-powered platform
                  </p>
                  <Button 
                    onClick={() => window.location.hash = '#signup'}
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      border: 'none',
                      color: 'white',
                      padding: '18px 40px',
                      fontSize: '1.3rem',
                      fontWeight: '800',
                      borderRadius: '20px',
                      boxShadow: '0 15px 40px rgba(245, 158, 11, 0.4)',
                      transition: 'all 0.3s ease',
                      letterSpacing: '0.5px'
                    }}
                  >
                    🎯 Sign Up Free - Start Now
                  </Button>
                </div>

                <Alert style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(5, 150, 105, 0.1) 100%)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '24px',
                  padding: '30px',
                  backdropFilter: 'blur(20px)'
                }}>
                  <AlertDescription style={{
                    color: 'rgba(255, 255, 255, 0.95)',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    letterSpacing: '0.3px'
                  }}>
                    💬 Our expert support team typically responds within 24 hours. For urgent issues during tax season, expect faster response times.
                  </AlertDescription>
                </Alert>

                <Card style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '24px',
                  backdropFilter: 'blur(20px)'
                }}>
                  <CardHeader style={{ padding: '30px 30px 20px 30px' }}>
                    <CardTitle style={{
                      fontSize: '1.8rem',
                      fontWeight: '800',
                      color: 'rgba(255, 255, 255, 0.95)',
                      letterSpacing: '0.3px'
                    }}>
                      📞 Contact Our Expert Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent style={{ padding: '0 30px 30px 30px' }}>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '1.2rem',
                      lineHeight: '1.6',
                      marginBottom: '25px'
                    }}>
                      Need personalized help? Our certified tax experts are here to guide you through every step.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                      <Button style={{
                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                        color: 'white',
                        padding: '15px 30px',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        borderRadius: '16px',
                        border: 'none',
                        boxShadow: '0 10px 25px rgba(16, 185, 129, 0.3)'
                      }}>
                        💬 Start Live Chat
                      </Button>
                      <Button style={{
                        background: 'rgba(255, 255, 255, 0.12)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        color: 'white',
                        padding: '15px 30px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        borderRadius: '16px',
                        backdropFilter: 'blur(10px)'
                      }}>
                        📧 Email Support
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Enhanced Resources Tab */}
            <TabsContent value="resources" style={{ padding: '60px' }}>
              <div style={{ display: 'grid', gap: '35px' }}>
                <Card style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  borderRadius: '24px',
                  backdropFilter: 'blur(20px)'
                }}>
                  <CardHeader style={{ padding: '30px 30px 20px 30px' }}>
                    <CardTitle style={{
                      fontSize: '1.8rem',
                      fontWeight: '800',
                      color: 'rgba(255, 255, 255, 0.95)',
                      letterSpacing: '0.3px'
                    }}>
                      📚 Premium Tax Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent style={{ padding: '0 30px 30px 30px' }}>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '1.2rem',
                      lineHeight: '1.6',
                      marginBottom: '25px'
                    }}>
                      Access comprehensive tax guides, video tutorials, and expert insights to maximize your returns.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                      <Button style={{
                        background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                        color: 'white',
                        padding: '15px 30px',
                        fontSize: '1.1rem',
                        fontWeight: '700',
                        borderRadius: '16px',
                        border: 'none',
                        boxShadow: '0 10px 25px rgba(124, 58, 237, 0.3)'
                      }}>
                        📖 View All Resources
                      </Button>
                      <Button style={{
                        background: 'rgba(255, 255, 255, 0.12)',
                        border: '1px solid rgba(255, 255, 255, 0.25)',
                        color: 'white',
                        padding: '15px 30px',
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        borderRadius: '16px',
                        backdropFilter: 'blur(10px)'
                      }}>
                        🎥 Video Tutorials
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* AI Chat Tab - Grok Assistant */}
            <TabsContent value="ai-chat" style={{ padding: '60px' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)',
                borderRadius: '30px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(20px)'
              }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <h2 style={{
                    fontSize: '2.5rem',
                    fontWeight: '800',
                    color: 'white',
                    marginBottom: '15px',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}>
                    🤖 AI Tax Assistant
                  </h2>
                  <p style={{
                    fontSize: '1.2rem',
                    color: 'rgba(255, 255, 255, 0.9)',
                    maxWidth: '600px',
                    margin: '0 auto'
                  }}>
                    Get instant answers to your tax questions with our AI-powered assistant
                  </p>
                </div>
                
                <GrokChat />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;