import { User, Code, Database, Layout } from 'lucide-react';
import './About.css';

const About = () => {
  const interests = [
    { icon: <Layout className="text-gradient" />, title: 'Frontend Development' },
    { icon: <Database className="text-gradient" />, title: 'Backend & DB Design' },
    { icon: <Code className="text-gradient" />, title: 'Algorithms & OOP' }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content glass-panel">
          <div className="about-text">
            <p>
              I am currently pursuing my <strong>B.E. in Computer Science Engineering</strong>. 
              I enjoy developing web applications and continuously improving my problem-solving skills.
            </p>
            <p>
              My passion lies in full-stack development, where I love building intuitive user interfaces 
              and robust, scalable backend systems. I am currently preparing for software engineering and 
              campus placements, constantly learning modern technologies to stay ahead of the curve.
            </p>
            <p>
              I have hands-on experience working with <strong>REST APIs, Microservices, and complex System Designs</strong>.
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
        </div>
      </div>
    </section>
  );
};

export default About;
