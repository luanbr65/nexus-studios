import Navbar from '../components/layout/Navbar/navbar';
import ScrollProgress from '../components/layout/ScrollProgress';
import Hero from '../components/home/Hero/hero';
import TechStrip from '../components/home/TechStrip';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <TechStrip />
      <Services />
      <Projects />
    </main>
  );
}
