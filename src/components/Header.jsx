import React, { useState, useEffect } from 'react';
import logoSuperNova from '../assets/images/superNovaLogo.svg'; // Atualize para o caminho correto da imagem

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);

      // Verifique qual seção está visível
      const sections = ['home', 'clube', 'sobre', 'comunidade', 'location'];
      const sectionOffsets = sections.map(id => ({
        id,
        offsetTop: document.getElementById(id)?.offsetTop
      }));

      const currentSection = sectionOffsets.reduce((acc, { id, offsetTop }) => {
        if (scrollPosition >= offsetTop - 50) {
          return id;
        }
        return acc;
      }, 'home');

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`top-0 left-0 w-screen h-20 flex items-center justify-around p-4 fixed z-10 transition-colors duration-300 ${
        isScrolled ? 'bg-custom-purple-nova' : 'bg-transparent'
      } text-custom-yellow`}
    >
      <img src={logoSuperNova} alt="Logo" className=' h-12' />
      <nav className='hidden sm:flex space-x-6'>
        <a
          href="#home"
          className={`hover:text-white ${activeSection === 'home' ? 'bg-gray-600 pl-2 pr-2 rounded' : ''}`}
        >
          Home
        </a>
        <a
          href="#clube"
          className={`hover:text-white ${activeSection === 'clube' ? 'bg-gray-600 pl-2 pr-2 rounded' : ''}`}
        >
          Clubes
        </a>
        <a
          href="#sobre"
          className={`hover:text-white ${activeSection === 'sobre' ? 'bg-gray-600 pl-2 pr-2 rounded' : ''}`}
        >
          Sobre
        </a>
        <a
          href="#workshop"
          className={`hover:text-white ${activeSection === 'comunidade' ? 'bg-gray-600 pl-2 pr-2 rounded' : ''}`}
        >
          Comunidade
        </a>
        <a
          href="#location"
          className={`hover:text-white ${activeSection === 'suporte' ? 'bg-gray-600 pl-2 pr-2 rounded' : ''}`}
        >
          Suporte
        </a>
      </nav>
    </header>
  );
}

export default Header;



