import { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((previousState) => !previousState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbarOffset = 140;
      const scrollPosition = window.scrollY + navbarOffset;

      let currentSection = "home";

      navLinks.forEach((link) => {
        const sectionId = link.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (section && scrollPosition >= section.offsetTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId, isMobile = false) => {
    setActiveSection(sectionId);

    if (isMobile) {
      closeMenu();
    }
  };

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => {
      const sectionId = link.href.replace("#", "");
      const isActive = activeSection === sectionId;

      return (
        <a
          key={link.id}
          href={link.href}
          className={isActive ? "navbar__link--active" : ""}
          onClick={() => handleNavClick(sectionId, isMobile)}
          aria-current={isActive ? "page" : undefined}
        >
          {link.label}
        </a>
      );
    });

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <a
            href="#home"
            className="navbar__logo"
            onClick={() => handleNavClick("home", true)}
            aria-label="Go to homepage"
          >
            VG
          </a>

          <nav className="navbar__links" aria-label="Primary navigation">
            {renderNavLinks()}
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
              onClick={toggleMenu}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
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
          aria-hidden={!isMenuOpen}
        >
          {renderNavLinks(true)}

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
