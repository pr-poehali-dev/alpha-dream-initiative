import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/874a15de-41fa-45bd-9249-d2c9222f707b/files/5638ddfd-2526-4a72-920b-90d72de3af54.jpg"
            alt="Свадебный стол"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-950/50" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest opacity-80">
        29 · 08 · 2026
      </h3>

      <div className="absolute bottom-12 right-6 left-6 z-10 flex flex-col gap-6 sm:left-auto">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Этот день будет особенным. Мы хотим разделить его с теми, кто важен нам больше всего.
        </p>
        <p className="text-white text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md opacity-90 leading-relaxed font-light">
          Живые цветы прекрасны, но недолговечны. Мы будем признательны, если Вы подарите вместо них сертификаты.
        </p>
      </div>
    </div>
  );
}