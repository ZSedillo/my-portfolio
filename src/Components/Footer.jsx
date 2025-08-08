import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid #e2e8f0',
      backgroundColor: '#334155',
      backdropFilter: 'blur(10px)',
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '16px'
      }}>
        <p style={{
          margin: 0,
          color: 'rgba(248, 250, 252, 0.8)',
          fontSize: '14px',
          fontWeight: 500
        }}>
          © 2024 Zandro Miguel Sedillo. All Rights Reserved.
        </p>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: 'rgba(248, 250, 252, 0.8)',
          fontSize: '13px',
          fontWeight: 500
        }}>
          <span>Built with</span>
          <img src="./vite.svg " alt="Vite Logo" style={{ height: '20px' }} /> Vite
          &
          <img src="./react.svg" alt="React Logo" style={{ height: '20px' }} /> React
        </div>
      </div>
    </footer>
  );
};

export default Footer;
