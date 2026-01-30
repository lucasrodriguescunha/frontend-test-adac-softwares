import type { ContentCardProps } from '../../../types/ContentCardProps';

export function ContentCard({
  id,
  title,
  description,
  cta,
  image
}: ContentCardProps) {
  return (
    <section
      aria-labelledby={`content-title-${id}`}
      className='flex flex-col items-center w-[500px] bg-[#FFFFFF] rounded-lg gap-4 p-6'
    >
      <h3
        id={`content-title-${id}`}
        className='text-xl font-medium text-black whitespace-pre-line'
      >
        {title}
      </h3>

      <p className='text-base font-normal text-[#5C5C5C] whitespace-pre-line'>
        {description}
      </p>

      {cta && <div className="mt-2">{cta}</div>}
      <img src={image} alt="" />
    </section>
  );
}
