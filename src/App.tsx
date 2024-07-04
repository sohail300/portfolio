import "./App.css";
import Achievements from "./components/Achievements";
// import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import Designs from "./components/Designs";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Designs />
      <Skills />
      <Achievements />
      {/* <Chatbot /> */}
      <Contact />
    </>
  );
}

export default App;
