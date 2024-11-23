import React from 'react';

function CtaSoliciteOrcamento() {
  
  return (
    <section className="flex w-full">
      <a
        href="https://wa.me/5511944637120"
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full justify-center items-center bg-custom-purple-button text-white font-extrabold py-3 rounded-md shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)' }}
      >
        <span className="text-base transition-transform duration-300 ease-in-out transform hover:scale-105">
          JOGUE AGORA
        </span>
      </a>
    </section>
  );
}

export default CtaSoliciteOrcamento;
