import React from 'react';
import Slider from 'react-slick';

// Importar os logos das montadoras
import ford from '../assets/marcas/ford.jpg';
import iveco from '../assets/marcas/iveco.jpg';
import man from '../assets/marcas/man.jpg';
import mb from '../assets/marcas/mb.jpg';
import scania from '../assets/marcas/scania.jpg';
import volvo from '../assets/marcas/volvo.jpg';
import vw from '../assets/marcas/vw.jpg';

// Configurações do Slick Slider
const settings = {
  dots: false,
  infinite: true,
  arrows: false,
  speed: 6000, // Aumente a velocidade para um movimento mais suave
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // Faz o autoplay ser contínuo
  cssEase: 'linear', // Garante um movimento contínuo e fluido
  centerMode: false,
  centerPadding: '0px',
  variableWidth: true,
  focusOnSelect: false
};

const BrandSwiper = () => {
  return (
    <div className="w-full overflow-hidden bg-white pt-4 h-36">
      <Slider {...settings} className="w-full">
        <div className="px-2">
          <img src={ford} alt="Montadora 1" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={iveco} alt="Montadora 2" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={man} alt="Montadora 3" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={mb} alt="Montadora 4" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={scania} alt="Montadora 5" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={volvo} alt="Montadora 6" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={vw} alt="Montadora 7" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={ford} alt="Montadora 1" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={iveco} alt="Montadora 2" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={man} alt="Montadora 3" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={mb} alt="Montadora 4" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={scania} alt="Montadora 5" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={volvo} alt="Montadora 6" className="h-36 mx-auto" />
        </div>
        <div className="px-2">
          <img src={vw} alt="Montadora 7" className="h-36 mx-auto" />
        </div>
      </Slider>
    </div>
  );
};

export default BrandSwiper;