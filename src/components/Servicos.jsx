import CtaSoliciteOrcamento from './CtaSoliciteOrcamento';
import ServiceSwiper from './ServiceSwiper';

function Servicos () {
    return (

<section id="services" className=" flex flex-col items-center justify-center bg-custom-purple-nova py-10">
    <h2 className="text-2xl md:text-3xl italic mb-8 text-white text-center">
        Nossos{' '}
        <span className="font-extrabold">Serviços</span>
    </h2>
    <ServiceSwiper />  
    <CtaSoliciteOrcamento />
</section>


    );
  };
    

export default Servicos;