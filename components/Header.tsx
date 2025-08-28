import React from 'react';
import type { Screen, Language } from '../types';
import { MoonIcon, SunIcon, ExerciseIcon, TipsIcon } from './icons';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  brightness: number;
  onBrightnessChange: (value: number) => void;
  onNavigate: (screen: Screen) => void;
  currentScreen: Screen;
  language: Language;
  onLanguageChange: (language: Language) => void;
  t: (key: string) => string;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  onToggleDarkMode,
  brightness,
  onBrightnessChange,
  onNavigate,
  currentScreen,
  language,
  onLanguageChange,
  t
}) => {
    
  const handleLanguageToggle = () => {
      onLanguageChange(language === 'en' ? 'ua' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-white/70 dark:bg-black/70 backdrop-blur-sm transition-colors duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-aura-dark-blue dark:text-aura-green" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2.5-3.79l1.41-1.41 1.09 1.09 3.59-3.59L17 8.91l-4.24 4.24-1.76-1.76-1.41 1.41 3.17 3.18z" opacity="0.3"/><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8 8-3.59-8-8-8zm0 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1.09-3.91l-3.17-3.18 1.41-1.41 1.76 1.76 4.24-4.24 1.41 1.41-5.65 5.66z"/></svg>
          <h1 className="text-xl font-bold text-aura-dark-blue dark:text-aura-soft-gray">{t('header.title')}</h1>
        </div>
        <nav className="flex items-center gap-1 sm:gap-2">
          <NavButton isActive={currentScreen === 'exercises' || currentScreen === 'exercise-view'} onClick={() => onNavigate('exercises')} title={t('header.exercises')}><ExerciseIcon /></NavButton>
          <NavButton isActive={currentScreen === 'tips'} onClick={() => onNavigate('tips')} title={t('header.tips')}><TipsIcon /></NavButton>
          
          <div className="hidden sm:block border-l border-gray-300 dark:border-gray-600 h-6 mx-2"></div>

          <ControlItem>
            <button onClick={onToggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </ControlItem>
          
          <div className="hidden sm:flex items-center gap-2">
            <input
              type="range"
              min="50"
              max="100"
              value={brightness}
              onChange={(e) => onBrightnessChange(Number(e.target.value))}
              className="w-24 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          
           <button onClick={handleLanguageToggle} className="p-2 w-10 text-sm font-semibold rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              {language === 'en' ? 'UA' : 'EN'}
            </button>
        </nav>
      </div>
    </header>
  );
};

const NavButton: React.FC<{isActive: boolean, onClick: () => void, children: React.ReactNode, title: string}> = ({ isActive, onClick, children, title }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-full flex items-center gap-2 transition-colors ${isActive ? 'bg-aura-green/50 dark:bg-aura-green/30' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
  >
    {children}
    <span className="hidden sm:inline text-sm font-medium">{title}</span>
  </button>
);

const ControlItem: React.FC<{children: React.ReactNode}> = ({children}) => <div className="hidden sm:block">{children}</div>;


export default Header;