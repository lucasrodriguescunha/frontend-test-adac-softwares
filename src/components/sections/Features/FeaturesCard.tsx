import type { FeaturesCardProps } from '../../../types/FeaturesCardProps';

export function FeaturesCard({
  id,
  icon,
  title,
  description
}: FeaturesCardProps) {
  return (
    <article
      aria-labelledby={`feature-title-${id}`}
      className='flex flex-col gap-4 w-[270px]'
    >
      <div className='flex items-center gap-4'>
        <span
          aria-hidden='true'
          className='flex items-center justify-center flex-shrink-0'
        >
          <img src={icon} alt='' className='w-8 h-8' />
        </span>

        <h3
          id={`feature-title-${id}`}
          className='text-xl font-medium text-white whitespace-pre-line'
        >
          {title}
        </h3>
      </div>

      <p className='text-base font-normal text-[#8895AA] leading-relaxed'>
        {description}
      </p>
    </article>
  )
}