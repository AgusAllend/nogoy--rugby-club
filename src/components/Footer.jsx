import { BsInstagram, BsWhatsapp } from "react-icons/bs"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-8 py-16 text-center md:grid-cols-3 md:text-left">

        <div className="flex flex-col items-center gap-4 md:items-start">
          <a href="#home" className="transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <img src="./images/nrclogo.png" alt="nrclogo" className="h-16 w-auto" />
          </a>
          <p className="max-w-[260px] text-pretty text-sm text-gray-400">
            Nogoyá Rugby Club: respeto, educación y humildad, dentro y fuera de la cancha.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:items-center">
          <a href="#home" className="cursor-pointer text-gray-400 opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">Inicio</a>
          <a href="#Entrenamientos" className="cursor-pointer text-gray-400 opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">Entrenamientos</a>
          <a href="#HaceteSocio" className="cursor-pointer text-gray-400 opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">Hacete Socio</a>
          <a href="#Sponsors" className="cursor-pointer text-gray-400 opacity-70 transition-all duration-300 hover:text-white hover:opacity-100">Sponsors</a>
        </div>

        <div className="flex flex-col items-center gap-4 md:items-end">
          <h3 className="text-lg font-bold text-white">Seguinos</h3>
          <div className="flex gap-5">
            <a href="https://www.instagram.com/nogoyarugby?igsh=MWZvN3k4cnRkbzFyMA==" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
              <BsInstagram />
            </a>
            <a href="https://wa.me/5493435405447?text=Hola,%20quiero%20más%20información%20sobre%20cómo%20ser%20socio." target="_blank" rel="noopener noreferrer" className="cursor-pointer text-2xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
              <BsWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-white/10 px-8 py-6">
        <p className="text-center text-sm text-gray-500">
          © {year} Nogoyá Rugby Club. Todos los derechos reservados.
        </p>
        <p className="mt-1 text-center text-xs text-gray-600">
          Página web hecha por Agustín Allende Vera
        </p>
      </div>
    </footer>
  )
}

export default Footer
