import { FeatureTitle } from "./FeatureTitle";
import { FeatureSubTitle } from "./FeatureSubTitle";
import { FeatureHero } from "./FeatureHero";

export function Features() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] py-[160px] gap-10'>
        <FeatureTitle />
        <FeatureSubTitle />
        <FeatureHero />
      </section>
    </section>
  );
}