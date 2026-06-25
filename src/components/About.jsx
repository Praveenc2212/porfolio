import { User, Code, Database, Layout, Server, Network, Layers, Brain } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePic from '../assets/praveen.jpeg';
import './About.css';

const About = () => {
  const interests = [
    { icon: <Server color="#3b82f6" />, title: 'Backend Development' },
    { icon: <Network color="#3b82f6" />, title: 'REST APIs' },
    { icon: <Layers color="#3b82f6" />, title: 'Microservices' },
    { icon: <Code color="#3b82f6" />, title: 'Software Engineering' },
    { icon: <Database color="#3b82f6" />, title: 'System Design' },
    { icon: <Brain color="#3b82f6" />, title: 'Problem Solving' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <motion.div 
          className="about-content glass-panel"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-text">
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <img 
                src={profilePic} 
                alt="Praveen C" 
                style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--border-color)' }} 
              />
              <div>
                <h3 style={{ color: 'var(--text-primary)', fontSize: '1.4rem', marginBottom: '0.2rem' }}>Praveen C</h3>
                <span style={{ color: 'var(--accent-color)', fontWeight: 500 }}>Software Engineer</span>
              </div>
            </div>
            <p>
              I am a <strong>Computer Science Engineering</strong> student passionate about problem solving and continuously improving my software engineering skills through projects and competitive programming.
            </p>
            <p>
              I enjoy building scalable <strong>backend systems, REST APIs</strong>, and modern <strong>full-stack web applications</strong>.
            </p>
          </div>
          
          <div className="about-interests">
            <h3>Areas of Focus</h3>
            <div className="interests-grid">
              {interests.map((item, index) => (
                <div key={index} className="interest-card glass-panel">
                  <div className="icon-wrapper">
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
