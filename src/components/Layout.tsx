import React from 'react';
import { useAuth } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({ children, title, description }: LayoutProps) {
  const { user, logout } = useAuth();
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  const navigateToHome = () => {
    window.location.hash = '';
  };

  const navigateToAbout = () => {
    window.location.hash = 'about';
  };

  const navigateToHelp = () => {
    window.location.hash = 'help';
  };

  const navigateToContact = () => {
    window.location.hash = 'contact';
  };

  const navigateToDashboard = () => {
    window.location.hash = 'dashboard';
  };

  const navigateToProfile = () => {
    window.location.hash = 'profile';
  };

  const navigateToLogin = () => {
    window.location.hash = 'login';
  };

  const navigateToSignUp = () => {
    window.location.hash = 'signup';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 font-sans">
      {/* Beautiful Header with mobile responsive navigation */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <div 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform duration-200" 
            onClick={navigateToHome}
          >
            TaxEasy
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <button 
              className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
              onClick={navigateToAbout}
            >
              About
            </button>
            <button 
              className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2 hover:scale-105 hover:shadow-md"
              onClick={navigateToHelp}
            >
              Help
            </button>
            <button 
              className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2 hover:scale-105 hover:shadow-md"
              onClick={navigateToContact}
            >
              Contact
            </button>
            
            {user ? (
              // Authenticated user navigation
              <>
                <button 
                  className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2 hover:scale-105 hover:shadow-md"
                  onClick={navigateToDashboard}
                >
                  Dashboard
                </button>
                <button 
                  className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2 hover:scale-105 hover:shadow-md"
                  onClick={navigateToProfile}
                >
                  Profile
                </button>
                <button
                  className="px-3 py-2 bg-blue-600 text-white border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-700 hover:border-blue-700 transition-all duration-300 ml-2 hover:scale-105 hover:shadow-lg"
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
                  className="px-3 py-2 text-blue-600 border-2 border-blue-600 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 ml-2 hover:scale-105 hover:shadow-md"
                  onClick={navigateToLogin}
                >
                  Login
                </button>
                <button
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white border-2 border-transparent rounded-lg text-sm font-medium hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 ml-2 hover:scale-105 hover:shadow-lg"
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
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200"
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
          <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-slate-200">
            <div className="px-4 py-2 space-y-2">
              <button 
                className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => { navigateToAbout(); setShowMobileMenu(false); }}
              >
                About
              </button>
              <button 
                className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => { navigateToHelp(); setShowMobileMenu(false); }}
              >
                Help
              </button>
              <button 
                className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                onClick={() => { navigateToContact(); setShowMobileMenu(false); }}
              >
                Contact
              </button>
              
              {user ? (
                <>
                  <button 
                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => { navigateToDashboard(); setShowMobileMenu(false); }}
                  >
                    Dashboard
                  </button>
                  <button 
                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => { navigateToProfile(); setShowMobileMenu(false); }}
                  >
                    Profile
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-lg transition-colors duration-200"
                    onClick={() => { logout(); navigateToHome(); setShowMobileMenu(false); }}
                  >
                    Logout ({user.firstName})
                  </button>
                </>
              ) : (
                <>
                  <button 
                    className="block w-full text-left px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                    onClick={() => { navigateToLogin(); setShowMobileMenu(false); }}
                  >
                    Login
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700 rounded-lg transition-all duration-200"
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

      {/* Page Content */}
      <main className="relative">
        {/* Page Header Section */}
        {title && (
          <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-emerald-50 py-12 sm:py-16">
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                {title}
              </h1>
              {description && (
                <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  {description}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Main Content */}
        <div className="relative">
          {children}
        </div>
      </main>
    </div>
  );
}