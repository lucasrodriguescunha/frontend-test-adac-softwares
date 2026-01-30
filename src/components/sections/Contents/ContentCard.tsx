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
      className='flex flex-col w-[300px] gap-4 p-6'
    >
      <article className='flex items-center gap-3'>
        <h3
          id={`feature-title-${id}`}
          className='text-lg font-medium text-white whitespace-pre-line text-start'
        >
          {title}
        </h3>
      </article>
      <p className='text-base font-normal text-[#8895AA] whitespace-pre-line text-start'>
        {description}
      </p>
    </section>
  );
}