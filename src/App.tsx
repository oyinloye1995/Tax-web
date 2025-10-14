import React from "react";

const TaxApp = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    header: {
      backgroundColor: 'white',
      borderBottom: '1px solid #e2e8f0',
      padding: '1rem 0',
      position: 'sticky' as const,
      top: 0,
      zIndex: 50
    },
    nav: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #3b82f6, #10b981)',
      WebkitBackgroundClip: 'text',
      color: 'transparent'
    },
    heroSection: {
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
      padding: '4rem 1rem',
      textAlign: 'center' as const
    },
    heroTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      color: '#1e293b',
      marginBottom: '1rem',
      lineHeight: '1.2'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#64748b',
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    button: {
      backgroundColor: '#3b82f6',
      color: 'white',
      padding: '12px 32px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginRight: '1rem'
    },
    buttonOutline: {
      backgroundColor: 'transparent',
      color: '#3b82f6',
      border: '2px solid #3b82f6',
      padding: '10px 30px',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    featuresSection: {
      padding: '4rem 1rem',
      backgroundColor: 'white'
    },
    container2: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center' as const,
      marginBottom: '1rem',
      color: '#1e293b'
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#64748b',
      textAlign: 'center' as const,
      marginBottom: '3rem',
      maxWidth: '600px',
      margin: '0 auto 3rem'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem'
    },
    featureCard: {
      backgroundColor: 'white',
      padding: '2rem',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      textAlign: 'center' as const,
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    },
    featureIcon: {
      fontSize: '3rem',
      marginBottom: '1rem'
    },
    featureTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#1e293b'
    },
    featureDescription: {
      color: '#64748b',
      lineHeight: '1.6'
    }
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#2563eb';
    e.currentTarget.style.transform = 'translateY(-2px)';
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#3b82f6';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <nav style={styles.nav}>
          <div style={styles.logo}>TaxEasy</div>
          <div>
            <button style={styles.buttonOutline}>Login</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          Pay Your Taxes<br />
          <span style={{background: 'linear-gradient(to right, #3b82f6, #10b981)', WebkitBackgroundClip: 'text', color: 'transparent'}}>
            Simply & Securely
          </span>
        </h1>
        <p style={styles.heroSubtitle}>
          No more complicated forms or long waits. File and pay your taxes in minutes with our streamlined platform.
        </p>
        <div>
          <button 
            style={styles.button}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={() => setCurrentStep(2)}
          >
            Start Filing Now →
          </button>
          <button style={styles.buttonOutline}>
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.featuresSection}>
        <div style={styles.container2}>
          <h2 style={styles.sectionTitle}>Why Choose TaxEasy?</h2>
          <p style={styles.sectionSubtitle}>
            We've simplified the entire tax payment process so you can focus on what matters most
          </p>
          
          <div style={styles.featuresGrid}>
            <div 
              style={styles.featureCard}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={styles.featureIcon}>🛡️</div>
              <h3 style={styles.featureTitle}>Bank-Level Security</h3>
              <p style={styles.featureDescription}>
                Your data is encrypted and protected with the same security measures used by major financial institutions.
              </p>
            </div>

            <div 
              style={styles.featureCard}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={styles.featureIcon}>⚡</div>
              <h3 style={styles.featureTitle}>Lightning Fast</h3>
              <p style={styles.featureDescription}>
                Complete your tax filing in minutes, not hours. Our smart forms adapt to your situation automatically.
              </p>
            </div>

            <div 
              style={styles.featureCard}
              onMouseEnter={handleCardHover}
              onMouseLeave={handleCardLeave}
            >
              <div style={styles.featureIcon}>🕒</div>
              <h3 style={styles.featureTitle}>24/7 Available</h3>
              <p style={styles.featureDescription}>
                File your taxes whenever it's convenient for you. Our platform is always ready, day or night.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Status */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: currentStep === 2 ? '#10b981' : '#3b82f6',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '25px',
        fontSize: '14px',
        fontWeight: '500'
      }}>
        {currentStep === 1 ? 'Welcome to TaxEasy!' : 'Ready to file taxes!'}
      </div>
    </div>
  );
};

export default TaxApp;
