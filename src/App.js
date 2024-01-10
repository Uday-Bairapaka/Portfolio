import Contact from "./Contact/contact";
import Footer from "./Footer/footer";
import Skills from "./Skills/skills";
import Works from "./Works/works";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  ); 
}

export default App;
