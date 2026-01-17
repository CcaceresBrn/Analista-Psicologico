
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { VIA_STRENGTHS } from '../constants';

export const Phase3Screen: React.FC = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('psicoplan_via_raw');
    if (saved) setAnswers(JSON.parse(saved));
  }, []);

  const handleScoreChange = (strengthId: number, score: number) => {
    const newAnswers = { ...answers, [strengthId]: score };
    setAnswers(newAnswers);
    localStorage.setItem('psicoplan_via_raw', JSON.stringify(newAnswers));
  };

  const completedCount = Object.keys(answers).length;
  const progress = (completedCount / VIA_STRENGTHS.length) * 100;

  const handleFinish = () => {
    localStorage.setItem('psicoplan_via', JSON.stringify(answers));
    navigate('/phase-history');
  };

  const scaleLabels = [
    { value: 1, label: "Totalmente en desacuerdo" },
    { value: 2, label: "Bastante en desacuerdo" },
    { value: 3, label: "Ligeramente en desacuerdo" },
    { value: 4, label: "Neutral" },
    { value: 5, label: "Ligeramente de acuerdo" },
    { value: 6, label: "Bastante de acuerdo" },
    { value: 7, label: "Totalmente de acuerdo" }
  ];

  if (showInstructions) {
    return (
      <div className="w-full max-w-4xl px-4 py-12 mx-auto animate-in fade-in duration-500">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border-4 border-double border-amber-500 p-8 md:p-12 shadow-2xl">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 tracking-tighter uppercase">VIA Institute on Character</h1>
            <h2 className="text-xl font-bold text-amber-600 mb-6">Evaluación Global de Fortalezas de Carácter</h2>
            <div className="h-px w-32 bg-amber-500 mx-auto mb-6"></div>
            <p className="text-xs font-medium italic">© Copyright 2017, VIA Institute on Character</p>
          </header>

          <section className="mb-10 space-y-6">
            <h3 className="text-2xl font-black text-center uppercase tracking-widest border-b-2 border-slate-100 dark:border-slate-800 pb-2">Instrucciones</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              Este cuestionario te pide que describas aspectos de tu personalidad. Evalúa cada una de las 24 fortalezas que se te presentarán a continuación. Sé lo más honesto que puedas al decidir en qué medida cada una de estas fortalezas es una parte esencial de quién verdaderamente eres.
            </p>
            
            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-800 space-y-3">
              <p className="font-bold text-amber-700 dark:text-amber-400 mb-2">Escala de respuesta (1 al 7):</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 text-xs">
                {scaleLabels.map(s => (
                  <p key={s.value}><strong>{s.value}</strong> = {s.label}</p>
                ))}
              </div>
            </div>
          </section>

          <button
            onClick={() => setShowInstructions(false)}
            className="w-full bg-amber-500 text-white py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-amber-500/20"
          >
            Comenzar Evaluación VIA
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl px-4 py-12 mx-auto">
      <header className="mb-8 text-center">
        <div className="inline-flex px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-900/30 text-amber-600 text-[10px] font-black uppercase mb-4 tracking-widest border border-amber-100 dark:border-amber-900/30">
          Psicología Positiva - Fase 3
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Evaluación de las 24 Fortalezas</h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm italic">Basado en el Inventario Global VIA Character</p>
      </header>

      <div className="sticky top-[72px] z-40 mb-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex justify-between items-end mb-3">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Fortalezas Evaluadas</span>
            <span className="text-lg font-black text-slate-900 dark:text-white">
              {completedCount} <span className="text-slate-300 font-normal">/ {VIA_STRENGTHS.length}</span>
            </span>
          </div>
          <span className="text-2xl font-black text-amber-500">{Math.round(progress)}%</span>
        </div>
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
          <div 
            className="h-full bg-gradient-to-r from-amber-500 to-orange-400 transition-all duration-700 ease-out shadow-inner" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-8 mb-20">
        {VIA_STRENGTHS.map((s) => (
          <div 
            key={s.id} 
            className={`p-8 rounded-3xl border-2 transition-all duration-500 overflow-hidden relative group ${
              answers[s.id] 
                ? 'bg-amber-50/10 dark:bg-amber-900/5 border-amber-500/40 shadow-md' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-8">
              <div className="flex-shrink-0 size-14 rounded-2xl bg-amber-50 dark:bg-amber-900/20 text-amber-500 flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">{s.icon}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white leading-tight">
                    {s.title}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase font-black">
                    {s.virtue}
                  </span>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed italic">
                  "{s.desc}"
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center px-1">
                <p className="text-xs font-black uppercase text-slate-400 tracking-tighter">
                  ¿En qué medida te describe esta fortaleza?
                </p>
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {scaleLabels.map((scale) => (
                  <button
                    key={scale.value}
                    onClick={() => handleScoreChange(s.id, scale.value)}
                    className={`group relative h-16 rounded-xl font-black transition-all duration-300 border-2 flex flex-col items-center justify-center ${
                      answers[s.id] === scale.value
                        ? 'bg-amber-500 border-amber-500 text-white scale-110 shadow-[0_0_20px_rgba(245,158,11,0.3)] ring-4 ring-amber-500/20 z-10'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-amber-500/40 text-slate-400'
                    }`}
                  >
                    {answers[s.id] === scale.value && (
                      <span className="absolute -top-2 -right-2 size-5 bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 scale-110 animate-in zoom-in-50 duration-300">
                        <span className="material-symbols-outlined text-[12px] font-black">check</span>
                      </span>
                    )}
                    <span className="text-2xl">{scale.value}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 pb-32">
        {completedCount < VIA_STRENGTHS.length && (
          <p className="text-amber-600 font-bold animate-pulse text-sm">
            * Por favor, evalúa las {VIA_STRENGTHS.length - completedCount} fortalezas restantes para continuar.
          </p>
        )}
        <button
          onClick={handleFinish}
          disabled={completedCount < VIA_STRENGTHS.length}
          className="group flex items-center gap-4 bg-amber-500 text-white px-20 py-6 rounded-full font-black text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-20 transform"
        >
          Continuar a Fase 4 (Historia)
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-3 text-3xl">history_edu</span>
        </button>
      </div>
    </div>
  );
};
