import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          Praveen<span className="text-gradient">.</span>
        </div>
        
        <p className="footer-text">
          © 2026 Praveen C. All rights reserved.
        </p>
        
        <p className="footer-credit">
          Built with passion and lots of coffee ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;
