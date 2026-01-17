
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Tab = 'selection' | 'script';

export const ProfessionalGuideScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('selection');

  return (
    <div className="w-full max-w-[1100px] mx-auto px-4 md:px-10 py-10 flex flex-col gap-8">
      <header className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-primary">
          <Link to="/" className="hover:underline flex items-center gap-1 text-sm font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Volver al Inicio
          </Link>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Recursos para Profesionales
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-3xl">
          Centro de comando para psicólogos y consultores. Herramientas técnicas y guías de consulta para la evaluación integral.
        </p>
      </header>

      {/* Tabs Navigation */}
      <div className="flex border-b border-slate-200 dark:border-slate-800">
        <button
          onClick={() => setActiveTab('selection')}
          className={`px-6 py-4 text-sm font-bold transition-all border-b-2 ${
            activeTab === 'selection'
              ? 'border-primary text-primary'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          Selección de Instrumentos
        </button>
        <button
          onClick={() => setActiveTab('script')}
          className={`px-6 py-4 text-sm font-bold transition-all border-b-2 ${
            activeTab === 'script'
              ? 'border-primary text-primary'
              : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          Guía de Consulta (Script)
        </button>
      </div>

      {/* Tab Content: Instrument Selection */}
      {activeTab === 'selection' && (
        <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-left-4 duration-300">
          <section className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-8 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">table_chart</span>
                Comparativa de Instrumentos Psicométricos
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold border-r border-slate-100 dark:border-slate-800">Criterio</th>
                    <th className="px-6 py-4 text-left font-bold border-r border-slate-100 dark:border-slate-800 text-primary">Habilidad (MSCEIT)</th>
                    <th className="px-6 py-4 text-left font-bold border-r border-slate-100 dark:border-slate-800 text-emerald-600">Autoinformes IE</th>
                    <th className="px-6 py-4 text-left font-bold text-amber-600">Personalidad/VIA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr>
                    <td className="px-6 py-4 font-bold bg-slate-50/50 dark:bg-slate-800/20 border-r border-slate-100 dark:border-slate-800">Objetivo</td>
                    <td className="px-6 py-4 border-r border-slate-100 dark:border-slate-800">Medir capacidad cognitiva real.</td>
                    <td className="px-6 py-4 border-r border-slate-100 dark:border-slate-800">Evaluar autopercepción.</td>
                    <td className="px-6 py-4">Medir rasgos estables.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold bg-slate-50/50 dark:bg-slate-800/20 border-r border-slate-100 dark:border-slate-800">Tiempo</td>
                    <td className="px-6 py-4 border-r border-slate-100 dark:border-slate-800">30-45 min (Complejo).</td>
                    <td className="px-6 py-4 border-r border-slate-100 dark:border-slate-800">5-15 min (Rápido).</td>
                    <td className="px-6 py-4">Sencillo.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-bold bg-slate-50/50 dark:bg-slate-800/20 border-r border-slate-100 dark:border-slate-800">Validez</td>
                    <td className="px-6 py-4 border-r border-slate-100 dark:border-slate-800">Sólida (Discriminante).</td>
                    <td className="px-6 py-4 border-r border-slate-100 dark:border-slate-800">Moderada (Deseabilidad).</td>
                    <td className="px-6 py-4">Basada en léxico/Positiva.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30">
              <h3 className="text-xl font-black text-indigo-700 dark:text-indigo-400 mb-4">Contexto Organizacional</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Utilice <strong>HEXACO</strong> para roles donde la integridad sea crítica (finanzas, liderazgo) y <strong>ECI 360°</strong> para desarrollo de competencias directivas.
              </p>
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined">gavel</span>
                Ética y Rendimiento
              </div>
            </div>
            <div className="p-8 rounded-3xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-900/30">
              <h3 className="text-xl font-black text-amber-700 dark:text-amber-400 mb-4">Clínica y Coaching</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                El <strong>VIA Survey</strong> es el estándar para potenciar bienestar. Use <strong>MSCEIT</strong> cuando necesite objetividad sobre el rendimiento emocional.
              </p>
              <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                <span className="material-symbols-outlined">spa</span>
                Bienestar y Crecimiento
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Consultation Script */}
      {activeTab === 'script' && (
        <div className="flex flex-col gap-10 animate-in fade-in slide-in-from-right-4 duration-300">
          <article className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8 border-b pb-6">Guía Profesional de Autoconocimiento</h2>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <section className="relative pl-12">
                <div className="absolute left-0 top-0 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">1</div>
                <h3 className="text-xl font-bold mb-4">Introducción y Propósito</h3>
                <div className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl italic text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                  "Le doy la más cordial bienvenida. El propósito de esta guía es iniciar una exploración colaborativa... Para comenzar, ¿cuál es su principal motivación para embarcarse en este proceso hoy?"
                </div>
              </section>

              {/* Step 2 */}
              <section className="relative pl-12">
                <div className="absolute left-0 top-0 size-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold">2</div>
                <h3 className="text-xl font-bold mb-4">Fortalezas de Carácter (VIA)</h3>
                <p className="text-sm text-slate-500 mb-6">Enfoque: "Lo que está fuerte, no lo que está mal".</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium">
                  <div className="p-4 border rounded-xl border-slate-100 dark:border-slate-800"><strong>Sabiduría:</strong> Creatividad, Curiosidad, Juicio.</div>
                  <div className="p-4 border rounded-xl border-slate-100 dark:border-slate-800"><strong>Coraje:</strong> Valentía, Perseverancia, Vitalidad.</div>
                </div>
                <div className="mt-4 p-6 bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl italic text-emerald-800 dark:text-emerald-300 text-sm">
                  "¿De qué manera la curiosidad o el amor por el aprendizaje han guiado sus decisiones profesionales?"
                </div>
              </section>

              {/* Step 3 */}
              <section className="relative pl-12">
                <div className="absolute left-0 top-0 size-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">3</div>
                <h3 className="text-xl font-bold mb-4">Estilo de Personalidad (HEXACO)</h3>
                <p className="text-sm text-slate-500 mb-4">Mapeo de tendencias naturales y carácter moral.</p>
                <div className="space-y-3">
                  <p className="text-xs"><strong>Honestidad-Humildad:</strong> Sinceridad y aversión a la codicia.</p>
                  <p className="text-xs"><strong>Extraversión:</strong> Sociabilidad y vivacidad.</p>
                  <div className="p-6 bg-amber-50 dark:bg-amber-900/10 rounded-2xl italic text-amber-800 dark:text-amber-300 text-sm">
                    "¿Qué importancia le da a la modestia frente al estatus?"
                  </div>
                </div>
              </section>

              {/* Step 4 */}
              <section className="relative pl-12">
                <div className="absolute left-0 top-0 size-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">4</div>
                <h3 className="text-xl font-bold mb-4">Panorama Emocional (Habilidad IE)</h3>
                <p className="text-sm text-slate-500 mb-4">Basado en Mayer y Salovey (Percepción, Facilitación, Comprensión, Gestión).</p>
                <div className="p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl italic text-blue-800 dark:text-blue-300 text-sm">
                  "¿Con qué facilidad reconoce sus propias emociones a medida que surgen? ¿Cómo utiliza su estado de ánimo para mejorar su pensamiento?"
                </div>
              </section>

              {/* Step 5 */}
              <section className="relative pl-12 border-t border-slate-100 dark:border-slate-800 pt-8">
                <div className="absolute left-0 top-8 size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">5</div>
                <h3 className="text-xl font-bold mb-4">Síntesis e Integración Final</h3>
                <div className="p-6 bg-indigo-50 dark:bg-indigo-900/10 rounded-2xl space-y-4">
                  <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300">Preguntas de Integración:</p>
                  <ul className="text-sm list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                    <li>¿Cómo su "Perseverancia" influye en su "Conciencia"?</li>
                    <li>¿Cómo utiliza la "Gestión Emocional" ante una baja "Amabilidad"?</li>
                  </ul>
                  <div className="pt-4 italic text-slate-500 dark:text-slate-500 text-xs">
                    "El autoconocimiento no es un destino, sino un viaje continuo..."
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      )}

      <footer className="text-center py-10 border-t border-slate-100 dark:border-slate-800 opacity-60">
        <p className="text-xs font-medium italic">
          PsicoPlan Professional Edition &copy; 2024 - Documentación de Soporte para Consultoría Psicológica.
        </p>
      </footer>
    </div>
  );
};
