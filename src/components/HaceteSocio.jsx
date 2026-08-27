import { BsPencilSquare, BsWhatsapp } from "react-icons/bs"
import haceteSocioFondo from '/images/foto7.JPG';

const HaceteSocio = () => {
  return (
    <div id="HaceteSocio" className="relative flex min-h-[70vh] min-w-full w-full items-center justify-center bg-cover bg-center bg-scroll md:bg-fixed" style={{ backgroundImage: `url(${haceteSocioFondo})` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative flex flex-col items-center justify-center gap-6 p-14 text-center">
        <h2 className="text-4xl font-bold text-white md:text-6xl">Hacete Socio</h2>
        <p className="max-w-[500px] text-pretty text-lg text-gray-200">
          Sumate a Nogoyá Rugby Club y sé parte de nuestra historia, dentro y fuera de la cancha.
        </p>
        <a
          href="https://forms.gle/i8xJzLE7C34tsTtaA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-500"
        >
          <BsPencilSquare />
          Sumate
        </a>

        <p className="text-pretty text-gray-200">O escribenos por WhatsApp para más información</p>
        <a
          href="https://wa.me/5493435405447?text=Hola,%20quiero%20más%20información%20sobre%20cómo%20ser%20socio."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-500"
        >
          <BsWhatsapp />
          WhatsApp
        </a>
      </div>
    </div>
  )
}

export default HaceteSocio
