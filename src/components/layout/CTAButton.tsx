import type { CTAButtonProps } from '../../types/CTAButtonProps';

export function CTAButton({
  text,
  variant = 'primary'
}: CTAButtonProps) {
  const baseClasses =
    'text-base font-medium px-10 py-4 cursor-pointer transition-colors w-max';

  const variants = {
    primary: 'bg-[#4452FE] text-white border border-[#4452FE]',
    dark: 'bg-[#181818] text-white border border-[#FFFFFF]',
    light: 'bg-white text-black border border-white'
  };

  return (
    <button
      type='button'
      className={`${baseClasses} ${variants[variant]}`}
    >
      {text}
    </button>
  );
}
