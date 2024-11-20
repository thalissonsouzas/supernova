import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Zapzap from '../components/Zapzap';
import PorqueEscolher from '../components/PorqueEscolher';
import Clubes from '../components/Clubes';
import Why from '../components/Why';
import PhoneLogo from '../components/PhoneLogo';

const LoginPage = () => {


  

  return (
    <div className='w-screen h-screen flex font-montserrat p-0'>
      {/* Header */}
      <Header />

      {/* Seções da página */}
      <main className='pt-0 w-screen'>
        {/* <MainBanner /> */}
        {/* Home Section */}

      <PorqueEscolher />  
      <Clubes />
      <Why />
      <PhoneLogo />

  <Footer />
    {/* <BrandSwiper /> */}
    <Zapzap />
      </main>

           </div>
  );
};

export default LoginPage;
