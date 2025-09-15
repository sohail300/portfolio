import "./App.css";
import Achievements from "./components/Achievements";
// import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Designs from "./components/Designs";
import Education from "./components/Education";
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
        <Education />
        <Experience />
        <Freelancing />
        <Projects />
        {/* <Web3 /> */}
        <Designs />
        <Skills />
        <Achievements />
        <GithubHeatmap />
        {/* <Chatbot /> */}
        <Contact />
      </LenisProvider>
    </>
  );
}

export default App;
