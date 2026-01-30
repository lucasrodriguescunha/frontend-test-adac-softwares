import { ContentTitle } from "./ContentTitle";
import { ContentSubTitle } from "./ContentSubTitle";
import { ContentHero } from "./ContentHero";

export function Contents() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] pt-[160px] pb-[80px] gap-10'>
        <ContentTitle />
        <ContentSubTitle />
      </section>
      <ContentHero />
    </section>
  );
}