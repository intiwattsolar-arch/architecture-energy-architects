import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logoSolarinnova from "@/assets/logo-solarinnova.png";
import projectWorker from "@/assets/project-worker.jpg";

const features = [
  {
    title: "Elementos constructivos",
    text: "Vidrios fotovoltaicos que funcionan como cerramiento estructural, reemplazando vidrios convencionales sin alterar el diseño arquitectónico.",
  },
  {
    title: "Seguridad y durabilidad",
    text: "Vidrio laminado de seguridad con células fotovoltaicas encapsuladas, cumpliendo normativas de resistencia mecánica y térmica.",
  },
  {
    title: "Personalización estética",
    text: "Gama de transparencias, colores y acabados que permiten al arquitecto mantener el control total sobre la expresión visual del edificio.",
  },
];

const TechnologySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tecnologia" className="bg-card" ref={ref}>
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        <div className="relative min-h-[400px] lg:min-h-0 order-2 lg:order-1">
          <img
            src={projectWorker}
            alt="Instalación de paneles BiPV"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="section-padding flex items-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="editorial-line" />
              <img src={logoSolarinnova} alt="Solar Innova" className="h-8 w-auto opacity-50" />
            </div>
            <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-4">
              Tecnología
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground leading-tight mb-10">
              Vidrio fotovoltaico como material arquitectónico.
            </h2>

            <div className="space-y-10">
              {features.map((f, i) => (
                <div key={f.title} className="border-l-2 border-primary/30 pl-6">
                  <h3 className="text-lg font-display font-medium text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="font-body font-light text-muted-foreground leading-relaxed text-sm">
                    {f.text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
