import Hero from '../components/home/Hero/hero';
import TechStrip from '../components/home/TechStrip';
import Services from '../components/home/Services';
import ConversionBand from '../components/home/ConversionBand';
import Projects from '../components/home/Projects';

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <TechStrip />
      <Services />
      <ConversionBand />
      <Projects />
    </main>
  );
}
