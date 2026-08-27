import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import primeraFondo from '/images/Primera.JPG';

const Hero = () => {
  return (
    <div id="home" className="relative px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 bg-cover bg-center" style={{ backgroundImage: `url(${primeraFondo})` }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-0" ></div>
        <div className="relative z-10 flex flex-col items-center justify-center gap-10 text-black ">
            <motion.div
            
            initial={{y: -50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}

            >
                <img src="./images/nrclogo.png" alt="" className="w-[200px] cursor-pointer transition-all duration-300 hover:-translate-y-5 hover:scale-105 md:w-[350px]" />
            </motion.div>
            <motion.div 

            initial={{y: 50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}

            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                <p className="md:text-base text-pretty text-sm text-justify text-white">Nogoyá Rugby es mucho más que un club: es una historia que comenzó a escribirse en 1976, cuando un grupo de pioneros decidió introducir el rugby en nuestra ciudad. Aquellos primeros pasos, impulsados por la pasión, el compromiso y el deseo de crecer, marcaron el inicio de un camino que con el tiempo enfrentó pausas y desafíos. 

Sin embargo, la fuerza del espíritu rugbier volvió a unir a viejos y nuevos amantes de este deporte el 24 de octubre de 1999, momento que reconocemos como nuestra refundación. Ese encuentro de generaciones permitió consolidar finalmente el sueño de un club propio: el Nogoyá Rugby Club. 
Hoy, somos herederos de esa historia, de ese esfuerzo silencioso y de esa convicción compartida de que el rugby es una forma de vida.  

 

Nuestros valores 

En Nogoyá Rugby creemos profundamente en tres pilares que guían cada una de nuestras acciones: Respeto, Educación y Humildad. Estos valores no solo se entrenan; se viven dentro y fuera de la cancha. 

Respeto 

Porque entendemos que el juego no existe sin el otro. Valoramos al adversario, respetamos al árbitro y honramos la esencia del deporte que nos convoca. El respeto es la base que sostiene cada encuentro y cada vínculo dentro del club. 

Educación 

El rugby nos enseña a crecer en cada paso: a celebrar las victorias con mesura, a enfrentar las derrotas con aprendizaje y a mantener la serenidad en todo momento. Educa en la disciplina, en el esfuerzo y en la fortaleza de levantarse cada vez que se cae. 

Humildad 

Creemos en el poder del equipo por encima de las individualidades. En Nogoyá Rugby nadie es más que otro; todos somos parte de un mismo propósito. La humildad nos recuerda que este deporte es inclusivo, generoso y capaz de unir a personas de todas las edades y trayectorias. 

Te invitamos a compartir y vivir nuestros valores dentro y fuera de la cancha. Acercate al club y descubrí la pasión por este maravilloso deporte. No importa la edad ni el físico: lo que realmente importa son las ganas de ser parte. 

Te esperamos a vos y a tu familia, porque ustedes son la esencia de nuestro club.</p>
            </motion.div> 
        </div>
    </div>
  )
}

export default Hero