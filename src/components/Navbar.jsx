import { useState } from "react"
import { BsInstagram, BsMenuApp, BsMenuButton, BsMenuUp, BsWhatsapp, BsX } from "react-icons/bs"


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/70 px-16 py-6 text-white backdrop-blur-xl md:justify-evenly">
        <a href="#home" className="transition-all duration-300 hover:-translate-y-2 hover:scale-105">
            <img src="./images/nrclogo.png"
            alt="nrclogo"
            className="h-10 w-auto transition-all duration-300 hove:opacity-100" />
        </a>
        <ul className="hidden md:flex gap-10">
            <a href="#home" className="cursor-pointer opacity-70 transition-all drutarion-300 hover:opacity-100">
                <li>Inicio</li>
            </a>
            <a href="#Entrenamientos" className="cursor-pointer opacity-70 transition-all drutarion-300 hover:opacity-100">
                <li>Entrenamientos</li>
            </a>
            <a href="#HaceteSocio" className="cursor-pointer opacity-70 transition-all drutarion-300 hover:opacity-100">
                <li>Hacete Socio</li>
            </a>
            <a href="#Sponsors" className="cursor-pointer opacity-70 transition-all drutarion-300 hover:opacity-100">
                <li>Sponsors</li>
            </a>
        </ul>
        <ul className="hidden md:flex gap-5">
            <a href="https://www.instagram.com/nogoyarugby?igsh=MWZvN3k4cnRkbzFyMA==" target="_blank" rel="noopener noreferrer">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
                    <BsInstagram/>
                </li>
            </a>
            <a href="https://wa.me/5493435405447?text=Hola,%20quiero%20más%20información%20sobre%20cómo%20ser%20socio." target="_blank" rel="noopener noreferrer">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
                    <BsWhatsapp/>
                </li>
            </a>
        </ul>

        {isOpen ? (
            <BsX className="block md:hidden text-4xl" onClick={menuOpen} />
        ) : (
            <BsMenuUp className="block md:hidden text-4xl" onClick={menuOpen} />
        )}

        {isOpen && (
            <div className={`fixed right-0 top-[84px] z-50 flex h-screen w-1/2 flex-col items-start justify-start gap-10 bg-black/70 backdrop-blur-xl border-l border-white/10 p-12 transition-all duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <ul className="flex flex-col gap-8">
                     <a href="#home" className="cursor-pointer opacity-70 transition-all drutarion-300 hover:opacity-100">
                        <li>Inicio</li>
                   </a>
                    <a href="#Entrenamientos" className="cursor-pointer opacity-70 transition-all drutarion-300 hover:opacity-100">
                    <li>Entrenamientos</li>
                   </a>
                   <a href="#HaceteSocio" className="cursor-pointer opacity-70 transition-all drutarion-300 hover:opacity-100">
                        <li>Hacete Socio</li>
                    </a>
                    <a href="#Sponsors" className="cursor-pointer opacity-70 transition-all drutarion-300 hover:opacity-100">
                         <li>Sponsors</li>
                    </a>    
                </ul>
                <ul className="flex flex-wrap gap-8">
                    <a href="https://www.instagram.com/nogoyarugby?igsh=MWZvN3k4cnRkbzFyMA==" target="_blank" rel="noopener noreferrer">
                        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-pink-500 hover:opacity-100">
                       <BsInstagram/>
                        </li>
                    </a>
                     <a href="https://wa.me/5493435405447?text=Hola,%20quiero%20más%20información%20sobre%20cómo%20ser%20socio." target="_blank" rel="noopener noreferrer">
                         <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-green-500 hover:opacity-100">
                           <BsWhatsapp/>
                         </li>
                     </a>
                </ul>
            </div>
        )}

    </nav>
  )
}

export default Navbar