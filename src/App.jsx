import BackToTop from "./components/BackToTop/BackToTop";
import Navbar from "./components/Navbar/Navbar";
import useTheme from "./hooks/useTheme";
import Contact from "./sections/Contact/Contact";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar />
      <main id="home">
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
      </main>
          <Footer />
          <BackToTop />
    </>
  );
}

export default App;