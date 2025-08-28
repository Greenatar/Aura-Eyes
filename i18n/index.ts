import { Language } from '../types';

const translations = {
  en: {
    'header.title': 'Aura Eyes',
    'header.exercises': 'Exercises',
    'header.tips': 'Tips',
    'exerciseList.title': 'Eye Exercises',
    'exerciseView.backButton': 'Back to Exercises',
    
    'exercise.duration.1-2m': '1-2 minutes',
    'exercise.duration.2m': '2 minutes',
    'exercise.duration.1m': '1 minute',
    
    'exercise.brightnessAdaptation.name': 'Brightness Adaptation',
    'exercise.brightnessAdaptation.description': 'Helps your eyes adapt to changing light conditions, reducing sensitivity.',
    'exercise.brightnessAdaptation.step1': 'Sit comfortably and relax your shoulders.',
    'exercise.brightnessAdaptation.step2': 'Focus your gaze on the center of the pulsing circle.',
    'exercise.brightnessAdaptation.step3': 'Follow the light as it gently dims and brightens.',
    'exercise.brightnessAdaptation.step4': 'Breathe deeply and allow your eyes to adjust naturally without straining.',
    
    'exercise.focusShift.name': 'Focus Shift',
    'exercise.focusShift.description': 'Train your eyes to switch focus between near and far objects smoothly.',
    'exercise.focusShift.step1': 'Hold your thumb about 10 inches from your face.',
    'exercise.focusShift.step2': 'Focus on your thumb for 15 seconds.',
    'exercise.focusShift.step3': 'Shift your focus to an object about 20 feet away for 15 seconds.',
    'exercise.focusShift.step4': 'Repeat this cycle for 2 minutes.',
    
    'exercise.eyeCircles.name': 'Eye Circles',
    'exercise.eyeCircles.description': 'Improve eye flexibility and relieve strain by making circular motions.',
    'exercise.eyeCircles.step1': 'Look straight ahead. Slowly move your eyes clockwise in a large circle.',
    'exercise.eyeCircles.step2': 'Complete 5 circles without moving your head.',
    'exercise.eyeCircles.step3': 'Switch directions and make 5 counter-clockwise circles.',
    'exercise.eyeCircles.step4': 'Close your eyes and relax for a moment.',
        
    'tips.title': 'Helpful Eye Care Tips',
    'tips.tip1.title': 'Blink Frequently',
    'tips.tip1.body': "Blinking is your eyes' natural way of staying moist and clean. When staring at a screen, people tend to blink less often, which can lead to dry, irritated eyes. Make a conscious effort to blink fully and often.",
    'tips.tip2.title': 'Adjust Screen Distance and Position',
    'tips.tip2.body': "Position your screen about an arm's length (20-25 inches) away from your eyes. The top of the screen should be at or slightly below eye level to reduce strain on your neck and eyes.",
    'tips.tip3.title': 'Optimize Your Lighting',
    'tips.tip3.body': "Reduce screen glare by positioning it away from bright overhead lighting or windows. Adjust your screen's brightness to match the ambient light in your room. Avoid working in a completely dark room.",
    'tips.tip4.title': 'Stay Hydrated',
    'tips.tip4.body': 'Dehydration can affect your entire body, including your eyes, making them feel dry and gritty. Drink plenty of water throughout the day to help maintain adequate moisture in your eyes.',
    'tips.tip5.title': 'Eat Eye-Healthy Foods',
    'tips.tip5.body': 'A balanced diet rich in vitamins A, C, and E, as well as omega-3 fatty acids, can support long-term eye health. Include foods like leafy greens, carrots, fish, nuts, and citrus fruits in your diet.'
  },
  ua: {
    'header.title': 'Aura Eyes',
    'header.exercises': 'Вправи',
    'header.tips': 'Поради',
    'exerciseList.title': 'Вправи для очей',
    'exerciseView.backButton': 'Назад до вправ',

    'exercise.duration.1-2m': '1-2 хвилини',
    'exercise.duration.2m': '2 хвилини',
    'exercise.duration.1m': '1 хвилина',

    'exercise.brightnessAdaptation.name': 'Адаптація до яскравості',
    'exercise.brightnessAdaptation.description': 'Допомагає очам адаптуватися до змін умов освітлення, зменшуючи чутливість.',
    'exercise.brightnessAdaptation.step1': 'Сядьте зручно та розслабте плечі.',
    'exercise.brightnessAdaptation.step2': 'Сконцентруйте свій погляд на центрі пульсуючого кола.',
    'exercise.brightnessAdaptation.step3': 'Слідкуйте за світлом, як воно м’яко тьмяніє та яскравішає.',
    'exercise.brightnessAdaptation.step4': 'Дихайте глибоко і дозвольте очам пристосовуватися природно, без напруги.',

    'exercise.focusShift.name': 'Зміна фокусу',
    'exercise.focusShift.description': "Тренуйте очі плавно переключати фокус між ближніми та дальніми об'єктами.",
    'exercise.focusShift.step1': 'Тримайте великий палець на відстані близько 25 см від обличчя.',
    'exercise.focusShift.step2': 'Фокусуйтеся на пальці протягом 15 секунд.',
    'exercise.focusShift.step3': "Переведіть погляд на об'єкт на відстані близько 6 метрів на 15 секунд.",
    'exercise.focusShift.step4': 'Повторюйте цей цикл протягом 2 хвилин.',

    'exercise.eyeCircles.name': 'Колові рухи очима',
    'exercise.eyeCircles.description': 'Покращуйте гнучкість очей та знімайте напругу за допомогою колових рухів.',
    'exercise.eyeCircles.step1': 'Дивіться прямо перед собою. Повільно рухайте очима за годинниковою стрілкою по великому колу.',
    'exercise.eyeCircles.step2': 'Зробіть 5 кіл, не рухаючи головою.',
    'exercise.eyeCircles.step3': 'Змініть напрямок і зробіть 5 кіл проти годинникової стрілки.',
    'exercise.eyeCircles.step4': 'Закрийте очі і розслабтеся на мить.',

    'tips.title': 'Корисні поради по догляду за очима',
    'tips.tip1.title': 'Частіше кліпайте',
    'tips.tip1.body': 'Кліпання — це природний спосіб зволоження та очищення очей. Дивлячись на екран, люди схильні кліпати рідше, що може призвести до сухості та подразнення. Свідомо намагайтеся кліпати часто та повністю.',
    'tips.tip2.title': 'Налаштуйте відстань та положення екрана',
    'tips.tip2.body': "Розташуйте екран на відстані витягнутої руки (50-65 см) від очей. Верхня частина екрана повинна бути на рівні очей або трохи нижче, щоб зменшити навантаження на шию та очі.",
    'tips.tip3.title': 'Оптимізуйте освітлення',
    'tips.tip3.body': 'Зменште відблиски, розташувавши екран подалі від яскравого верхнього освітлення або вікон. Налаштуйте яскравість екрана відповідно до навколишнього освітлення у вашій кімнаті. Уникайте роботи в повністю темному приміщенні.',
    'tips.tip4.title': 'Пийте достатньо води',
    'tips.tip4.body': 'Зневоднення може вплинути на весь ваш організм, включаючи очі, спричиняючи відчуття сухості та "піску". Пийте багато води протягом дня, щоб підтримувати достатній рівень вологи в очах.',
    'tips.tip5.title': 'Їжте корисну для очей їжу',
    'tips.tip5.body': "Збалансована дієта, багата на вітаміни А, С та Е, а також омега-3 жирні кислоти, може підтримати здоров'я очей у довгостроковій перспективі. Включайте в раціон листову зелень, моркву, рибу, горіхи та цитрусові."
  }
};

export const t = (key: string, lang: Language): string => {
  const langKey = lang as keyof typeof translations;
  const translationSet = translations[langKey] || translations.en;
  
  return (translationSet as any)[key] || (translations.en as any)[key] || key;
};