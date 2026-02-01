import type { PartnersIconsProps } from '../../../types/PartnersIconsProps';

export function PartnersIcon({ icons }: PartnersIconsProps) {
  return (
    <div
      aria-label="Empresas e plataformas parceiras"
      className="
        grid
        grid-cols-2
        sm:grid-cols-3
        lg:grid-cols-6
        gap-x-8
        gap-y-10
        lg:gap-x-12
        items-center
        justify-items-center
        w-full
        max-w-5xl
        py-8
      "
    >
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="flex items-center justify-center h-12"
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="h-full w-auto max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}