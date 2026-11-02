import { links, reviews } from '../content';

export function Reviews() {
  return (
    <section id="opinie" className="bg-paper px-[7%] py-[90px] min-[801px]:px-[10%] min-[801px]:py-[120px]">
      <div className="min-[801px]:grid min-[801px]:grid-cols-[1fr_2fr] min-[801px]:gap-10">
        <div><p className="section-kicker mb-4">SŁOWA NASZYCH KLIENTÓW</p><h2 className="section-heading">Zaufanie,<br /><em className="text-accent">które zostaje.</em></h2></div>
        <div className="min-[801px]:pl-4">
          {reviews.map((review) => <figure key={review.name} className="border-t border-[#d5cfc4] py-7"><blockquote className="max-w-[620px] font-display text-[clamp(21px,2.1vw,29px)] leading-snug">„{review.quote}”</blockquote><figcaption className="mt-4 text-sm text-muted">{review.name} · opinia w Booksy</figcaption></figure>)}
          <a className="inline-flex min-h-11 items-center gap-4 text-sm font-semibold underline decoration-[#b9a681] underline-offset-4 hover:decoration-ink" href={links.reviews} target="_blank" rel="noopener noreferrer">Przeczytaj opinie w Booksy <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
