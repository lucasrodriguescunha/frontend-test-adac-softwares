import { TestimonialsGrid } from "./TestimonialsGrid";
import { TestimonialsTitle } from "./TestimonialsTitle";

export function Testimonials() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] pt-[160px] pb-[80px] gap-8'>
        <TestimonialsTitle />
      </section>
      <TestimonialsGrid />
    </section>
  );
}