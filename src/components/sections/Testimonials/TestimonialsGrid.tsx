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
      "Slate helps you see how many more days\nyou need to work to reach your financial\ngoal for the month and year. Slate helps\nyou see how many more days\nyou need to work to reach your financial\ngoal for the month and year.your financial\n goal for the month and year."
  },
  {
    id: 2,
    avatar: FranciscoAvatar,
    author: "Francisco Lane",
    profession: "Designer",
    testimonial:
      "Slate helps you see how many more days\nyou need to work to reach your financial\ngoal for the month and year. Slate helps\nyou see how many more days\nyou need to work to reach your financial\ngoal for the month and year.your financial\n goal for the month and year."
  },
  {
    id: 3,
    avatar: RalphAvatar,
    author: "Ralph Fisher",
    profession: "Designer",
    testimonial:
      "Slate helps you see how many more days\nyou need to work to reach your financial\ngoal for the month and year. Slate helps\nyou see how many more days\nyou need to work to reach your financial\ngoal for the month and year.your financial\n goal for the month and year."
  },
  {
    id: 4,
    avatar: JorgeAvatar,
    author: "Jorge Murphy",
    profession: "Designer",
    testimonial:
      "Slate helps you see how many more days\nyou need to work to reach your financial\ngoal for the month and year. Slate helps\nyou see how many more days\nyou need to work to reach your financial\ngoal for the month and year.your financial\n goal for the month and year."
  }
];

export function TestimonialsGrid() {
  return (
    <section className="w-full flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        {testimonials.map((item) => (
          <TestimonialsCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
