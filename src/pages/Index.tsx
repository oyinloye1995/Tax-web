import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Zap, ArrowRight, Globe, Headphones } from "lucide-react";

const Index: React.FC = () => {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 75%, #475569 100%)',
      overflow: 'hidden'
    }}>
      {/* Premium Navigation */}
      <nav style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(30px)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        position: 'sticky',
        top: '0',
        zIndex: 1000,
        borderRadius: '0 0 24px 24px',
        margin: '0 20px'
      }}>
        <div style={{
          maxWidth: '1600px',
          margin: '0 auto',
          padding: '20px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
              borderRadius: '16px',
              padding: '12px',
              fontSize: '1.8rem'
            }}>💼</div>
            <h1 style={{
              fontSize: '2.2rem',
              fontWeight: '900',
              margin: '0',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 50%, #bbf7d0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-1px'
            }}>
              TaxPro Enterprise
            </h1>
          </div>
          
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <Button style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '12px 20px',
              borderRadius: '12px'
            }}>
              Enterprise Solutions
            </Button>
            <Button style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: '1.1rem',
              fontWeight: '600',
              padding: '12px 20px',
              borderRadius: '12px'
            }}>
              Security & Compliance
            </Button>
            <Button style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              border: 'none',
              color: 'white',
              fontSize: '1.1rem',
              fontWeight: '700',
              padding: '15px 30px',
              borderRadius: '16px',
              boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)'
            }}>
              🚀 Start Free Trial
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section - Amazon Level */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '80px 20px' }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '20%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite reverse'
        }} />

        <div style={{ maxWidth: '1600px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              {/* Premium Badge */}
              <Badge style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                padding: '12px 24px',
                borderRadius: '20px',
                marginBottom: '30px',
                backdropFilter: 'blur(10px)'
              }}>
                ⭐ Fortune 500 Trusted • 10M+ Users • 99.9% Uptime
              </Badge>

              <h1 style={{
                fontSize: '4.5rem',
                fontWeight: '900',
                lineHeight: '1.1',
                margin: '0 0 30px 0',
                color: 'white',
                letterSpacing: '-3px'
              }}>
                Enterprise Tax
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #22c55e 50%, #f59e0b 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Intelligence
                </span>
                <br />
                Platform
              </h1>

              <p style={{
                fontSize: '1.4rem',
                color: 'rgba(255, 255, 255, 0.85)',
                lineHeight: '1.6',
                marginBottom: '40px',
                fontWeight: '400'
              }}>
                Transform your tax operations with AI-powered automation, military-grade security, 
                and enterprise-scale compliance. Process millions of returns with 99.97% accuracy.
              </p>

              <div style={{ display: 'flex', gap: '20px', marginBottom: '50px' }}>
                <Button style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  padding: '20px 40px',
                  borderRadius: '20px',
                  boxShadow: '0 15px 40px rgba(59, 130, 246, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  🎯 Request Enterprise Demo
                  <ArrowRight style={{ width: '20px', height: '20px' }} />
                </Button>
                
                <Button style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  color: 'white',
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  padding: '18px 36px',
                  borderRadius: '20px',
                  backdropFilter: 'blur(10px)'
                }}>
                  📊 View ROI Calculator
                </Button>
              </div>

              {/* Trust indicators */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '30px',
                padding: '30px',
                background: 'rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(20px)'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🛡️</div>
                  <p style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', margin: '0' }}>SOC 2 Certified</p>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', margin: '4px 0 0 0' }}>Enterprise Security</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>⚡</div>
                  <p style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', margin: '0' }}>99.97% Accuracy</p>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', margin: '4px 0 0 0' }}>AI-Powered</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🌍</div>
                  <p style={{ color: 'white', fontWeight: '700', fontSize: '1.1rem', margin: '0' }}>Global Scale</p>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', margin: '4px 0 0 0' }}>50+ Countries</p>
                </div>
              </div>
            </div>

            {/* Interactive Dashboard Preview */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(34, 197, 94, 0.2) 100%)',
                borderRadius: '40px',
                filter: 'blur(40px)'
              }} />
              
              <div style={{
                position: 'relative',
                background: 'rgba(255, 255, 255, 0.95)',
                borderRadius: '32px',
                padding: '40px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 40px 120px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(30px)'
              }}>
                <div style={{ marginBottom: '25px' }}>
                  <h3 style={{
                    fontSize: '1.8rem',
                    fontWeight: '800',
                    color: '#1e293b',
                    margin: '0 0 10px 0'
                  }}>
                    🎯 Executive Dashboard
                  </h3>
                  <p style={{
                    color: '#64748b',
                    fontSize: '1.1rem',
                    margin: '0'
                  }}>
                    Real-time tax operations intelligence
                  </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '25px' }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '1px solid #3b82f6'
                  }}>
                    <p style={{ fontSize: '2.2rem', fontWeight: '800', color: '#1e40af', margin: '0 0 5px 0' }}>$2.4B</p>
                    <p style={{ fontSize: '0.9rem', color: '#1e40af', margin: '0', fontWeight: '600' }}>💰 Processed Today</p>
                  </div>
                  <div style={{
                    background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                    borderRadius: '16px',
                    padding: '20px',
                    border: '1px solid #22c55e'
                  }}>
                    <p style={{ fontSize: '2.2rem', fontWeight: '800', color: '#15803d', margin: '0 0 5px 0' }}>847K</p>
                    <p style={{ fontSize: '0.9rem', color: '#15803d', margin: '0', fontWeight: '600' }}>📊 Returns Filed</p>
                  </div>
                </div>

                <div style={{
                  background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
                  borderRadius: '16px',
                  padding: '20px',
                  border: '1px solid #cbd5e1'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#334155', margin: '0' }}>System Performance</p>
                    <Badge style={{
                      background: '#22c55e',
                      color: 'white',
                      fontSize: '0.8rem',
                      padding: '4px 8px'
                    }}>
                      99.9% Uptime
                    </Badge>
                  </div>
                  <div style={{
                    height: '6px',
                    background: '#e2e8f0',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: '96%',
                      background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                      borderRadius: '3px'
                    }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Section */}
      <section style={{
        padding: '100px 20px',
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(20px)'
      }}>
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <Badge style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '600',
              padding: '12px 24px',
              borderRadius: '20px',
              marginBottom: '30px'
            }}>
              🚀 Enterprise-Grade Capabilities
            </Badge>
            
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              margin: '0 0 25px 0',
              color: 'white',
              letterSpacing: '-2px'
            }}>
              Why Fortune 500 Companies Choose Us
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Advanced automation, unparalleled security, and enterprise-scale performance 
              that transforms tax operations globally
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px'
          }}>
            {/* Security Feature */}
            <Card style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(29, 78, 216, 0.1) 100%)',
              border: '2px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 80px rgba(59, 130, 246, 0.2)'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(50px, -50px)'
              }} />
              <CardContent style={{ padding: '50px', position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '20px',
                  padding: '20px',
                  display: 'inline-flex',
                  marginBottom: '30px'
                }}>
                  <Shield style={{ width: '40px', height: '40px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white',
                  margin: '0 0 20px 0'
                }}>
                  Military-Grade Security
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  Zero-trust architecture with AES-256 encryption, multi-factor authentication, 
                  and SOC 2 Type II compliance. Your data is protected at enterprise scale.
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <Badge style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    🛡️ SOC 2 Certified
                  </Badge>
                  <Badge style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    🔐 AES-256 Encryption
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* AI Performance Feature */}
            <Card style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.1) 100%)',
              border: '2px solid rgba(34, 197, 94, 0.3)',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 80px rgba(34, 197, 94, 0.2)'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(50px, -50px)'
              }} />
              <CardContent style={{ padding: '50px', position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  borderRadius: '20px',
                  padding: '20px',
                  display: 'inline-flex',
                  marginBottom: '30px'
                }}>
                  <Zap style={{ width: '40px', height: '40px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white',
                  margin: '0 0 20px 0'
                }}>
                  AI-Powered Automation
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  Process 10x faster with machine learning algorithms. 99.97% accuracy rate 
                  with intelligent error detection and auto-correction capabilities.
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <Badge style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    🤖 ML-Powered
                  </Badge>
                  <Badge style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    ⚡ 99.97% Accurate
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Global Scale Feature */}
            <Card style={{
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(109, 40, 217, 0.1) 100%)',
              border: '2px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 80px rgba(124, 58, 237, 0.2)'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(50px, -50px)'
              }} />
              <CardContent style={{ padding: '50px', position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                  borderRadius: '20px',
                  padding: '20px',
                  display: 'inline-flex',
                  marginBottom: '30px'
                }}>
                  <Globe style={{ width: '40px', height: '40px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white',
                  margin: '0 0 20px 0'
                }}>
                  Global Enterprise Scale
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  Built for multinational corporations. Support for 50+ countries, 
                  multi-currency processing, and real-time compliance across jurisdictions.
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <Badge style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    🌍 50+ Countries
                  </Badge>
                  <Badge style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    💰 Multi-Currency
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* 24/7 Support Feature */}
            <Card style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.1) 100%)',
              border: '2px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '24px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 80px rgba(245, 158, 11, 0.2)'
            }}>
              <div style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                transform: 'translate(50px, -50px)'
              }} />
              <CardContent style={{ padding: '50px', position: 'relative', zIndex: 1 }}>
                <div style={{
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  borderRadius: '20px',
                  padding: '20px',
                  display: 'inline-flex',
                  marginBottom: '30px'
                }}>
                  <Headphones style={{ width: '40px', height: '40px', color: 'white' }} />
                </div>
                <h3 style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  color: 'white',
                  margin: '0 0 20px 0'
                }}>
                  Enterprise Support
                </h3>
                <p style={{
                  fontSize: '1.2rem',
                  color: 'rgba(255, 255, 255, 0.85)',
                  lineHeight: '1.6',
                  marginBottom: '25px'
                }}>
                  Dedicated account managers, 24/7 priority support, and direct access to 
                  tax experts. 2-minute average response time guaranteed.
                </p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <Badge style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    🎧 24/7 Support
                  </Badge>
                  <Badge style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    ⚡ 2min Response
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Process Section */}
      <section style={{
        padding: '100px 20px',
        background: 'rgba(255, 255, 255, 0.97)',
        backdropFilter: 'blur(30px)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: '900',
              margin: '0 0 25px 0',
              background: 'linear-gradient(135deg, #1e40af 0%, #7c3aed 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-2px'
            }}>
              Enterprise Implementation Process
            </h2>
            <p style={{
              fontSize: '1.3rem',
              color: '#64748b',
              maxWidth: '800px',
              margin: '0 auto',
              lineHeight: '1.6'
            }}>
              Seamless enterprise deployment with dedicated implementation team and zero downtime migration
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '50px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: '900',
                margin: '0 auto 30px auto',
                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)'
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>1</span>
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                color: '#1e293b',
                margin: '0 0 20px 0'
              }}>
                🎯 Enterprise Assessment
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                margin: '0'
              }}>
                Comprehensive analysis of your current tax infrastructure with dedicated solution architects. 
                Custom implementation roadmap and ROI projections delivered within 48 hours.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: '900',
                margin: '0 auto 30px auto',
                boxShadow: '0 20px 60px rgba(34, 197, 94, 0.3)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)'
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>2</span>
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                color: '#1e293b',
                margin: '0 0 20px 0'
              }}>
                🚀 Seamless Migration
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                margin: '0'
              }}>
                Zero-downtime deployment with parallel system operation. Automated data migration, 
                custom integrations, and real-time validation ensure business continuity.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                fontWeight: '900',
                margin: '0 auto 30px auto',
                boxShadow: '0 20px 60px rgba(124, 58, 237, 0.3)',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: '-10px',
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.2) 0%, transparent 70%)',
                  borderRadius: '50%',
                  filter: 'blur(20px)'
                }} />
                <span style={{ position: 'relative', zIndex: 1 }}>3</span>
              </div>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                color: '#1e293b',
                margin: '0 0 20px 0'
              }}>
                🎓 Training & Optimization
              </h3>
              <p style={{
                color: '#64748b',
                fontSize: '1.1rem',
                lineHeight: '1.6',
                margin: '0'
              }}>
                Comprehensive team training with certification programs. Ongoing optimization, 
                performance monitoring, and quarterly business reviews with dedicated CSM.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Enterprise CTA Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 25%, #7c3aed 75%, #c026d3 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <h2 style={{
            fontSize: '4rem',
            fontWeight: '900',
            margin: '0 0 30px 0',
            color: 'white',
            letterSpacing: '-2px',
            lineHeight: '1.1'
          }}>
            Transform Your Tax Operations
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Today
            </span>
          </h2>
          <p style={{
            fontSize: '1.4rem',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '50px',
            maxWidth: '800px',
            margin: '0 auto 50px auto',
            lineHeight: '1.6'
          }}>
            Join Fortune 500 companies using our enterprise platform. 
            Schedule a personalized demo and see 300% ROI in your first year.
          </p>
          
          <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', marginBottom: '60px' }}>
            <Button style={{
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
              border: 'none',
              color: '#1e293b',
              fontSize: '1.4rem',
              fontWeight: '800',
              padding: '20px 50px',
              borderRadius: '20px',
              boxShadow: '0 15px 40px rgba(251, 191, 36, 0.4)',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              🎯 Schedule Enterprise Demo
              <ArrowRight style={{ width: '24px', height: '24px' }} />
            </Button>
            
            <Button style={{
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              fontSize: '1.4rem',
              fontWeight: '700',
              padding: '18px 45px',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}>
              📊 Calculate ROI
            </Button>
          </div>

          {/* Trust metrics */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: 'white',
                margin: '0 0 10px 0'
              }}>$2.4B+</p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                fontWeight: '600',
                margin: '0'
              }}>Daily Processing</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: 'white',
                margin: '0 0 10px 0'
              }}>500+</p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                fontWeight: '600',
                margin: '0'
              }}>Enterprise Clients</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: 'white',
                margin: '0 0 10px 0'
              }}>99.9%</p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                fontWeight: '600',
                margin: '0'
              }}>Uptime SLA</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontSize: '3rem',
                fontWeight: '900',
                color: 'white',
                margin: '0 0 10px 0'
              }}>24/7</p>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '1.1rem',
                fontWeight: '600',
                margin: '0'
              }}>Expert Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '80px 20px 40px 20px'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '60px',
            marginBottom: '60px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <div style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  borderRadius: '16px',
                  padding: '12px',
                  fontSize: '1.8rem'
                }}>💼</div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '900',
                  margin: '0',
                  background: 'linear-gradient(135deg, #ffffff 0%, #e0f2fe 50%, #bbf7d0 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  TaxPro Enterprise
                </h3>
              </div>
              <p style={{
                fontSize: '1.1rem',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: '1.6',
                marginBottom: '25px'
              }}>
                Transforming tax operations for Fortune 500 companies with enterprise-grade 
                automation, security, and global compliance.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                <Badge style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  color: 'white',
                  fontSize: '0.9rem',
                  padding: '8px 16px',
                  border: 'none'
                }}>
                  🛡️ SOC 2 Certified
                </Badge>
                <Badge style={{
                  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
                  color: 'white',
                  fontSize: '0.9rem',
                  padding: '8px 16px',
                  border: 'none'
                }}>
                  ⭐ 99.9% Uptime
                </Badge>
              </div>
            </div>

            <div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '25px'
              }}>
                Enterprise Solutions
              </h4>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {['Tax Automation Platform', 'Global Compliance Suite', 'AI-Powered Analytics', 'Multi-Entity Management', 'Real-time Reporting'].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ color: '#3b82f6' }}>▶</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '25px'
              }}>
                Enterprise Support
              </h4>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {['24/7 Priority Support', 'Dedicated Account Manager', 'Implementation Services', 'Training & Certification', 'Custom Integrations'].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ color: '#22c55e' }}>▶</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '800',
                color: 'white',
                marginBottom: '25px'
              }}>
                Legal & Compliance
              </h4>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                {['Privacy Policy', 'Terms of Service', 'Security Documentation', 'Compliance Center', 'Data Processing Agreement'].map((item, index) => (
                  <li key={index} style={{ marginBottom: '12px' }}>
                    <a href="#" style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ color: '#7c3aed' }}>▶</span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '40px',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '1rem',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: '0'
            }}>
              © 2025 TaxPro Enterprise. All rights reserved. | 
              <span style={{ color: '#3b82f6', marginLeft: '8px' }}>
                Trusted by Fortune 500 Companies Worldwide
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
