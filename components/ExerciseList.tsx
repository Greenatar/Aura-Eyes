
import React from 'react';
import type { Exercise } from '../types';
import { EXERCISES } from '../constants';
import { ChevronRightIcon } from './icons';

interface ExerciseListProps {
  onSelectExercise: (exercise: Exercise) => void;
  t: (key: string) => string;
}

const ExerciseList: React.FC<ExerciseListProps> = ({ onSelectExercise, t }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">{t('exerciseList.title')}</h2>
      <div className="space-y-4">
        {EXERCISES.map((exercise) => (
          <button
            key={exercise.id}
            onClick={() => onSelectExercise(exercise)}
            className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl dark:hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-between text-left"
          >
            <div>
              <h3 className="text-xl font-semibold text-aura-dark-blue dark:text-white">{t(exercise.nameKey)}</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{t(exercise.descriptionKey)}</p>
              <span className="text-sm text-aura-green font-medium mt-2 inline-block">{t(exercise.durationKey)}</span>
            </div>
            <ChevronRightIcon />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
