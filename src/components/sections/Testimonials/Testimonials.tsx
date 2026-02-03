import { Container } from "../../layout/Container";
import { TestimonialsGrid } from "./TestimonialsGrid";
import { TestimonialsTitle } from "./TestimonialsTitle";

export function Testimonials() {
  return (
    <section className='bg-dark'>
      <Container>
        <div className='flex flex-col items-center text-center pt-[160px] pb-[80px]'>
          <TestimonialsTitle />
        </div>
        <TestimonialsGrid />
      </Container>
    </section>
  );
}