import { useState } from "react";
import {
  Sparkles,
  User,
  Heart,
  Compass,
  BookOpen,
  Target,
  GraduationCap,
  MessageCircle,
  Flag,
  CalendarDays,
  Wrench,
  Users,
  AlertTriangle,
  GitBranch,
  BarChart3,
  RefreshCw,
  Image,
  Music,
  BookHeart,
  Trophy,
  Brain,
} from "lucide-react";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Values from "./sections/Values";
import Future from "./sections/Future";
import Historia from "./sections/Historia";
import Goals from "./sections/Goals";
import Plan from "./sections/Plan";

/*
  Secciones nuevas.
  Si todavía no existen, las crearemos una por una después.
*/
import Personality from "./sections/Personality";
import Interests from "./sections/Interests";
import Careers from "./sections/Careers";
import Interviews from "./sections/Interviews";
import Mission from "./sections/Mission";
import Skills from "./sections/Skills";
import SupportNetwork from "./sections/SupportNetwork";
import Obstacles from "./sections/Obstacles";
import Contingency from "./sections/Contingency";
import Dashboard from "./sections/Dashboard";
import Tracking from "./sections/Tracking";
import Inspiration from "./sections/Inspiration";
import Playlist from "./sections/Playlist";
import FutureDiary from "./sections/FutureDiary";
import Gamification from "./sections/Gamification";

function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    setSidebarOpen(false);

    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const sections = [
    // =====================================================
    // INICIO
    // =====================================================
    {
      id: "inicio",
      name: "Inicio",
      icon: Sparkles,
      component: <Hero onNavigate={handleNavigate} />,
    },

    // =====================================================
    // FASE 1
    // =====================================================
    {
      type: "phase",
      id: "fase-1",
      name: "FASE 1 · ¿QUIÉN SOY?",
    },

    {
      id: "quien-soy",
      name: "Quién soy",
      icon: User,
      component: <AboutMe />,
    },

    {
      id: "personalidad",
      name: "Mi personalidad",
      icon: Brain,
      component: <Personality />,
    },

    {
      id: "valores",
      name: "Mis valores",
      icon: Heart,
      component: <Values />,
    },

    // =====================================================
    // FASE 2
    // =====================================================
    {
      type: "phase",
      id: "fase-2",
      name: "FASE 2 · ¿QUÉ PUEDO SER?",
    },

    {
      id: "intereses",
      name: "Mis intereses",
      icon: Compass,
      component: <Interests />,
    },

    {
      id: "carreras",
      name: "Mis carreras",
      icon: GraduationCap,
      component: <Careers />,
    },

    {
      id: "entrevistas",
      name: "Entrevistas",
      icon: MessageCircle,
      component: <Interviews />,
    },

    // =====================================================
    // FASE 3
    // =====================================================
    {
      type: "phase",
      id: "fase-3",
      name: "FASE 3 · ¿HACIA DÓNDE VOY?",
    },

    {
      id: "mision",
      name: "Mi misión",
      icon: Flag,
      component: <Mission />,
    },

    {
      id: "futuro",
      name: "Mi visión a los 30",
      icon: Target,
      component: <Future />,
    },

    {
      id: "metas",
      name: "Mis metas SMART",
      icon: Target,
      component: <Goals />,
    },

    // =====================================================
    // FASE 4
    // =====================================================
    {
      type: "phase",
      id: "fase-4",
      name: "FASE 4 · ¿CÓMO LO LOGRO?",
    },

    {
      id: "plan",
      name: "Mi plan",
      icon: CalendarDays,
      component: <Plan />,
    },

    {
      id: "habilidades",
      name: "Mis habilidades",
      icon: Wrench,
      component: <Skills />,
    },

    {
      id: "red-apoyo",
      name: "Mi red de apoyo",
      icon: Users,
      component: <SupportNetwork />,
    },

    // =====================================================
    // FASE 5
    // =====================================================
    {
      type: "phase",
      id: "fase-5",
      name: "FASE 5 · ¿QUÉ PUEDE SALIR MAL?",
    },

    {
      id: "obstaculos",
      name: "Mis obstáculos",
      icon: AlertTriangle,
      component: <Obstacles />,
    },

    {
      id: "contingencia",
      name: "Plan B / Plan C",
      icon: GitBranch,
      component: <Contingency />,
    },

    // =====================================================
    // FASE 6
    // =====================================================
    {
      type: "phase",
      id: "fase-6",
      name: "FASE 6 · ¿CÓMO VOY?",
    },

    {
      id: "dashboard",
      name: "Mi dashboard",
      icon: BarChart3,
      component: <Dashboard />,
    },

    {
      id: "seguimiento",
      name: "Mi seguimiento",
      icon: RefreshCw,
      component: <Tracking />,
    },

    // =====================================================
    // EXTRAS
    // =====================================================
    {
      type: "phase",
      id: "extras",
      name: "✨ EXTRAS",
    },

    {
      id: "historia",
      name: "Mi historia",
      icon: BookOpen,
      component: <Historia />,
    },

    {
      id: "inspiracion",
      name: "Mi inspiración",
      icon: Image,
      component: <Inspiration />,
    },

    {
      id: "playlist",
      name: "Mi playlist",
      icon: Music,
      component: <Playlist />,
    },

    {
      id: "diario",
      name: "Mi diario del futuro",
      icon: BookHeart,
      component: <FutureDiary />,
    },

    {
      id: "gamificacion",
      name: "Mi gamificación",
      icon: Trophy,
      component: <Gamification />,
    },
  ];

  const active = sections.find(
    (section) =>
      section.type !== "phase" &&
      section.id === activeSection
  );

  return (
    <div className="dashboard-app">
      <Navbar
        onMenuClick={() => setSidebarOpen((prev) => !prev)}
        isMenuOpen={sidebarOpen}
      />

      <div className="dashboard-layout">
        {/* Overlay para móvil */}
        <div
          className={`dashboard-overlay ${
            sidebarOpen ? "visible" : ""
          }`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar */}
        <aside
          id="dashboard-sidebar"
          className={`dashboard-sidebar ${
            sidebarOpen ? "open" : ""
          }`}
        >
          {/* Perfil */}
          <div className="sidebar-profile">
            <div className="sidebar-avatar">A</div>

            <div>
              <strong>Adriana Jiménez</strong>
              <span>Proyecto de Vida</span>
            </div>
          </div>

          <div className="sidebar-divider"></div>

          {/* Navegación */}
          <nav className="dashboard-menu">
            <p className="menu-label">EXPLORAR</p>

            {sections.map((section) => {
              /*
                Los elementos de tipo "phase" funcionan
                solamente como separadores visuales.
              */
              if (section.type === "phase") {
                return (
                  <div
                    key={section.id}
                    className="dashboard-phase-label"
                  >
                    {section.name}
                  </div>
                );
              }

              const Icon = section.icon;

              const isActive =
                activeSection === section.id;

              return (
                <button
                  key={section.id}
                  type="button"
                  className={`dashboard-menu-item ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() =>
                    handleNavigate(section.id)
                  }
                >
                  <Icon size={18} />

                  <span>{section.name}</span>

                  {isActive && (
                    <span className="menu-arrow">→</span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Información inferior */}
          <div className="sidebar-bottom">
            <span>18 años</span>
            <span>San Juan Nepomuceno</span>
          </div>
        </aside>

        {/* Contenido */}
        <main className="dashboard-content">
          <div className="dashboard-section">
            {active?.component}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;