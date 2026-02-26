import { motion } from "framer-motion";
import projectFacade from "@/assets/project-facade.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={projectFacade}
          alt="Fachada BIPV integrada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="editorial-line mb-8" />
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-light text-primary-foreground leading-tight mb-8">
            Arquitectura que{" "}
            <span className="text-primary italic">genera</span> energía.
          </h1>
          <p className="text-lg md:text-xl font-body font-light text-primary-foreground/80 max-w-2xl mb-12 leading-relaxed">
            Integración fotovoltaica en la envolvente edilicia. Consultoría
            estratégica en arquitectura activa y sistemas BiPV.
          </p>
          <a
            href="#contacto"
            className="inline-block font-body text-sm tracking-widest uppercase border border-primary-foreground/40 text-primary-foreground px-8 py-4 hover:bg-primary-foreground/10 transition-colors"
          >
            Conversemos su proyecto
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
