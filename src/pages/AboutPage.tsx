const AboutPage = () => {
  const goHome = () => {
    window.location.hash = '';
  };

  const goToSignUp = () => {
    window.location.hash = 'signup';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-emerald-500">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={goHome}
          >
            CitizenRewards
          </div>
          <button 
            className="px-4 py-2 text-blue-600 border-2 border-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
            onClick={goHome}
          >
            ← Back to Home
          </button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            How CitizenRewards Works
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Earn points through civic engagement and redeem them for valuable community benefits. 
            It's that simple!
          </p>
        </div>

        {/* Step-by-Step Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎁 Join the Program</h3>
            <p className="text-gray-600 mb-6">
              Sign up for your free CitizenRewards account. It takes just 2 minutes to get started and begin earning points.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-blue-800 font-medium">✨ Instant 500 welcome points!</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🌟 Participate & Earn</h3>
            <p className="text-gray-600 mb-6">
              Engage in community activities, volunteer work, civic events, and educational programs to earn points.
            </p>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-purple-800 font-medium">💪 50-500 points per activity</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Redeem Rewards</h3>
            <p className="text-gray-600 mb-6">
              Use your points to access transit discounts, recreation benefits, educational resources, and local business deals.
            </p>
            <div className="bg-emerald-50 rounded-lg p-4">
              <p className="text-emerald-800 font-medium">🎁 100+ reward options available</p>
            </div>
          </div>
        </div>

        {/* Ways to Earn Points */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Ways to Earn Points</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="font-bold text-gray-800 mb-2">Civic Engagement</h4>
              <p className="text-gray-600 text-sm">Attend city council meetings, vote in elections, participate in community forums</p>
              <div className="text-blue-600 font-bold mt-2">100-200 pts</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h4 className="font-bold text-gray-800 mb-2">Environmental Action</h4>
              <p className="text-gray-600 text-sm">Park cleanups, recycling drives, tree planting, sustainability workshops</p>
              <div className="text-green-600 font-bold mt-2">75-150 pts</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h4 className="font-bold text-gray-800 mb-2">Community Service</h4>
              <p className="text-gray-600 text-sm">Food bank volunteering, senior care, youth mentoring, charity events</p>
              <div className="text-purple-600 font-bold mt-2">100-300 pts</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h4 className="font-bold text-gray-800 mb-2">Education & Learning</h4>
              <p className="text-gray-600 text-sm">Attend workshops, complete courses, skill development, teach others</p>
              <div className="text-orange-600 font-bold mt-2">50-200 pts</div>
            </div>
          </div>
        </div>

        {/* Popular Rewards */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Rewards</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🚌</div>
              <h4 className="font-bold text-gray-800 mb-2">Transit Pass Discount</h4>
              <p className="text-gray-600 text-sm mb-3">50% off monthly bus/train passes</p>
              <div className="text-blue-600 font-bold">500 points</div>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">🏊</div>
              <h4 className="font-bold text-gray-800 mb-2">Recreation Center Access</h4>
              <p className="text-gray-600 text-sm mb-3">3-month gym and pool membership</p>
              <div className="text-green-600 font-bold">1,000 points</div>
            </div>
            
            <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">📖</div>
              <h4 className="font-bold text-gray-800 mb-2">Library Fee Waiver</h4>
              <p className="text-gray-600 text-sm mb-3">Forgive all outstanding late fees</p>
              <div className="text-purple-600 font-bold">100 points</div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why CitizenRewards?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🌟</span>
                Community Impact
              </h4>
              <p className="text-gray-600 mb-6">
                Your participation directly benefits your community. Every activity you complete helps improve local services, 
                environmental conditions, and civic engagement levels.
              </p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">💰</span>
                Real Value
              </h4>
              <p className="text-gray-600">
                Earn tangible benefits that save you money and improve your quality of life. From transportation discounts 
                to recreation access, your civic engagement pays off.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                Personal Growth
              </h4>
              <p className="text-gray-600 mb-6">
                Develop new skills, meet like-minded citizens, and make a positive difference in your community while 
                earning recognition for your contributions.
              </p>
              
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="text-2xl mr-3">📱</span>
                Easy to Use
              </h4>
              <p className="text-gray-600">
                Track your activities, monitor your points, and redeem rewards all through our simple, user-friendly platform. 
                No complicated processes or hidden fees.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of citizens already earning rewards for making their communities better!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={goToSignUp}
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                🎁 Join Rewards Program
              </button>
              <button 
                onClick={goHome}
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;