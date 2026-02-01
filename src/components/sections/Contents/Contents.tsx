import { Container } from '../../layout/Container';
import { ContentsHero } from './ContentsHero';
import { ContentsSubtitle } from './ContentsSubtitle';
import { ContentsTitle } from './ContentsTitle';

export function Contents() {
  return (
    <section className='bg-dark'>
      <Container>
        {/* Cabeçalho centralizado */}
        <div className='flex flex-col items-center text-center pt-[160px] pb-[80px] gap-8'>
          <ContentsTitle />
          <ContentsSubtitle />
        </div>

        {/* Hero sem centralização forçada */}
        <ContentsHero />
      </Container>
    </section>
  );
}