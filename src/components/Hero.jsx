import { BookingLink } from './BookingLink';
import { links } from '../content';

export function Hero() {
  return (
    <section id="start" className="flex min-[801px]:min-h-[calc(100svh-94px)] flex-col min-[801px]:grid min-[801px]:grid-cols-[48%_52%]">
      <div className="flex flex-col items-start px-[7%] pb-[45px] pt-[55px] min-[801px]:pb-[35px] min-[801px]:pl-[12.5%] min-[801px]:pr-[9%] min-[801px]:pt-[clamp(40px,5vw,76px)]">
        <p className="section-kicker">WARSZAWA BIAŁOŁĘKA <span className="mx-2">·</span> MODLIŃSKA 73</p>
        <h1 className="display-heading my-[28px] max-w-[650px] text-[clamp(52px,12vw,75px)] min-[801px]:mb-7 min-[801px]:mt-7 min-[801px]:text-[clamp(54px,6.1vw,96px)]">Piękno zaczyna się od <em className="text-accent">troski.</em></h1>
        <p className="mb-6 max-w-[390px] text-[17px] text-muted">Podologia, manicure i pedicure na warszawskiej Białołęce. Zadbaj o dłonie i stopy w spokojnej atmosferze, z uwagą na swoje potrzeby.</p>
        <BookingLink>Umów wizytę na Booksy</BookingLink>
        <div className="mt-12 grid w-full max-w-[440px] grid-cols-[auto_1fr] gap-x-6 border-t border-[#d5cfc4] pt-6 sm:gap-x-9">
          <div className="border-r border-[#d5cfc4] pr-6 sm:pr-9">
            <p className="font-display text-[46px] leading-none tracking-[-0.06em] text-ink">5<span className="text-accent">+</span></p>
            <p className="mt-2 text-sm leading-snug text-muted">lat<br />doświadczenia</p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="mb-2 text-xs font-bold tracking-[0.16em] text-[#806d4b]">GŁOSY NASZYCH KLIENTÓW</p>
            <blockquote className="font-display text-[21px] italic leading-tight text-ink">„dokładnie i estetycznie”</blockquote>
            <a className="mt-3 text-sm font-medium text-muted underline decoration-[#b9a681] underline-offset-4 hover:text-ink" href={links.reviews} target="_blank" rel="noopener noreferrer">Opinia z Booksy · zobacz więcej <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </div>
      <div className="min-h-[45svh] bg-[#57473a] bg-[url('/preview/studio.png')] bg-[position:60%_center] bg-cover min-[801px]:min-h-[600px] min-[801px]:bg-center" role="img" aria-label="Dekoracyjna kompozycja akcesoriów do pielęgnacji dłoni" />
    </section>
  );
}
