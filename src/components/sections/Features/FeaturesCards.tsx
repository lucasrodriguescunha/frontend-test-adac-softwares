import { FeaturesCard } from './FeaturesCard'

import FeatureIcon1 from '../../../assets/feature1.svg'
import FeatureIcon2 from '../../../assets/feature2.svg'
import FeatureIcon3 from '../../../assets/feature3.svg'

export function FeaturesCards() {
  const features = [
    {
      id: 1,
      icon: FeatureIcon1,
      title: 'A single source\nof truth',
      description:
        'When you add work to your Slate calendar we automatically calculate useful insights'
    },
    {
      id: 2,
      icon: FeatureIcon2,
      title: 'Intuitive\ninterface',
      description:
        'When you add work to your Slate calendar we automatically calculate useful insights'
    },
    {
      id: 3,
      icon: FeatureIcon3,
      title: 'Or with rules',
      description:
        'When you add work to your Slate calendar we automatically calculate useful insights'
    }
  ]

  return (
    <section className='m-4 ' aria-labelledby='features-title'>
      <ul className='flex flex-col gap-4' role='list'>
        {features.map(feature => (
          <li key={feature.id}>
            <FeaturesCard {...feature} />
          </li>
        ))}
      </ul>
    </section>
  )
}
