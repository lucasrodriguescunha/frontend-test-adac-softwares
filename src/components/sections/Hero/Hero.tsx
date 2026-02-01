import { Container } from '../../layout/Container';
import { HeroTitle } from './HeroTitle';
import { HeroSubtitle } from './test';
import { CTAButton } from '../../layout/CTAButton';
import { HeroBanner } from './HeroBanner';

export function Hero() {
  return (
    <section className='bg-dark'>
      <Container>
        {/* Conteúdo centralizado */}
        <div className='flex flex-col items-center text-center pt-20 lg:pt-[85px] pb-8 lg:pb-10'>
          <HeroTitle />
          <HeroSubtitle />
          
          {/* Botões */}
          <div className='flex flex-col items-center sm:flex-row gap-4 sm:gap-6 mt-8 lg:mt-10 w-full sm:w-auto px-4 sm:px-0'>
            <CTAButton text='Try For Free' variant='primary' />
            <CTAButton text='Learn More' variant='dark' />
          </div>
        </div>
      </Container>

      {/* Banner ocupa largura total */}
      <HeroBanner />
    </section>
  );
}