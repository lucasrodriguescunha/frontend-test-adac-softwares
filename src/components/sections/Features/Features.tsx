import { FeaturesTitle } from './FeaturesTitle';
import { FeaturesSubtitle } from './FeaturesSubtitle';
import { FeaturesHero } from './FeaturesHero';
import { Container } from '../../layout/Container';

export function Features() {
  return (
    <section className='bg-dark'>
      <Container>
        {/* Cabeçalho centralizado */}
        <div className='flex flex-col items-center text-center pt-[160px] pb-[80px] gap-8'>
          <FeaturesTitle />
          <FeaturesSubtitle />
        </div>

        {/* Hero sem centralização forçada */}
        <FeaturesHero />
      </Container>
    </section>
  );
}