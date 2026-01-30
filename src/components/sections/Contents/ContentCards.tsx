import { ContentCard } from './ContentCard';

import { CTAButton } from '../../layout/CTAButton';
import ContentImage1 from '../../../assets/content1.png';
import ContentImage2 from '../../../assets/content2.png';

export function ContentCards() {
  const contents = [
    {
      id: 1,
      title: 'Work',
      description:
        "Ever wondered if you're too reliant\non a client for work? Slate helps\n you identify.",
      cta: <CTAButton
        text='Sign Up'
        variant='primary'
      />,
      image: ContentImage1
    },
    {
      id: 2,
      title: 'Design with real data',
      description:
        "Ever wondered if you're too reliant\non a client for work? Slate helps\n you identify.",
      cta: <CTAButton
        text='Try For Free'
        variant='primary'
      />,
      image: ContentImage2
    }
  ];

  return (
    <section className='m-4 ' aria-labelledby='contents-title'>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-8' role='list'>
        {contents.map(content => (
          <li key={content.id}>
            <ContentCard {...content} />
          </li>
        ))}
      </ul>
    </section>
  )
}
