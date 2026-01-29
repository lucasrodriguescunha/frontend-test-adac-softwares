import FeaturesHeroBannerImage from '../../../assets/features.png';

export function FeatureHero() {
  return (
    <section className='w-full grid grid-cols-2'>
      <img src={FeaturesHeroBannerImage} />
    </section>
  );
}