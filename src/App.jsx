import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="main">
        {/* Hero Section */}
        <section id="hero" className="hero-placeholder">
          <div className="container">
            <h1>FitnessTogether: AI-Powered Fitness Ecosystem</h1>
            <p>Native iOS приложение с .NET 8 Backend и локальным AI-анализом</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-placeholder">
          <div className="container">
            <h2>О Проекте</h2>
            <p>Section coming soon...</p>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section-placeholder">
          <div className="container">
            <h2>Возможности</h2>
            <p>Section coming soon...</p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="section-placeholder">
          <div className="container">
            <h2>Технологии</h2>
            <p>Section coming soon...</p>
          </div>
        </section>

        {/* Architecture Section */}
        <section id="architecture" className="section-placeholder">
          <div className="container">
            <h2>Архитектура</h2>
            <p>Section coming soon...</p>
          </div>
        </section>

        {/* Creator Section */}
        <section id="creator" className="section-placeholder">
          <div className="container">
            <h2>О Владельце</h2>
            <p>Section coming soon...</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
