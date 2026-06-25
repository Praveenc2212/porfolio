import { Trophy, Code2, Award, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      icon: <Briefcase size={24} />,
      title: 'Haskel AI',
      role: 'Software Engineering Intern',
      date: 'June 2025 – August 2025',
      points: [
        'Developed full-stack web application features.',
        'Worked with backend REST APIs.',
        'Built responsive frontend interfaces.',
        'Used Git and GitHub for version control.',
        'Participated in debugging and feature development.',
        'Collaborated with the development team on real-world software projects.'
      ],
      skills: ['Java', 'Spring Boot', 'React', 'FastAPI', 'MySQL', 'Git', 'GitHub']
    },
    {
      icon: <Code2 size={24} />,
      title: 'Competitive Programmer & LeetCode',
      date: 'Present',
      points: [
        'Solved 650+ LeetCode problems.',
        'Earned the LeetCode 100 Days Badge (2025, 2026) and 50 Days Badge (2026, 2025).',
        'Passionate Competitive Programmer focusing on algorithms and optimization.'
      ]
    },
    {
      icon: <Trophy size={24} />,
      title: 'Chess Player',
      date: 'Present',
      points: [
        'District Level Chess Player.',
        'Participated in several competitive chess tournaments.'
      ]
    }
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Achievements & Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="timeline-marker">
                <div className="marker-icon text-gradient">{exp.icon}</div>
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                {exp.role && <div style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 500, fontSize: '1.1rem' }}>{exp.role}</div>}
                <ul className="timeline-points">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
                {exp.skills && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="skill-tag" style={{ padding: '0.25rem 0.75rem', fontSize: '0.8rem', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-color)', borderRadius: '999px', color: 'var(--text-secondary)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
