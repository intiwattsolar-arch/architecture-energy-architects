import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logoIntiwatt from "@/assets/logo-intiwatt.png";
import logoUpm from "@/assets/logo-upm.jpg";

const pillars = [
  {
    title: "Formación especializada",
    description:
      "Equipo técnico con capacitación directa de fabricantes europeos en diseño, instalación y mantenimiento de sistemas BiPV.",
  },
  {
    title: "Integración local",
    description:
      "Ingeniería de implementación adaptada a normativas, condiciones climáticas y requerimientos constructivos de la región.",
  },
  {
    title: "Ciclo de vida",
    description:
      "Enfoque en durabilidad, calidad de materiales y rendimiento sostenido a lo largo de toda la vida útil del activo inmobiliario.",
  },
];

const ExcellenceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
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
              Excelencia IntiWatt
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground leading-tight">
              Integrador estratégico entre excelencia tecnológica europea e ingeniería local.
            </h2>
          </div>
          <img src={logoIntiwatt} alt="IntiWatt" className="h-16 w-auto opacity-30" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              className="border-t border-border pt-8"
            >
              <span className="text-xs font-body tracking-widest uppercase text-primary mb-4 block">
                0{i + 1}
              </span>
              <h3 className="text-xl font-display font-medium text-foreground mb-4">
                {pillar.title}
              </h3>
              <p className="font-body font-light text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-border flex flex-col md:flex-row items-start md:items-center gap-6"
        >
          <img src={logoUpm} alt="Instituto de Energía Solar – UPM" className="h-16 w-auto opacity-70 rounded" />
          <div>
            <h3 className="text-lg font-display font-medium text-foreground mb-2">
              Formación académica de excelencia
            </h3>
            <p className="font-body font-light text-muted-foreground leading-relaxed max-w-xl">
              Equipo con formación en el Instituto de Energía Solar de la Universidad 
              Politécnica de Madrid (Facultad de Arquitectura), referente internacional 
              en investigación fotovoltaica aplicada. Mantenemos vínculo activo con 
              la institución para el desarrollo de soluciones BiPV de vanguardia.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExcellenceSection;
