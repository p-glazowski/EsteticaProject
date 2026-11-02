import { links } from '../content';

export function BookingLink({ children, light = false }) {
  const colors = light
    ? 'bg-[#eee8dc] text-ink hover:bg-[#d4c8b6]'
    : 'bg-dark text-white hover:bg-[#4b4336]';

  return (
    <a className={`group inline-flex min-h-14 items-center justify-between gap-7 rounded-full py-2 pl-6 pr-2 text-sm font-semibold transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] motion-reduce:transition-none  ${colors}`} href={links.booksy} target="_blank" rel="noopener noreferrer">
      {children}<span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-current/10 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none " aria-hidden="true">↗</span>
    </a>
  );
}
