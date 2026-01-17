
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { HEXACO_TRAITS } from '../constants';

export const Phase1Screen: React.FC = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [userData, setUserData] = useState({ sex: '', age: '' });
  const [showInstructions, setShowInstructions] = useState(true);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('psicoplan_hexaco_raw');
    const savedUser = localStorage.getItem('psicoplan_user_meta');
    if (savedAnswers) setAnswers(JSON.parse(savedAnswers));
    if (savedUser) setUserData(JSON.parse(savedUser));
  }, []);

  const handleScoreChange = (itemId: number, score: number) => {
    const newAnswers = { ...answers, [itemId]: score };
    setAnswers(newAnswers);
    localStorage.setItem('psicoplan_hexaco_raw', JSON.stringify(newAnswers));
  };

  const handleUserMeta = (field: string, value: string) => {
    const newData = { ...userData, [field]: value };
    setUserData(newData);
    localStorage.setItem('psicoplan_user_meta', JSON.stringify(newData));
  };

  const allItems = HEXACO_TRAITS.flatMap(t => t.items).sort((a, b) => a.id - b.id);
  const completedCount = Object.keys(answers).length;
  const progress = (completedCount / allItems.length) * 100;

  const handleFinish = () => {
    // Calcular promedios simplificados para visualización posterior
    const traitScores: Record<string, number> = {};
    HEXACO_TRAITS.forEach(trait => {
      const traitItems = trait.items;
      const sum = traitItems.reduce((acc, item) => acc + (answers[item.id] || 0), 0);
      traitScores[trait.title] = sum / traitItems.length;
    });
    localStorage.setItem('psicoplan_hexaco', JSON.stringify(traitScores));
    navigate('/phase2');
  };

  if (showInstructions) {
    return (
      <div className="w-full max-w-4xl px-4 py-12 mx-auto animate-in fade-in duration-500">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border-4 border-double border-slate-900 dark:border-slate-100 p-8 md:p-12 shadow-2xl">
          <header className="text-center mb-10">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tighter">HEXACO-PI-R</h1>
            <h2 className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-6">(AUTOINFORME)</h2>
            <div className="h-px w-32 bg-slate-900 dark:bg-slate-100 mx-auto mb-6"></div>
            <p className="text-sm font-medium italic">© Kibeom Lee & Michael C. Ashton</p>
          </header>

          <section className="mb-10 space-y-6">
            <h3 className="text-2xl font-black text-center uppercase tracking-widest border-b-2 border-slate-100 dark:border-slate-800 pb-2">Instrucciones</h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              En las siguientes páginas encontrarás una serie de afirmaciones sobre ti. Por favor, lee cada una de estas afirmaciones y decide en qué medida estás de acuerdo o no con ellas. Responde cada afirmación incluso si no estás completamente seguro de tu respuesta.
            </p>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-2">
              <p className="font-bold mb-2">Escala de respuesta:</p>
              <div className="grid grid-cols-1 gap-1 text-sm">
                <p><strong>5</strong> = Totalmente de acuerdo</p>
                <p><strong>4</strong> = De acuerdo</p>
                <p><strong>3</strong> = Neutral (ni de acuerdo ni en desacuerdo)</p>
                <p><strong>2</strong> = En desacuerdo</p>
                <p><strong>1</strong> = Muy en desacuerdo</p>
              </div>
            </div>
          </section>

          <section className="mb-10 p-8 border-2 border-slate-200 dark:border-slate-800 rounded-2xl bg-white dark:bg-slate-950">
            <h3 className="text-lg font-bold mb-6">Información sobre ti:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="font-black text-xs uppercase tracking-widest text-slate-400">Sexo:</p>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="sex" 
                      className="size-5 text-primary border-slate-300 focus:ring-primary"
                      checked={userData.sex === 'Mujer'}
                      onChange={() => handleUserMeta('sex', 'Mujer')}
                    />
                    <span className="font-bold group-hover:text-primary transition-colors">Mujer</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="sex" 
                      className="size-5 text-primary border-slate-300 focus:ring-primary"
                      checked={userData.sex === 'Hombre'}
                      onChange={() => handleUserMeta('sex', 'Hombre')}
                    />
                    <span className="font-bold group-hover:text-primary transition-colors">Hombre</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <p className="font-black text-xs uppercase tracking-widest text-slate-400">Edad:</p>
                <div className="flex items-center gap-3">
                  <input 
                    type="number" 
                    placeholder="--"
                    className="w-20 bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl p-2 font-bold focus:ring-primary focus:border-primary"
                    value={userData.age}
                    onChange={(e) => handleUserMeta('age', e.target.value)}
                  />
                  <span className="font-bold">años</span>
                </div>
              </div>
            </div>
          </section>

          <button
            onClick={() => setShowInstructions(false)}
            disabled={!userData.sex || !userData.age}
            className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-5 rounded-2xl font-black text-xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-30 disabled:grayscale"
          >
            Comenzar Evaluación
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl px-4 py-12 mx-auto">
      <header className="mb-8 text-center">
        <p className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-2">PsicoPlan - Fase 1</p>
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Autoinforme HEXACO-PI-R</h1>
      </header>

      {/* Sticky Progress bar */}
      <div className="sticky top-[72px] z-40 mb-12 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 rounded-2xl border-2 border-slate-200 dark:border-slate-800 shadow-xl">
        <div className="flex justify-between items-end mb-3">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Estado del Test</span>
            <span className="text-lg font-black text-slate-900 dark:text-white">
              {completedCount} <span className="text-slate-300 font-normal">/ {allItems.length}</span>
            </span>
          </div>
          <span className="text-2xl font-black text-primary">{Math.round(progress)}%</span>
        </div>
        <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-primary transition-all duration-700 ease-out shadow-inner" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="space-y-6 mb-20" ref={scrollRef}>
        {allItems.map((item) => (
          <div 
            key={item.id} 
            className={`p-8 rounded-3xl border-2 transition-all duration-500 ${
              answers[item.id] 
                ? 'bg-emerald-50/10 dark:bg-emerald-900/5 border-emerald-500/40 shadow-md' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
            }`}
          >
            <div className="flex gap-6 items-start mb-8">
              <span className="flex-shrink-0 size-10 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-black text-sm">
                {item.id}
              </span>
              <p className="text-xl font-bold text-slate-800 dark:text-slate-100 leading-tight">
                {item.statement}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-5 gap-2 sm:gap-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleScoreChange(item.id, num)}
                    className={`group relative h-16 rounded-2xl font-black transition-all duration-300 border-2 flex flex-col items-center justify-center ${
                      answers[item.id] === num
                        ? 'bg-primary border-primary text-white scale-110 shadow-[0_0_20px_rgba(19,109,236,0.3)] ring-4 ring-primary/20 z-10'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700 hover:border-primary/40 text-slate-400'
                    }`}
                  >
                    {answers[item.id] === num && (
                      <span className="absolute -top-2 -right-2 size-6 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900 scale-110 animate-in zoom-in-50 duration-300">
                        <span className="material-symbols-outlined text-[14px] font-black">check</span>
                      </span>
                    )}
                    <span className="text-2xl">{num}</span>
                    <span className="hidden sm:block text-[8px] uppercase mt-1 opacity-60">
                      {num === 1 && "Muy desac."}
                      {num === 2 && "Desacuerdo"}
                      {num === 3 && "Neutral"}
                      {num === 4 && "Acuerdo"}
                      {num === 5 && "Totalmente"}
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between px-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                <span>Muy en desacuerdo</span>
                <span>Totalmente de acuerdo</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 pb-32">
        {completedCount < allItems.length && (
          <p className="text-amber-600 font-bold animate-pulse text-sm">
            * Por favor, responde las {allItems.length - completedCount} preguntas restantes para finalizar.
          </p>
        )}
        <button
          onClick={handleFinish}
          disabled={completedCount < allItems.length}
          className="group flex items-center gap-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-16 py-6 rounded-full font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-20 disabled:grayscale"
        >
          Finalizar y Guardar Resultados
          <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
