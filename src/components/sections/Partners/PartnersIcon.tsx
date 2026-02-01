import type { PartnersIconsProps } from '../../../types/PartnersIconsProps';

export function PartnersIcon({ icons }: PartnersIconsProps) {
  return (
    <section
      aria-label="Empresas e plataformas parceiras"
      className="
        grid
        grid-cols-3
        gap-x-10
        gap-y-8
        items-center
        justify-items-center

        lg:flex
        lg:justify-center
        lg:gap-18
      "
    >
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          className="h-10 w-auto"
        />
      ))}
    </section>
  );
}
