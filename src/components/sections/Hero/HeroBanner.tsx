import HeroBannerImage from '../../../assets/screens.png';
import HeroBannerGradient from '../../../assets/gradient.png'

export function HeroBanner() {
  return (
    <section className='w-full relative'>
      <img
        src={HeroBannerImage}
        alt="Hero Banner"
        className='w-full h-auto block relative z-0 pb-[160px]'
      />
      <img
        src={HeroBannerGradient}
        alt=""
        className='absolute bottom-0 left-0 w-full h-auto pointer-events-none z-1'
      />
    </section>
  );
}