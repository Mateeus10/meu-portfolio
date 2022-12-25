import icon from '../about/assets/img/mateus.jpg';
import Curriculo from './assets/Mateus_Almeida.pdf';
import './about.css';

export default function About() {
    return (
        <section class="page-light" id="about">
            <h2 class="title-page">Sobre mim</h2>
            <div class="about-section">
                <div class="left-img">
                    <img src={icon} class="img-about" alt="icon"></img>
                </div>
                <div class="right-text">
                    <div class="texto-about">
                        <h3>Quem sou eu?</h3>
                        <p>
                        Sou Mateus Almeida Silva estou graduando em  Ciência da Computação e estou migrando para aréa de tecnologia da informação, em busca da minha primeira oportunidade com Desenvolvedor Jr ou Estágiario, sou uma pessoa apaixonado por tecnologia, sou autodiata com facilidade em aprender rápido, organizado e responsável são minha principais caractéristica, estou em evolução na minha carreira profisional, para saber mais faça o download do Curriculo.
                        </p>
                        <a href={Curriculo} target="_blank" rel="noopener noreferrer" class="btn btn-primary">Currículo</a>
                    </div>
                </div>
            </div>
        </section>
    );
}