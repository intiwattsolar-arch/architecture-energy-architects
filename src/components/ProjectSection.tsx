import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import projectCrane from "@/assets/project-crane.jpg";
import projectTeam from "@/assets/project-team.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import projectFacade from "@/assets/project-facade.jpg";
import logoMicronor from "@/assets/logo-micronor.png";

const images = [
  { src: projectFacade, alt: "Fachada BIPV completa" },
  { src: projectCrane, alt: "Instalación con grúa" },
  { src: projectTeam, alt: "Equipo de instalación" },
  { src: projectExterior, alt: "Vista exterior" },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="proyecto" className="bg-foreground" ref={ref}>
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        <div className="section-padding flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="w-12 h-px bg-primary mb-6" />
            <p className="text-sm font-body tracking-widest uppercase text-primary/70 mb-4">
              Proyecto Real
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-light text-primary-foreground leading-tight mb-8">
              Proyecto pionero de integración BiPV vertical en arquitectura hotelera en Argentina.
            </h2>
            <div className="space-y-6 text-primary-foreground/70 font-body font-light leading-relaxed">
              <p>
                Hotel en Añelo, Neuquén. Un desarrollo donde la fachada vidriada 
                incorpora módulos fotovoltaicos integrados estructuralmente, 
                funcionando simultáneamente como cerramiento de seguridad y 
                superficie de generación energética.
              </p>
              <p>
                Proyecto ejecutado en alianza con Micronor, combinando ingeniería 
                de instalación local con tecnología europea de última generación.
              </p>
            </div>
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-primary-foreground/10">
              <img src={logoMicronor} alt="Micronor" className="h-6 w-auto opacity-50" />
              <span className="text-xs font-body text-primary-foreground/40 tracking-wide">
                Alianza de desarrollo
              </span>
            </div>
          </motion.div>
        </div>

        <div className="relative min-h-[500px] lg:min-h-0">
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute bottom-6 left-6 right-6 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i === active ? "bg-primary" : "bg-primary-foreground/30"
                }`}
                aria-label={`Ver imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
