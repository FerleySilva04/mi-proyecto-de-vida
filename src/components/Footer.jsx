import { ArrowUp, Heart, Sparkles } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <Sparkles size={18} />
          </div>

          <div>
            <h3>Mi Proyecto de Vida</h3>
            <p>Construyendo mi futuro, paso a paso.</p>
          </div>
        </div>

        <a href="#inicio" className="footer-up">
          Volver al inicio
          <ArrowUp size={17} />
        </a>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Adriana Jiménez. Un proyecto construido con
          sueños, metas y propósito.
        </p>

        <p className="footer-made">
          Hecho con <Heart size={14} /> y muchas ganas de crecer.
        </p>
      </div>
    </footer>
  );
}

export default Footer;