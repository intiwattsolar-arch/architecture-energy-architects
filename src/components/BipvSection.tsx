import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import projectNight from "@/assets/project-night.jpg";

const BipvSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="bipv" className="bg-card" ref={ref}>
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        <div className="section-padding flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="editorial-line mb-6" />
            <p className="text-sm font-body tracking-widest uppercase text-muted-foreground mb-4">
              Qué es BiPV
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-light text-foreground leading-tight mb-8">
              Building Integrated Photovoltaics
            </h2>
            <div className="space-y-6 text-muted-foreground font-body font-light leading-relaxed">
              <p>
                BiPV (Building Integrated Photovoltaics) es la integración de 
                módulos fotovoltaicos como elementos constructivos de la envolvente 
                del edificio. No se trata de paneles añadidos a una fachada: son 
                vidrios, revestimientos y superficies que generan energía mientras 
                cumplen funciones arquitectónicas.
              </p>
              <p>
                Desde vidrios de seguridad laminados con células fotovoltaicas hasta 
                fachadas ventiladas activas, el BiPV permite que cada metro cuadrado 
                de envolvente contribuya al balance energético del edificio sin 
                comprometer la estética ni la funcionalidad del diseño.
              </p>
              <p>
                Es, en esencia, arquitectura que trabaja. Un enfoque donde la 
                generación de energía es inherente al edificio, no un sistema 
                superpuesto.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-0">
          <img
            src={projectNight}
            alt="Fachada BiPV nocturna"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default BipvSection;
