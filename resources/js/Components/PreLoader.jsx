// Components/PreLoader.jsx
import React, { useState, useEffect } from 'react';
import BlurText from './Risves3.0';

const PreLoader = ({ onLoadComplete }) => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulasi waktu loading minimal (2 detik)
    const minLoadingTime = setTimeout(() => {
      setLoading(false);
      if (onLoadComplete) onLoadComplete();
    }, 2000);
    
    return () => clearTimeout(minLoadingTime);
  }, [onLoadComplete]);
  
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <BlurText 
        text="Welcome To!Website Ormawa Eksekutif PKU IPB!" 
        delay={100} 
        direction="top"
        onAnimationComplete={() => {
          // Tambahan delay setelah animasi teks selesai
          setTimeout(() => {
            setLoading(false);
            if (onLoadComplete) onLoadComplete();
          }, 500);
        }}
      />
    </div>
  );
};

export default PreLoader;