import type { ContentsCardProps } from '../../../types/ContentsCardProps';

export function ContentsCard({
  id,
  title,
  description,
  cta,
  image
}: ContentsCardProps) {
  return (
    <section
      aria-labelledby={`content-title-${id}`}
      className="
        flex flex-col items-center
        h-full w-auto
        bg-[#FFFFFF]
        rounded-lg
        gap-8
        p-6

        mx-10
        lg:mx-0
      "
    >
      <h3
        id={`content-title-${id}`}
        className="text-xl font-medium text-black whitespace-pre-line pt-4"
      >
        {title}
      </h3>

      <p className="text-base font-normal text-[#5C5C5C] whitespace-pre-line">
        {description}
      </p>

      {cta && <div className="mt-2">{cta}</div>}
      <img src={image} alt="" />
    </section>
  );
}
