'use client';

import { useState, useEffect } from 'react';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const showContent = () => {
      setTimeout(() => setLoaded(true), 500);
    };

    if (document.readyState === 'complete') {
      showContent();
    } else {
      window.addEventListener('load', showContent);
    }

    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => {
      window.removeEventListener('load', showContent);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {/* Loader */}
      {!loaded && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#f5f6f7',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
        }}>
          {/* Logo */}
          <div style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
          }}>
            <span style={{ color: '#0049e6' }}>Head</span>
            <span style={{
              color: '#2c2f30',
              textShadow: '0 4px 8px rgba(44, 47, 48, 0.15)',
              transform: 'translateY(4vh)',
            }}>Out</span>
          </div>

          {/* Spinner */}
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #e6e8ea',
            borderTopColor: '#0049e6',
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            marginTop: '2rem',
          }} />
        </div>
      )}
      
      {/* Content */}
      <div style={{ display: loaded ? 'block' : 'none' }}>
        {children}
      </div>
      
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}