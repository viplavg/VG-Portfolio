import { useState } from "react";
import {
  HiOutlineMenuAlt3,
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineX,
} from "react-icons/hi";

import useTheme from "../../hooks/useTheme";
import "./Navbar.css";

const navLinks = [
  { id: 1, label: "About", href: "#home" },
  { id: 2, label: "Experience", href: "#experience" },
  { id: 3, label: "Skills", href: "#skills" },
  { id: 4, label: "Projects", href: "#projects" },
  { id: 5, label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <a
            href="#home"
            className="navbar__logo"
            onClick={closeMenu}
            aria-label="Go to homepage"
          >
            VG
          </a>

          <nav className="navbar__links" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.id} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar__actions">
            <button
              type="button"
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
            >
              {theme === "dark" ? (
                <HiOutlineSun aria-hidden="true" />
              ) : (
                <HiOutlineMoon aria-hidden="true" />
              )}
            </button>

            <a
              href="/resume.pdf"
              className="btn btn-primary navbar__resume-button"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>

            <button
              type="button"
              className="navbar__menu-button"
              onClick={() => {
                setIsMenuOpen((previousState) => !previousState);
              }}
              aria-label={
                isMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? (
                <HiOutlineX aria-hidden="true" />
              ) : (
                <HiOutlineMenuAlt3 aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav
          id="mobile-navigation"
          className={`navbar__mobile-menu ${
            isMenuOpen ? "navbar__mobile-menu--open" : ""
          }`}
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            className="btn btn-primary navbar__mobile-resume"
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;