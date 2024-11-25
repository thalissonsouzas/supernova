import React from 'react';
import logoSuperNova from '../assets/images/logo_supernova.png';
import pockets from '../assets/images/pockets.svg';
import cpcLogo from '../assets/images/cpcLogo.svg';
import brotherHLogo from '../assets/images/brotherHoodLogo.svg';
import CtaSoliciteOrcamentoYellow from './CtaSoliciteOrcamentoYellow';

function Clubes() {
  return (
    <section id="clube" className=" mx-auto pt-20 bg-custom-purple-nova flex flex-col">
      <div className="flex flex-col items-center bg-custom-purple-nova">

      <div className="border-t-2 border-custom-purple-button relative">
        <h1 className="absolute left-1/2 transform -translate-x-1/2  bg-custom-purple-nova border-2 border-custom-purple-button rounded-full px-6 md:px-16 text-white text-[16px] font-bold md:text-[40px] -top-[10px] md:-top-[25px] whitespace-nowrap">
          Encontre o melhor torneio para você
        </h1>
      </div>



      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center p-14 ">
        
  <div className="flex flex-col items-center shadow-lg bg-gray-600/10 p-4 w-full max-w-[585px] h-[381px]">
    <div className="w-[85%] h-[70%] flex flex-col items-center justify-center relative">
      <img src={logoSuperNova} alt="Logo Super Nova" className=" object-contain transition-transform duration-300 hover:scale-105" />
      <div>
        <span className='bg-green-500 text-black rounded-md px-4 mx-1 text-center'>BRL</span>
        <span className='bg-white text-black rounded-md px-4 text-center'>Liga Particular</span>
      </div>
    </div>
       <div className="mt-auto mb-4 text-center w-full flex justify-center">
        <CtaSoliciteOrcamentoYellow />
      </div>

  </div>

  <div className="flex flex-col items-center bg-gray-600/10 shadow-lg   p-4 w-full max-w-[585px] h-[381px]">
    <div className="w-[85%] h-[70%] flex flex-col items-center justify-center">
      <img src={pockets} alt="Logo Pockets" className="w-full h-[90%] pb-4 object-contain transition-transform duration-300 hover:scale-105" />
      <div>
        <span className='bg-yellow-400 text-black rounded-md px-4 mx-1 text-center'>AUD</span>
        <span className='bg-blue-500 text-black rounded-md px-4 text-center'>Liga Australiana</span>
      </div>
    </div>
    <div className="mt-auto mb-4 text-center w-full flex justify-center">
      <CtaSoliciteOrcamentoYellow />
    </div>
  </div>
  

  <div className="flex flex-col items-center bg-gray-600/10 shadow-lg  p-4 w-full max-w-[585px] h-[381px]">
    <div className="w-[85%] h-[70%] flex flex-col items-center justify-center">
      <img src={cpcLogo} alt="Logo CPC" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" />
      <div>
        <span className='bg-green-500 text-black rounded-md px-4 mx-1 text-center'>BRL</span>
        <span className='bg-red-600 text-black rounded-md px-4 text-center'>Liga Evolution</span>
      </div>
    </div>
    <div className="mt-auto mb-4 text-center w-full flex justify-center">
      <CtaSoliciteOrcamentoYellow />
    </div>
  </div>

  <div className="flex flex-col items-center bg-gray-600/10 shadow-lg  p-4 w-full max-w-[585px] h-[381px]">
    <div className="w-[85%] h-[70%] flex flex-col items-center justify-center">
      <img src={brotherHLogo} alt="Logo BrotherHood" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" />
      <div>
        <span className='bg-green-500 text-black rounded-md px-4 mx-1 text-center'>BRL</span>
        <span className='bg-orange-500 text-black rounded-md px-4 mx-1 text-center'>Liga 388</span>
        <span className='bg-white text-black rounded-md px-4 text-center'>Liga Particular</span>
      </div>
    </div>
    <div className="mt-auto mb-4 text-center w-full flex justify-center">
      <CtaSoliciteOrcamentoYellow />
    </div>
  </div>
  </div>
         </div>


    </section>
  );
}

export default Clubes;
