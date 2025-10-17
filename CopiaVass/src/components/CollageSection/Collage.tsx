import { motion } from "framer-motion";

const setups = [
  { id: 1, src: "/img/Collage1.jpg" },
  { id: 2, src: "/img/Collage2.jpg" },
  { id: 3, src: "/img/Collage3.jpg" },
  { id: 4, src: "/img/Collage4.jpg" },
  { id: 5, src: "/img/Collage5.jpg" },
  { id: 6, src: "/img/Collage6.jpg" },
  { id: 7, src: "/img/Collage7.jpg" },
  { id: 8, src: "/img/Collage8.jpg" },
  { id: 9, src: "/img/Collage9.jpg" },
];

// Duplicamos las imágenes para lograr el loop continuo
const repeatedSetups = [...setups, ...setups];

export default function Collage() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <h2 className="text-center text-3xl text-black font-bold mb-12">
        Share your Setup
      </h2>

      <div className="relative w-full">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {repeatedSetups.map((setup, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
            >
              <img
                src={setup.src}
                alt={`setup-${setup.id}`}
                className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
