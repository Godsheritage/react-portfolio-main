import Header from "./components/main/Header";
import About from "./components/about/About";
import Offerings from "./components/offerings/Offerings";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Offerings/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default App;
