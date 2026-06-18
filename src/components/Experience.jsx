import { Trophy, Code2, Award } from 'lucide-react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      icon: <Code2 size={24} />,
      title: 'LeetCode Problem Solver',
      date: '2025',
      points: [
        'Solved 260+ coding problems.',
        'Earned the 100 Days Badge in 2025.'
      ]
    },
    {
      icon: <Trophy size={24} />,
      title: 'Chess Player',
      date: 'Present',
      points: [
        'District-level Chess Player.',
        'Participated in several competitive chess tournaments.'
      ]
    },
    {
      icon: <Award size={24} />,
      title: 'ACM Annual Event Participant',
      date: '2025',
      points: [
        'Actively participated in ACM Annual Event 2025.',
        'Collaborated with peers to solve complex technical challenges.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Achievements & Experience</h2>
        
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-icon text-gradient">{exp.icon}</div>
              </div>
              <div className="timeline-content glass-panel">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
