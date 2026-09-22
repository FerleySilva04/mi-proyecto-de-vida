import { useState } from "react";
import {
  Menu,
  X,
  User,
  Heart,
  Sparkles,
  Target,
  BookOpen,
} from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "Inicio",
      icon: Sparkles,
      href: "#inicio",
    },
    {
      name: "Quién soy",
      icon: User,
      href: "#quien-soy",
    },
    {
      name: "Mis valores",
      icon: Heart,
      href: "#valores",
    },
    {
      name: "Mi futuro",
      icon: Target,
      href: "#futuro",
    },
    {
      name: "Mi historia",
      icon: BookOpen,
      href: "#historia",
    },
  ];

  return (
    <nav className="navbar">
      <a href="#inicio" className="navbar-logo">
        <span className="logo-symbol">✦</span>

        <div>
          <strong>Mi Proyecto de Vida</strong>
          <small>Construyendo mi futuro</small>
        </div>
      </a>

      <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={17} />
              <span>{link.name}</span>
            </a>
          );
        })}
      </div>

      <button
        className="navbar-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </nav>
  );
}

export default Navbar;