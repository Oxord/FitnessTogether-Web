import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ForWhoSection } from './components/sections/ForWhoSection';
import { FeaturesSection } from './components/sections/FeaturesSection';
import { CTASection } from './components/sections/CTASection';
import { CreatorSection } from './components/sections/CreatorSection';
import './App.css';

function App() {
  const location = useLocation();

  // Обработка якорных ссылок при загрузке страницы или изменении URL
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Небольшая задержка, чтобы страница успела отрендериться
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Если нет якоря, скроллим к началу страницы
      window.scrollTo(0, 0);
    }
  }, [location]);

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
        <CreatorSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
