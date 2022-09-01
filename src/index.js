import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/about/about';
import Cursos from './components/cursos/curso';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home />
    <About/>
    <Skills />
    <Cursos />
    <Projects />
    <Contact />
    <Footer />
    
    
  </React.StrictMode>
);
