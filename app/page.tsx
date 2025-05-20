import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function Home() {
  return (
    <main>
      <div className="bg-gradient-to-b from-black to-gray-900">
        <Navbar />

        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </main>
  );
} 