import React from 'react';
import carta from '../assets/images/why/cartas.svg';
import mao from '../assets/images/why/mao.svg';
import joia from '../assets/images/why/joia.png';
import escudo from '../assets/images/why/escudo.svg';
import bonus from '../assets/images/why/bonus.svg';
import atendimento from '../assets/images/why/atendimento.svg';

function Why() {
  return (
    <div id="sobre" className="mx-auto bg-custom-purple-nova h-[130vh] max-h-[800px] md:pt-16 ">
  <div className="border-t-2 border-custom-purple-button relative pb-16">
    <h1 className="absolute left-1/2 transform -translate-x-1/2 bg-custom-purple-nova border-2 border-custom-purple-button rounded-full px-6 md:px-16 text-white text-[16px] font-bold md:text-[40px] -top-[10px] md:-top-[25px] whitespace-nowrap">
      Por que escolher a Supernova?
    </h1>
  </div>

  <div className="w-full max-w-[1100px] mx-auto flex items-center justify-center">
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 sm:gap-0 gap-4 justify-items-center w-full">
      {[
        { src: carta, alt: "Carta", text: "Os clubes de poker mais fáceis online" },
        { src: mao, alt: "mão segurando dinheiro", text: "Transferências instantâneas" },
        { src: joia, alt: "jóia com a mão (positivo)", text: "Sem restrições de países" },
        { src: bonus, alt: "porcentagem", text: "Bônus semanais" },
        { src: escudo, alt: "escudo", text: "Ambiente de jogo seguro" },
        { src: atendimento, alt: "atendimento", text: "Atendimento 24h" },
      ].map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-custom-purple-nova p-4 rounded-lg shadow-lg w-full"
        >
          <div className="w-[85%] h-[70%] flex items-center justify-center">
            <img src={item.src} alt={item.alt} className="w-[100px] sm:w-[130px] object-contain" />
          </div>
          <h2 className="text-[20px] md:text-[32px] text-white text-center mt-4">{item.text}</h2>
        </div>
      ))}
    </div>
  </div>
</div>


  );
}

export default Why;
