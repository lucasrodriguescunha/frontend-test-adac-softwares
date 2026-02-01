import type { GalleryCardProps } from '../../../types/GalleryCardProps';

export function GalleryCard({
  image,
  alt = '',
  className = ''
}: GalleryCardProps) {
  return (
    <div className={`overflow-hidden rounded-lg ${className}`}>
      <img
        src={image}
        alt={alt}
        className='
          w-full
          h-[285px]
          object-cover
          transition-transform
          duration-300
          hover:scale-110
        '
      />
    </div>
  );
}