import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper';

// Importar os logos das montadoras
import logo1 from '../assets/marcas/ford.jpg';
import logo2 from '../assets/marcas/iveco.jpg';
import logo3 from '../assets/marcas/man.jpg';

const SimpleSwiper = () => {
  return (
    <div className="w-full bg-gray-100 py-8">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1} // Exibir um slide por vez
        loop={true} // Habilitar o loop
        autoplay={{
          delay: 3000, // 3 segundos entre os slides
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={logo1} alt="Logo 1" className="h-16 mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo2} alt="Logo 2" className="h-16 mx-auto" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={logo3} alt="Logo 3" className="h-16 mx-auto" />
        </SwiperSlide>
        {/* Adicione mais SwiperSlide conforme necessário */}
      </Swiper>
    </div>
  );
};

export default SimpleSwiper;
