import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import logoSolarinnova from "@/assets/logo-solarinnova.png";
import projectFacade from "@/assets/project-facade.jpg";
import projectCrane from "@/assets/project-crane.jpg";
import projectExterior from "@/assets/project-exterior.jpg";
import projectNight from "@/assets/project-night.jpg";
import projectWorker from "@/assets/project-worker.jpg";
import projectTeam from "@/assets/project-team.jpg";

const gallery = [
  { src: projectFacade, alt: "Fachada vidriada con integración BiPV", label: "Fachada BiPV" },
  { src: projectNight, alt: "Vista nocturna de fachada fotovoltaica", label: "Iluminación nocturna" },
  { src: projectCrane, alt: "Instalación de módulos en fachada", label: "Montaje en obra" },
  { src: projectWorker, alt: "Detalle de instalación de vidrio fotovoltaico", label: "Detalle técnico" },
  { src: projectExterior, alt: "Vista exterior del edificio con BiPV", label: "Vista exterior" },
  { src: projectTeam, alt: "Equipo técnico de instalación", label: "Equipo en obra" },
];

const MuestrarioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="muestrario" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-2xl">
            <div className="editorial-line mb-6" />
            <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-4">
              Muestrario de Soluciones
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground leading-tight">
              El BiPV como material arquitectónico real, diverso y adaptable.
            </h2>
          </div>
          <img src={logoSolarinnova} alt="Solar Innova" className="h-8 w-auto opacity-40" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gallery.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              onClick={() => setSelected(selected === i ? null : i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs font-body tracking-widest uppercase text-primary-foreground bg-foreground/60 backdrop-blur-sm px-3 py-1.5 rounded">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center font-body font-light text-muted-foreground text-sm mt-12 max-w-2xl mx-auto leading-relaxed"
        >
          Vidrios fotovoltaicos, fachadas ventiladas activas, parasoles y cubiertas integradas.
          Cada proyecto se diseña como una pieza arquitectónica única.
        </motion.p>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setSelected(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={gallery[selected].src}
            alt={gallery[selected].alt}
            className="max-w-full max-h-[85vh] object-contain rounded"
          />
        </div>
      )}
    </section>
  );
};

export default MuestrarioSection;
