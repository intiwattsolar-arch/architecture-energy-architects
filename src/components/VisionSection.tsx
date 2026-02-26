import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const VisionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="editorial-line mb-6" />
          <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-4">
            Visión Ejecutiva
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-foreground leading-tight mb-10">
            La evolución de la arquitectura activa.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-16 mt-8"
        >
          <div>
            <p className="text-lg font-body font-light text-muted-foreground leading-relaxed">
              El Building Integrated Photovoltaics no es un agregado tecnológico: 
              es una decisión de diseño. Un cambio de paradigma donde la envolvente 
              edilicia deja de ser pasiva y se convierte en un activo energético 
              que genera valor patrimonial.
            </p>
          </div>
          <div>
            <p className="text-lg font-body font-light text-muted-foreground leading-relaxed">
              Cuando la arquitectura integra la generación de energía desde su concepción, 
              los edificios no solo reducen su demanda operativa — elevan su categoría 
              como activos inmobiliarios, alineándose con los estándares más exigentes 
              de eficiencia y sostenibilidad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
