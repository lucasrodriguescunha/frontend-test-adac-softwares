import { PartnersTitle } from './PartnersTitle';
import { PartnersSubtitle } from './PartnersSubtitle';
import { CTAButton } from '../../layout/CTAButton';
import { PartnersIcons } from './PartnersIcons';

export function Partners() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col items-center px-[85px] pt-[160px] gap-8'>
        <PartnersTitle />
        <PartnersSubtitle />
        <PartnersIcons />
        <CTAButton text='All Partners' variant='dark' />
      </section>
    </section>
  );
}