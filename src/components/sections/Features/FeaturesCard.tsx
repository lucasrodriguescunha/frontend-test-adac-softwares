import type { FeatureCardProps } from '../../../types/FeatureCardProps';

export function FeaturesCard({
  id,
  icon,
  title,
  description
}: FeatureCardProps) {
  return (
    <section
      aria-labelledby={`feature-title-${id}`}
      className='flex flex-col w-[300px] gap-4 p-6'
    >
      <article className='flex items-center gap-3'>
        <span
          aria-hidden='true'
          className='flex items-center justify-center'
        >
          <img src={icon} alt='' />
        </span>

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
  )
}
