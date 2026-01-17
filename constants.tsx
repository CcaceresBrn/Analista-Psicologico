
import { PersonalityTrait, Virtue, VIAStrength } from './types';

export interface HexacoItem {
  id: number;
  statement: string;
}

export interface PersonalityTraitWithItems extends PersonalityTrait {
  items: HexacoItem[];
}

export interface IEQuestion {
  id: number;
  statement: string;
  dimension: 'Atención' | 'Claridad' | 'Reparación';
}

export const TMMS24_QUESTIONS: IEQuestion[] = [
  // Atención (1-8)
  { id: 1, dimension: 'Atención', statement: "Presto mucha atención a los sentimientos." },
  { id: 2, dimension: 'Atención', statement: "Normalmente me preocupo mucho por lo que siento." },
  { id: 3, dimension: 'Atención', statement: "Normalmente dedico tiempo a pensar en mis emociones." },
  { id: 4, dimension: 'Atención', statement: "Pienso que merece la pena prestar atención a mis emociones y estado de ánimo." },
  { id: 5, dimension: 'Atención', statement: "Dejo que mis sentimientos afecten a mis pensamientos." },
  { id: 6, dimension: 'Atención', statement: "Pienso en mi estado de ánimo constantemente." },
  { id: 7, dimension: 'Atención', statement: "A menudo pienso en mis sentimientos." },
  { id: 8, dimension: 'Atención', statement: "Presto mucha atención a cómo me siento." },
  // Claridad (9-16)
  { id: 9, dimension: 'Claridad', statement: "Tengo claros mis sentimientos." },
  { id: 10, dimension: 'Claridad', statement: "Frecuentemente puedo definir mis sentimientos." },
  { id: 11, dimension: 'Claridad', statement: "Casi siempre sé cómo me siento." },
  { id: 12, dimension: 'Claridad', statement: "Normalmente conozco mis sentimientos sobre las personas." },
  { id: 13, dimension: 'Claridad', statement: "A menudo me doy cuenta de mis sentimientos en diferentes situaciones." },
  { id: 14, dimension: 'Claridad', statement: "Siempre puedo decir cómo me siento." },
  { id: 15, dimension: 'Claridad', statement: "A veces puedo decir cuáles son mis emociones." },
  { id: 16, dimension: 'Claridad', statement: "Puedo llegar a comprender mis sentimientos." },
  // Reparación (17-24)
  { id: 17, dimension: 'Reparación', statement: "Aunque a veces me siento triste, suelo tener una visión optimista." },
  { id: 18, dimension: 'Reparación', statement: "Aunque me sienta mal, procuro pensar en cosas agradables." },
  { id: 19, dimension: 'Reparación', statement: "Cuando estoy triste, pienso en todos los placeres de la vida." },
  { id: 20, dimension: 'Reparación', statement: "Intento tener pensamientos positivos aunque me sienta mal." },
  { id: 21, dimension: 'Reparación', statement: "Si doy demasiadas vueltas a las cosas, complicándolas, trato de calmarme." },
  { id: 22, dimension: 'Reparación', statement: "Me esfuerzo por tener un buen estado de ánimo." },
  { id: 23, dimension: 'Reparación', statement: "Tengo mucha energía cuando me siento feliz." },
  { id: 24, dimension: 'Reparación', statement: "Cuando estoy enfadado intento que se me pase." }
];

