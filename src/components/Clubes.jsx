import logoSuperNova from '../assets/images/superNovaLogo.svg';
import pockets from '../assets/images/pockets.svg';
import cpcLogo from '../assets/images/cpcLogo.svg';
import brotherHLogo from '../assets/images/brotherHoodLogo.svg';
import CtaSoliciteOrcamentoYellow from './CtaSoliciteOrcamentoYellow';

function Clubes() {
  return (
    <div id="clube" className="max-w-[1200px] mx-auto pt-20 bg-custom-purple-nova">

            <h1 className='text-center text-white'>Encontre o melhor torneio para você</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center p-14">
        
  <div className="flex flex-col items-center shadow-lg bg-gray-600/10 p-4 w-full max-w-[585px] h-[381px]">
    <div className="w-[85%] h-[70%] flex items-center justify-center">
      <img src={logoSuperNova} alt="Logo Super Nova" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" />
    </div>
       <div className="mt-auto mb-4 text-center w-full flex justify-center">
        <CtaSoliciteOrcamentoYellow />
      </div>

  </div>

  <div className="flex flex-col items-center bg-gray-600/10 shadow-lg   p-4 w-full max-w-[585px] h-[381px]">
    <div className="w-[85%] h-[70%] flex items-center justify-center">
      <img src={pockets} alt="Logo Pockets" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="mt-auto mb-4 text-center w-full flex justify-center">
      <CtaSoliciteOrcamentoYellow />
    </div>
  </div>
  

  <div className="flex flex-col items-center bg-gray-600/10 shadow-lg  p-4 w-full max-w-[585px] h-[381px]">
    <div className="w-[85%] h-[70%] flex items-center justify-center">
      <img src={cpcLogo} alt="Logo CPC" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="mt-auto mb-4 text-center w-full flex justify-center">
      <CtaSoliciteOrcamentoYellow />
    </div>
  </div>

  <div className="flex flex-col items-center bg-gray-600/10 shadow-lg  p-4 w-full max-w-[585px] h-[381px]">
    <div className="w-[85%] h-[70%] flex items-center justify-center">
      <img src={brotherHLogo} alt="Logo BrotherHood" className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" />
    </div>
    <div className="mt-auto mb-4 text-center w-full flex justify-center">
      <CtaSoliciteOrcamentoYellow />
    </div>
  </div>
</div>


    </div>
  );
}

export default Clubes;
