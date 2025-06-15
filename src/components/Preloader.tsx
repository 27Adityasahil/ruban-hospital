import React, { useState, useEffect } from 'react';
import { Heart, Plus } from 'lucide-react';

const Preloader = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Welcome to Ruban';

  useEffect(() => {
    // Typing animation
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    // Cursor blinking animation
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="preloader-overlay">
      <div className="preloader-content">
        {/* Logo */}
        <div className="preloader-logo mb-4">
          <div className="d-flex align-items-center justify-content-center">
            <div className="bg-danger text-white rounded-3 p-3 me-2">
              <Heart size={32} />
            </div>
            <div className="bg-primary text-white rounded-circle p-3">
              <Plus size={24} />
            </div>
          </div>
        </div>

        {/* Typing Text */}
        <div className="preloader-text">
          <h1 className="display-4 fw-bold font-display text-center">
            <span className="text-gradient-primary">{displayText}</span>
            <span className={`typing-cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="preloader-spinner mt-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;