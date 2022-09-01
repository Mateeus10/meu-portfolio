import './projects.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Projects() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <section class="page-light" id="projects">
      <h3 class="title-page">Projetos</h3>
      <div class="container-projects">
        <Slider {...settings}>
          <div class="item-projects img-2">
            <a href="https://github.com/Mateeus10" target="_blank" rel="noopener noreferrer">
             <h3>Github</h3>
             <p>Para acessar todos meus projetos acesse meu github.</p>
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}