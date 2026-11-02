export function Footer() {
  return (
    <footer className="grid grid-cols-2 items-end gap-10 bg-[#191916] px-[7%] pb-[30px] pt-[60px] text-[#d5cfc4] min-[801px]:grid-cols-[2fr_1fr_1fr] min-[801px]:px-[10%] min-[801px]:pb-9 min-[801px]:pt-[65px]">
      <a className="col-span-2 font-display text-[clamp(70px,10vw,150px)] leading-[0.9] tracking-[-0.07em] text-[#eee9df] min-[801px]:col-span-1" href="#start">estetica<span className="text-gold">.</span></a>
      <div className="text-xs text-[#aaa399]"><p>Studio dłoni i stóp<br />Warszawa Białołęka</p><p className="mt-4">© Estetica Dłoni i Stóp</p></div>
      <a className="text-right text-xs text-[#aaa399]" href="#start">Wróć na górę ↑</a>
    </footer>
  );
}
