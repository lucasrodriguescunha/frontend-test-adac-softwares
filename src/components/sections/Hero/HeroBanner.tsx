import HeroBannerImage from '../../../assets/images/screens.png';
import HeroBannerGradient from '../../../assets/images/gradient.png';

export function HeroBanner() {
  return (
    <div className='relative w-full'>
      <div className='relative px-4 md:px-8 lg:px-12 lg:pb-[160px]'>
        <img
          src={HeroBannerImage}
          alt='Screenshot da interface do produto mostrando múltiplas telas'
          className='w-full h-auto max-w-7xl mx-auto'
        />
      </div>

      <img
        src={HeroBannerGradient}
        alt=''
        aria-hidden='true'
        className='absolute bottom-0 left-0 w-full h-auto pointer-events-none'
      />
    </div>
  );
}