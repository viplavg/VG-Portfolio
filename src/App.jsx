import Navbar from "./components/Navbar/Navbar";
import useTheme from "./hooks/useTheme";
import Experience from "./sections/Experience/Experience";
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
      </main>
    </>
  );
}

export default App;