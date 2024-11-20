import React from 'react';
import Slider from 'react-slick';

// Importar as imagens
import motor from '../assets/images/servicos/service-motor.png';
import cambio from '../assets/images/servicos/service-cambio.png';
import freio from '../assets/images/servicos/service-freio.png';
import eletrica from '../assets/images/servicos/service-eletrica.png';
import diferencial from '../assets/images/servicos/service-diferencial.png';
import socorro from '../assets/images/servicos/service-socorro.png';
import injecao from '../assets/images/servicos/service-injecao.png';

// Configurações do Slick Slider
const settings = {
  infinite: true,
  speed: 3000,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  centerMode: false,
  autoplay: true,
  centerPadding: '0px',
  variableWidth: false,
  responsive: [

    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      },
    },
  ],
  
};

const ServiceSwiper = () => {
  return (
    <div className="w-full bg-custom-yellow px-10 text-white">
      {/* Carrossel para telas maiores */}
      <div className="hidden sm:block">
        <Slider {...settings} className="w-full px-[15vw]">
          <div className="flex flex-col items-center">
            <img src={motor} alt="Motor" className="h-36 mx-auto" />
            <h2 className="mt-2 text-center text-2xl font-extrabold">MOTOR</h2>  
          </div>
          <div className="flex flex-col items-center">
            <img src={cambio} alt="Câmbio" className="h-36 mx-auto" />
            <h2 className="mt-2 text-center text-2xl font-extrabold">CÂMBIO</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={freio} alt="Freio" className="h-36 mx-auto" />
            <h2 className="mt-2 text-center text-2xl font-extrabold">FREIO</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={eletrica} alt="Elétrica" className="h-36 mx-auto" />
            <h2 className="mt-2 text-center text-2xl font-extrabold">ELÉTRICA</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={diferencial} alt="Diferencial" className="h-36 mx-auto" />
            <h2 className="mt-2 text-center text-2xl font-extrabold">DIFERENCIAL</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={injecao} alt="Injeção" className="h-36 mx-auto" />
            <h2 className="mt-2 text-center text-2xl font-extrabold">INJEÇÃO</h2>
          </div>
          <div className="flex flex-col items-center">
            <img src={socorro} alt="Socorro" className="h-36 mx-auto" />
            <h2 className="mt-2 text-center text-2xl font-extrabold">SOCORRO</h2>
            <h2 className="text-center text-2xl font-extrabold">NA ESTRADA</h2>
          </div>
        </Slider>
      </div>

      {/* Layout em coluna para telas menores */}
      <div className="sm:hidden flex flex-col">
        <div className="flex flex-col items-center py-4">
          <img src={motor} alt="Motor" className="h-36 mx-auto" />
          <h2 className="mt-2 text-center text-2xl font-extrabold">MOTOR</h2>  
        </div>
        <div className="flex flex-col items-center py-4">
          <img src={cambio} alt="Câmbio" className="h-36 mx-auto" />
          <h2 className="mt-2 text-center text-2xl font-extrabold">CÂMBIO</h2>
        </div>
        <div className="flex flex-col items-center py-4">
          <img src={freio} alt="Freio" className="h-36 mx-auto" />
          <h2 className="mt-2 text-center text-2xl font-extrabold">FREIO</h2>
        </div>
        <div className="flex flex-col items-center py-4">
          <img src={eletrica} alt="Elétrica" className="h-36 mx-auto" />
          <h2 className="mt-2 text-center text-2xl font-extrabold">ELÉTRICA</h2>
        </div>
        <div className="flex flex-col items-center py-4">
          <img src={diferencial} alt="Diferencial" className="h-36 mx-auto" />
          <h2 className="mt-2 text-center text-2xl font-extrabold">DIFERENCIAL</h2>
        </div>
        <div className="flex flex-col items-center py-4">
          <img src={injecao} alt="Injeção" className="h-36 mx-auto" />
          <h2 className="mt-2 text-center text-2xl font-extrabold">INJEÇÃO</h2>
        </div>
        <div className="flex flex-col items-center py-4">
          <img src={socorro} alt="Socorro" className="h-36 mx-auto" />
          <h2 className="mt-2 text-center text-2xl font-extrabold">SOCORRO</h2>
          <h2 className="text-center text-2xl font-extrabold">NA ESTRADA</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceSwiper;
