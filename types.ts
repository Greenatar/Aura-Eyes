import React from 'react';

export type Screen = 'exercises' | 'exercise-view' | 'tips';
export type Language = 'en' | 'ua';

export interface Exercise {
  id: string;
  nameKey: string;
  descriptionKey: string;
  durationKey: string;
  instructionsKeys: string[];
  AnimationComponent: React.FC;
}
