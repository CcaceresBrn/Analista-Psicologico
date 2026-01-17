
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ChatWidget } from './ChatWidget';
import { useAuth } from '../context/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

const NavLink: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors ${
        isActive
          ? 'text-primary font-bold'
          : 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary'
      }`}
    >
      {label}
    </Link>
  );
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark">
      {/* TopNavBar */}
      <header className="sticky top-0 z-50 w-full border-b border-[#e7ecf3] dark:border-slate-800 bg-white/80 dark:bg-[#101822]/90 backdrop-blur-sm no-print">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center">
          <div className="flex w-full max-w-[1280px] items-center justify-between py-3">
            <div
              className="flex items-center gap-4 text-primary dark:text-blue-400 cursor-pointer"
              onClick={() => navigate('/')}
            >
              <div className="size-8 flex items-center justify-center bg-primary rounded-lg text-white">
                <span className="material-symbols-outlined text-[20px]">psychology</span>
              </div>
              <h2 className="text-[#0d131b] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
                PsicoPlan
              </h2>
            </div>

            {isAuthenticated && (
              <div className="hidden md:flex items-center gap-8">
                <nav className="flex items-center gap-6">
                  <NavLink to="/" label="Inicio" />
                  <NavLink to="/phase1" label="F1: HEXACO" />
                  <NavLink to="/phase2" label="F2: IE" />
                  <NavLink to="/phase3" label="F3: VIA" />
                  <NavLink to="/phase-history" label="F4: Historia" />
                  <NavLink to="/progress" label="Progreso" />
                </nav>
                <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-6">
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Usuario</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{user?.name}</span>
                  </div>
                  <button 
                    onClick={handleLogout}
                    className="flex size-9 items-center justify-center overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-red-50 hover:text-red-500 transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm font-bold">logout</span>
                  </button>
                </div>
              </div>
            )}
            
            <button className="md:hidden text-[#0d131b] dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center w-full">
        {children}
      </main>

      {isAuthenticated && <ChatWidget />}

      {/* Footer */}
      <footer className="w-full border-t border-[#e7ecf3] dark:border-slate-800 bg-white dark:bg-[#101822] no-print">
        <div className="px-4 md:px-10 lg:px-40 flex justify-center py-10">
          <div className="flex w-full max-w-[960px] flex-col items-center gap-6 text-center">
            <div className="flex items-center gap-2 text-slate-400 dark:text-slate-500 mb-2">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <Link className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" to="/professional-guide">Recursos para Profesionales</Link>
              <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Privacidad</a>
              <a className="text-slate-500 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Términos</a>
            </div>
            <p className="text-slate-400 dark:text-slate-600 text-sm">© 2024 PsicoPlan. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
