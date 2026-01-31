import type { PartnersIconsProps } from '../../../types/PartnersIconsProps';

export function PartnersIcon({ icons }: PartnersIconsProps) {
  return (
    <section
      aria-label='Empresas e plataformas parceiras'
      className="flex gap-8 items-center flex-wrap"
    >
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.src}
          alt={icon.alt}
          loading='lazy'
        />
      ))}
    </section>
  );
}
