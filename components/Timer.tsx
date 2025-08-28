
import React, { useState, useEffect } from 'react';

const useTimer = (totalSeconds: number, onComplete: () => void, isPaused: boolean, resetKey: any) => {
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

  useEffect(() => {
    setTimeLeft(totalSeconds);
  }, [resetKey, totalSeconds]);

  useEffect(() => {
    if (isPaused || timeLeft <= 0) {
      if (timeLeft <= 0) {
        onComplete();
      }
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onComplete, isPaused]);

  return timeLeft;
};

interface TimerProps {
  totalSeconds: number;
  onComplete: () => void;
  isPaused: boolean;
  resetKey: any;
  t: (key: string) => string;
}

const Timer: React.FC<TimerProps> = ({ totalSeconds, onComplete, isPaused, resetKey, t }) => {
  const timeLeft = useTimer(totalSeconds, onComplete, isPaused, resetKey);
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  
  const radius = 140;
  const circumference = 2 * Math.PI * radius;
  const progress = (timeLeft / totalSeconds) * 100;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96">
      <svg className="w-full h-full" viewBox="0 0 300 300">
        <circle
          cx="150"
          cy="150"
          r={radius}
          strokeWidth="10"
          className="stroke-gray-200 dark:stroke-gray-700"
          fill="transparent"
        />
        <circle
          cx="150"
          cy="150"
          r={radius}
          strokeWidth="10"
          className="stroke-aura-green"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 150 150)"
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-6xl sm:text-7xl font-bold tracking-tighter">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
        <span className="text-lg text-gray-500 dark:text-gray-400">{t('timer.focusMessage')}</span>
      </div>
    </div>
  );
};

export default Timer;
