
import React, { useState, useEffect } from 'react';

interface BreakOverlayProps {
  duration: number;
  onBreakEnd: () => void;
  t: (key: string) => string;
}

const BreakOverlay: React.FC<BreakOverlayProps> = ({ duration, onBreakEnd, t }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onBreakEnd();
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft, onBreakEnd]);

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col items-center justify-center text-white animate-fade-in">
      <img 
        src="https://picsum.photos/1920/1080?nature" 
        alt="Calming nature scene"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 text-center p-8">
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">{t('breakOverlay.title')}</h2>
        <p className="text-xl sm:text-2xl mb-8">{t('breakOverlay.message')}</p>
        <div className="text-7xl sm:text-9xl font-mono font-bold">{timeLeft}</div>
      </div>
    </div>
  );
};

export default BreakOverlay;
