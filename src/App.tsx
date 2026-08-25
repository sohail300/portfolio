import "./App.css";
import Contact from "./components/Contact";
import Designs from "./components/Designs";
import Experience from "./components/Experience";
import Freelancing from "./components/Freelancing";
import GithubHeatmap from "./components/GithubHeatmap";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Web3 from "./components/Web3";
import LenisProvider from "./components/LenisProvider";

function App() {
  return (
    <>
      <LenisProvider>
        <Navbar />
        <Hero />
        <Experience />
        <Freelancing />
        <Projects />
        <Designs />
        <Skills />
        <GithubHeatmap />
        <Contact />
      </LenisProvider>
    </>
  );
}

export default App;