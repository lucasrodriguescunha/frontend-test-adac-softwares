import type { TestimonialsCardProps } from "../../../types/TestimonialsCardProps";

export function TestimonialsCard({
  avatar,
  author,
  profession,
  testimonial
}: TestimonialsCardProps) {
  return (
    <article
      className="
        flex flex-col gap-6
        bg-dark
        border border-[#565656] sm:border-[#DEDEDE]
        rounded-lg
        p-5 sm:p-8
        w-full
        max-w-[360px] sm:max-w-none
      "
    >
      <header className="flex items-center gap-6">
        <img
          src={avatar}
          alt={`Foto de ${author}`}
        />

        <div className="flex flex-col text-start">
          <strong className="text-base text-white font-medium">
            {author}
          </strong>
          <span className="text-base text-white font-normal">
            {profession}
          </span>
        </div>
      </header>

      <p className="text-base text-white font-normal text-start whitespace-pre-line leading-relaxed">
        {testimonial}
      </p>
    </article>
  );
}
