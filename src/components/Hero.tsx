import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/files/e84c2584-c055-4413-b62e-b92bdd967b61.png"
          alt="Сергей и Александра"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-sky-950/40" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm md:text-base uppercase tracking-[0.4em] mb-6 opacity-80 font-light">
          У нас свадьба
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Сергей<br />&<br />Александра
        </h1>
        <p className="text-lg md:text-xl opacity-90 font-light tracking-wide">
          29 августа 2026 · «Берёзовая роща»
        </p>
      </div>
    </div>
  );
}