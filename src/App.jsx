import Header from "./components/Header/Header";
import "./App.scss"
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";


const App = () => {
  return(
    
    <>
       <Header />
       <Hero />
       <Services />
       <Work />
       <Portfolio />
       <Testimonials />
       <Footer />
    </>
  )
};

export default App;
