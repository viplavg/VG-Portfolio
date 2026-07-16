import useTheme from "../../hooks/useTheme";
import { FiMoon, FiSun } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo">
          VG
        </a>

        <nav className="navbar__nav" aria-label="Primary navigation">
          <ul className="navbar__links">
            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#experience">Experience</a>
            </li>

            <li>
              <a href="#skills">Skills</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="navbar__actions">
           <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${
                    theme === "light" ? "dark" : "light"
                } theme`}
                >
                {theme === "light" ? <FiMoon /> : <FiSun />}
            </button>

          <a href="/resume.pdf" className="btn btn-primary">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;