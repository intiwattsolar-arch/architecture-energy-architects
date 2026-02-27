import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import logoSolarinnova from "@/assets/logo-solarinnova.png";

import siProject01 from "@/assets/si-project-01.png";
import siProject02 from "@/assets/si-project-02.png";
import siProject03 from "@/assets/si-project-03.png";
import siProject04 from "@/assets/si-project-04.png";
import siProject05 from "@/assets/si-project-05.png";
import siProject06 from "@/assets/si-project-06.png";
import siProject07 from "@/assets/si-project-07.png";
import siProject08 from "@/assets/si-project-08.png";
import siProject09 from "@/assets/si-project-09.png";
import siProject10 from "@/assets/si-project-10.png";

const gallery = [
  { src: siProject01, alt: "Cubierta fotovoltaica integrada en estructura de madera", label: "Cubierta integrada" },
  { src: siProject02, alt: "Fachada ventilada fotovoltaica multicolor", label: "Fachada multicolor" },
  { src: siProject03, alt: "Arquitectura orgánica con módulos BiPV", label: "Integración orgánica" },
  { src: siProject04, alt: "Instalación de vidrio fotovoltaico en cubierta", label: "Vidrio en cubierta" },
  { src: siProject05, alt: "Fachada ventilada fotovoltaica en edificio residencial", label: "Fachada residencial" },
  { src: siProject06, alt: "Revestimiento fotovoltaico de colores en viviendas", label: "Revestimiento BiPV" },
  { src: siProject07, alt: "Hotel con fachada fotovoltaica azul integrada", label: "Fachada hotelera" },
  { src: siProject08, alt: "Residencia con cubierta fotovoltaica completa", label: "Cubierta residencial" },
  { src: siProject09, alt: "Terraza urbana con pérgola fotovoltaica en París", label: "Pérgola urbana" },
  { src: siProject10, alt: "Mobiliario urbano con vidrio fotovoltaico curvo", label: "Mobiliario urbano" },
];

const MuestrarioSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const goTo = (index: number) => {
    setActive((index + gallery.length) % gallery.length);
  };

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

        {/* Main carousel image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded mb-4 group"
        >
          <img
            src={gallery[active].src}
            alt={gallery[active].alt}
            className="w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

          {/* Label */}
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-body tracking-widest uppercase text-primary-foreground bg-foreground/50 backdrop-blur-sm px-4 py-2 rounded">
              {gallery[active].label}
            </span>
          </div>

          {/* Nav arrows */}
          <button
            onClick={() => goTo(active - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="Anterior"
          >
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
          <button
            onClick={() => goTo(active + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
            aria-label="Siguiente"
          >
            <ArrowRight className="w-4 h-4 text-foreground" />
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 right-6">
            <span className="text-xs font-body text-primary-foreground/70 tracking-wide">
              {active + 1} / {gallery.length}
            </span>
          </div>
        </motion.div>

        {/* Thumbnails */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide"
        >
          {gallery.map((img, i) => (
            <button
              key={img.alt}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 w-20 h-14 md:w-28 md:h-20 overflow-hidden rounded transition-all duration-300 ${
                i === active
                  ? "ring-2 ring-primary opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
              aria-label={img.label}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </motion.div>

        {/* Footer text + link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mt-12"
        >
          <p className="font-body font-light text-muted-foreground text-sm max-w-2xl leading-relaxed">
            Vidrios fotovoltaicos, fachadas ventiladas activas, parasoles, cubiertas y mobiliario urbano integrado.
            Cada proyecto se diseña como una pieza arquitectónica única.
          </p>
          <a
            href="https://www.solarinnova.net/en/projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-body tracking-wide text-foreground hover:text-primary transition-colors whitespace-nowrap"
          >
            Ver todos los proyectos
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MuestrarioSection;
