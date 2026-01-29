export function CTAButton() {
  return (
    <div
      role='group'
      aria-label='Ações principais'
      className='flex gap-10'
    >
      <button
        type='button'
        className='text-base text-white font-medium border-[#4452FE] px-10 py-3 cursor-pointer bg-[#4452FE]'
      >
        Try For Free
      </button>

      <button
        type='button'
        className='text-base text-white font-medium border px-10 py-4 cursor-pointer'
      >
        Learn More
      </button>
    </div>
  );
}