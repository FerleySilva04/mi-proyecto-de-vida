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

import translations from "./translations/translations";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
import Values from "./sections/Values";
import Future from "./sections/Future";
import Historia from "./sections/Historia";
import Goals from "./sections/Goals";
import Plan from "./sections/Plan";

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

  // Idioma actual
  const [language, setLanguage] = useState("es");

  // Traducciones correspondientes al idioma seleccionado
  const t = translations[language];

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
      name: t.nav.home,
      icon: Sparkles,
      component: (
        <Hero
          onNavigate={handleNavigate}
          language={language}
        />
      ),
    },

    // =====================================================
    // FASE 1
    // =====================================================
    {
      type: "phase",
      id: "fase-1",
      name: t.nav.phase1,
    },

    {
      id: "quien-soy",
      name: t.nav.about,
      icon: User,
      component: <AboutMe language={language} />,
    },

    {
      id: "personalidad",
      name: t.nav.personality,
      icon: Brain,
      component: <Personality language={language} />,
    },

    {
      id: "valores",
      name: t.nav.values,
      icon: Heart,
      component: <Values language={language} />,
    },

    // =====================================================
    // FASE 2
    // =====================================================
    {
      type: "phase",
      id: "fase-2",
      name: t.nav.phase2,
    },

    {
      id: "intereses",
      name: t.nav.interests,
      icon: Compass,
      component: <Interests language={language} />,
    },

    {
      id: "carreras",
      name: t.nav.careers,
      icon: GraduationCap,
      component: <Careers language={language} />,
    },

    {
      id: "entrevistas",
      name: t.nav.interviews,
      icon: MessageCircle,
      component: <Interviews language={language} />,
    },

    // =====================================================
    // FASE 3
    // =====================================================
    {
      type: "phase",
      id: "fase-3",
      name: t.nav.phase3,
    },

    {
      id: "mision",
      name: t.nav.mission,
      icon: Flag,
      component: <Mission language={language} />,
    },

    {
      id: "futuro",
      name: t.nav.future,
      icon: Target,
      component: <Future language={language} />,
    },

    {
      id: "metas",
      name: t.nav.goals,
      icon: Target,
      component: <Goals language={language} />,
    },

    // =====================================================
    // FASE 4
    // =====================================================
    {
      type: "phase",
      id: "fase-4",
      name: t.nav.phase4,
    },

    {
      id: "plan",
      name: t.nav.plan,
      icon: CalendarDays,
      component: <Plan language={language} />,
    },

    {
      id: "habilidades",
      name: t.nav.skills,
      icon: Wrench,
      component: <Skills language={language} />,
    },

    {
      id: "red-apoyo",
      name: t.nav.support,
      icon: Users,
      component: <SupportNetwork language={language} />,
    },

    // =====================================================
    // FASE 5
    // =====================================================
    {
      type: "phase",
      id: "fase-5",
      name: t.nav.phase5,
    },

    {
      id: "obstaculos",
      name: t.nav.obstacles,
      icon: AlertTriangle,
      component: <Obstacles language={language} />,
    },

    {
      id: "contingencia",
      name: t.nav.contingency,
      icon: GitBranch,
      component: <Contingency language={language} />,
    },

    // =====================================================
    // FASE 6
    // =====================================================
    {
      type: "phase",
      id: "fase-6",
      name: t.nav.phase6,
    },

    {
      id: "dashboard",
      name: t.nav.dashboard,
      icon: BarChart3,
      component: <Dashboard language={language} />,
    },

    {
      id: "seguimiento",
      name: t.nav.tracking,
      icon: RefreshCw,
      component: <Tracking language={language} />,
    },

    // =====================================================
    // EXTRAS
    // =====================================================
    {
      type: "phase",
      id: "extras",
      name: t.nav.extras,
    },

    {
      id: "historia",
      name: t.nav.story,
      icon: BookOpen,
      component: <Historia language={language} />,
    },

    {
      id: "inspiracion",
      name: t.nav.inspiration,
      icon: Image,
      component: <Inspiration language={language} />,
    },

    {
      id: "playlist",
      name: t.nav.playlist,
      icon: Music,
      component: <Playlist language={language} />,
    },

    {
      id: "diario",
      name: t.nav.diary,
      icon: BookHeart,
      component: <FutureDiary language={language} />,
    },

    {
      id: "gamificacion",
      name: t.nav.gamification,
      icon: Trophy,
      component: <Gamification language={language} />,
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
        onMenuClick={() =>
          setSidebarOpen((prev) => !prev)
        }
        isMenuOpen={sidebarOpen}
        language={language}
        setLanguage={setLanguage}
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
              <span>{t.profile.project}</span>
            </div>
          </div>

          <div className="sidebar-divider"></div>

          {/* Navegación */}
          <nav className="dashboard-menu">
            <p className="menu-label">
              {t.nav.explore}
            </p>

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
                    <span className="menu-arrow">
                      →
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Información inferior */}
          <div className="sidebar-bottom">
            <span>{t.profile.age}</span>
            <span>{t.profile.city}</span>
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

