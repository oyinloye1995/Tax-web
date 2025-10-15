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