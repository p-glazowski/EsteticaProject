export function Footer() {
  return (
    <footer className="bg-[#191916] px-[7%] py-6 text-[#d5cfc4] lg:px-[10%]">
      <div className="flex items-center justify-between gap-4">
        <a className="inline-flex min-h-11 items-center font-display text-[34px] leading-none tracking-[-0.06em] text-[#eee9df]" href="#start" aria-label="Estetica — wróć na górę">estetica<span className="text-gold">.</span></a>
        <a className="inline-flex min-h-11 items-center gap-2 text-sm text-[#c0b9ae] hover:underline" href="#start">Wróć na górę <span aria-hidden="true">↑</span></a>
      </div>
      <div className="mt-3 flex flex-col gap-1 text-xs text-[#aaa399] sm:flex-row sm:justify-between sm:gap-4">
        <p>Studio dłoni i stóp · Warszawa Białołęka</p>
        <p>© Estetica Dłoni i Stóp</p>
      </div>
    </footer>
  );
}
