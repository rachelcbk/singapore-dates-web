'use client';

import { useState, useEffect } from 'react';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const showContent = () => {
      setTimeout(() => setLoaded(true), 500);
    };

    // Check if already complete
    if (document.readyState === 'complete') {
      showContent();
      return;
    }

    // Wait for load event
    window.addEventListener('load', showContent);
    
    // Fallback: show after 3 seconds max (prevents infinite loading)
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
      {/* Loader - Shows until loaded */}
      {!loaded && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: '#f5f6f7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              fontSize: '2rem',
              fontWeight: 800,
              color: '#0049e6',
              marginBottom: '1rem',
            }}>
              Head Out
            </div>
            <div style={{
              width: '40px',
              height: '40px',
              border: '3px solid #e6e8ea',
              borderTopColor: '#0049e6',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }} />
          </div>
        </div>
      )}
      
      {/* Content - Hidden until loaded */}
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