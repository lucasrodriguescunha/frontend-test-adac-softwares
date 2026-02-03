import { Container } from '../../layout/Container';
import { PartnersTitle } from './PartnersTitle';
import { PartnersSubtitle } from './PartnersSubtitle';
import { CTAButton } from '../../layout/CTAButton';
import { PartnersIcons } from './PartnersIcons';

export function Partners() {
  return (
    <section className='bg-dark'>
      <Container>
        <div className='flex flex-col items-center text-center pt-[160px] gap-8'>
          <PartnersTitle />
          <PartnersSubtitle />
          <PartnersIcons />
          <CTAButton text='All Partners' variant='dark' />
        </div>
      </Container>
    </section>
  );
}