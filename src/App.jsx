import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import CaseStudies from "./Components/CaseStudies/CaseStudies";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
  <>
<Navbar/>
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Service />} />
        <Route path="/casestudies" element={<CaseStudies/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact/>} />
</Routes>
<Footer/>

  </>
  );
}

export default App;
