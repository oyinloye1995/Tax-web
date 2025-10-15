import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { initializeEmailService, sendEmail, EmailTemplates, SETUP_INSTRUCTIONS } from '@/lib/email-service';
import { useEmail } from '@/hooks/use-email';

const EmailSettings: React.FC = () => {
  const [serviceId, setServiceId] = useState('');
  const [templateId, setTemplateId] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [isConfigured, setIsConfigured] = useState(false);
  const [testEmail, setTestEmail] = useState('');
  
  const { isLoading, isSuccess, error, sendCustomEmail, reset } = useEmail();

  useEffect(() => {
    // Check if email service is already configured
    const configured = initializeEmailService();
    setIsConfigured(configured);
  }, []);

  const handleSaveConfiguration = () => {
    // Save to localStorage for development (in production, use proper backend)
    if (serviceId && templateId && publicKey) {
      localStorage.setItem('emailjs_service_id', serviceId);
      localStorage.setItem('emailjs_template_id', templateId);
      localStorage.setItem('emailjs_public_key', publicKey);
      if (adminEmail) {
        localStorage.setItem('admin_email', adminEmail);
      }
      
      setIsConfigured(true);
      alert('Email configuration saved! Please refresh the page to apply changes.');
    }
  };

  const handleTestEmail = async () => {
    if (!testEmail) {
      alert('Please enter a test email address');
      return;
    }

    const testEmailData = {
      to_email: testEmail,
      to_name: 'Test User',
      from_name: 'Tax Web System',
      subject: 'Test Email from Tax Web',
      message: `
        This is a test email from your Tax Web application.
        
        If you received this email, your email configuration is working correctly!
        
        Configuration Details:
        - Service ID: ${serviceId || 'From environment'}
        - Template ID: ${templateId || 'From environment'}
        - Sent at: ${new Date().toLocaleString()}
        
        Thank you for using Tax Web!
      `
    };

    await sendCustomEmail(testEmailData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span>📧 Email Configuration</span>
            {isConfigured ? (
              <Badge variant="default" className="bg-green-600">Configured</Badge>
            ) : (
              <Badge variant="destructive">Not Configured</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-auto">
              <TabsTrigger value="setup" className="text-xs sm:text-sm">Setup</TabsTrigger>
              <TabsTrigger value="test" className="text-xs sm:text-sm">Test Email</TabsTrigger>
              <TabsTrigger value="instructions" className="text-xs sm:text-sm">Instructions</TabsTrigger>
            </TabsList>
            
            <TabsContent value="setup" className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="serviceId">EmailJS Service ID</Label>
                  <Input
                    id="serviceId"
                    value={serviceId}
                    onChange={(e) => setServiceId(e.target.value)}
                    placeholder="service_xxxxxxx"
                  />
                </div>
                
                <div>
                  <Label htmlFor="templateId">EmailJS Template ID</Label>
                  <Input
                    id="templateId"
                    value={templateId}
                    onChange={(e) => setTemplateId(e.target.value)}
                    placeholder="template_xxxxxxx"
                  />
                </div>
                
                <div>
                  <Label htmlFor="publicKey">EmailJS Public Key</Label>
                  <Input
                    id="publicKey"
                    value={publicKey}
                    onChange={(e) => setPublicKey(e.target.value)}
                    placeholder="Your public key"
                  />
                </div>
                
                <div>
                  <Label htmlFor="adminEmail">Admin Email (where notifications will be sent)</Label>
                  <Input
                    id="adminEmail"
                    type="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                    placeholder="admin@yourcompany.com"
                  />
                </div>
                
                <Button onClick={handleSaveConfiguration} className="w-full mt-4">
                  Save Configuration
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="test" className="space-y-4">
              <div>
                <Label htmlFor="testEmail">Test Email Address</Label>
                <Input
                  id="testEmail"
                  type="email"
                  value={testEmail}
                  onChange={(e) => setTestEmail(e.target.value)}
                  placeholder="test@example.com"
                />
              </div>
              
              <Button 
                onClick={handleTestEmail} 
                disabled={isLoading || !isConfigured}
                className="w-full"
              >
                {isLoading ? 'Sending...' : 'Send Test Email'}
              </Button>
              
              {isSuccess && (
                <Alert className="border-green-500">
                  <AlertDescription>
                    ✅ Test email sent successfully!
                  </AlertDescription>
                </Alert>
              )}
              
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>
                    ❌ Error: {error}
                  </AlertDescription>
                </Alert>
              )}
              
              {(isSuccess || error) && (
                <Button variant="outline" onClick={reset} className="w-full">
                  Reset Status
                </Button>
              )}
            </TabsContent>
            
            <TabsContent value="instructions" className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Setup Instructions:</h3>
                
                <ol className="list-decimal list-inside space-y-2">
                  <li>{SETUP_INSTRUCTIONS.step1}</li>
                  <li>{SETUP_INSTRUCTIONS.step2}</li>
                  <li>{SETUP_INSTRUCTIONS.step3}</li>
                  <li>{SETUP_INSTRUCTIONS.step4}</li>
                  <li>{SETUP_INSTRUCTIONS.step5}</li>
                </ol>
                
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Environment Variables (.env file):</h4>
                  <div className="space-y-1 font-mono text-sm">
                    {SETUP_INSTRUCTIONS.envVars.map((env, index) => (
                      <div key={index} className="bg-white p-2 rounded border">
                        {env}
                      </div>
                    ))}
                  </div>
                </div>
                
                <Alert>
                  <AlertDescription>
                    <strong>Important:</strong> For production use, always use environment variables 
                    instead of hardcoding credentials. The configuration form above is for development only.
                  </AlertDescription>
                </Alert>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Email Template Variables:</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Make sure your EmailJS template includes these variables:
                  </p>
                  <ul className="text-sm space-y-1">
                    <li><code>{'{{to_name}}'}</code> - Recipient name</li>
                    <li><code>{'{{from_name}}'}</code> - Sender name</li>
                    <li><code>{'{{subject}}'}</code> - Email subject</li>
                    <li><code>{'{{message}}'}</code> - Email message content</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailSettings;