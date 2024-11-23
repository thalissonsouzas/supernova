import React from 'react';
import whastsappVetor from '../assets/images/whatsapp-vetor.svg';


const Zapzap = () => (
  <div className="fixed bottom-4 right-4 z-50">
    <a
      href="https://wa.me/5511944637120" // Substitua pelo seu número
      target="_blank"
      rel="noopener noreferrer"
      className=" text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
    >
      <img src={whastsappVetor} className=" h-[7vh] pr-5 transition-transform transform hover:scale-125" alt="Whatsapp" />

    </a>
  </div>
);

export default Zapzap;
