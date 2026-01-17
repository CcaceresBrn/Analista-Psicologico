
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PhaseHistoryScreen: React.FC = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState({
    roots: '',
    challenges: '',
    present: '',
    future: ''
  });

  useEffect(() => {
    const saved = localStorage.getItem('psicoplan_history');
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  const handleChange = (section: keyof typeof history, value: string) => {
    const newHistory = { ...history, [section]: value };
    setHistory(newHistory);
    localStorage.setItem('psicoplan_history', JSON.stringify(newHistory));
  };

  const wordCount = Object.values(history).join(' ').split(/\s+/).filter(w => w.length > 0).length;
  const isMinimallyComplete = wordCount > 50;

  const handleFinish = () => {
    navigate('/progress');
  };

  return (
    <div className="w-full max-w-4xl px-4 py-12 mx-auto">
      <header className="mb-12 text-center">
        <div className="inline-flex px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 text-[10px] font-black uppercase mb-4 tracking-widest border border-indigo-100 dark:border-indigo-900/30">
          Narrativa Personal - Fase 4
        </div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Tu Historia de Vida</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Las pruebas miden tendencias, pero tu historia les da significado. Tómate un momento para relatar los hitos que te han convertido en quien eres hoy.
        </p>
      </header>

      <div className="space-y-8 mb-20">
        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-sm focus-within:border-indigo-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-indigo-500">home_pin</span>
            <h3 className="text-xl font-bold">1. Raíces e Infancia</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4 italic">¿Cómo describirías tu entorno temprano? ¿Qué valores o figuras marcaron tus primeros años?</p>
          <textarea
            value={history.roots}
            onChange={(e) => handleChange('roots', e.target.value)}
            className="w-full h-40 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-6 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500/20 resize-none"
            placeholder="Escribe aquí..."
          />
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-sm focus-within:border-indigo-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-indigo-500">fitness_center</span>
            <h3 className="text-xl font-bold">2. Desafíos y Superación</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4 italic">¿Qué obstáculos importantes has enfrentado? ¿Cómo lograste salir adelante y qué aprendiste de ello?</p>
          <textarea
            value={history.challenges}
            onChange={(e) => handleChange('challenges', e.target.value)}
            className="w-full h-40 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-6 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500/20 resize-none"
            placeholder="Escribe aquí..."
          />
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-sm focus-within:border-indigo-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-indigo-500">self_improvement</span>
            <h3 className="text-xl font-bold">3. Presente y Propósito</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4 italic">¿Cómo te definirías en este momento? ¿Qué es lo que más valoras hoy en tu vida?</p>
          <textarea
            value={history.present}
            onChange={(e) => handleChange('present', e.target.value)}
            className="w-full h-40 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-6 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500/20 resize-none"
            placeholder="Escribe aquí..."
          />
        </div>

        <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border-2 border-slate-100 dark:border-slate-800 shadow-sm focus-within:border-indigo-500/30 transition-all">
          <div className="flex items-center gap-3 mb-4">
            <span className="material-symbols-outlined text-indigo-500">auto_awesome</span>
            <h3 className="text-xl font-bold">4. Visiones de Futuro</h3>
          </div>
          <p className="text-sm text-slate-500 mb-4 italic">Si pudieras proyectarte a 5 años, ¿dónde te gustaría estar emocional y personalmente?</p>
          <textarea
            value={history.future}
            onChange={(e) => handleChange('future', e.target.value)}
            className="w-full h-40 bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-6 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-indigo-500/20 resize-none"
            placeholder="Escribe aquí..."
          />
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 pb-32">
        <div className="flex items-center gap-4 bg-slate-100 dark:bg-slate-800 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700">
          <span className="material-symbols-outlined text-indigo-500">edit_note</span>
          <span className="text-sm font-bold text-slate-600 dark:text-slate-300">
            {wordCount} palabras redactadas 
            {wordCount < 50 && <span className="text-xs font-normal text-slate-400 ml-2">(Sugerimos al menos 50 para un buen análisis)</span>}
          </span>
        </div>
        
        <button
          onClick={handleFinish}
          disabled={!isMinimallyComplete}
          className="group flex items-center gap-4 bg-indigo-600 text-white px-16 py-6 rounded-full font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-20"
        >
          Ir al Panel de Progreso Final
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">analytics</span>
        </button>
      </div>
    </div>
  );
};
