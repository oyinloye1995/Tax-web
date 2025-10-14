// Simple test version
const TestIndex = () => {
  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">TaxEasy</h1>
        <p className="text-lg text-slate-600 mb-6">Pay Your Taxes Simply & Securely</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">🛡️ Secure</h3>
            <p className="text-blue-600">Bank-level security for your data</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-2">⚡ Fast</h3>
            <p className="text-green-600">Complete filing in minutes</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">🕒 24/7</h3>
            <p className="text-purple-600">Available anytime</p>
          </div>
        </div>
        
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TestIndex;