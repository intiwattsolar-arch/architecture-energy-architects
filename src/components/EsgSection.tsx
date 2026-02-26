import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EsgSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="mx-auto w-12 h-px bg-primary mb-6" />
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-4">
            Sostenibilidad & ESG
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light text-foreground leading-tight mb-10">
            Herramienta concreta para estrategias de sostenibilidad.
          </h2>
          <p className="font-body font-light text-muted-foreground leading-relaxed mb-12">
            El BiPV no es un gesto simbólico. Es infraestructura de generación 
            integrada que impacta directamente en las métricas ambientales del 
            activo y en la credibilidad de la estrategia ESG corporativa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            {
              title: "Certificaciones ambientales",
              text: "Contribución directa a créditos LEED, EDGE y otros sistemas de certificación de edificios sostenibles.",
            },
            {
              title: "Imagen institucional",
              text: "Evidencia tangible de compromiso ambiental integrada en la propia materialidad del edificio.",
            },
            {
              title: "Estrategia ESG",
              text: "Alineación con marcos de reporte y expectativas de inversores respecto a infraestructura sostenible.",
            },
          ].map((item, i) => (
            <div key={item.title} className="text-center">
              <h3 className="text-lg font-display font-medium text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body font-light text-muted-foreground text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EsgSection;
