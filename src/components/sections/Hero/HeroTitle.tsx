import { useEffect, useState } from 'react';

export function HeroTitle() {
  const text = 'Work at the speed\nof thought';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    }, 60);

    return () => clearTimeout(timeout);
  }, [index, text]);

  const lines = displayedText.split('\n');
  const isTyping = index < text.length;

  return (
    <h1
      id='hero-title'
      className='
        text-4xl sm:text-5xl lg:text-7xl 
        text-white 
        font-normal sm:font-medium 
        leading-tight 
        min-h-[120px] sm:min-h-[140px] lg:min-h-[200px]
      '
      aria-label='Work at the speed of thought'
    >
      {lines.map((line, i) => {
        const isLastLine = i === lines.length - 1;

        return (
          <span key={i} className='block'>
            {line}
            {isLastLine && isTyping && (
              <span
                className='ml-1 inline-block h-[0.9em] w-[3px] bg-white animate-pulse align-middle'
                aria-hidden='true'
              />
            )}
          </span>
        );
      })}
    </h1>
  );
}