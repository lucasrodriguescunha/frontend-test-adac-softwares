import type { ContentsCardProps } from '../../../types/ContentsCardProps';

export function ContentsCard({
  id,
  title,
  description,
  cta,
  image
}: ContentsCardProps) {
  return (
    <article
      aria-labelledby={`content-title-${id}`}
      className="
        flex flex-col items-center
        h-full
        bg-white
        rounded-lg
        gap-8
        p-6
      "
    >
      <h3
        id={`content-title-${id}`}
        className="text-xl font-medium text-black text-center pt-4"
      >
        {title}
      </h3>

      <p className="text-base font-normal text-[#5C5C5C] text-center">
        {description}
      </p>

      {cta && <div className="mt-2">{cta}</div>}
      <img src={image} alt="" className="w-full h-auto" />
    </article>
  );
}