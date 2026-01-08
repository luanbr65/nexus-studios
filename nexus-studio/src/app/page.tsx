import styles from './page.module.css';
import Navbar from '../components/layout/Navbar/navbar';
import Hero from '../components/home/Hero/hero';
import TechStrip from '../components/home/TechStrip';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      <Hero />

      <TechStrip />

      <Services />

      <Projects />

      <Footer />
    </main>
  );
}
