import Header from '../components/Header';
import Navigation from '../components/Navigation';
import About from '../components/About';
import Writing from '../components/Writing';
import Projects from '../components/Projects';
import Reading from '../components/Reading';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => (
  <div className="min-h-screen px-6 py-16 sm:px-10 sm:py-24">
    <div className="mx-auto max-w-[40rem]">
      <Header />
      <Navigation />
      <main className="space-y-14">
        <About />
        <Writing />
        <Projects />
        <Reading />
        <Contact />
      </main>
      <Footer />
    </div>
  </div>
);

export default Index;
