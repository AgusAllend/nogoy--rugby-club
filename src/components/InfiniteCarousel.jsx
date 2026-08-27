import { motion } from "framer-motion";

import foto1 from "/images/foto1.JPG";
import foto2 from "/images/foto2.JPG";
import foto3 from "/images/foto3.JPG";
import foto4 from "/images/foto4.JPG";
import foto5 from "/images/foto5.JPG";
import foto6 from "/images/foto6.JPG";
import foto7 from "/images/foto7.JPG";
import foto8 from "/images/foto8.JPG";
import foto9 from "/images/foto9.JPG";
import foto10 from "/images/foto10.JPG";
import foto11 from "/images/foto11.JPG";
import foto12 from "/images/foto12.JPG";
import foto13 from "/images/foto13.JPG";
import foto14 from "/images/foto14.JPG";
import foto15 from "/images/foto15.JPG";
import foto16 from "/images/foto16.JPG";
import foto17 from "/images/foto17.JPG";
import foto18 from "/images/foto18.JPG";
import foto19 from "/images/foto19.JPG";

const images = [
  foto1,
  foto2,
  foto3,
  foto4,
  foto5,
  foto6,
  foto8,
  foto9,
  foto10,
  foto11,
  foto12,
  foto13,
  foto14,
  foto15,
  foto16,
  foto17,
  foto18,
  foto19,
];

const duplicatedImages = [...images, ...images];

export default function InfiniteCarousel() {
  return (
    <section className="overflow-hidden py-10 bg-black">

      <motion.div
        className="flex gap-4 w-max"
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
          <img
            key={index}
            src={img}
            alt=""
            className="
              w-[350px]
              h-[220px]
              object-cover
              flex-shrink-0
            "
          />
        ))}
      </motion.div>

    </section>
  );
}