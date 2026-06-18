import { ArrowRight, Download, Code2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <div className="hero-badge">
            <span className="live-indicator"></span>
            Available for work
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Praveen C</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Full Stack Developer
          </h2>
          
          <p className="hero-tech">
            Java <span className="dot">•</span> Spring Boot <span className="dot">•</span> React <span className="dot">•</span> FastAPI
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#" className="btn btn-secondary">
              Download Resume <Download size={18} />
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="glow-sphere"></div>
          <div className="glass-panel illustration-card">
            <div className="card-header">
              <div className="mac-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="card-body">
              <Code2 size={48} className="code-icon text-gradient" />
              <div className="code-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
                <div className="line line-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
