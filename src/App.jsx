import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Reviews } from './components/Reviews';
import { Visit } from './components/Visit';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <a className="sr-only focus:not-sr-only focus:absolute focus:left-2.5 focus:top-2.5 focus:z-20 focus:bg-white focus:p-2.5" href="#tresc">Przejdź do treści</a>
      <Header />
      <main id="tresc"><Hero /><About /><Services /><Reviews /><Visit /></main>
      <Footer />
    </>
  );
}
