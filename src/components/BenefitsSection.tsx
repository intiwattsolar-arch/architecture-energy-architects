import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    label: "Arquitectónicos",
    items: [
      "Integración orgánica en la envolvente",
      "Libertad de diseño en fachadas y cubiertas",
      "Eliminación del impacto visual de sistemas superpuestos",
      "Valor estético diferencial del activo",
    ],
  },
  {
    label: "Energéticos",
    items: [
      "Generación distribuida en la propia envolvente",
      "Reducción de la demanda energética operativa",
      "Aprovechamiento de superficies verticales y horizontales",
      "Autonomía energética parcial del edificio",
    ],
  },
  {
    label: "Económicos",
    items: [
      "Revalorización del activo inmobiliario",
      "Optimización del costo de envolvente al integrar función energética",
      "Alineación con incentivos y normativas de eficiencia",
      "Reducción de costos operativos a largo plazo",
    ],
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <div className="editorial-line mb-6" />
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-4">
            Beneficios Estratégicos
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-light text-foreground leading-tight">
            Valor que trasciende la generación de energía.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="bg-card rounded p-8 border border-border"
            >
              <span className="text-xs font-body tracking-widest uppercase text-primary mb-6 block">
                {cat.label}
              </span>
              <ul className="space-y-4">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="font-body font-light text-muted-foreground text-sm leading-relaxed pl-4 border-l border-border"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
