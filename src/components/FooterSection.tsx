import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import logoIntiwatt from "@/assets/logo-intiwatt.png";
import { Mail, MessageCircle, Globe } from "lucide-react";

const FooterSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Closing statement */}
      <section className="section-padding bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="editorial-line mb-8" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-foreground leading-tight mb-6">
              No agregamos energía a los edificios.{" "}
              <span className="text-primary italic">La diseñamos desde la arquitectura.</span>
            </h2>
            <a
              href="#contacto"
              className="inline-block font-body text-sm tracking-widest uppercase border border-foreground/20 text-foreground px-8 py-4 mt-8 hover:border-primary hover:text-primary transition-colors"
            >
              Diseñemos energía desde la arquitectura
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="section-padding bg-foreground">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <img src={logoIntiwatt} alt="IntiWatt" className="h-14 w-auto mb-8 brightness-0 invert opacity-80" />
              <p className="font-body font-light text-primary-foreground/60 leading-relaxed max-w-md">
                Consultoría en arquitectura energética e integración de sistemas 
                BiPV. Alianza estratégica entre tecnología europea e ingeniería local.
              </p>
            </div>
            <div className="space-y-6">
              <a
                href="mailto:info@intiwatt.com"
                className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary transition-colors font-body"
              >
                <Mail size={18} />
                <span>info@intiwatt.com</span>
              </a>
              <a
                href="https://wa.me/5493518670464"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary transition-colors font-body"
              >
                <MessageCircle size={18} />
                <span>+54 351 867 0464 · Córdoba</span>
              </a>
              <a
                href="https://wa.me/5493854164501"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary transition-colors font-body"
              >
                <MessageCircle size={18} />
                <span>+54 385 416 4501 · Santiago del Estero</span>
              </a>
              <a
                href="https://www.intiwatt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-primary-foreground/70 hover:text-primary transition-colors font-body"
              >
                <Globe size={18} />
                <span>www.intiwatt.com</span>
              </a>

              <div className="pt-6">
                <a
                  href="https://wa.me/5493518670464?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20IntiWatt."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 rounded font-body text-sm tracking-wide hover:opacity-90 transition-opacity"
                >
                  <MessageCircle size={16} />
                  Enviar mensaje por WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/10 mt-16 pt-8">
            <p className="font-body text-xs text-primary-foreground/30 tracking-wide">
              © {new Date().getFullYear()} IntiWatt. Arquitectura energética integrada.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
