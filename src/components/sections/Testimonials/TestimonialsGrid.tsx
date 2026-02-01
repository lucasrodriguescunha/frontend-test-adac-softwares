import { TestimonialsCard } from "./TestimonialsCard";
import ClaireAvatar from '../../../assets/avatars/claire.svg';
import FranciscoAvatar from '../../../assets/avatars/francisco.svg';
import RalphAvatar from '../../../assets/avatars/ralph.svg';
import JorgeAvatar from '../../../assets/avatars/jorge.svg';

const testimonials = [
  {
    id: 1,
    avatar: ClaireAvatar,
    author: "Claire Bell",
    profession: "Designer",
    testimonial:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
  },
  {
    id: 2,
    avatar: FranciscoAvatar,
    author: "Francisco Lane",
    profession: "Designer",
    testimonial:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
  },
  {
    id: 3,
    avatar: RalphAvatar,
    author: "Ralph Fisher",
    profession: "Designer",
    testimonial:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
  },
  {
    id: 4,
    avatar: JorgeAvatar,
    author: "Jorge Murphy",
    profession: "Designer",
    testimonial:
      "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year."
  }
];

export function TestimonialsGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 pb-20">
      {testimonials.map((item) => (
        <TestimonialsCard key={item.id} {...item} />
      ))}
    </div>
  );
}