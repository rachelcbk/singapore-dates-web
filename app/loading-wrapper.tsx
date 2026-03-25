'use client';

import { useState, useEffect } from 'react';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const [loaded, setLoaded] = useState(false);
  const [showOut, setShowOut] = useState(false);

  useEffect(() => {
    // Flip "Home" to "Out" after a brief moment
    const flipTimer = setTimeout(() => {
      setShowOut(true);
    }, 600);

    const showContent = () => {
      setTimeout(() => setLoaded(true), 500);
    };

    if (document.readyState === 'complete') {
      showContent();
    } else {
      window.addEventListener('load', showContent);
    }

    // Fallback timeout
    const timeout = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => {
      clearTimeout(flipTimer);
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
          {/* Logo with flip animation */}
          <div style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '2.5rem',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{ color: '#0049e6' }}>Head</span>
            <span style={{
              display: 'inline-block',
              perspective: '1000px',
              position: 'relative',
              width: '3.5ch',
              textAlign: 'center',
            }}>
              {/* Home - flips out */}
              <span style={{
                display: 'block',
                color: '#2c2f30',
                transform: showOut ? 'rotateX(-90deg)' : 'rotateX(0deg)',
                transformOrigin: 'center bottom',
                transition: 'transform 0.4s ease-in',
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
              }}>
                Home
              </span>
              {/* Out - flips in */}
              <span style={{
                display: 'block',
                color: '#0049e6',
                transform: showOut ? 'rotateX(0deg)' : 'rotateX(90deg)',
                transformOrigin: 'center top',
                transition: 'transform 0.4s ease-out',
                position: 'absolute',
                inset: 0,
                backfaceVisibility: 'hidden',
              }}>
                Out
              </span>
            </span>
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