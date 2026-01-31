import { FeaturesTitle } from './FeaturesTitle';
import { FeaturesSubtitle } from './FeatureSubtitle';
import { FeaturesHero } from './FeaturesHero';

export function Features() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] pt-[160px] pb-[80px] gap-10'>
        <FeaturesTitle />
        <FeaturesSubtitle />
      </section>
      <FeaturesHero />
    </section>
  );
}