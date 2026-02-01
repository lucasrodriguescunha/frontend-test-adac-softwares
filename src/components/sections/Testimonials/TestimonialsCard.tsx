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
        border border-[#565656]
        rounded-lg
        p-6 lg:p-8
        h-full
        transition-all
        duration-300
        hover:border-white/30
        hover:shadow-lg
        hover:shadow-white/5
      "
    >
      <header className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src={avatar}
            alt=""
            className="w-12 h-12 rounded-full object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-base text-white font-medium">
            {author}
          </h3>
          <p className="text-sm text-white/70 font-normal">
            {profession}
          </p>
        </div>
      </header>

      <blockquote className="text-base text-white/90 font-normal leading-relaxed">
        {testimonial}
      </blockquote>
    </article>
  );
}