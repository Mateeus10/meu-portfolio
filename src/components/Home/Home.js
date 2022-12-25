import React from 'react';
import {useTypewriter} from 'react-simple-typewriter';
import './Home.css';
import Blob from './blob.js';

export default function Home() {
  const {text} = useTypewriter({
  words:["Sou Estudante de", "Ciência da Computação","Em Busca ","de uma vaga", "Estágio em T.I", "ou Desenvolvedor Jr"],
  loop: 0,
  typeSpeed: 250,
  deleteSpeed: 60,
  delaySpeed:3000
  });

  return(
    <section id="home">
      <div class="home">
        <div class="blob">
          <Blob/>
        </div>
        <div class="max-width">
          <div class="texto1"> Bem Vindo! Meu nome é:</div>
          <div class="texto2"><span>Mateus<br></br> Almeida</span></div>
          <div class="texto3">
            &nbsp;{text}
          </div>
          <a href="https://www.linkedin.com/in/mateus-almeida-silva-7a5563b8/" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Encontre-me</a>
        </div>
        
      </div>
    </section>
  );
}
