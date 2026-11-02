import { links, services } from '../content';

export function Services() {
  return (
    <section id="uslugi" className="bg-[#e9e4da] px-[7%] py-16 lg:px-[10%] lg:pb-[135px] lg:pt-[120px]">
      <div className="mb-9 lg:flex lg:items-end lg:justify-between lg:gap-10">
        <div><p className="section-kicker mb-4">NASZE USŁUGI</p><h2 className="section-heading mb-0">Dobra opieka<br /><em className="text-accent">zaczyna się tutaj.</em></h2></div>
        <p className="mt-[26px] max-w-[300px] text-muted">Wybierz to, czego potrzebujesz. Szczegóły zabiegów i dostępne terminy znajdziesz w Booksy.</p>
      </div>
      <div>
        {services.map((service, index) => (
          <article key={service.name} className="grid grid-cols-[24px_1fr] items-start border-t border-[#b9b1a3] py-8 last:border-b lg:grid-cols-[70px_1fr_1fr] lg:gap-x-6 lg:py-10">
            <span className="pt-3 text-xs text-[#887451]">{String(index + 1).padStart(2, '0')}</span>
            <div className="contents lg:block"><h3 className="font-display text-[32px] leading-[1.1] font-normal lg:text-[38px]">{service.name}</h3><p className="col-span-2 mt-3 max-w-[430px] text-muted">{service.description}</p></div>
            <div className="col-span-2 mt-5 lg:col-span-1 lg:col-start-auto lg:mt-0">
              <ul className="space-y-2 text-sm text-ink">{service.examples.map((example) => <li key={example} className="flex gap-3"><span aria-hidden="true" className="text-[#887451]">—</span>{example}</li>)}</ul>
              <a className="mt-5 inline-flex min-h-11 items-center gap-4 text-sm font-semibold underline decoration-[#b9a681] underline-offset-4 hover:decoration-ink" href={links.booksy} target="_blank" rel="noopener noreferrer" aria-label={`Zobacz ${service.bookingLabel} w Booksy`}>Zobacz ofertę w Booksy <span aria-hidden="true">↗</span></a>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-12 grid items-center gap-10 lg:ml-[70px] lg:mt-24 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div className="max-w-[540px]">
        <h3 className="font-display text-[26px] leading-tight">Nie wiesz, jaki zabieg wybrać?</h3>
        <p className="mt-3 text-muted">W Booksy znajdziesz wizytę podologiczną „Nie wiem co wybrać” — podczas spotkania zostanie dobrany zabieg odpowiedni do potrzeb Twoich stóp.</p>
        <a className="mt-3 inline-flex min-h-11 items-center gap-4 text-sm font-semibold underline decoration-[#b9a681] underline-offset-4 hover:decoration-ink" href={links.booksy} target="_blank" rel="noopener noreferrer">Znajdź wizytę w Booksy <span aria-hidden="true">↗</span></a>
        </div>
        <div className="w-full lg:max-w-[360px] lg:justify-self-end">
          <img src={`${import.meta.env.BASE_URL}images/care-details.png`} alt="" loading="lazy" width="1024" height="1536" onError={(event) => { event.currentTarget.hidden = true; }} className="aspect-[16/10] w-full rounded-[24px] object-cover object-center lg:aspect-[4/5] lg:rounded-[24px]" />
        </div>
      </div>
    </section>
  );
}
