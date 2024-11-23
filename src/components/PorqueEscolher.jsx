import React from 'react';
import bgLogo from '../assets/images/bgLogo.png';
import CtaSoliciteOrcamentoYellow from './CtaSoliciteOrcamentoYellow';

const PorqueEscolher = () => {
  return (
    <div id="home" className='w-full pt-16 flex font-poppins'>
      {/* section desktop */}
      <main className='mx-auto relative overflow-x-clip '>

        <section className="hidden md:block h-auto pt-10 pb-10 flex-col items-center justify-center bg-custom-purple-nova md:px-0 sm:px-0 px-4">
          <div className="w-screen max-w-[1440px] flex flex-col md:flex-row items-center bg-custom-purple-nova">
            {/* Texto à esquerda - 70% */}
            <div className="flex-1 medio:pl-20  pl-4 pr-4">
              <div className="pb-5 pt-14 w-[700px]">
                <h1 className="text-white text-left font-bold text-[44px] medio:text-[52px]">
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
                className="w-[1100px] absolute pt-18 md:pt-20 transform translate-x-[-25px] hidden md:block" />
            </div>
          </div>
        </section>

      {/* section mobile */}

<section className=" md:hidden h-auto flex flex-col items-center justify-center bg-custom-purple-nova md:px-0 sm:px-0 ">
            <div className="flex flex-col justify-center items-center">
              <img 
                src={bgLogo} 
                alt="logo poker" 
                className="w-[400px] " />
                <h1 className="text-white text-center font-bold text-[28px] pb-7">
                  Transforme 
                  <br />
                  seu Jogo em Lucro: 
                  <br />
                  Ganhe com Poker nos 
                  <br />
                  Melhores Clubes!
                </h1>
            
              <p className="text-[16px] text-white text-center pb-6 leading-5">
                Aproveite sua habilidade <strong>para faturar</strong>  
                <br />
                nos clubes mais exclusivos.<strong> Entre para
                <br />
                  jogar, competir e lucrar!</strong>
              </p>
            </div>

              <div className='flex w-[243px]'><CtaSoliciteOrcamentoYellow /></div>
            

            {/* Imagem à direita - 30% */}
          
        </section>

      </main>

      
      



    </div>
  );
};

export default PorqueEscolher;
