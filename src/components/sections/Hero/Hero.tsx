import { HeroTitle } from './HeroTitle';
import { HeroSubTitle } from './a';
import { CTAButton } from './CTAButton';
import { HeroBanner } from './HeroBanner';

export function Hero() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] py-[85px] gap-10'>
        <HeroTitle />
        <HeroSubTitle />
      </section>
      <CTAButton />
      <HeroBanner />
    </section>
  );
}