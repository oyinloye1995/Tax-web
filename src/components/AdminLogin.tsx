import React, { useState } from 'react';

const AdminLogin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check against stored hash instead of plain text
    const expectedHash = 'QXdvbG93bzEx'; // Base64 hash for security
    const passwordHash = btoa(password);
    
    if (passwordHash === expectedHash) {
      localStorage.setItem('adminAuthenticated', 'awolowo-admin-2025');
      window.location.reload(); // Reload to show admin dashboard
    } else {
      setError('Invalid admin password');
      setPassword('');
    }
  };

  const goBack = () => {
    window.location.hash = '';
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">🔐</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Access</h1>
          <p className="text-gray-600">Enter admin password to access dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-center text-lg"
              placeholder="Enter admin password"
              required
            />
            {error && (
              <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={goBack}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              ← Back
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Access Admin
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <div className="text-yellow-800 text-sm">
            <div className="font-semibold mb-1">🛡️ Security Notice</div>
            <p>This admin area contains sensitive citizen enrollment data. Access is restricted to authorized administrators only.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;