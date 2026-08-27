import { motion } from "framer-motion";
import entrenamientosFondo from '/images/foto2.JPG';

const Entrenamientos = () => {
  return (
    <div id="Entrenamientos" className="relative w-full bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${entrenamientosFondo})` }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative flex flex-col items-center justify-center gap-10 px-6 py-20 text-white md:py-28">
            <h1 className="text-4xl font-bold text-white md:text-6xl">Entrena con nosotros!</h1>

            <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 md:gap-6">
                <motion.div
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
                className="flex flex-col items-center justify-start gap-3 text-center">
                    <h2 className=" text-pretty text-6xl text-white">Primera</h2>
                    <motion.div
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    >
                        <img src="./images/Primera.JPG" alt="" className="h-[280px] w-[280px] cursor-pointer object-cover transition-all duration-300 hover:-translate-y-5 hover:scale-105 md:h-[340px] md:w-[340px]" />
                    </motion.div>
                    <h3 className=" text-pretty text-4xl text-gray-200">Martes y Jueves.</h3>
                    <p className=" text-pretty text-3xl text-gray-200">De 21 a 23hs.</p>
                </motion.div>

                <motion.div
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
                className="flex flex-col items-center justify-start gap-3 text-center">
                    <h2 className=" text-pretty text-6xl text-white">Juveniles.</h2>
                    <motion.div
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    >
                        <img src="./images/Juveniles.jpeg" alt="" className="h-[280px] w-[280px] cursor-pointer object-cover transition-all duration-300 hover:-translate-y-5 hover:scale-105 md:h-[340px] md:w-[340px]" />
                    </motion.div>
                    <h3 className=" text-pretty text-4xl text-gray-200">Martes y Jueves.</h3>
                    <p className=" text-pretty text-3xl text-gray-200">De 19 a 21hs.</p>
                </motion.div>

                <motion.div
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, delay: 0.2}}
                className="flex flex-col items-center justify-start gap-3 text-center">
                    <h2 className=" text-pretty text-6xl text-white">Infantiles.</h2>
                    <motion.div
                    initial={{y: -50, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    >
                        <img src="./images/Infantiles.jpeg" alt="" className="h-[280px] w-[280px] cursor-pointer object-cover transition-all duration-300 hover:-translate-y-5 hover:scale-105 md:h-[340px] md:w-[340px]" />
                    </motion.div>
                    <h3 className=" text-pretty text-4xl text-gray-200">Lunes y Miercoles.</h3>
                    <p className=" text-pretty text-3xl text-gray-200">De 18:30 a 19:30hs.</p>
                </motion.div>
            </div>
            <motion.div
            
            initial={{y: -50, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.2}}

            >
                <img src="./images/Entrenamiento.jpeg" alt="" className="w-[600px] cursor-pointer transition-all duration-300 hover:-translate-y-5 hover:scale-105 md:w-[650px]" />
            </motion.div>
      </div>
    </div>
  )
}

export default Entrenamientos