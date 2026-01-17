
export enum EvaluationPhase {
  WELCOME = 'welcome',
  PHASE_1 = 'phase_1', // HEXACO
  PHASE_2 = 'phase_2', // Inteligencia Emocional
  PHASE_3 = 'phase_3', // Fortalezas VIA
  PHASE_HISTORY = 'phase_history', // Historia de Vida (NUEVO)
  PHASE_4 = 'phase_4', // Síntesis (Ahora es la 5ª etapa lógica)
  FOLLOW_UP = 'follow_up' // Siguientes pasos
}

export interface PersonalityTrait {
  title: string;
  icon: string;
  color: string;
  desc: string;
  tags: string[];
}

export interface VIAStrength {
  id: number;
  title: string;
  desc: string;
  virtue: string;
  icon: string;
}

export interface Virtue {
  title: string;
  icon: string;
  color: string;
  desc: string;
}

export interface AssessmentResults {
  hexaco?: Record<string, number>;
  ie?: Record<string, number>;
  via?: Record<string, number>;
  history?: Record<string, string>;
}

export interface UserProfile {
  name: string;
  currentPhase: EvaluationPhase;
  completedPhases: EvaluationPhase[];
  results: AssessmentResults;
}
