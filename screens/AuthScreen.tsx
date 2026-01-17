
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const AuthScreen: React.FC = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      if (login(formData.email, formData.password)) {
        navigate('/');
      } else {
        setError('Credenciales inválidas. Por favor, revisa tus datos.');
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setError('Por favor, rellena todos los campos.');
        return;
      }
      if (register(formData.name, formData.email, formData.password)) {
        navigate('/');
      } else {
        setError('El correo electrónico ya está registrado.');
      }
    }
  };

  return (
    <div className="min-h-[80vh] w-full flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-md rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden animate-in fade-in zoom-in-95 duration-500">
        <div className="p-10">
          <div className="flex flex-col items-center mb-8">
            <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined text-4xl">psychology</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">PsicoPlan</h1>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 font-medium">
              {isLogin ? 'Bienvenido de nuevo' : 'Crea tu perfil de evaluación'}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">person</span>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary dark:text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            )}
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">mail</span>
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary dark:text-white"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400">lock</span>
              <input
                type="password"
                placeholder="Contraseña"
                className="w-full bg-slate-50 dark:bg-slate-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary dark:text-white"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 text-red-500 text-xs p-3 rounded-xl font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">error</span>
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-blue-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 transition-all active:scale-[0.98] mt-4"
            >
              {isLogin ? 'Iniciar Sesión' : 'Registrarse'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <button
              onClick={() => { setIsLogin(!isLogin); setError(''); }}
              className="text-slate-500 dark:text-slate-400 text-sm font-bold hover:text-primary transition-colors"
            >
              {isLogin ? '¿No tienes cuenta? Regístrate gratis' : '¿Ya tienes cuenta? Inicia sesión'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
