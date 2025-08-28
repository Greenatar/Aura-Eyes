import React from 'react';

interface TipsProps {
  t: (key: string) => string;
}

const TipCard: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <div className="w-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition-all duration-300">
    <h3 className="text-xl font-semibold text-aura-dark-blue dark:text-white mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{body}</p>
  </div>
);

const Tips: React.FC<TipsProps> = ({ t }) => {
  const tips = [
    { title: t('tips.tip1.title'), body: t('tips.tip1.body') },
    { title: t('tips.tip2.title'), body: t('tips.tip2.body') },
    { title: t('tips.tip3.title'), body: t('tips.tip3.body') },
    { title: t('tips.tip4.title'), body: t('tips.tip4.body') },
    { title: t('tips.tip5.title'), body: t('tips.tip5.body') },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">{t('tips.title')}</h2>
      <div className="space-y-4">
        {tips.map((tip, index) => (
          <TipCard key={index} title={tip.title} body={tip.body} />
        ))}
      </div>
    </div>
  );
};

export default Tips;
