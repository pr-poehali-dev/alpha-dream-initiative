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
            src="https://cdn.poehali.dev/projects/874a15de-41fa-45bd-9249-d2c9222f707b/files/ea2dd9f5-7904-4031-b8b4-1f5d613bda86.jpg"
            alt="Голубой фон с цветами"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-sky-900/40" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg tracking-widest opacity-80">
        29 · 08 · 2026
      </h3>

      <div className="absolute bottom-24 right-6 left-6 z-10 flex flex-col gap-8">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Этот день будет особенным. Мы хотим разделить его с теми, кто важен нам больше всего.
        </p>
        <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-sm sm:max-w-lg md:max-w-2xl opacity-95 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
          Живые цветы прекрасны, но недолговечны. Мы будем признательны, если Вы подарите вместо них сертификаты.
        </p>
      </div>
    </div>
  );
}