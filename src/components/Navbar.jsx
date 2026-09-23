import { Sparkles, Menu, X } from "lucide-react";

function Navbar({ onMenuClick, isMenuOpen }) {
  return (
    <header className="dashboard-navbar">

      <div className="dashboard-navbar-brand">
        <div className="dashboard-navbar-logo">
          <Sparkles size={18} />
        </div>

        <div>
          <strong>Mi Proyecto de Vida</strong>
          <span>Construyendo mi futuro</span>
        </div>
      </div>

      <div className="dashboard-navbar-right">

        <span className="dashboard-status">
          Mi historia · Mi futuro · Mis sueños
        </span>

        <button
          type="button"
          className="dashboard-navbar-menu"
          aria-label={
            isMenuOpen
              ? "Cerrar menú"
              : "Abrir menú"
          }
          aria-expanded={isMenuOpen}
          aria-controls="dashboard-sidebar"
          onClick={onMenuClick}
        >
          {isMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}
        </button>

      </div>

    </header>
  );
}

export default Navbar;