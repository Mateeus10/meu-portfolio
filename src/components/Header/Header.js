
import React from 'react';
import { useEffect } from 'react';
import './header.css';
import Icon from './assets/icons1.png';

export default function Header() {

  var cont = 0;

  function _toggleMenuIcon() {
    const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
   const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
    if (menuToggleBars) {
      menuToggleBars.classList.remove('fa-bars');
      menuToggleBars.classList.add('fa-xmark');
    }
    if (menuToggleTimes) {
      menuToggleTimes.classList.remove('fa-xmark');
      menuToggleTimes.classList.add('fa-bars');
    }
  }
  useEffect(() => {
    if (cont === 0) {
      cont++;
      const sidebarWrapper = document.getElementById('sidebar-wrapper');
      const menuToggle = document.body.querySelector('.menu-toggle');
      var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#main-bar');
        if (!navbarCollapsible) {
          return;
        }
        if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('shrink');
        } else {
          navbarCollapsible.classList.add('shrink');
        }
      };
      
      // Shrink the navbar 
     navbarShrink();

     document.addEventListener('scroll', navbarShrink);
          
      menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
      });
      
      var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
      scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
          sidebarWrapper.classList.remove('active');
          menuToggle.classList.remove('active');
          _toggleMenuIcon();
        })
        return scrollTrigger;
      }); 
    }
  }, [cont]);

  return (
    <header id="page-top">
      <div className="main-bar" id="main-bar">
        <a href="#page-top"><img src={Icon} className="bar-icon" alt="Icon"></img></a>
      </div>
      <a className="menu-toggle rounded" href="/"><i className="fas fa-bars" id="bars"></i></a>
      <nav id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-nav-item"><a href="#page-top"><span>Home</span></a></li>
          <li className="sidebar-nav-item"><a href="#about"><span>Sobre</span></a></li>
          <li className="sidebar-nav-item"><a href="#skills"><span>Skills</span></a></li>
          <li className="sidebar-nav-item"><a href="#cursos"><span>Cursos</span></a></li>
          <li className="sidebar-nav-item"><a href="#projects"><span>Projetos</span></a></li>
          <li className="sidebar-nav-item"><a href="#contact"><span>Contato</span></a></li>
        </ul>
      </nav>
    </header>
  );
}
