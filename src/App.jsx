import { useLayoutEffect } from 'react';
import { projects } from './data/portfolio.js';
import useHashRoute from './hooks/useHashRoute.js';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import ProjectPage from './components/ProjectPage.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollTop from './components/ScrollTop.jsx';

export default function App() {
  const { hash, projectId } = useHashRoute();
  const project = projects.find((p) => p.id === projectId);

  // Project pages start at the top; section links (#about) scroll once the home page is back.
  useLayoutEffect(() => {
    if (project) {
      window.scrollTo(0, 0);
      return;
    }
    const section = hash.length > 1 && document.getElementById(hash.slice(1));
    if (section) section.scrollIntoView();
  }, [hash, project]);

  return (
    <>
      {/* Remount per page so the active-link tracker watches the right sections */}
      <Navbar key={project ? 'project' : 'home'} />
      <main>
        {project ? (
          <ProjectPage project={project} />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Certificates />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
