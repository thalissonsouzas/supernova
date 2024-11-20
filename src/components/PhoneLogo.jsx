import React from 'react';
import phone from '../assets/images/phone.svg';
import efeito from '../assets/images/explosao.png';


function PhoneLogo() {

  return (
    <section className='flex flex-col'>
      <div className='h-[50vh] bg-custom-purple-nova flex justify-center '>
        <img src={efeito} className='h-[100vh] ' />
        <img src={phone} className='h-[100vh] absolute' />
      </div>
      <div className='h-[50vh] bg-custom-purple-button text-center'>
        </div>
        <div className='bg-custom-purple-button text-center'>
      <h2 className='text-5xl pb-5'>Junte-se à Comunidade Supernova!</h2>
       <p className='text-3xl'>Participe do nosso grupo no WhatsApp/Telegram e fique por dentro das 
        <br />
        novidades! Conecte-se com outros jogadores, receba atualizações
        <br />
        exclusivas, organize jogos e aprenda com a comunidade.</p>
        </div>

    </section>
  );
}

export default PhoneLogo;
