import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'C++', 'JavaScript', 'SQL']
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Axios']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'FastAPI(basics)', 'REST APIs', 'JWT Authentication']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'IntelliJ IDEA', 'VS Code', 'Postman', 'Maven']
    },
    {
      title: 'Core Concepts',
      skills: ['Object Oriented Programming', 'Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks', 'Microservices', 'REST API Design']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="skill-category-card glass-panel" whileHover={{ y: -5 }}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
