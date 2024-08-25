import Navbar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About"
import Info from "./components/Info";
// import Skills from "./components/Skills"
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Info />
      {/* <Skills /> */}
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
