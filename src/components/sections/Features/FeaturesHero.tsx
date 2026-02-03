import { FeaturesCards } from './FeaturesCards';
import FeaturesHeroBannerImage from '../../../assets/images/features.png';

export function FeaturesHero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
      <div className='flex justify-center lg:justify-end'>
        <img
          src={FeaturesHeroBannerImage}
          alt='Illustration of product features'
          className='w-full max-w-[480px] lg:max-w-[540px]'
        />
      </div>
      <FeaturesCards />
    </div>
  );
}