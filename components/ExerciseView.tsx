
import React from 'react';
import type { Exercise } from '../types';
import { ChevronLeftIcon } from './icons';

interface ExerciseViewProps {
  exercise: Exercise;
  onBack: () => void;
  t: (key: string) => string;
}

const ExerciseView: React.FC<ExerciseViewProps> = ({ exercise, onBack, t }) => {
  const { nameKey, instructionsKeys, AnimationComponent } = exercise;

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center animate-fade-in">
      <button
        onClick={onBack}
        className="self-start mb-6 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        <ChevronLeftIcon />
        {t('exerciseView.backButton')}
      </button>

      <div className="w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <AnimationComponent />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{t(nameKey)}</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
            {instructionsKeys.map((stepKey, index) => (
              <li key={index} className="leading-relaxed">{t(stepKey)}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ExerciseView;
