import { PartnersTitle } from './PartnersTitle';
import { PartnersSubtitle } from './PartnersSubtitle';
import { CTAButton } from '../../layout/CTAButton';
import { PartnersIcons } from './PartnersIcons';

export function Partners() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] pt-[160px] pb-[80px] gap-8'>
        <PartnersTitle />
        <PartnersSubtitle />
        <PartnersIcons />
      </section>
      <section className='flex gap-8 pb-10'>
        <CTAButton text='All Partners' variant='dark' />
      </section>
    </section>
  );
}