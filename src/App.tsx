import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Innovations from './components/Innovations';
import Leadership from './components/Leadership';
import DemoProject from './components/DemoProject';
import AIGame from './components/AIGame';
import PublicDesk from './components/PublicDesk';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Background from './components/Background';
import MaskedCursor from './components/MaskedCursor';

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-poppins relative">
      <Background />
      <MaskedCursor />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Innovations />
          <Leadership />
          <DemoProject />
          <AIGame />
          <PublicDesk />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;