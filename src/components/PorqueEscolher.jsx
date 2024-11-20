import React from 'react';
import bgLogo from '../assets/images/bgLogo.png';
import CtaSoliciteOrcamentoYellow from './CtaSoliciteOrcamentoYellow';

const PorqueEscolher = () => {


  

  return (
    <div id="home" className='w-screen pt-16 md:px-0 sm:px-0 flex font-montserrat '>

      <main className=' mx-auto md:px-0 sm:px-0 '>

      <section className="h-auto pt-10 pb-10 px-4 md:px-0 md:pt-10 flex flex-col items-center justify-center bg-custom-purple-nova">
  <div className="w-full md:w-3/4 lg:w-2/3 flex flex-col md:flex-row items-center">
    {/* Texto à esquerda - 70% */}
    <div className="flex-1 md:pr-8">
      <div className="pb-5 pt-14">
        <h1 className="text-white text-left font-bold">
          Transforme seu Jogo em Lucro: 
          Ganhe com Poker nos Melhores Clubes!
        </h1>
      </div>
      <p className="text-3xl sm:text-3xl md:text-4xl text-white sm:text-left text-left pb-6">
        Aproveite sua habilidade para faturar nos clubes mais exclusivos. Entre para jogar, competir e lucrar!
      </p>
      <div className='flex w-48'><CtaSoliciteOrcamentoYellow /></div>
      
    </div>

    {/* Imagem à direita - 30% */}
    <div className="flex-1 flex justify-center items-center">
      <img 
        src={bgLogo} 
        alt="truck" 
        className="w-[1200px] absolute pt-36"
      />
    </div>
  </div>
</section>

{/* <img 
          src={bgLogo} 
          alt="truck" 
          className="" 
        /> */}


      </main>
           </div>
  );
};

export default PorqueEscolher;
