// Very simple test component with inline styles
const SimpleTest = () => {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f1f5f9',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: '#1e293b',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          TaxEasy - Test Page
        </h1>
        
        <p style={{
          fontSize: '1.2rem',
          color: '#64748b',
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          If you can see this, React is working!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div style={{
            backgroundColor: '#dbeafe',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#1e40af', marginBottom: '8px' }}>🛡️ Secure</h3>
            <p style={{ color: '#3b82f6' }}>Bank-level security</p>
          </div>

          <div style={{
            backgroundColor: '#dcfce7',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#166534', marginBottom: '8px' }}>⚡ Fast</h3>
            <p style={{ color: '#22c55e' }}>Lightning quick filing</p>
          </div>

          <div style={{
            backgroundColor: '#fae8ff',
            padding: '20px',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#7c3aed', marginBottom: '8px' }}>🕒 24/7</h3>
            <p style={{ color: '#a855f7' }}>Always available</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            padding: '12px 32px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
          >
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleTest;