import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Zapzap from '../components/Zapzap';
import PorqueEscolher from '../components/PorqueEscolher';
import Clubes from '../components/Clubes';
import Why from '../components/Why';
import PhoneLogo from '../components/PhoneLogo';
import logoSuperNova from '../assets/images/logo_supernova.png';

const LoginPage = () => {


  

  return (
    <div className='bg-custom-purple-nova w-screen'>

    <div className='w-full h-screen font-poppins p-0'>
      {/* Header */}
      <div className='w-max-[1440px]'>

      <Header />

      {/* Seções da página */}
      <main className='pt-0 '>
        <PorqueEscolher />  
      <div>
      </div>
      <Clubes />
      <Why />
      <PhoneLogo />

  <Footer />
    {/* <BrandSwiper /> */}
    <Zapzap />
      </main>

      </div>
      </div>
    </div>
  );
};

export default LoginPage;
