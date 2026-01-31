import { HeroTitle } from './HeroTitle';
import { HeroSubTitle } from './HeroSubTitle';
import { CTAButton } from '../../layout/CTAButton';
import { HeroBanner } from './HeroBanner';

export function Hero() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] py-[85px] gap-8'>
        <HeroTitle />
        <HeroSubTitle />
      </section>
      <section className='flex gap-8 pb-10'>
        <CTAButton text='Try For Free' variant='primary' />
        <CTAButton text='Learn More' variant='dark' />
      </section>
      <HeroBanner />
    </section>
  );
}