import { links } from '../content';

const navigation = [
  { href: '#uslugi', label: 'Usługi' },
  { href: '#o-nas', label: 'O nas' },
  { href: '#opinie', label: 'Opinie' },
  { href: '#kontakt', label: 'Kontakt' },
];

export function Header() {
  return (
    <header className="bg-paper px-[6%]">
      <div className="flex h-[78px] items-center justify-between gap-3 min-[801px]:h-[94px]">
        <a className="inline-flex shrink-0 items-center gap-2.5 leading-none" href="#start" aria-label="Estetica Dłoni i Stóp — strona główna">
          <img className="h-[42px] w-9 min-[801px]:h-12 min-[801px]:w-[43px]" src="/estetica-symbol.svg" alt="" width="43" height="48" />
          <span className="flex flex-col gap-1.5"><span className="font-[Georgia,serif] text-xl tracking-[0.035em] text-[#302b25] min-[801px]:text-[23px]">ESTETICA</span><span className="text-[7px] font-bold tracking-[0.22em] text-[#816b47] min-[801px]:text-[8px]">DŁONI I STÓP</span></span>
        </a>
        <nav aria-label="Nawigacja główna" className="hidden gap-8 text-sm min-[801px]:flex">
          {navigation.map((item) => <a key={item.href} className="py-3 hover:underline" href={item.href}>{item.label}</a>)}
        </nav>
        <a className="border-b border-ink py-2 text-xs font-bold min-[801px]:text-sm" href={links.booksy} target="_blank" rel="noopener noreferrer">Umów wizytę <span className="pl-2 min-[801px]:pl-[18px]" aria-hidden="true">↗</span></a>
      </div>
      <nav aria-label="Nawigacja mobilna" className="flex justify-between gap-2 border-t border-[#d5cfc4] text-sm min-[801px]:hidden">
        {navigation.map((item) => <a key={item.href} className="flex min-h-11 items-center px-1 hover:underline" href={item.href}>{item.label}</a>)}
      </nav>
    </header>
  );
}
