import React from 'react';
import superNovaLogo from '../assets/images/superNovaLogo.svg'; // Atualize para o caminho correto da imagem

function Footer() {
  return (
    <footer className="mx-auto p-24 flex flex-col md:flex-row bg-custom-purple-nova text-custom-yellow py-8">
  <div className="mx-auto flex flex-col items-center md:items-start md:w-auto">
    {/* Logo */}
    
    {/* Links de Navegação */}
       <img src={superNovaLogo} alt="Logo" className="h-8 mb-4" />

  </div>

  <div className="text-center md:text-left md:ml-auto md:w-auto mt-4 md:mt-0">

  </div>
</footer>

  );
}

export default Footer;
