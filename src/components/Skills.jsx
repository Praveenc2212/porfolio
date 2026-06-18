import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C++', 'JavaScript', 'SQL']
    },
    {
      title: 'Frontend',
      skills: ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Axios', 'Zustand']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'FastAPI', 'Servlets', 'JSP', 'JDBC', 'Hibernate', 'REST APIs']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Maven', 'Linux']
    },
    {
      title: 'Concepts',
      skills: ['OOP', 'DSA', 'Microservices', 'JWT Auth', 'System Design', 'DBMS', 'OS', 'Networks']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="skill-category-card glass-panel">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIdx) => (
                  <span key={skillIdx} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
