
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { integrateProfileAnalysis } from '../services/geminiService';

export const ProgressScreen: React.FC = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<any>({ hexaco: null, ie: null, via: null, history: null });
  const [analyzing, setAnalyzing] = useState(false);
  const [report, setReport] = useState<string | null>(null);

  useEffect(() => {
    const h = localStorage.getItem('psicoplan_hexaco');
    const i = localStorage.getItem('psicoplan_ie');
    const v = localStorage.getItem('psicoplan_via');
    const hist = localStorage.getItem('psicoplan_history');
    setResults({
      hexaco: h ? JSON.parse(h) : null,
      ie: i ? JSON.parse(i) : null,
      via: v ? JSON.parse(v) : null,
      history: hist ? JSON.parse(hist) : null
    });
  }, []);

  const allCompleted = results.hexaco && results.ie && results.via && results.history;

  const handleGeneratePath = async () => {
    setAnalyzing(true);
    try {
      const hexacoStr = JSON.stringify(results.hexaco);
      const ieStr = JSON.stringify(results.ie);
      const viaStr = JSON.stringify(results.via);
      
      let histStr = "";
      if (results.history) {
        histStr = `Raíces: ${results.history.roots}. Desafíos: ${results.history.challenges}. Presente: ${results.history.present}. Futuro: ${results.history.future}`;
      }
      
      const res = await integrateProfileAnalysis(hexacoStr, ieStr, viaStr, histStr);
      setReport(res || "No se pudo generar el reporte.");
    } catch (e) {
      console.error(e);
    } finally {
      setAnalyzing(false);
    }
  };

  const handlePrint = () => {
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="w-full max-w-5xl px-4 py-12 mx-auto">
      <header className="mb-12 text-center no-print">
        <div className="inline-flex px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-[10px] font-black uppercase mb-4 tracking-widest border border-blue-100 dark:border-blue-900/30">
          Panel de Seguimiento
        </div>
        <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-4">Estado de tu Evaluación</h1>
        <p className="text-slate-600 dark:text-slate-400">Progreso de las dimensiones evaluadas para el análisis integral.</p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 no-print">
        {[
          { key: 'hexaco', label: 'F1: HEXACO', icon: 'person', color: 'blue' },
          { key: 'ie', label: 'F2: IE', icon: 'psychology', color: 'emerald' },
          { key: 'via', label: 'F3: VIA', icon: 'bolt', color: 'amber' },
          { key: 'history', label: 'F4: Historia', icon: 'history_edu', color: 'indigo' }
        ].map((phase) => (
          <div 
            key={phase.key}
            className={`p-6 rounded-3xl border-2 transition-all duration-500 ${results[phase.key] ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-xl' : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 opacity-60'}`}
          >
            <div className="flex justify-between items-center mb-4">
              <div className={`size-10 rounded-xl flex items-center justify-center bg-${phase.color}-50 dark:bg-${phase.color}-900/20 text-${phase.color}-500`}>
                <span className="material-symbols-outlined">{phase.icon}</span>
              </div>
              {results[phase.key] && (
                <div className="size-6 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined text-[14px] font-bold">check</span>
                </div>
              )}
            </div>
            <h3 className="font-black text-sm uppercase tracking-tighter text-slate-700 dark:text-slate-300">{phase.label}</h3>
          </div>
        ))}
      </div>

      {!report ? (
        <div className="bg-white dark:bg-slate-900 p-12 rounded-[40px] border border-slate-200 dark:border-slate-800 shadow-2xl text-center relative overflow-hidden group no-print">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500"></div>
          <div className="size-24 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-12 transition-transform">
            <span className="material-symbols-outlined text-5xl">auto_fix_high</span>
          </div>
          <h2 className="text-3xl font-black mb-4">Generar Síntesis Biopsicosocial</h2>
          <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-lg mx-auto leading-relaxed">
            Nuestra IA Pro integrará tus rasgos de personalidad, fortalezas concretas y narrativa vital, sugiriendo hipótesis diferenciales clínicas si fuera necesario.
          </p>
          <button
            onClick={handleGeneratePath}
            disabled={!allCompleted || analyzing}
            className="flex items-center justify-center gap-4 bg-primary text-white px-14 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 hover:scale-105 active:scale-95 disabled:opacity-30 mx-auto transition-all"
          >
            {analyzing ? (
              <>
                <span className="animate-spin material-symbols-outlined">sync</span>
                Analizando Perfil...
              </>
            ) : (
              <>
                Generar Informe Integral
                <span className="material-symbols-outlined">arrow_forward</span>
              </>
            )}
          </button>
        </div>
      ) : (
        <div className="bg-white dark:bg-slate-900 p-10 md:p-16 rounded-[40px] border border-primary/20 shadow-2xl animate-in zoom-in-95 duration-700 relative print-content">
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl no-print">
            Informe Oficial PsicoPlan
          </div>
          <div className="flex items-center gap-4 mb-10">
            <div className="p-4 bg-primary/5 text-primary rounded-2xl">
              <span className="material-symbols-outlined text-3xl">clinical_notes</span>
            </div>
            <div>
              <h2 className="text-2xl font-black">Tu Síntesis Maestra</h2>
              <p className="text-xs text-slate-400 uppercase font-bold tracking-widest mt-1">Análisis de rasgos, fortalezas y narrativa</p>
            </div>
          </div>
          <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-200 whitespace-pre-wrap leading-[1.8] font-display text-lg italic border-l-4 border-primary/20 pl-8">
            {report}
          </div>
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 no-print">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold shadow-xl hover:scale-105 transition-all"
            >
              <span className="material-symbols-outlined">download</span>
              Descargar Informe PDF
            </button>
            <button 
              onClick={() => setReport(null)}
              className="text-slate-400 hover:text-primary font-bold text-sm transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-sm">refresh</span>
              Volver a generar o actualizar datos
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
