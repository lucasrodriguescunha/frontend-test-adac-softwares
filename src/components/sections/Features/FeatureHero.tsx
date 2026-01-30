import { FeatureCards } from './FeatureCards';
import FeaturesHeroBannerImage from '../../../assets/features.png';

export function FeatureHero() {
  return (
    <section className="w-full grid grid-cols-[auto_auto] justify-center items-center gap-x-4 py-10">
      <img
        src={FeaturesHeroBannerImage}
        alt="Illustration of product features"
      />
      <FeatureCards />
    </section>
  );
}
