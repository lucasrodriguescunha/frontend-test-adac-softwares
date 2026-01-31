import { ContentsHero } from "./ContentsHero";
import { ContentsSubtitle } from "./ContentsSubtitle";
import { ContentsTitle } from "./ContentsTitle";

export function Contents() {
  return (
    <section
      className='flex flex-col items-center bg-dark text-center'
    >
      <section className='flex flex-col px-[85px] pt-[160px] pb-[80px] gap-10'>
        <ContentsTitle />
        <ContentsSubtitle />
      </section>
      <ContentsHero />
    </section>
  );
}