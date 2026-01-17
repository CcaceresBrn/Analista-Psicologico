
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TMMS24_QUESTIONS } from '../constants';

export const Phase2Screen: React.FC = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [sex, setSex] = useState<string>('');

  useEffect(() => {
    const savedAnswers = localStorage.getItem('psicoplan_ie_raw');
    const savedUser = localStorage.getItem('psicoplan_user_meta');
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedUser) {
      const user = JSON.parse(savedUser);
      setSex(user.sex);
    }
  }, []);

  const handleScoreChange = (id: number, score: number) => {
    const newAnswers = { ...answers, [id]: score };
    setAnswers(newAnswers);
    localStorage.setItem('psicoplan_ie_raw', JSON.stringify(newAnswers));
  };

  const completedCount = Object.keys(answers).length;
  const progress = (completedCount / TMMS24_QUESTIONS.length) * 100;

  const handleFinish = () => {
    const results = {
      Atención: 0,
      Claridad: 0,
      Reparación: 0
    };

    TMMS24_QUESTIONS.forEach(q => {
      results[q.dimension] += (answers[q.id] || 0);
    });

    localStorage.setItem('psicoplan_ie', JSON.stringify(results));
    navigate('/phase3');
  };

  return (
    <div className="w-full max-w-4xl px-4 py-12 mx-auto">
      <header className="mb-8 text-center">
        <div className="inline-flex px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 text-[10px] font-black uppercase mb-4 tracking-widest border border-emerald-100 dark:border-emerald-900/30">
          Metasentimiento Emocional
        </div>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Evaluación TMMS-24</h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm">
          A continuación encontrará algunas afirmaciones sobre sus emociones y sentimientos. Indique el grado de acuerdo o desacuerdo con cada una de ellas.
        </p>
      </header>

      {/* Sticky Progress bar */}
      <div className="sticky top-[72px] z-40 mb-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex justify-between items-end mb-3">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Estado del Test IE</span>
            <span className="text-lg font-black text-slate-900 dark:text-white">
              {completedCount} <span className="text-slate-300 font-normal">/ {TMMS24_QUESTIONS.length}</span>
            </span>
          </div>
          <span className="text-2xl font-black text-emerald-600">{Math.round(progress)}%</span>
        </div>
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
          <div 
            className="h-full bg-gradient-to-r from-emerald-600 to-teal-400 transition-all duration-700 ease-out shadow-inner" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6 mb-20">
        {TMMS24_QUESTIONS.map((q) => (
          <div 
            key={q.id} 
            className={`p-8 rounded-3xl border-2 transition-all duration-500 ${
              answers[q.id] 
                ? 'bg-emerald-50/10 dark:bg-emerald-900/5 border-emerald-500/40 shadow-md' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            <div className="flex gap-4 items-start mb-8">
              <span className="flex-shrink-0 size-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-black text-xs">
                {q.id}
              </span>
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest mb-1 block">
                  {q.dimension}
                </span>
                <p className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">
                  {q.statement}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleScoreChange(q.id, num)}
                    className={`group relative h-14 rounded-xl font-black transition-all duration-300 border-2 flex flex-col items-center justify-center ${
                      answers[q.id] === num
                        ? 'bg-emerald-600 border-emerald-600 text-white scale-110 shadow-[0_0_20px_rgba(5,150,105,0.3)] ring-4 ring-emerald-500/20 z-10'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-emerald-600/40 text-slate-400'
                    }`}
                  >
                    {answers[q.id] === num && (
                      <span className="absolute -top-2 -right-2 size-5 bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 scale-110 animate-in zoom-in-50 duration-300">
                        <span className="material-symbols-outlined text-[12px] font-black">check</span>
                      </span>
                    )}
                    <span className="text-xl">{num}</span>
                    <span className="text-[7px] uppercase mt-1 opacity-60 hidden sm:block">
                      {num === 1 && "Nada de acuerdo"}
                      {num === 2 && "Algo"}
                      {num === 3 && "Bastante"}
                      {num === 4 && "Muy"}
                      {num === 5 && "Totalmente"}
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between px-1 text-[9px] font-black uppercase text-slate-400">
                <span>Nada de acuerdo</span>
                <span>Totalmente de acuerdo</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 pb-32">
        {completedCount < TMMS24_QUESTIONS.length && (
          <p className="text-amber-600 font-bold animate-pulse text-xs">
            * Complete los {TMMS24_QUESTIONS.length - completedCount} reactivos pendientes.
          </p>
        )}
        <button
          onClick={handleFinish}
          disabled={completedCount < TMMS24_QUESTIONS.length}
          className="group flex items-center gap-4 bg-emerald-600 text-white px-16 py-6 rounded-full font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-20 transform"
        >
          Continuar a Fase 3 (VIA)
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
