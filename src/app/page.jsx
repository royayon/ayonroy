import Hero from '../components/Hero';
import About from '../components/About';
import Jobs from '../components/Jobs';
import FeaturedProjects from '../components/FeaturedProjects';
import OtherProjects from '../components/OtherProjects';
import Publications from '../components/Publications';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Jobs />
      <FeaturedProjects />
      <OtherProjects />
      <Publications />
      <Contact />
    </div>
  );
}
