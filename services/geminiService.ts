
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";

// Fix: Guideline requires GoogleGenAI initialization right before making an API call.
// Removed global 'ai' instance.

export const integrateProfileAnalysis = async (hexaco: string, ie: string, via: string, history?: string) => {
  // Fix: Create fresh instance for the call using the mandatory process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: `Realiza un análisis clínico, sintético e integral del siguiente perfil biopsicosocial:
      
      DATOS DE ENTRADA:
      - Personalidad (HEXACO - Medias): ${hexaco}
      - Inteligencia Emocional (TMMS-24): ${ie}
      - Fortalezas de Carácter (VIA - Puntuaciones 1-7): ${via}
      ${history ? `- Narrativa Vital del Usuario: ${history}` : ''}
      
      INSTRUCCIONES DE REFINAMIENTO CLÍNICO:
      1. DINÁMICA DE FORTALEZAS: Identifica y nombra fortalezas VIA específicas con sus puntuaciones (ej: "Curiosidad 7/7"). Explica cómo estas han operado como recursos en su historia.
      2. ANÁLISIS DE FACETAS: Infiere matices de facetas HEXACO (ej: Diligencia vs Perfeccionismo en Responsabilidad, o Ansiedad vs Sentimentalismo en Emocionalidad) para explicar bloqueos o patrones de conducta.
      3. SÍNTESIS VITAL: Conecta los resultados métricos con los hitos narrados en la historia de vida.
      4. RECOMENDACIONES: Proporciona 3 estrategias de crecimiento basadas en "apoyarse en lo fuerte".
      5. CONSIDERACIONES ADICIONALES (HIPÓTESIS DIFERENCIAL): Menciona brevemente la importancia de descartar factores orgánicos (TDAH inatento, disfunción tiroidea, fatiga crónica o episodios anímicos) si el perfil muestra baja perseverancia, alta ansiedad o baja vitalidad, para asegurar un enfoque biopsicosocial completo.

      ESTRUCTURA DEL INFORME:
      - Título: Informe de Síntesis Psicoplan
      - Bloque 1: Arquitectura de la Personalidad y Fortalezas.
      - Bloque 2: Integración Narrativa-Métrica.
      - Bloque 3: Plan de Acción Personalizado.
      - Bloque 4: Consideraciones Clínicas y Diferenciales.

      Responde exclusivamente en español con un tono profesional, empático y de alta precisión clínica.`,
      config: {
        thinkingConfig: { thinkingBudget: 8000 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Pro Analysis Error:", error);
    return "Error en la síntesis del perfil integral. Por favor, revisa tu conexión.";
  }
};

export const getGeminiInsight = async (traits: string[]) => {
  // Fix: Create fresh instance for the call using the mandatory process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Proporciona un breve resumen psicológico profesional para un perfil que destaca en: ${traits.join(', ')}. El tono debe ser empoderador, profesional y orientado al crecimiento personal. Responde exclusivamente en español.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "No pudimos generar tu análisis.";
  }
};

export const createPsychologyChat = (): Chat => {
  // Fix: Create fresh instance for the call using the mandatory process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  return ai.chats.create({
    model: 'gemini-3-pro-preview',
    config: {
      systemInstruction: `Eres un asistente experto en psicometría y psicología clínica de PsicoPlan.
      Dominas HEXACO, VIA y TMMS-24. 
      Tu objetivo es orientar a profesionales y pacientes sobre la interpretación de sus perfiles. 
      Eres capaz de sugerir hipótesis diferenciales (factores orgánicos, TDAH, etc.) cuando los datos muestran inconsistencias o bajos niveles de ejecución/vitalidad.
      Mantén siempre un tono profesional, ético y empático. Responde en español.`,
    },
  });
};
