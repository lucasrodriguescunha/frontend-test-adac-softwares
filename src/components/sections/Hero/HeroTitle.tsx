import { useEffect, useState } from 'react';

export function HeroTitle() {
  const text = 'Work at the speed\nof thought';
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  const lines = displayedText.split('\n');

  return (
    <h1
      id='hero-title'
      className='text-7xl text-white font-medium leading-tight'
      aria-label='Work at the speed of thought'
    >
      {lines.map((line, i) => {
        const isLastLine = i === lines.length - 1;

        return (
          <span key={i} className='block'>
            {line}
            {isLastLine && (
              <span className='ml-1 inline-block h-[1em] w-[2px] bg-white animate-pulse align-middle' />
            )}
          </span>
        );
      })}
    </h1>
  );
}
