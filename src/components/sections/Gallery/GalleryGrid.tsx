import GalleryImage1 from '../../../assets/images/gallery1.png';
import GalleryImage2 from '../../../assets/images/gallery2.png';
import GalleryImage3 from '../../../assets/images/gallery3.png';
import GalleryImage4 from '../../../assets/images/gallery4.png';
import GalleryImage5 from '../../../assets/images/gallery5.png';
import GalleryImage6 from '../../../assets/images/gallery6.png';
import GalleryImage7 from '../../../assets/images/gallery7.png';

import { CTAButton } from '../../layout/CTAButton';
import { GalleryCard } from './GalleryCard';

export function GalleryGrid() {
  const galleryImages = {
    row1: [
      { id: 1, image: GalleryImage1, alt: 'Gallery image 1' },
      { id: 2, image: GalleryImage2, alt: 'Gallery image 2' },
      { id: 3, image: GalleryImage3, alt: 'Gallery image 3' },
      { id: 4, image: GalleryImage4, alt: 'Gallery image 4' }
    ],
    row2: [
      { id: 5, image: GalleryImage5, alt: 'Gallery image 5' },
      { id: 6, image: GalleryImage6, alt: 'Gallery image 6' },
      { id: 7, image: GalleryImage7, alt: 'Gallery image 7' }
    ]
  };

  return (
    <div className='flex flex-col gap-8 pb-20'>
      {/* Primeira linha - 4 colunas */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8'>
        {galleryImages.row1.map(item => (
          <GalleryCard
            key={item.id}
            image={item.image}
            alt={item.alt}
          />
        ))}
      </div>

      {/* Segunda linha - 3 colunas com proporções diferentes */}
      <div className='hidden lg:grid lg:grid-cols-[1.2fr_1fr_1.2fr] lg:gap-8'>
        {galleryImages.row2.map(item => (
          <GalleryCard
            key={item.id}
            image={item.image}
            alt={item.alt}
          />
        ))}
      </div>

      {/* Mobile: Segunda linha em grid padrão */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden'>
        {galleryImages.row2.map(item => (
          <GalleryCard
            key={item.id}
            image={item.image}
            alt={item.alt}
          />
        ))}
      </div>

      {/* Botão centralizado */}
      <div className='flex justify-center mt-4'>
        <CTAButton text='See more' variant='dark' />
      </div>
    </div>
  );
}