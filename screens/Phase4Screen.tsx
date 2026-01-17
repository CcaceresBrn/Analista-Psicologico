
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { integrateProfileAnalysis } from '../services/geminiService';

export const Phase4Screen: React.FC = () => {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [rawStats, setRawStats] = useState<{via: any, hexaco: any} | null>(null);

  useEffect(() => {
    const v = localStorage.getItem('psicoplan_via');
    const h = localStorage.getItem('psicoplan_hexaco');
    if (v || h) {
      setRawStats({
        via: v ? JSON.parse(v) : null,
        hexaco: h ? JSON.parse(h) : null
      });
    }
  }, []);

  const handleGenerateIntegralProfile = async () => {
    setLoading(true);
    
    const hexaco = localStorage.getItem('psicoplan_hexaco') || "No completado";
    const ie = localStorage.getItem('psicoplan_ie') || "No completado";
    const via = localStorage.getItem('psicoplan_via') || "No completado";
    const historyData = localStorage.getItem('psicoplan_history');
    
    let historyStr = "";
    if (historyData) {
      const h = JSON.parse(historyData);
      historyStr = `Infancia: ${h.roots}. Desafíos superados: ${h.challenges}. Situación actual: ${h.present}. Metas futuras: ${h.future}`;
    }

    const result = await integrateProfileAnalysis(hexaco, ie, via, historyStr);
    setAnalysis(result);
    setLoading(false);
  };

  const handlePrint = () => {
    // Pequeño retraso para asegurar que los estilos estén listos
    setTimeout(() => {
      window.print();
    }, 100);
  };

  return (
    <div className="w-full flex flex-col items-center py-8 px-4 sm:px-10 lg:px-40 grow bg-slate-50 dark:bg-slate-950">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full gap-8">
        
        {/* Header Seccion */}
        <div className="flex flex-col gap-2 no-print">
          <div className="flex items-center gap-2 text-primary font-black uppercase text-[10px] tracking-[0.2em]">
            <span className="material-symbols-outlined text-sm">verified</span>
            Finalización del Proceso
          </div>
          <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Síntesis Biopsicosocial</h1>
          <p className="text-slate-500 dark:text-slate-400">Integración de métricas psicométricas y narrativa existencial.</p>
        </div>

        {!analysis && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-10 border-2 border-slate-100 dark:border-slate-800 shadow-xl flex flex-col md:flex-row gap-10 items-center animate-in fade-in duration-700 no-print">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">¿Preparado para tu Perfil Maestro?</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Nuestra IA procesará tus puntuaciones en <strong>Honestidad-Humildad, Emocionalidad, Extraversión, Amabilidad, Responsabilidad y Apertura</strong>, junto a tus <strong>24 fortalezas VIA</strong> y tu <strong>historia personal</strong>.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  Análisis de Facetas HEXACO incluido.
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  Mapeo de Fortalezas VIA concretas.
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
                  <span className="material-symbols-outlined text-emerald-500">check_circle</span>
                  Sugerencias de Hipótesis Diferencial.
                </div>
              </div>
              <button
                onClick={handleGenerateIntegralProfile}
                disabled={loading}
                className="w-full md:w-auto flex h-14 items-center justify-center rounded-2xl bg-primary px-10 text-white font-black text-lg shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center gap-3">
                    <span className="animate-spin material-symbols-outlined">sync</span>
                    Sintetizando Perfil...
                  </span>
                ) : 'Generar Informe Clínico Integral'}
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="size-64 rounded-full bg-primary/5 flex items-center justify-center relative">
                <div className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
                <span className="material-symbols-outlined text-[120px] text-primary/20">clinical_notes</span>
              </div>
            </div>
          </div>
        )}

        {analysis && (
          <div className="flex flex-col gap-8 animate-in zoom-in-95 duration-500">
            {/* Informe Master Estilo Documento */}
            <div className="bg-white dark:bg-slate-900 shadow-2xl rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 print-content">
              {/* Membrete */}
              <div className="bg-slate-900 p-8 text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="size-10 bg-primary rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">psychology</span>
                  </div>
                  <div>
                    <h3 className="font-black text-lg leading-none">PsicoPlan Pro</h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Análisis de Perfil Integrado</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-slate-400">ID DE EVALUACIÓN: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                  <p className="text-[10px] text-slate-500">{new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              </div>

              <div className="p-8 md:p-14">
                {/* Métricas Rápidas */}
                <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Dimensiones</span>
                    <span className="text-sm font-bold">HEXACO-PI-R</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Fortalezas</span>
                    <span className="text-sm font-bold">24 VIA Identificadas</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Estado IE</span>
                    <span className="text-sm font-bold text-emerald-500">Evaluado</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Nivel de Análisis</span>
                    <span className="text-sm font-bold text-primary">Biopsicosocial</span>
                  </div>
                </div>

                {/* Cuerpo del Informe */}
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  <div className="text-slate-700 dark:text-slate-200 text-lg leading-[1.8] whitespace-pre-wrap font-display">
                    {analysis}
                  </div>
                </div>

                {/* Pie de Firma/Cierre */}
                <div className="mt-16 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-start gap-8">
                  <div className="max-w-xs">
                    <p className="text-[10px] text-slate-400 italic">
                      Este informe ha sido generado mediante algoritmos de inteligencia artificial avanzada (Gemini 3 Pro) basados en los modelos HEXACO y VIA. Se recomienda su revisión por un profesional colegiado.
                    </p>
                  </div>
                  <button 
                    onClick={handlePrint}
                    className="no-print flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-sm font-bold transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm">print</span>
                    Descargar Informe PDF
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate('/')}
              className="no-print text-slate-500 dark:text-slate-400 font-bold hover:text-primary transition-colors flex items-center gap-2 mx-auto mb-20"
            >
              <span className="material-symbols-outlined">restart_alt</span>
              Finalizar Sesión y Salir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
