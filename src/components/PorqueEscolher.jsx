import React from 'react';
import bgLogo from '../assets/images/bgLogo.png';
import CtaSoliciteOrcamentoYellow from './CtaSoliciteOrcamentoYellow';

const PorqueEscolher = () => {


  

  return (
    <div id="home" className='w-full pt-16 md:px-0 sm:px-0 flex font-poppins '>

      <main className=' mx-auto md:px-0 sm:px-0  relative overflow-x-clip '>

        <section className="h-auto pt-10 pb-10 md:px-0 md:pt-10 flex flex-col items-center justify-center bg-custom-purple-nova ">
          <div className="w-screen max-w-[1440px] flex flex-col md:flex-row items-center bg-custom-purple-nova">
            {/* Texto à esquerda - 70% */}
            <div className="flex-1 md:pr-8 pl-20">
              <div className="pb-5 pt-14 w-[700px]">
                <h1 className="text-white text-left font-bold text-[52px]">
                  Transforme seu Jogo em Lucro: 
                  Ganhe com Poker nos Melhores Clubes!
                </h1>
              </div>
              <p className="text-[28px] text-white sm:text-left text-left pb-6 leading-7">
  Aproveite sua habilidade <strong>para faturar</strong>  nos
  <br />
  clubes mais exclusivos.<strong> Entre para jogar, competir e lucrar!</strong>
</p>

              <div className='flex w-[243px]'><CtaSoliciteOrcamentoYellow /></div>
              
            </div>

            {/* Imagem à direita - 30% */}
            <div className="flex-1 flex justify-center items-center">
              <img 
                src={bgLogo} 
                alt="truck" 
                className="w-[1100px] absolute pt-18 transform translate-x-[-25px]"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PorqueEscolher;
