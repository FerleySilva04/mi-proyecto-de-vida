import { Sparkles, Menu, X } from "lucide-react";

function Navbar({
  onMenuClick,
  isMenuOpen,
  language,
  setLanguage,
}) {
  const isSpanish = language === "es";

  return (
    <header className="dashboard-navbar">

  <div className="dashboard-navbar-brand">
    <div className="dashboard-navbar-logo">
      <Sparkles size={18} />
    </div>

    <div>
      <strong>
        {isSpanish
          ? "Mi Proyecto de Vida"
          : "My Life Project"}
      </strong>

      <span className="dashboard-navbar-subtitle">
        {isSpanish
          ? "Construyendo mi futuro"
          : "Building My Future"}
      </span>
    </div>
  </div>
      <div className="dashboard-navbar-right">

        <span className="dashboard-status">
          {isSpanish
            ? "Mi historia · Mi futuro · Mis sueños"
            : "My story · My future · My dreams"}
        </span>

        {/* Selector de idioma */}
        <div
          className="language-switcher"
          aria-label={
            isSpanish
              ? "Selector de idioma"
              : "Language selector"
          }
        >
          <button
            type="button"
            className={`language-button ${isSpanish ? "active" : ""
              }`}
            onClick={() => setLanguage("es")}
            aria-label="Español"
            aria-pressed={isSpanish}
          >
            ES
          </button>

          <span className="language-divider">
            |
          </span>

          <button
            type="button"
            className={`language-button ${!isSpanish ? "active" : ""
              }`}
            onClick={() => setLanguage("en")}
            aria-label="English"
            aria-pressed={!isSpanish}
          >
            EN
          </button>
        </div>

        {/* Menú móvil */}
        <button
          type="button"
          className="dashboard-navbar-menu"
          aria-label={
            isMenuOpen
              ? isSpanish
                ? "Cerrar menú"
                : "Close menu"
              : isSpanish
                ? "Abrir menú"
                : "Open menu"
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