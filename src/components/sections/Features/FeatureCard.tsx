import type { FeatureCardProps } from '../../../types/FeatureCardProps'

export function FeatureCard({
  id,
  icon,
  title,
  description
}: FeatureCardProps) {
  return (
    <section aria-labelledby={`feature-title-${id}`}>
      <article className='flex'>
        <span aria-hidden="true">
          <img src={icon} />
        </span>

        <h3 className='text-xl text-white font-medium' id={`feature-title-${id}`}>
          {title}
        </h3>
      </article>

      <p>{description}</p>
    </section>
  )
}
