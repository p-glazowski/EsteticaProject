import { links } from '../content';

export function BookingLink({ children, light = false }) {
  const colors = light
    ? 'bg-[#eee8dc] text-ink hover:bg-[#d4c8b6]'
    : 'bg-dark text-white hover:bg-[#4b4336]';

  return (
    <a className={`inline-flex min-h-14 items-center justify-between gap-11 px-[22px] py-4 text-sm font-semibold ${colors}`} href={links.booksy} target="_blank" rel="noopener noreferrer">
      {children}<span aria-hidden="true">↗</span>
    </a>
  );
}
