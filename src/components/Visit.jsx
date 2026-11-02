import { links } from '../content';
import { BookingLink } from './BookingLink';

export function Visit() {
  return (
    <section id="kontakt" className="bg-dark px-[7%] py-16 text-[#f7f3ec] lg:grid lg:grid-cols-[2fr_1fr] lg:gap-[60px] lg:px-[10%] lg:py-[140px]">
      <div><p className="section-kicker mb-4 !text-[#c5ae82]">ZAPRASZAMY DO ESTETICA</p><h2 className="display-heading mb-8 text-[clamp(54px,6vw,86px)]">Twój czas.<br /><em className="text-[#c5ae82]">Nasza troska.</em></h2><p className="mb-8 max-w-[440px] text-[#c8c1b5]">Znajdź dogodny termin i zarezerwuj wizytę online. Czekamy na Ciebie na warszawskiej Białołęce.</p><BookingLink light>Zarezerwuj wizytę</BookingLink></div>
      <div className="mt-12 self-end text-[#e2dbd0] lg:mt-0"><p className="mb-4 text-[11px] font-bold tracking-[0.17em] text-[#b7a27b]">ODWIEDŹ NAS</p><address className="mb-6 text-[19px] not-italic">ul. Modlińska 73, lok. 1<br />03-199 Warszawa Białołęka</address><p className="mb-4 max-w-[300px] text-sm leading-relaxed text-[#c8c1b5]">Magmediq — wejście od strony ogródka przy studiu tatuażu. Wizyty po wcześniejszej rezerwacji.</p><a className="mt-2 flex min-h-11 w-fit items-center py-2 text-sm hover:underline" href={links.booksy} target="_blank" rel="noopener noreferrer">Godziny i dostępne terminy na Booksy ↗</a><a className="mt-2 flex min-h-11 w-fit items-center py-2 text-sm hover:underline" href={links.maps} target="_blank" rel="noopener noreferrer">Zobacz na mapie ↗</a><a className="mt-2 flex min-h-11 w-fit items-center py-2 text-sm hover:underline" href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a></div>
    </section>
  );
}
