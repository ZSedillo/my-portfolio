import Header from './Components/Header.jsx';
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Projects from './Projects/Projects.jsx';
import Experience from './Experience/Experience.jsx';
import Skills from './Skills/Skills.jsx';
import Education from './Education/Education.jsx';
import Contact from './Contacts/Contacts.jsx';
import Footer from './Components/Footer.jsx';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