export const HEXACO_TRAITS: PersonalityTraitWithItems[] = [
  { 
    title: "Honestidad-Humildad", 
    icon: "handshake", 
    color: "blue", 
    desc: "Sinceridad, justicia, evitación de la codicia y modestia.", 
    tags: ["Sinceridad", "Justicia", "Modestia"],
    items: [
      { id: 6, statement: "Si quiero algo de una persona que no me gusta, me comportaré con ella de un modo muy amable para conseguirlo." },
      { id: 12, statement: "Si supiera que nunca sería descubierto, estaría dispuesto a robar un millón de euros." },
      { id: 18, statement: "Tener mucho dinero no es especialmente importante para mí." },
      { id: 24, statement: "Soy una persona corriente, no soy mejor que los demás." },
      { id: 30, statement: "No usaría halagos para obtener un ascenso o promoción en el trabajo, aunque pensara que con ello podría conseguirlo." },
      { id: 36, statement: "Si tuviera problemas económicos, me sentiría tentado a comprar bienes robados." },
      { id: 42, statement: "Me gustaría vivir en un vecindario muy caro y de clase alta." },
      { id: 48, statement: "No me gustaría que la gente me tratara como si yo fuera superior a ellos." },
      { id: 54, statement: "Si quiero algo de alguien, me reiré de sus chistes aunque no tengan gracia." },
      { id: 60, statement: "Nunca aceptaría un soborno, aunque fuera muy cuantioso." },
      { id: 66, statement: "Me gustaría que me vieran conduciendo un coche muy caro." },
      { id: 72, statement: "Creo que merezco mayor respeto que la mayoría de la gente." },
      { id: 78, statement: "No intentaría agradar a alguien por el simple hecho de conseguir sus favores." },
      { id: 84, statement: "Me sentiría tentado/a utilizar dinero falso, si estuviera seguro/a de que no me van a descubrir." },
      { id: 90, statement: "Disfrutaría muchísimo si fuera propietario/a de bienes lujosos." },
      { id: 96, statement: "Quiero que la gente sepa que soy una persona importante, de alto estatus." },
      { id: 99, statement: "No me preocuparía hacer daño a alguien que no me gusta." }
    ]
  },
  { 
    title: "Emocionalidad", 
    icon: "favorite", 
    color: "indigo", 
    desc: "Miedo, ansiedad, dependencia y sentimentalismo.", 
    tags: ["Miedo", "Ansiedad", "Sentimentalismo"],
    items: [
      { id: 5, statement: "Sentiría miedo si tuviera que viajar en malas condiciones climatológicas." },
      { id: 11, statement: "A veces no puedo evitar preocuparme por cosas insignificantes." },
      { id: 17, statement: "Cuando me ocurre algo doloroso, necesito alguien que me reconforte." },
      { id: 23, statement: "Siento ganas de llorar cuando veo llorar a otras personas." },
      { id: 29, statement: "No me importa realizar trabajos que impliquen tareas peligrosas." },
      { id: 35, statement: "Me preocupo mucho menos que la mayoría de la gente." },
      { id: 41, statement: "Puedo manejar situaciones difíciles sin necesitar apoyo emocional de nadie." },
      { id: 47, statement: "Cuando alguien muy cercano a mí es infeliz, casi puedo sentir el sufrimiento de esa persona." },
      { id: 53, statement: "Cuando hay algún peligro físico, soy muy miedoso/a." },
      { id: 59, statement: "Casi nunca, por no decir nunca, tengo problemas para dormir por estrés o ansiedad." },
      { id: 65, statement: "Cada vez que me siento preocupado por algo, quiero compartir mi preocupación con otra persona." },
      { id: 71, statement: "Siento emociones muy fuertes cuando alguien muy cercano a mí se marcha por una larga temporada." },
      { id: 77, statement: "Aunque estuviera en una situación de emergencia, no entraría en pánico." },
      { id: 83, statement: "Me pongo muy nervioso cuando estoy esperando conocer el resultado de una decisión importante." },
      { id: 89, statement: "Casi nunca hablo de mis problemas con los demás." },
      { id: 95, statement: "No me emociono incluso en situaciones donde la mayoría de las personas se ponen muy sentimentales." },
      { id: 100, statement: "La gente me ve como una persona dura de corazón." }
    ]
  },
  { 
    title: "Extraversión", 
    icon: "groups", 
    color: "sky", 
    desc: "Autoestima social, audacia social, sociabilidad y vitalidad.", 
    tags: ["Sociabilidad", "Vitalidad", "Audacia"],
    items: [
      { id: 4, statement: "En general, me siento bastante satisfecho/a conmigo mismo/a." },
      { id: 10, statement: "Casi nunca expreso mis opiniones en reuniones sociales." },
      { id: 16, statement: "Evito entablar la típica conversación trivial con la gente." },
      { id: 22, statement: "Soy muy activo/a casi todo el tiempo." },
      { id: 28, statement: "Pienso que a la mayoría de la gente le gustan algunos aspectos de mi personalidad." },
      { id: 34, statement: "En situaciones sociales, normalmente soy el primero en dar el primer paso." },
      { id: 40, statement: "Disfruto teniendo mucha gente a mi alrededor con quien poder hablar." },
      { id: 46, statement: "La mayoría de los días, me siento feliz y optimista." },
      { id: 52, statement: "Me parece que soy una persona impopular." },
      { id: 58, statement: "Cuando estoy con un grupo de gente, suelo ser quien habla en nombre del grupo." },
      { id: 64, statement: "Prefiero trabajos que implican interactuar activamente con otras personas a otros que implican trabajar solo." },
      { id: 70, statement: "La gente me dice muchas veces que debería intentar animarme." },
      { id: 76, statement: "A veces siento que soy una persona despreciable." },
      { id: 82, statement: "Tiendo a sentirme bastante inseguro cuando hablo delante de un grupo de personas." },
      { id: 88, statement: "Lo primero que hago siempre que llego a un sitio nuevo es hacer amigos." },
      { id: 94, statement: "La mayoría de la gente es más optimista y dinámica de lo que suelo ser yo." }
    ]
  },
  { 
    title: "Amabilidad", 
    icon: "volunteer_activism", 
    color: "teal", 
    desc: "Perdón, gentileza, flexibilidad y paciencia.", 
    tags: ["Perdón", "Gentileza", "Paciencia"],
    items: [
      { id: 3, statement: "Casi nunca soy rencoroso/a, incluso con personas que me han hecho mucho daño." },
      { id: 9, statement: "La gente me dice a veces que soy muy crítico con los demás." },
      { id: 15, statement: "A veces la gente me dice que soy muy testarudo/a." },
      { id: 21, statement: "La gente piensa que tengo mal genio." },
      { id: 27, statement: "Mi actitud hacia la gente que me ha tratado mal es la de “perdonar y olvidar”." },
      { id: 33, statement: "Generalmente acepto los fallos de los demás sin quejarme." },
      { id: 39, statement: "Normalmente soy bastante flexible en mis opiniones cuando la gente está en desacuerdo conmigo." },
      { id: 45, statement: "Casi nunca me enfado, incluso aunque la gente me trate bastante mal." },
      { id: 51, statement: "Si alguien me ha engañado una vez, siempre sospecharé de esa persona." },
      { id: 57, statement: "Tiendo a ser indulgente al juzgar a otras personas." },
      { id: 63, statement: "Cuando la gente me dice que estoy equivocado/a, mi primera reacción es discutir con ellos." },
      { id: 69, statement: "La mayoría de la gente suele enfadarse más rápidamente que yo." },
      { id: 75, statement: "Me resulta difícil perdonar a alguien que me ha hecho algo malo." },
      { id: 81, statement: "Aunque la gente cometa muchos errores, casi nunca les digo algo negativo." },
      { id: 87, statement: "Me resulta difícil llegar a un acuerdo cuando creo que realmente tengo razón." },
      { id: 93, statement: "Me resulta difícil controlar mi genio cuando la gente me insulta." },
      { id: 98, statement: "Intento ser generoso/a con quienes lo necesitan." }
    ]
  },
  { 
    title: "Responsabilidad", 
    icon: "checklist", 
    color: "emerald", 
    desc: "Organización, diligencia, perfeccionismo y profesionalidad.", 
    tags: ["Organización", "Diligencia", "Prudencia"],
    items: [
      { id: 2, statement: "Limpio mi oficina o mi casa con bastante frecuencia." },
      { id: 8, statement: "Cuando trabajo suelo ponerme metas ambiciosas." },
      { id: 14, statement: "A menudo compruebo mi trabajo varias veces para detectar cualquier error." },
      { id: 20, statement: "Tomo decisiones basándome en las sensaciones del momento, más que en una reflexión cuidadosa." },
      { id: 26, statement: "Planifico y organizo las cosas con antelación para evitar apuros de última hora." },
      { id: 32, statement: "A menudo me exijo mucho a mi mismo/a cuando pretendo conseguir un objetivo." },
      { id: 38, statement: "Cuando estoy trabajando en algo, no presto demasiada atención a los pequeños detalles." },
      { id: 44, statement: "Cometo muchos errores porque no pienso antes de actuar." },
      { id: 50, statement: "A menudo la gente me gasta bromas por el desorden de mi habitación o escritorio." },
      { id: 56, statement: "Cuando me propongo una meta, muchas veces abandono sin haberla conseguido." },
      { id: 62, statement: "Siempre intento no cometer errores en mi trabajo, aunque mi cueste tiempo." },
      { id: 68, statement: "No permito que mis impulsos gobiernen mi comportamiento." },
      { id: 74, statement: "Cuando estoy trabajando, a veces tengo dificultades porque soy desorganizado/a." },
      { id: 80, statement: "Trabajo sólo lo justo y necesario." },
      { id: 86, statement: "La gente me dice muchas veces que soy perfeccionista." },
      { id: 92, statement: "Prefiero hacer lo primero que se me ocurra, que ceñirme a un plan." }
    ]
  },
  { 
    title: "Apertura a la experiencia", 
    icon: "lightbulb", 
    color: "purple", 
    desc: "Apreciación estética, curiosidad, creatividad y no convencionalidad.", 
    tags: ["Creatividad", "Curiosidad", "Estética"],
    items: [
      { id: 1, statement: "Me aburriría bastante visitar una galería de arte." },
      { id: 7, statement: "Me interesa conocer la historia y la política de otros países." },
      { id: 13, statement: "Me gustaría un trabajo rutinario en lugar de un trabajo que requiera ser creativo." },
      { id: 19, statement: "Considero que prestar atención a ideas extremas es una pérdida de tiempo." },
      { id: 25, statement: "No perdería mi tiempo leyendo un libro de poseía." },
      { id: 31, statement: "Me divierte mirar mapas de diferentes lugares." },
      { id: 37, statement: "Me gustaría crear una obra de arte, como una novela, una canción, o una pintura." },
      { id: 43, statement: "Me gusta la gente que tiene opiniones poco convencionales." },
      { id: 49, statement: "Si pudiera, me gustaría ir a un concierto de música clásica." },
      { id: 55, statement: "Me aburriría mucho con un libro de historia de la ciencia y tecnología." },
      { id: 61, statement: "La gente suele decirme que tengo mucha imaginación." },
      { id: 67, statement: "Me considero una persona un tanto excéntrica." },
      { id: 73, statement: "A veces me gusta mirar cómo sopla el viento a través de los árboles." },
      { id: 79, statement: "Realmente nunca he disfrutado consultando una enciclopedia." },
      { id: 85, statement: "No me considero una persona artística o creativa." },
      { id: 91, statement: "Me parece aburrido hablar sobre filosofía." },
      { id: 97, statement: "Siento compasión por la gente que es menos afortunada que yo." }
    ]
  }
];

