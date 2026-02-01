import { FeaturesCards } from './FeaturesCards';
import FeaturesHeroBannerImage from '../../../assets/images/features.png';

export function FeaturesHero() {
  return (
    <section className='w-full grid grid-cols-1 lg:grid-cols-[auto_auto] justify-center items-center gap-8 lg:gap-0'>
      <img
        src={FeaturesHeroBannerImage}
        alt='Illustration of product features'
        className='w-[300px] max-w-md lg:max-w-none mx-auto'
      />
      <FeaturesCards />
    </section>
  );
}