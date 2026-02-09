import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
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
        <FeaturesSection />

        {/* Tech Stack Section - Coming in Phase 5 */}
        <section id="tech-stack" className="section-placeholder">
          <div className="container">
            <h2>Технологии</h2>
            <p>Section coming soon...</p>
          </div>
        </section>

        {/* Architecture Section - Coming in Phase 5 */}
        <section id="architecture" className="section-placeholder">
          <div className="container">
            <h2>Архитектура</h2>
            <p>Section coming soon...</p>
          </div>
        </section>

        {/* Creator Section - Coming in Phase 5 */}
        <section id="creator" className="section-placeholder">
          <div className="container">
            <h2>О Владельце</h2>
            <p>Section coming soon...</p>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
