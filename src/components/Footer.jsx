import React from 'react';
import superNovaLogo from '../assets/images/superNovaLogo.svg'; // Atualize para o caminho correto da imagem
import plus18 from '../assets/images/plus18.png'; // Atualize para o caminho correto da imagem
import insta from '../assets/images/insta.png'; // Atualize para o caminho correto da imagem
import telegram from '../assets/images/telegram.png'; // Atualize para o caminho correto da imagem

function Footer() {
  return (
    <footer className="w-full bg-custom-purple-nova p-8">
      {/* Container centralizado com largura máxima */}
      <div className="max-w-[1550px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-custom-purple-button text-white p-10 rounded-lg">
        {/* Seção 1 */}
        <div className="bg-custom-purple-nova p-4 rounded-lg">
          <img src={superNovaLogo} alt="Logo" className="h-8 mb-4" />
          <p>
            Supernova é a plataforma ideal para jogadores de poker que buscam se conectar com os melhores clubes.
            Nosso objetivo é simplificar sua jornada no poker, oferecendo acesso fácil a clubes, eventos e uma comunidade apaixonada pelo jogo.
          </p>
        </div>

        {/* Seção 2 */}
        <div className="bg-custom-purple-nova p-4 flex flex-col justify-center items-center rounded-lg text-center">
          <img src={plus18} alt="18+" className="w-[78px] h-[78px] mb-4" />
          <p className="text-[20px] font-semibold border-b-4 pb-1">
            Tenha consciência <br /> em jogos de azar
          </p>
        </div>

        {/* Seção 3 */}
        <div className="bg-custom-purple-nova p-4 flex flex-col justify-center items-center rounded-lg">
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
