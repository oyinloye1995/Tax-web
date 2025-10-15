import React, { useState } from "react";

const RewardsDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [userStats] = useState({
    totalPoints: 2450,
    lifetimeEarned: 8750,
    currentTier: 'Gold',
    nextTier: 'Platinum',
    pointsToNextTier: 550
  });

  const [recentActivity] = useState([
    { id: 1, action: 'Community Volunteer Event', points: 150, date: '2025-10-14', type: 'earned' },
    { id: 2, action: 'Local Business Purchase', points: 25, date: '2025-10-13', type: 'earned' },
    { id: 3, action: 'Gift Card Redemption', points: -100, date: '2025-10-12', type: 'redeemed' },
    { id: 4, action: 'City Council Attendance', points: 75, date: '2025-10-11', type: 'earned' },
    { id: 5, action: 'Environmental Program', points: 100, date: '2025-10-10', type: 'earned' }
  ]);

  const [availableRewards] = useState([
    { id: 1, name: '$10 Local Restaurant Gift Card', points: 200, category: 'dining', image: '🍽️' },
    { id: 2, name: '$25 Gas Station Credit', points: 500, category: 'transport', image: '⛽' },
    { id: 3, name: 'Movie Theater Tickets (2)', points: 300, category: 'entertainment', image: '🎬' },
    { id: 4, name: '$50 Grocery Store Voucher', points: 1000, category: 'shopping', image: '🛒' },
    { id: 5, name: 'Public Transit Pass', points: 150, category: 'transport', image: '🚌' },
    { id: 6, name: 'Local Gym Day Pass', points: 100, category: 'health', image: '💪' }
  ]);

  const filterRewards = (category: string) => {
    if (category === 'all') return availableRewards;
    return availableRewards.filter(reward => reward.category === category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            CitizenRewards Dashboard
          </div>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => window.location.hash = ''}
          >
            ← Back Home
          </button>
        </nav>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome Back, Citizen! 🎉</h1>
              <p className="text-lg opacity-90">You're making a difference in your community</p>
            </div>
            <div className="mt-4 md:mt-0 text-center">
              <div className="text-4xl font-bold">{userStats.totalPoints.toLocaleString()}</div>
              <div className="text-sm opacity-90">Available Points</div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">{userStats.totalPoints.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mt-1">Current Points</div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">{userStats.lifetimeEarned.toLocaleString()}</div>
              <div className="text-sm text-gray-600 mt-1">Lifetime Earned</div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">🏆 {userStats.currentTier}</div>
              <div className="text-sm text-gray-600 mt-1">Current Tier</div>
            </div>
          </div>
          
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">{userStats.pointsToNextTier}</div>
              <div className="text-sm text-gray-600 mt-1">To {userStats.nextTier}</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity 📊</h2>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center space-x-4">
                      <div className={`text-2xl ${activity.type === 'earned' ? 'text-green-600' : 'text-red-600'}`}>
                        {activity.type === 'earned' ? '💰' : '🎁'}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{activity.action}</div>
                        <div className="text-sm text-gray-600">{activity.date}</div>
                      </div>
                    </div>
                    <div className={`font-bold ${activity.type === 'earned' ? 'text-green-600' : 'text-red-600'}`}>
                      {activity.type === 'earned' ? '+' : ''}{activity.points} pts
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions ⚡</h2>
              <div className="space-y-4">
                <button className="w-full p-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-xl hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 hover:scale-105 shadow-lg">
                  🎁 Browse Rewards
                </button>
                <button className="w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg">
                  📅 Find Events
                </button>
                <button className="w-full p-4 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-xl hover:from-orange-700 hover:to-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg">
                  🏆 View Leaderboard
                </button>
                <button className="w-full p-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-300 hover:scale-105 shadow-lg">
                  ⚙️ Settings
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Available Rewards Section */}
        <div className="mt-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Available Rewards 🎁</h2>
              <div className="flex flex-wrap gap-2">
                <button 
                  onClick={() => setSelectedCategory('all')}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  All
                </button>
                <button 
                  onClick={() => setSelectedCategory('dining')}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === 'dining' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Dining
                </button>
                <button 
                  onClick={() => setSelectedCategory('transport')}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === 'transport' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Transport
                </button>
                <button 
                  onClick={() => setSelectedCategory('entertainment')}
                  className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === 'entertainment' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                >
                  Entertainment
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterRewards(selectedCategory).map((reward) => (
                <div key={reward.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-center">
                    <div className="text-4xl mb-3">{reward.image}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{reward.name}</h3>
                    <div className="text-2xl font-bold text-blue-600 mb-4">{reward.points} pts</div>
                    <button 
                      disabled={userStats.totalPoints < reward.points}
                      className={`w-full py-2 px-4 rounded-lg transition-colors ${
                        userStats.totalPoints >= reward.points 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {userStats.totalPoints >= reward.points ? 'Redeem' : 'Not Enough Points'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsDashboard;
      margin: '0 1rem'
    },
    stepNumber: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1rem',
      fontWeight: 'bold',
      marginRight: '0.5rem'
    },
    stepActive: {
      backgroundColor: '#3b82f6',
      color: 'white'
    },
    stepCompleted: {
      backgroundColor: '#10b981',
      color: 'white'
    },
    stepInactive: {
      backgroundColor: '#e5e7eb',
      color: '#6b7280'
    },
    formCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      marginBottom: '2rem'
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#1e293b',
      marginBottom: '1rem'
    },
    subtitle: {
      color: '#64748b',
      marginBottom: '2rem'
    },
    inputGroup: {
      marginBottom: '1.5rem'
    },
    label: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
      marginBottom: '0.5rem'
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '1rem',
      boxSizing: 'border-box' as const
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '1rem',
      backgroundColor: 'white',
      boxSizing: 'border-box' as const
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '2rem'
    },
    button: {
      padding: '0.75rem 2rem',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.2s'
    },
    primaryButton: {
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#6b7280',
      border: '1px solid #d1d5db'
    }
  };

  const goHome = () => {
    window.location.href = '/';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div style={styles.formCard}>
            <h2 style={styles.title}>Personal Information</h2>
            <p style={styles.subtitle}>Let's start with your basic information</p>
            
            <div style={styles.inputGroup}>
              <label style={styles.label}>Filing Status</label>
              <select 
                style={styles.select}
                name="filingStatus"
                value={formData.filingStatus}
                onChange={handleInputChange}
              >
                <option value="single">Single</option>
                <option value="married">Married Filing Jointly</option>
                <option value="married-separate">Married Filing Separately</option>
                <option value="head">Head of Household</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Annual Income</label>
              <input
                style={styles.input}
                type="number"
                name="income"
                value={formData.income}
                onChange={handleInputChange}
                placeholder="Enter your annual income"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div style={styles.formCard}>
            <h2 style={styles.title}>Deductions</h2>
            <p style={styles.subtitle}>Add your deductions to reduce your tax liability</p>
            
            <div style={styles.inputGroup}>
              <label style={styles.label}>Total Deductions</label>
              <input
                style={styles.input}
                type="number"
                name="deductions"
                value={formData.deductions}
                onChange={handleInputChange}
                placeholder="Enter your total deductions"
              />
            </div>
          </div>
        );
      case 3:
        const income = parseFloat(formData.income) || 0;
        const deductions = parseFloat(formData.deductions) || 0;
        const taxableIncome = Math.max(0, income - deductions);
        const estimatedTax = taxableIncome * 0.22; // Simplified calculation
        
        return (
          <div style={styles.formCard}>
            <h2 style={styles.title}>Review & Submit</h2>
            <p style={styles.subtitle}>Please review your information before submitting</p>
            
            <div style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '6px', marginBottom: '1rem' }}>
              <p><strong>Filing Status:</strong> {formData.filingStatus}</p>
              <p><strong>Annual Income:</strong> ${income.toLocaleString()}</p>
              <p><strong>Deductions:</strong> ${deductions.toLocaleString()}</p>
              <p><strong>Taxable Income:</strong> ${taxableIncome.toLocaleString()}</p>
              <p><strong>Estimated Tax:</strong> ${estimatedTax.toLocaleString()}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>TaxEasy</div>
          <button 
            style={styles.secondaryButton}
            onClick={goHome}
          >
            ← Back to Home
          </button>
        </nav>
      </header>

      <main style={styles.main}>
        {/* Step Indicator */}
        <div style={styles.stepIndicator}>
          {[1, 2, 3].map((step) => (
            <div key={step} style={styles.step}>
              <div style={{
                ...styles.stepNumber,
                ...(step === currentStep ? styles.stepActive : 
                   step < currentStep ? styles.stepCompleted : styles.stepInactive)
              }}>
                {step}
              </div>
              <span style={{ 
                color: step <= currentStep ? '#1e293b' : '#6b7280',
                fontWeight: step === currentStep ? '600' : '400'
              }}>
                {step === 1 ? 'Personal Info' : step === 2 ? 'Deductions' : 'Review'}
              </span>
            </div>
          ))}
        </div>

        {renderStepContent()}

        <div style={styles.buttonGroup}>
          <button 
            style={{...styles.button, ...styles.secondaryButton}}
            onClick={prevStep}
            disabled={currentStep === 1}
          >
            Previous
          </button>
          <button 
            style={{...styles.button, ...styles.primaryButton}}
            onClick={currentStep === 3 ? () => alert('Tax filing submitted!') : nextStep}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            {currentStep === 3 ? 'Submit Filing' : 'Next'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default TaxFilingPage;