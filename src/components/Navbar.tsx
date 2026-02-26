import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoIntiwatt from "@/assets/logo-intiwatt.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Visión", href: "#vision" },
  { label: "BiPV", href: "#bipv" },
  { label: "Tecnología", href: "#tecnologia" },
  { label: "Proyecto", href: "#proyecto" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logoIntiwatt} alt="IntiWatt" className="h-10 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="text-sm font-body tracking-wide bg-primary text-primary-foreground px-5 py-2 rounded hover:opacity-90 transition-opacity"
          >
            Conversemos
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="text-sm font-body bg-primary text-primary-foreground px-5 py-2 rounded text-center"
              >
                Conversemos
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
