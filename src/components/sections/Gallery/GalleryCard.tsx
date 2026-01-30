import type { GalleryCardProps } from "../../../types/GalleryCardProps";

export function GalleryCard({
  image,
  alt = '',
  className = ''
}: GalleryCardProps) {
  return (
    <img
      src={image}
      alt={alt}
      className={`
        w-full
        h-[285px]
        object-cover
        rounded-lg
        transition-transform
        hover:scale-[1.02]
        ${className}
      `}
    />
  );
}
