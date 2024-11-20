import React from 'react';


function OndeEstamos() {

  return (

    <section id='location' className="w-full py-16 px-4 bg-custom-purple-nova">      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Box para o título e endereço */}
  <div className=" flex-col justify-start border p-4 mx-auto lg:mx-0  ">
    <div className="flex flex-col items-center lg:items-start">
      <h2 className="text-3xl italic font-bold text-white mb-4 text-center lg:text-left">
        <span className="font-extrabold">ONDE</span> ESTAMOS
      </h2>
      <p className="text-lg text-white text-center lg:text-left">
        <span className="font-bold">Rua:</span> Alfredo Mendes da Silva<br />
        <span className="font-bold">Bairro:</span> Centro Alto, Ribeirão Pires-SP<br />
        <span className="font-bold">CEP:</span> 09420-445<br />
        <span className="font-bold">TEL:</span> (11) 94703-0062 (11) 4545-6511<br />
        <span className="font-bold">E-mail:</span> mecatronicatorkdiesel@gmail.com
      </p>
    </div>
  </div>
        
        {/* Box para o mapa */}
        <div className="relative w-full h-0 border" style={{ paddingTop: '56.25%' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.7170970249886!2d-46.40922462362105!3d-23.721794667507815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7263ba41d223%3A0xbe1668f11ec6145!2sTork%20Diesel%20Mecatr%C3%B4nica!5e0!3m2!1spt-BR!2sbr!4v1725768530878!5m2!1spt-BR!2sbr"
            className="absolute top-0 left-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Embed"
          />
        </div>
      </div>
    </section>
  );
}

export default OndeEstamos;
