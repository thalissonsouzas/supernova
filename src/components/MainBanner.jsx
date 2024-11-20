import mecanico from '../assets/images/mecanico.jpeg';
import CtaSoliciteOrcamentoYellow from './CtaSoliciteOrcamentoYellow';
function MainBanner() {

return (
<section
  id="home"
  className="flex h-[85vh] flex-col italic items-center sm:items-start sm:pl-32 justify-center bg-cover bg-center p-4"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${mecanico})`,
  }}
>

  <h1 className="text-6xl sm:text-6xl md:text-4xl font-extrabold text-gray-100 text-center sm:text-left">
  Transforme seu Jogo em Lucro: Ganhe com Poker nos Melhores Clubes!
  </h1>
  <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-100 text-center sm:text-left">
  Aproveite sua habilidade para faturar nos clubes mais exclusivos. Entre para jogar, competir e lucrar!
  </h2>

  <CtaSoliciteOrcamentoYellow />

</section>



    );
}



export default MainBanner;