import { GalleryTitle } from './GalleryTitle';
import { GallerySubtitle } from './GallerySubTitle';
import { GalleryGrid } from './GalleryGrid';

export function Gallery() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] pt-[160px] pb-[80px] gap-10'>
        <GalleryTitle />
        <GallerySubtitle />
      </section>
      <GalleryGrid />
    </section>
  );
}