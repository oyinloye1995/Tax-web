import React, { useState } from "react";

const BenefitsCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [benefits] = useState([
    {
      id: 1,
      title: 'Healthcare Discounts',
      description: 'Get up to 20% off medical consultations and prescriptions',
      points: 0,
      category: 'health',
      icon: '🏥',
      features: ['Free annual checkup', 'Prescription discounts', '24/7 health hotline']
    },
    {
      id: 2,
      title: 'Education Support',
      description: 'Access to free courses and skill development programs',
      points: 0,
      category: 'education',
      icon: '📚',
      features: ['Online courses', 'Certification programs', 'Career counseling']
    },
    {
      id: 3,
      title: 'Transportation Benefits',
      description: 'Public transport subsidies and ride-sharing discounts',
      points: 100,
      category: 'transport',
      icon: '🚌',
      features: ['Monthly transit pass', 'Ride-share credits', 'Bike rental discounts']
    },
    {
      id: 4,
      title: 'Recreation Facilities',
      description: 'Access to community centers, parks, and sports facilities',
      points: 50,
      category: 'recreation',
      icon: '🏊',
      features: ['Pool access', 'Gym membership', 'Sports equipment rental']
    },
    {
      id: 5,
      title: 'Senior Citizen Care',
      description: 'Special assistance and benefits for elderly citizens',
      points: 0,
      category: 'senior',
      icon: '👴',
      features: ['Home care services', 'Social activities', 'Medical support']
    },
    {
      id: 6,
      title: 'Environmental Rewards',
      description: 'Earn points for eco-friendly activities and purchases',
      points: 200,
      category: 'environment',
      icon: '🌱',
      features: ['Recycling rewards', 'Green transport bonuses', 'Solar panel incentives']
    },
    {
      id: 7,
      title: 'Local Business Perks',
      description: 'Exclusive discounts at participating local businesses',
      points: 150,
      category: 'shopping',
      icon: '🏪',
      features: ['Restaurant discounts', 'Retail savings', 'Service provider deals']
    },
    {
      id: 8,
      title: 'Community Events',
      description: 'Priority access to festivals, concerts, and local events',
      points: 75,
      category: 'events',
      icon: '🎉',
      features: ['Early bird tickets', 'VIP access', 'Free event passes']
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Benefits', icon: '🌟' },
    { id: 'health', name: 'Health', icon: '🏥' },
    { id: 'education', name: 'Education', icon: '📚' },
    { id: 'transport', name: 'Transport', icon: '🚌' },
    { id: 'recreation', name: 'Recreation', icon: '🏊' },
    { id: 'environment', name: 'Environment', icon: '🌱' },
    { id: 'shopping', name: 'Shopping', icon: '🏪' },
    { id: 'events', name: 'Events', icon: '🎉' }
  ];

  const filteredBenefits = benefits.filter(benefit => {
    const matchesSearch = benefit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         benefit.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || benefit.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-emerald-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
            Citizen Benefits Catalog
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
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎁 Exclusive Citizen Benefits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover all the amazing benefits available to you as a valued citizen. 
            From healthcare to education, we've got you covered!
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search benefits..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="hidden sm:inline">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBenefits.map((benefit) => (
            <div key={benefit.id} className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              {/* Card Header */}
              <div className="bg-gradient-to-r from-blue-600 to-emerald-600 p-6 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-4xl">{benefit.icon}</div>
                  {benefit.points > 0 && (
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold">
                      {benefit.points} pts required
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm opacity-90">{benefit.description}</p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2 mb-6">
                  {benefit.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <button className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                  benefit.points === 0
                    ? 'bg-green-600 text-white hover:bg-green-700 hover:scale-105'
                    : 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                }`}>
                  {benefit.points === 0 ? '✨ Available Now' : `🎁 Unlock with ${benefit.points} Points`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredBenefits.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No benefits found</h3>
            <p className="text-gray-600">Try adjusting your search or category filter</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-lg opacity-90 mb-6">
            Join our Citizen Rewards program today and unlock all these amazing benefits!
          </p>
          <button 
            onClick={() => window.location.hash = 'signup'}
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors hover:scale-105 transform"
          >
            🎁 Join Rewards Program
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsCatalog;