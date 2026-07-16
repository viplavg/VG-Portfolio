import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__content">
        <p>
          © {new Date().getFullYear()} Viplav Gupta. All rights reserved.
        </p>

        <p>
          Built with React, Vite & lots of ☕
        </p>
      </div>
    </footer>
  );
};

export default Footer;