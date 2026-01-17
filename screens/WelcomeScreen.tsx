
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-10 lg:px-40 flex justify-center py-10 lg:py-16">
        <div className="flex flex-col max-w-[960px] w-full gap-10 lg:flex-row lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6 lg:w-1/2">
            <div className="flex flex-col gap-4 text-left">
              <span className="inline-flex w-fit items-center rounded-full bg-blue-50 dark:bg-blue-900/30 px-3 py-1 text-xs font-semibold text-primary dark:text-blue-300">
                Bienvenid@
              </span>
              <h1 className="text-[#0d131b] dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                Tu viaje hacia el autoconocimiento comienza aquí
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Este es un espacio seguro diseñado para explorar tu mundo interior. A través de este plan de evaluación, trabajaremos juntos para comprender tu historia y potenciar tu crecimiento.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => navigate('/phase1')}
                className="flex h-12 items-center justify-center rounded-lg bg-primary px-6 text-white text-base font-bold shadow-md hover:bg-blue-600 transition-all hover:scale-[1.02]"
              >
                <span className="truncate">Comenzar Evaluación</span>
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </button>
              <button className="flex h-12 items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-transparent px-6 text-[#0d131b] dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                <span className="truncate">Saber más</span>
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-slate-500 dark:text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">lock</span>
                <span>100% Confidencial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-lg">verified_user</span>
                <span>Guiado por expertos</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 dark:from-slate-800 dark:to-slate-900 opacity-50 mix-blend-multiply"></div>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5KFeTis3GxxQ_CEySdf1RW3xJG5DyT-_xyhGdr4t3Y4Je5JxT6iGZa3HSty0_MYnk_9fBk8VSJQmPe3NhhcX-PWG0u_PPXy9yTnXXzJZslhZIxJTiwLT-v9q_59ZTcCOHmBXD6Ruk_uSzOiWEuXtN4oxXT8sW8KJIvDnwcXGdsFvuCxlg1QAt39CWwbGNPZrC3X2GqwCu5ILeAA2PhSnJMA8V6z-Z2t4MSLpRAjTDg8a6NPrq3pHNINkvVvffh0QB4oHWQeRRwDo")',
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="w-full bg-white dark:bg-[#151f2b] px-4 md:px-10 lg:px-40 flex justify-center py-16">
        <div className="flex flex-col max-w-[960px] w-full gap-12">
          <div className="text-center max-w-[720px] mx-auto flex flex-col gap-4">
            <span className="material-symbols-outlined text-4xl text-primary dark:text-blue-400">spa</span>
            <h2 className="text-[#0d131b] dark:text-white text-3xl font-bold leading-tight tracking-tight">Nuestra Filosofía</h2>
            <blockquote className="text-xl md:text-2xl font-medium text-slate-700 dark:text-slate-300 italic relative px-8">
              <span className="absolute top-0 left-0 text-4xl text-slate-200 dark:text-slate-700 -translate-y-2">"</span>
              Nos enfocamos en descubrir lo que es fuerte en ti, no en buscar lo que está mal.
              <span className="absolute bottom-0 right-0 text-4xl text-slate-200 dark:text-slate-700 translate-y-4">"</span>
            </blockquote>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            {[
              { icon: 'explore', title: 'Fase 1: Exploración', text: 'Comenzamos con una recopilación inicial de datos para comprender tu historia.', path: '/phase1' },
              { icon: 'psychology_alt', title: 'Fase 2: Análisis', text: 'Profundizamos en tu personalidad e inteligencia emocional.', path: '/phase2' },
              { icon: 'potted_plant', title: 'Fase 3: Crecimiento', text: 'Desarrollamos juntos un plan de acción concreto para tu desarrollo.', path: '/phase3' }
            ].map((step, idx) => (
              <div
                key={idx}
                onClick={() => navigate(step.path)}
                className="group cursor-pointer flex flex-col gap-4 rounded-xl border border-[#e7ecf3] dark:border-slate-700 bg-background-light dark:bg-[#101822] p-6 transition-all hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">{step.icon}</span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#0d131b] dark:text-white text-lg font-bold">{step.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-10 lg:px-40 flex justify-center py-16 md:py-24">
        <div className="flex flex-col items-center max-w-[960px] w-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 md:p-12 text-center border border-blue-100 dark:border-slate-700 shadow-sm">
          <h2 className="text-[#0d131b] dark:text-white text-3xl md:text-4xl font-black leading-tight mb-4">
            ¿Estás listo para comenzar?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base md:text-lg mb-8 max-w-2xl">
            Dar el primer paso es lo más importante. Tu evaluación es confidencial y marca el inicio de tu bienestar.
          </p>
          <button
            onClick={() => navigate('/phase1')}
            className="flex min-w-[200px] h-12 cursor-pointer items-center justify-center rounded-lg bg-primary px-8 text-white text-base font-bold shadow-lg hover:bg-blue-600 hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            <span className="truncate">Iniciar el Viaje</span>
            <span className="material-symbols-outlined ml-2">flight_takeoff</span>
          </button>
        </div>
      </section>
    </div>
  );
};
