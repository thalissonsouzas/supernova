import React from 'react';
import superNovaLogo from '../assets/images/superNovaLogo.svg'; // Atualize para o caminho correto da imagem
import plus18 from '../assets/images/plus18.png'; // Atualize para o caminho correto da imagem
import insta from '../assets/images/insta.png'; // Atualize para o caminho correto da imagem
import telegram from '../assets/images/telegram.png'; // Atualize para o caminho correto da imagem
import zapLogoRoxo from '../assets/images/zapLogoRoxo.png'; // Atualize para o caminho correto da imagem
function Footer() {
  return (
    <footer id="suporte" className="w-full bg-custom-purple-nova pt-16 p-8">
      <div className='flex flex-col text-center items-center justify-center text-white leading-[56px] pb-16'>
        <img src={zapLogoRoxo} alt="Logo" className="h-[100px] w-[100px] mb-4" />
        <p className='pb-14 text-[36px] md:text-[48px]'><strong> Não encontrou suas dúvidas?</strong>
        <br />
        <p className='text-[20px] md:text-[48px] leading-5 md:leading-10'><em>Fale conosco agora ao vivo pelo nosso WhatsApp</em></p>  
        </p>

        {/* botao desktop */}

        <a
          href="https://wa.me/5511944637120"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block flex pl-20 pr-20 justify-center items-center bg-custom-purple-button text-white font-extrabold py-3 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
        >
        <span  className="text-[32px] text-white transition-transform duration-300 ease-in-out transform hover:scale-105">
          Quero falar com o suporte
        </span>
      </a>

      {/* botao mobile */}

      <a
          href="https://wa.me/5511944637120"
          target="_blank"
          rel="noopener noreferrer"
          className=" md:hidden flex justify-center items-center bg-custom-purple-button text-white font-extrabold rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
        >
        <span  className="text-[16px] w-[354px] text-white transition-transform duration-300 ease-in-out transform hover:scale-105">
          Quero falar com o suporte
        </span>
      </a>

      </div>

      {/* Container centralizado com largura máxima */}
      <div className="max-w-[1550px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-custom-purple-button md:bg-custom-purple-nova text-white p-10 rounded-lg">
        {/* Seção 1 */}
        <div className="bg-custom-purple-button md:bg-custom-purple-nova p-4 rounded-lg">
          <img src={superNovaLogo} alt="Logo" className="h-8 mb-4" />
          <p>
            Supernova é a plataforma ideal para jogadores de poker que buscam se conectar com os melhores clubes.
            Nosso objetivo é simplificar sua jornada no poker, oferecendo acesso fácil a clubes, eventos e uma comunidade apaixonada pelo jogo.
          </p>
        </div>

        {/* Seção 2 */}
        <div className="bg-custom-purple-button md:bg-custom-purple-nova p-4 flex flex-col justify-center items-center rounded-lg text-center">
          <img src={plus18} alt="18+" className="w-[78px] h-[78px] mb-4" />
          <p className="text-[20px] font-semibold border-b-4 pb-1">
            Tenha consciência <br /> em jogos de azar
          </p>
        </div>

        {/* Seção 3 */}
        <div className="bg-custom-purple-button md:bg-custom-purple-nova p-4 flex flex-col justify-center items-center rounded-lg">
          <div className="flex space-x-4 mb-4">
            <img src={insta} alt="Instagram" className="w-[48px] h-[48px] rounded-full" />
            <img src={telegram} alt="Telegram" className="w-[48px] h-[48px] " />
          </div>
          <p className="text-[20px] font-semibold">Confira nossas redes</p>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="text-center text-white mt-6">
        <p>&copy; {new Date().getFullYear()} Supernova. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
