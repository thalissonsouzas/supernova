import mechanic from '../assets/images/mechanic.jpg'

function Oficina () {

    return (
      <section id="workshop" className="relative pb-14 h-[60vh] pt-16 flex flex-col items-center justify-center bg-gray-100 text-black"
    >
      <h2 className='text-3xl mb-8 text-custom-yellow italic'>
        Nossa{' '}
        <span className='font-extrabold text-3xl'>Oficina</span>
      </h2>
        <div className='flex-1 flex items-center justify-center p-'>
          <img src={mechanic} alt="Cambio" className='h-[40vh] w-auto' />
        </div>

    </section>
    

    )
}

export default Oficina;