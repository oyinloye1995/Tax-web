import React from "react";
import { useAuth } from "./contexts/AuthContext";
import LoginPage from "./pages/LoginPage";
import RewardsDashboard from "./pages/RewardsDashboard";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import DocumentsPage from "./pages/DocumentsPage";
import BenefitsCatalog from "./pages/BenefitsCatalog";
import ContactPage from "./pages/ContactPage";
import EmailSettings from "./components/EmailSettings";
import AdminDashboard from "./pages/AdminDashboard";

const TaxApp = () => {
  const { user, logout } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // Simple routing based on URL hash
  const [currentPage, setCurrentPage] = React.useState(() => {
    const hash = window.location.hash.slice(1);
    return hash || 'home';
  });

  React.useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      setCurrentPage(hash || 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Protected routes - redirect to login if not authenticated
  const protectedPages = ['dashboard', 'profile', 'documents', 'filing'];
  if (protectedPages.includes(currentPage) && !user) {
    window.location.hash = 'login';
    return <LoginPage />;
  }

  const navigateToLogin = () => {
    window.location.hash = 'login';
    setCurrentPage('login');
  };

  const navigateToSignUp = () => {
    window.location.hash = 'signup';
    setCurrentPage('signup');
  };

  const navigateToDashboard = () => {
    window.location.hash = 'dashboard';
    setCurrentPage('dashboard');
  };

  const navigateToProfile = () => {
    window.location.hash = 'profile';
    setCurrentPage('profile');
  };

  const navigateToDocuments = () => {
    window.location.hash = 'documents';
    setCurrentPage('documents');
  };

  const navigateToHelp = () => {
    window.location.hash = 'help';
    setCurrentPage('help');
  };

  const navigateToFiling = () => {
    window.location.hash = 'filing';
    setCurrentPage('filing');
  };

  const navigateToAbout = () => {
    window.location.hash = 'about';
    setCurrentPage('about');
  };

  const navigateToAdmin = () => {
    window.location.hash = 'admin';
    setCurrentPage('admin');
  };

  const navigateToContact = () => {
    window.location.hash = 'contact';
    setCurrentPage('contact');
  };

  const navigateToHome = () => {
    window.location.hash = '';
    setCurrentPage('home');
  };

  // Route to different pages
  if (currentPage === 'login') {
    return <LoginPage />;
  }

  if (currentPage === 'signup') {
    return <SignUpPage />;
  }

  if (currentPage === 'dashboard') {
    return <Dashboard />;
  }

  if (currentPage === 'profile') {
    return <ProfilePage />;
  }

  if (currentPage === 'documents') {
    return <DocumentsPage />;
  }

  if (currentPage === 'help') {
    return <BenefitsCatalog />;
  }
  
  if (currentPage === 'filing') {
    return <RewardsDashboard />;
  }
  
  if (currentPage === 'about') {
    return <AboutPage />;
  }

  if (currentPage === 'admin') {
    return <AdminDashboard />;
  }

  if (currentPage === 'contact') {
    return <ContactPage />;
  }

  if (currentPage === 'email-settings') {
    return <EmailSettings />;
  }

  // Home page with beautiful responsive design - restored original styling
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-emerald-50 font-sans">
      {/* Header with mobile responsive navigation */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-lg">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200" 
            onClick={navigateToHome}
          >
            CitizenRewards
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300"
              onClick={navigateToAbout}
            >
              How It Works
            </button>
            <button 
              className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2"
              onClick={navigateToHelp}
            >
              Benefits
            </button>
            <button 
              className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2"
              onClick={navigateToContact}
            >
              Support
            </button>
            
            <button 
              className="px-3 py-2 text-emerald-600 border-2 border-emerald-600 rounded-lg text-sm font-medium hover:bg-emerald-600 hover:text-white transition-all duration-300 ml-2"
              onClick={navigateToAdmin}
            >
              🏛️ Admin
            </button>
            
            {user ? (
              // Authenticated user navigation
              <>
                <button 
                  className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2"
                  onClick={navigateToDashboard}
                >
                  Dashboard
                </button>
                <button 
                  className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2"
                  onClick={navigateToProfile}
                >
                  Profile
                </button>
                <button
                  className="px-3 py-2 bg-blue-600 text-white border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 ml-2"
                  onClick={() => {
                    logout();
                    navigateToHome();
                  }}
                >
                  Logout ({user.firstName})
                </button>
              </>
            ) : (
              // Unauthenticated user navigation
              <>
                <button 
                  className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2"
                  onClick={navigateToLogin}
                >
                  Login
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 ml-2"
                  onClick={navigateToSignUp}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              aria-label="Toggle mobile menu"
              aria-expanded={showMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-2 space-y-2">
              <button 
                className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                onClick={() => { navigateToAbout(); setShowMobileMenu(false); }}
              >
                How It Works
              </button>
              <button 
                className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                onClick={() => { navigateToHelp(); setShowMobileMenu(false); }}
              >
                Benefits
              </button>
              <button 
                className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                onClick={() => { navigateToContact(); setShowMobileMenu(false); }}
              >
                Support
              </button>
              
              <button 
                className="block w-full text-left px-4 py-2 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                onClick={() => { navigateToAdmin(); setShowMobileMenu(false); }}
              >
                🏛️ Admin Dashboard
              </button>
              
              {user ? (
                <>
                  <button 
                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    onClick={() => { navigateToDashboard(); setShowMobileMenu(false); }}
                  >
                    Dashboard
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    onClick={() => { navigateToProfile(); setShowMobileMenu(false); }}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                    onClick={() => { logout(); navigateToHome(); setShowMobileMenu(false); }}
                  >
                    Logout ({user.firstName})
                  </button>
                </>
              ) : (
                <>
                  <button 
                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    onClick={() => { navigateToLogin(); setShowMobileMenu(false); }}
                  >
                    Login
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg"
                    onClick={() => { navigateToSignUp(); setShowMobileMenu(false); }}
                  >
                    Sign Up
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Beautiful gradient background */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Dramatic Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-600 to-emerald-500"></div>
        
        {/* Overlay for contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Content */}
        <div className="relative px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40 w-full">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-8xl drop-shadow-lg">
              Earn & Redeem<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Citizen Rewards
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-white/90 max-w-2xl mx-auto sm:text-2xl font-medium drop-shadow-md">
              Access exclusive benefits, earn points for community participation, and redeem amazing rewards as a valued citizen.
            </p>
            <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:justify-center">
              <button
                className="px-12 py-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-2xl text-xl font-black hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105"
                onClick={navigateToSignUp}
              >
                🎁 Join Rewards Program →
              </button>
              <button 
                className="px-12 py-6 text-white border-4 border-white rounded-2xl text-xl font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
                onClick={navigateToAbout}
              >
                Explore Benefits
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Join Our Citizen Rewards Program?
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Unlock exclusive benefits, earn points for civic engagement, and enjoy rewards tailored for active citizens
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Exclusive Rewards
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Access premium benefits including discounts, priority services, and special citizen-only offers and experiences.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Earn Points Daily
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Gain points for community participation, volunteering, civic engagement, and using local services.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 sm:col-span-2 lg:col-span-1">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Easy Redemption
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Redeem your points instantly for cash back, gift cards, local business discounts, and community perks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Status Indicator */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-lg">
        Welcome to CitizenRewards! �
      </div>
    </div>
  );
};

export default TaxApp;
