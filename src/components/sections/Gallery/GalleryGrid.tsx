import GalleryImage1 from '../../../assets/gallery1.png';
import GalleryImage2 from '../../../assets/gallery2.png';
import GalleryImage3 from '../../../assets/gallery3.png';
import GalleryImage4 from '../../../assets/gallery4.png';
import GalleryImage5 from '../../../assets/gallery5.png';
import GalleryImage6 from '../../../assets/gallery6.png';
import GalleryImage7 from '../../../assets/gallery7.png';

import { CTAButton } from '../../layout/CTAButton';
import { GalleryCard } from './GalleryCard';

export function GalleryGrid() {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 pb-[160px]">
      <div className="grid grid-cols-4 gap-8">
        <GalleryCard image={GalleryImage1} />
        <GalleryCard image={GalleryImage2} />
        <GalleryCard image={GalleryImage3} />
        <GalleryCard image={GalleryImage4} />
      </div>
      <div className="grid grid-cols-[1.2fr_1fr_1.2fr] gap-8">
        <GalleryCard image={GalleryImage5} />
        <GalleryCard image={GalleryImage6} />
        <GalleryCard image={GalleryImage7} />
      </div>
      <CTAButton text="See more" variant="dark" />
    </section>
  );
}