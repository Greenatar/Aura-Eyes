import React from 'react';
import type { Exercise } from './types';

const BrightnessAdaptationAnimation: React.FC = () => (
  <div className="relative w-64 h-64 flex items-center justify-center">
    <div className="absolute w-full h-full bg-aura-green rounded-full animate-brightness-pulse"></div>
  </div>
);

const FocusShiftAnimation: React.FC = () => (
  <div className="relative w-64 h-64 flex items-center justify-center">
    <div className="absolute w-20 h-20 bg-aura-green rounded-full opacity-30"></div>
    <div className="absolute w-8 h-8 bg-aura-green rounded-full animate-focus-shift"></div>
  </div>
);

const EyeCirclesAnimation: React.FC = () => (
  <div className="relative w-64 h-64 flex items-center justify-center">
    <div className="absolute w-48 h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-full"></div>
    <div className="absolute w-10 h-10">
      <div className="w-10 h-10 bg-aura-green rounded-full animate-eye-circle"></div>
    </div>
  </div>
);

export const EXERCISES: Exercise[] = [
  {
    id: 'brightness-adaptation',
    nameKey: 'exercise.brightnessAdaptation.name',
    descriptionKey: 'exercise.brightnessAdaptation.description',
    durationKey: 'exercise.duration.1m',
    instructionsKeys: [
      'exercise.brightnessAdaptation.step1',
      'exercise.brightnessAdaptation.step2',
      'exercise.brightnessAdaptation.step3',
      'exercise.brightnessAdaptation.step4',
    ],
    AnimationComponent: BrightnessAdaptationAnimation,
  },
  {
    id: 'focus-shift',
    nameKey: 'exercise.focusShift.name',
    descriptionKey: 'exercise.focusShift.description',
    durationKey: 'exercise.duration.2m',
    instructionsKeys: [
      'exercise.focusShift.step1',
      'exercise.focusShift.step2',
      'exercise.focusShift.step3',
      'exercise.focusShift.step4',
    ],
    AnimationComponent: FocusShiftAnimation,
  },
  {
    id: 'eye-circles',
    nameKey: 'exercise.eyeCircles.name',
    descriptionKey: 'exercise.eyeCircles.description',
    durationKey: 'exercise.duration.1m',
    instructionsKeys: [
      'exercise.eyeCircles.step1',
      'exercise.eyeCircles.step2',
      'exercise.eyeCircles.step3',
      'exercise.eyeCircles.step4',
    ],
    AnimationComponent: EyeCirclesAnimation,
  },
];