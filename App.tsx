import React, { useState, useEffect, useCallback } from 'react';
import { Screen, Exercise, Language } from './types';
import { t } from './i18n';
import Header from './components/Header';
import ExerciseList from './components/ExerciseList';
import ExerciseView from './components/ExerciseView';
import Tips from './components/Tips';

export default function App(): React.ReactNode {
  const [screen, setScreen] = useState<Screen>('exercises');
  const [language, setLanguage] = useState<Language>('en');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [brightness, setBrightness] = useState<number>(100);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  
  const translate = useCallback((key: string) => t(key, language), [language]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);


  const handleSelectExercise = useCallback((exercise: Exercise) => {
    setSelectedExercise(exercise);
    setScreen('exercise-view');
  }, []);
  
  const renderScreen = (): React.ReactNode => {
    switch (screen) {
      case 'tips':
        return <Tips t={translate} />;
      case 'exercise-view':
        return selectedExercise && <ExerciseView exercise={selectedExercise} onBack={() => setScreen('exercises')} t={translate} />;
      case 'exercises':
      default:
        return <ExerciseList onSelectExercise={handleSelectExercise} t={translate} />;
    }
  };

  return (
    <div
      className="bg-aura-soft-gray dark:bg-aura-dark-amber text-aura-dark-blue dark:text-aura-soft-gray min-h-screen transition-colors duration-500"
      style={{ filter: `brightness(${brightness}%)` }}
    >
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(prev => !prev)}
        brightness={brightness}
        onBrightnessChange={setBrightness}
        onNavigate={setScreen}
        currentScreen={screen}
        language={language}
        onLanguageChange={setLanguage}
        t={translate}
      />
      <main className="p-4 sm:p-8 pt-24 min-h-screen flex flex-col items-center animate-fade-in">
        {renderScreen()}
      </main>
    </div>
  );
}