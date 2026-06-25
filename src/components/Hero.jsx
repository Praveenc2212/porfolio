import { ArrowRight, Download, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-badge">
            <span className="live-indicator"></span>
            Available for work
          </div>
          
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Praveen C</span>
          </h1>
          
          <h2 className="hero-subtitle" style={{ fontSize: '1.2rem', marginBottom: '1rem', fontWeight: 500 }}>
            Full Stack Developer <span className="dot" style={{ margin: '0 0.5rem', color: 'var(--accent-color)' }}>|</span> Backend Developer <span className="dot" style={{ margin: '0 0.5rem', color: 'var(--accent-color)' }}>|</span> Software Engineering Student
          </h2>
          
          <p className="hero-tech" style={{ maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.6', color: 'var(--text-secondary)' }}>
            Seeking Software Engineering internships and full-time opportunities where I can build scalable software systems, contribute to impactful projects, and continuously improve my technical expertise.
          </p>
          
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#" className="btn btn-secondary">
              Download Resume <Download size={18} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 },
            scale: { duration: 0.8, delay: 0.2 },
            y: { repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }
          }}
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
