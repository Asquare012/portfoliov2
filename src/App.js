import "./App.scss";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Tech from "./component/Stack_/Tech";
import Project from "./component/Project_/Projects";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Tech />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
