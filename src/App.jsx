import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ForWhoSection } from './components/sections/ForWhoSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { CTASection } from './components/sections/CTASection';
import './App.css';

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="main">
        <HeroSection />
        <AboutSection />
        <ForWhoSection />
        <FeaturesSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
