import carta from '../assets/images/why/cartas.svg';
import mao from '../assets/images/why/mao.svg';
import joia from '../assets/images/why/joia.png';
import escudo from '../assets/images/why/escudo.svg';
import bonus from '../assets/images/why/bonus.svg';
import atendimento from '../assets/images/why/atendimento.svg';

function Why() {
  return (
    <div id="sobre" className="container mx-auto bg-custom-purple-nova h-[100vh] pt-20 ">
      <div className="flex justify-center items-center">
        <h1 className="text-white text-[40px] font-bold pb-4 mb-12 border border-b-4 rounded-full px-6 ">
          Porque escolher a Supernova?
        </h1>
      </div>


  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 sm:gap-0 justify-items-center">
    {[
      { src: carta, alt: "Carta", text: "Os clubes de poker mais fáceis online" },
      { src: mao, alt: "mão segurando dinheiro", text: "Transferências instantâneas" },
      { src: joia, alt: "jóia com a mão (positivo)", text: "Sem restrições de países" },
      { src: bonus, alt: "porcentagem", text: "Bônus semanais para jogadores e agentes" },
      { src: escudo, alt: "escudo", text: "Ambiente de jogo seguro" },
      { src: atendimento, alt: "atendimento", text: "Atendimento 24h" },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center bg-custom-purple-nova p-4 rounded-lg shadow-lg w-full "
      >
        <div className="w-[85%] h-[70%] flex items-center justify-center">
          <img src={item.src} alt={item.alt} className="w-[100px] sm:w-[130px] object-contain" />
        </div>
        <h2 className="text-[20px] md:text-[32px] text-white text-center mt-4">{item.text}</h2>
      </div>
    ))}
  </div>
</div>

  );
}

export default Why;
