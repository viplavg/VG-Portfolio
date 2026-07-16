import Navbar from "./components/Navbar/Navbar";
import useTheme from "./hooks/useTheme";
import Experience from "./sections/Experience/Experience";
import Hero from "./sections/Hero/Hero";


function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar />
      <main id="home">
          <Hero />
          <Experience />
      </main>
    </>
  );
}

export default App;