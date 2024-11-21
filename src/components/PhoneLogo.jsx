import React from 'react';
import phone from '../assets/images/phone.svg';
import efeito from '../assets/images/explosao.png';


function PhoneLogo() {

  return (
    <section className='flex flex-col bg-custom-purple-nova'>
      <div id="comunidade"  className='h-[20vh] md:h-[50vh] bg-custom-purple-nova flex justify-center'>
        <img src={efeito} className='md:h-[100vh] ' />
        <img src={phone} className='md:h-[100vh] absolute' />
      </div>
      <div className='h-[20vh] md:h-[50vh] w-full bg-custom-purple-button text-center flex '>
        </div>
        <div className='bg-custom-purple-button flex flex-col items-center text-center text-white pb-10'>
          <h2 className='text-[28px] md:text-5xl pb-5 font-bold'>Junte-se à Comunidade Supernova!</h2>
          <p className='text-[20px] md:text-3xl pb-10'>Participe do nosso grupo no WhatsApp/Telegram e fique por dentro das 
            <br />
            novidades!<strong> Conecte-se com outros jogadores, receba atualizações
            <br />
            exclusivas, organize jogos e aprenda com a comunidade.</strong>
          </p>
          <a
              href="https://wa.me/5511975855555"
              target="_blank"
              rel="noopener noreferrer"
              className="flex md:w-[620px] justify-center items-center bg-custom-purple-nova text-white font-extrabold py-3 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
          >
            <span className="text-[16px] md:text-[28px] px-10 transition-transform duration-300 ease-in-out transform hover:scale-105">
            Conecte-se com outros jogadores
            </span>
          </a>
        </div>

    </section>
  );
}

export default PhoneLogo;
