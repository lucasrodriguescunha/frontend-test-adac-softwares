import { FeaturesCards } from './FeaturesCards';
import FeaturesHeroBannerImage from '../../../assets/features.png';

export function FeaturesHero() {
  return (
    <section className='w-full grid grid-cols-[auto_auto] justify-center items-center'>
      <img
        src={FeaturesHeroBannerImage}
        alt='Illustration of product features'
      />
      <FeaturesCards />
    </section>
  );
}
