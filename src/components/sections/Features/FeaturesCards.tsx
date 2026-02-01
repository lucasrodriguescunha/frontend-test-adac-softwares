import { FeaturesCard } from './FeaturesCard'

import FeatureIcon1 from '../../../assets/icons/feature1.svg'
import FeatureIcon2 from '../../../assets/icons/feature2.svg'
import FeatureIcon3 from '../../../assets/icons/feature3.svg'

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
    <div className='flex flex-col gap-8 lg:gap-10'>
      {features.map(feature => (
        <FeaturesCard key={feature.id} {...feature} />
      ))}
    </div>
  )
}