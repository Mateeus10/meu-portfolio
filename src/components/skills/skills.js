import { useEffect } from 'react';
import './skills.css';
import sql from './assets/img/sqlserver.png';
import poo from './assets/img/poo.png';


export default function Skills() {

  var passou = true;
  const restDescription = 'de experiência com essa tecnologia.'
  const estudando = 'estou cursando essa Lingaugem de Programção.'
  const listColors = ['#83cd29', '#68217a', ' #ffd845', '#e62c2d', '#61dafb', '#61dafb', ' #e54d26', '#3d8fc6', '#007acc', '#f0db4f', '#83cd29', '#3d8fc6', '#3d8fc6', '#e62c2d', '#836FFF',];
  const titles = ['Node.js', 'MYSQL', 'Python', 'Java', 'MONGODB', 'React', 'HTML5', 'CSS3', 'TypeScript', 'JavaScript', 'SQL SERVER ', 'POO', 'Linguagem de Programção C', 'GIT', 'Heroku']; 
  const progress = ['120', '120', '100', '100', '100', '120', '160', '160', '100', '160', '100', '50', '100', '100', '50']
  const descriptions = [
    `9 meses ${restDescription}`,
    `6 meses ${restDescription}`,
    `9 meses ${restDescription}`,
    `6 meses ${estudando}`,
    `9 meses ${restDescription}`,
    `9 meses ${restDescription}`,
    `9 meses ${restDescription}`,
    `9 meses ${restDescription}`,
    `9 meses ${restDescription}`,
    `9 meses ${restDescription}`,
    `9 meses ${restDescription}`,
    `3 meses ${restDescription}`,
    `1 ano   ${restDescription}`,
    `9 meses   ${restDescription}`,
    `6 meses   ${restDescription}`,
  ];

  function criaListener(id) {
    return function() {
    document.querySelector('progress').value = progress[id];
    document.querySelector('.description').innerHTML = descriptions[id];
    document.querySelector('.title-description').innerHTML = titles[id];
    document.body.style.setProperty('--skillColor', listColors[id]);
    }
  }

  useEffect(() => {
    if (passou) {
      passou = false
      const items = document.querySelectorAll('.single-item');
      for (var i = 0; i < items.length; i++) {
        items[i].onmouseover = criaListener(i);
      }
    }  
  }, []);

  return (
    <section class="page-section" id="skills">
     <h2 class="title-page"><span>Minhas skills</span></h2>
     <div class="wrapper">
       <div class="description-skills">
         <h2 class="title-description">Skill</h2>
         <progress max="200" value="0"></progress>
         <p class="description">Passe o mouse/aperte em cima de alguma skill para ver o tempo de experiência</p>
        </div>
        <div class="container-skills">
         <div class="single-item">
           <i class="devicon-nodejs-plain colored" id="icon-language"></i>
          </div>
          <div class="single-item">
            <i class="devicon-mysql-plain-wordmark colored" id="icon-language"></i>
          </div>
          <div class="single-item">
            <i class="devicon-python-plain-wordmark colored" id="icon-language"></i>
          </div>
          <div class="single-item mg-1">
           <i class="devicon-java-plain-wordmark colored" id="icon-language"></i>
          </div>
          <div class="single-item mg-1">
           <i class="devicon-sqlite-plain colored" id="icon-language"></i>
          </div>
          <div class="single-item">
            <i class="devicon-react-original-wordmark colored" id="icon-language"></i>
          </div>
          <div class="single-item mg-1">
            <i class="devicon-html5-plain-wordmark colored" id="icon-language"></i>
          </div>
          <div class="single-item mg-1">
           <i class="devicon-css3-plain-wordmark colored" id="icon-language"></i>
          </div>
          <div class="single-item">
            <i class="devicon-typescript-plain colored" id="icon-language"></i>
          </div>
          <div class="single-item">
           <i class="devicon-javascript-plain colored" id="icon-language"></i>
          </div>
          <div class="single-item">
           <img src={sql} class="devicon-javascript-plain colored" id="icon-language" alt="" />
          </div>
          <div class="single-item">
           <img src={poo} class="devicon-java-plain colored" id="icon-language" alt="poo" />
          </div>
          <div class="single-item mg-1">
            <i class="devicon-c-plain-wordmark colored" id="icon-language"></i>
          </div>
          <div class="single-item mg-1">
            <i class="devicon-git-plain-wordmark colored" id="icon-language"></i>
          </div>
          <div class="single-item mg-1">
            <i class="devicon-heroku-plain-wordmark colored" id="icon-language"></i>
          </div>
        </div>
      </div>
    </section>
  );
}