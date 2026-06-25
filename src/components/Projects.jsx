import { ExternalLink, FolderGit2 } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Leave Portal System',
      description: 'A role-based Leave Management System for Students, Staff, Tutors, HODs, Principal, Wardens, and Admin with authentication, approval workflow, leave tracking, and dashboard.',
      techStack: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Tailwind CSS'],
      githubLink: 'https://github.com/Praveenc2212/LeaveForm',
      liveLink: '#'
    },
    {
      title: 'AI Mock Interview System',
      description: 'An AI-powered interview preparation platform that conducts mock interviews and provides intelligent feedback.',
      techStack: ['React', 'Spring Boot', 'AI APIs'],
      githubLink: 'https://github.com/Praveenc2212/ai-mock-interview',
      liveLink: '#'
    },
    {
      title: 'Blood Bank Locator',
      description: 'Blood bank management system using Dijkstra\'s Algorithm to locate nearby blood banks efficiently.',
      techStack: ['Java', 'Servlet', 'JSP', 'JDBC', 'MySQL'],
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Skyra Browser',
      description: 'A secure examination browser designed to restrict unauthorized system access during online examinations.',
      techStack: ['Electron', 'JavaScript'],
      githubLink: 'https://github.com/MrCoyote2075/Skyra',
      liveLink: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="project-card glass-panel"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
