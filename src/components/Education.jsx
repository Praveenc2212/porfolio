import { GraduationCap, CodeSquare, Terminal } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  const profiles = [
    {
      platform: 'LeetCode',
      icon: <CodeSquare size={24} />,
      details: '260+ Problems Solved',
      link: '#'
    },
    {
      platform: 'GitHub',
      icon: <FaGithub size={24} />,
      details: 'Profile & Repositories',
      link: '#'
    },
    {
      platform: 'HackerRank',
      icon: <Terminal size={24} />,
      details: 'Programming Profile',
      link: '#'
    }
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">Education & Profiles</h2>
        
        <div className="education-grid">
          {/* Education Info */}
          <div className="degree-card glass-panel">
            <div className="degree-header">
              <div className="icon-wrapper">
                <GraduationCap size={32} className="text-gradient" />
              </div>
              <div>
                <h3 className="degree-title">Bachelor of Engineering</h3>
                <p className="degree-major">Computer Science Engineering</p>
              </div>
            </div>
            
            <div className="degree-body">
              <div className="status-badge">Current Year: Third Year</div>
              
              <h4 className="focus-title">Core Focus Areas</h4>
              <ul className="focus-list">
                <li>Data Structures and Algorithms</li>
                <li>Database Management Systems</li>
                <li>Operating Systems</li>
                <li>Computer Networks</li>
                <li>Full Stack Development</li>
              </ul>
            </div>
          </div>
          
          {/* Coding Profiles */}
          <div className="profiles-container">
            {profiles.map((profile, idx) => (
              <a href={profile.link} key={idx} className="profile-card glass-panel">
                <div className="profile-icon">
                  {profile.icon}
                </div>
                <div className="profile-info">
                  <h4>{profile.platform}</h4>
                  <p>{profile.details}</p>
                </div>
                <div className="profile-arrow">→</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
