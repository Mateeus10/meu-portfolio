import './curso.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import javascript from "./assets/javascript.png";
import python from "./assets/python.jpg";
import excel from "./assets/excel.png";

export default function Cursos() {
  var settings = {
    speed: 500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2200,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

    ]
  };

  return (
   <section class="page-section" id="cursos">
      <h3 class="title-page">Cursos</h3>
      <div class="container-owl-certificates">
        <Slider {...settings}>
        <div class="item">
        <div class="img-item">
          <img src={python} alt="Certificado python"></img>
        </div>
        <h3><span>Certificado Python</span></h3>
        </div>
        <div class="item">
        <div class="img-item">
          <img src={javascript} alt="Certificado javasript"></img>
        </div>
        <h3><span>Certificado JavaScript</span></h3>
        </div>
        <div class="item">
        <div class="img-item">
          <img src={excel} alt="Certificado excel"></img>
        </div>
        <h3><span>Certificado Excel </span></h3>
        </div>
        
        </Slider>
      </div>
    </section>
  );
}