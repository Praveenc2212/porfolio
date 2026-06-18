import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Leave Portal System',
      description: 'A comprehensive role-based leave management system for educational institutions featuring student, staff, tutor, HOD, principal, warden, gate security, and admin modules with automated approval workflows.',
      techStack: ['React', 'Tailwind CSS', 'Axios', 'Zustand', 'Spring Boot', 'MySQL'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'AI Mock Interview System',
      description: 'An AI-powered platform designed to help students practice technical interviews and improve their communication skills through realistic mock interview sessions.',
      techStack: ['React', 'AI Integration', 'Node.js'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Skyra Browser',
      description: 'A highly secure kiosk-based examination browser developed to conduct online exams safely by preventing unauthorized activities and enforcing strict browser lockdown.',
      techStack: ['Electron', 'C++', 'System APIs'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Banking Application',
      description: 'A secure and robust banking application featuring JWT-based authentication, account management functionalities, and secure transaction tracking.',
      techStack: ['React', 'Spring Boot', 'JWT', 'MySQL'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Product & Order Microservices',
      description: 'Built scalable and independent microservices architecture with isolated databases tailored for efficient product cataloging and order management.',
      techStack: ['Spring Boot', 'MongoDB', 'REST APIs'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Blood Bank Locator',
      description: 'A life-saving web application utilizing Dijkstra\'s algorithm to help users locate nearby blood banks and check real-time blood availability efficiently.',
      techStack: ['Java Servlets', 'JSP', 'JDBC', 'MySQL'],
      githubLink: '#',
      liveLink: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="project-card glass-panel">
              <div className="project-header">
                <FolderGit2 size={32} className="text-gradient" />
                <div className="project-links">
                  <a href={project.githubLink} aria-label="GitHub"><FaGithub size={20} /></a>
                  <a href={project.liveLink} aria-label="Live Demo"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              
              <div className="project-footer">
                <div className="tech-stack">
                  {project.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
