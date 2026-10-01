import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
const App = () => {
  return (
    <>
      <NavBar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="work">
        <Work />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
