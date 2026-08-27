import { motion } from "framer-motion";

import adhemix from "/images/Sponsors/Adhemix.jpeg";
import almacen from "/images/Sponsors/almacen.jpeg";
import danielDacello from "/images/Sponsors/DanielDacello.jpeg";
import farmaciaDelCentro from "/images/Sponsors/FarmaciaDelCentro.jpeg";
import laGruta from "/images/Sponsors/LaGruta.jpeg";
import ospe from "/images/Sponsors/ospe.jpeg";

const images = [
  adhemix,
  almacen,
  danielDacello,
  farmaciaDelCentro,
  laGruta,
  ospe,
];

const duplicatedImages = [...images, ...images];

const Sponsors = () => {
  return (
    <div id="Sponsors">
      <section className="overflow-hidden bg-black py-16 md:py-24">

        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-6xl">Nos acompañan</h2>

        <motion.div
          className="flex gap-6 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {duplicatedImages.map((img, index) => (
            <div
              key={index}
              className="
                w-[400px]
                h-[260px]
                flex-shrink-0
                flex items-center justify-center
                bg-white
                rounded-lg
                p-4
              "
            >
              <img
                src={img}
                alt=""
                className="
                  max-w-full
                  max-h-full
                  object-contain
                "
              />
            </div>
          ))}
        </motion.div>

      </section>
    </div>
  )
}

export default Sponsors