export const VIA_STRENGTHS: VIAStrength[] = [
  { id: 1, virtue: "Sabiduría", icon: "brush", title: "Creatividad", desc: "Ver, hacer y/o crear cosas útiles; formas únicas de resolver problemas." },
  { id: 2, virtue: "Sabiduría", icon: "search", title: "Curiosidad", desc: "Interés por la novedad, apertura a experiencias y búsqueda de conocimiento." },
  { id: 3, virtue: "Sabiduría", icon: "gavel", title: "Pensamiento Crítico", desc: "Analítico; examinar cosas desde todos los ángulos; considerar evidencias." },
  { id: 4, virtue: "Sabiduría", icon: "menu_book", title: "Amor por el Aprendizaje", desc: "Deseo de profundizar conocimientos y experiencias; nuevas oportunidades de aprender." },
  { id: 5, virtue: "Sabiduría", icon: "visibility", title: "Perspectiva", desc: "Ver las cosas desde una perspectiva amplia; sabiduría de vida y consejo." },
  { id: 6, virtue: "Coraje", icon: "shield", title: "Valentía", desc: "Enfrentar miedos y retos; defender lo correcto; superar adversidades." },
  { id: 7, virtue: "Coraje", icon: "trending_up", title: "Perseverancia", desc: "Seguir adelante ante metas; superar obstáculos; terminar lo empezado." },
  { id: 8, virtue: "Coraje", icon: "verified", title: "Honestidad", desc: "Integridad y autenticidad; decir la verdad y hacerse responsable." },
  { id: 9, virtue: "Coraje", icon: "bolt", title: "Vitalidad", desc: "Entusiasmo por la vida; energía y actividad máxima." },
  { id: 10, virtue: "Humanidad", icon: "favorite", title: "Amor", desc: "Cálido y auténtico; capacidad de dar y recibir afecto e intimidad." },
  { id: 11, virtue: "Humanidad", icon: "volunteer_activism", title: "Bondad", desc: "Generosidad, compasión y cuidado por los demás; hacer el bien." },
  { id: 12, virtue: "Humanidad", icon: "psychology", title: "Inteligencia Social", desc: "Atención a matices emocionales y sociales; saber qué hacer en situaciones." },
  { id: 13, virtue: "Justicia", icon: "groups", title: "Trabajo en Equipo", desc: "Buen colaborador; lealtad al grupo; sentido del deber social." },
  { id: 14, virtue: "Justicia", icon: "balance", title: "Imparcialidad", desc: "Creencia en oportunidades iguales y justas; no sesgar decisiones." },
  { id: 15, virtue: "Justicia", icon: "leaderboard", title: "Liderazgo", desc: "Influencia positiva; organizar y hacerse cargo por el bien del grupo." },
  { id: 16, virtue: "Templanza", icon: "backspace", title: "Perdón", desc: "Dar segundas oportunidades; no ser vengativo; aceptar defectos ajenos." },
  { id: 17, virtue: "Templanza", icon: "face_retouching_natural", title: "Humildad", desc: "Dejar que los logros hablen solos; admitir defectos; modestia." },
  { id: 18, virtue: "Templanza", icon: "fact_check", title: "Prudencia", desc: "Cautela sabia; planear con cuidado; no tomar riesgos innecesarios." },
  { id: 19, virtue: "Templanza", icon: "self_improvement", title: "Autocontrol", desc: "Disciplinado; manejo de impulsos y emociones bajo presión." },
  { id: 20, virtue: "Trascendencia", icon: "auto_awesome", title: "Belleza y Excelencia", desc: "Asombro por la grandeza y hermosura; apreciar la excelencia." },
  { id: 21, virtue: "Trascendencia", icon: "sentiment_satisfied", title: "Gratitud", desc: "Sentirse agradecido y expresar gratitud por lo bueno que sucede." },
  { id: 22, virtue: "Trascendencia", icon: "wb_sunny", title: "Esperanza", desc: "Optimismo; esperar lo mejor; trabajar por un futuro mejor." },
  { id: 23, virtue: "Trascendencia", icon: "celebration", title: "Sentido del Humor", desc: "Juguentón; hacer reír; conectar mediante la diversión." },
  { id: 24, virtue: "Trascendencia", icon: "church", title: "Espiritualidad", desc: "Sentido vital; creencias que guían la conducta y dan propósito." }
];

export const VIA_VIRTUES: Virtue[] = [
  { title: "Sabiduría", icon: "lightbulb", color: "blue", desc: "Fortalezas cognitivas que implican la adquisición y el uso del conocimiento de formas creativas." },
  { title: "Coraje", icon: "local_fire_department", color: "red", desc: "Fortalezas emocionales que implican el ejercicio de la voluntad para lograr metas ante la oposición." },
  { title: "Humanidad", icon: "volunteer_activism", color: "green", desc: "Fortalezas interpersonales que implican cuidar, apoyar y hacerse amigo de los demás." },
  { title: "Justicia", icon: "balance", color: "yellow", desc: "Fortalezas cívicas que conllevan una vida en comunidad saludable y equilibrada." },
  { title: "Templanza", icon: "self_improvement", color: "purple", desc: "Fortalezas que nos protegen contra los excesos y nos ayudan a manejar hábitos." },
  { title: "Trascendencia", icon: "auto_awesome", color: "indigo", desc: "Fortalezas que forjan conexiones con el universo y proveen significado a la vida." }
];
