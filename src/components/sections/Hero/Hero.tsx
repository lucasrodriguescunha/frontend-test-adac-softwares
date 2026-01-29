import { HeroTitle } from './HeroTitle';
import { HeroSubTitle } from './HeroSubtitle';
import { CTAButton } from './CTAButton';

export function Hero() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center px-10 py-10 gap-8'
      aria-labelledby='hero-title'
    >
      <HeroTitle />
      <HeroSubTitle />
      <CTAButton />
    </section>
  );
}