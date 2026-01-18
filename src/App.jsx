import Home from "./Component/Home/Home.jsx";
import Nav from "./Component/Nav/Nav.jsx";
import About from "./Component/About/About.jsx";
import Contact from "./Component/Contact/Contact.jsx";
import Foter from "./Component/Foter/Foter.jsx";
import Skills from "./Component/Skills/Skills.jsx";
import Project from "./Component/Projects/Project.jsx";
import Services from "./Component/Services/Services.jsx";
export default function App() {
  return (
    <>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Services></Services>
      <Project></Project>
      <Contact></Contact>
      <Foter></Foter>
      <Nav></Nav>
    </>
  );
}
