import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { TechStackSection } from './components/sections/TechStackSection';
import { ArchitectureSection } from './components/sections/ArchitectureSection';
import { CreatorSection } from './components/sections/CreatorSection';
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
        <FeaturesSection />
        <TechStackSection />
        <ArchitectureSection />
        <CreatorSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
