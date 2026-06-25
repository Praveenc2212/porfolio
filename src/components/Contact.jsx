import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info glass-panel"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get in Touch</h3>
            <p className="contact-desc">
              I am always open to discussing opportunities, collaborations, and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="social-links">
              <a href="mailto:praveenc2212@gmail.com" className="social-item">
                <div className="social-icon"><Mail size={20} /></div>
                <span>Email Me</span>
              </a>
              <a href="https://github.com/Praveenc2212/" target="_blank" rel="noopener noreferrer" className="social-item">
                <div className="social-icon"><FaGithub size={20} /></div>
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/praveen-c-388b69307/" target="_blank" rel="noopener noreferrer" className="social-item">
                <div className="social-icon"><FaLinkedin size={20} /></div>
                <span>LinkedIn</span>
              </a>
              <a href="https://leetcode.com/u/praveen_c2212/" target="_blank" rel="noopener noreferrer" className="social-item">
                <div className="social-icon"><SiLeetcode size={20} /></div>
                <span>LeetCode</span>
              </a>
            </div>
          </motion.div>
          
          <form className="contact-form glass-panel" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="input-field" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="input-field" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="input-field textarea" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
