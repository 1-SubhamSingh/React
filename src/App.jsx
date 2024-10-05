import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Technology from "./components/Technology";
import Projects from "./components/Projects";
import Contactform from "./components/Contactform";
// import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialised selection:bg-yellow-300 selection:text-yellow-900 ">
   <div className="fixed top-0 -z-10 h-full w-full">
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24
     [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
     </div>
     </div>
       <div className="container mx-auto px-8">
      <Navbar/> 
      <Hero/>
      <About/>
      <Technology/>
    <Experience/>
    <Projects/>
    {/* <Contact/> */}
    <Contactform/>
    <Footer/>
    </div>
    </div>
  );
};

export default App;
