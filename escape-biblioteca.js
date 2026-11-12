/* ¡Encerrados en la biblioteca! — escape room de Secondary para cerrar la unidad 2.
   Lo usan escape.html?juego=biblioteca, escape-carteles.html?juego=biblioteca y escape-respuestas.html?juego=biblioteca.
   Dos versiones con la misma historia (La Cuadrilla):
     sec1 → Secundaria 1 · unidad School Day · episodios S1 1–2 (sin Joaquín: llega en el episodio 3). A2/B1, frases cortas.
     sec2 → Secundaria 2 · unidad Healthy Habits · episodios S2 1–2. B1.
   5 salas (4 retos cada una, el último es el candado) · unos 40 minutos.
   Palabra secreta: LAZOS → L (unidad) · A (países, cartel 1) · Z (cultura, cartel 2) · O (emociones, cartel 3) · S (La Cuadrilla).
   Tipos de reto: ver escape-contenido.js. */
window.ESCAPE = {
  id: 'biblioteca',
  title: '¡Encerrados en la biblioteca!',
  sub: 'Escape room · lean, busquen los carteles y encuentren la <b>palabra secreta</b> para salir de la biblioteca.',
  word: 'LAZOS',
  ui: { plan: '📚 Plano de la biblioteca', door: 'La puerta de la biblioteca', escaped: '¡ESCAPARON DE LA BIBLIOTECA!', planBtn: '🗺️ Ver el plano de la biblioteca', icon: '📚' },
  words: ['HORARIO', 'EQUILIBRIO', 'BUBBLE-TEA', 'FORMOSA', 'PUPUSA', 'QUETZAL', 'LEMPIRA', 'PUNTA', 'SALSA', 'ESPEJO', 'AZÚCAR', 'CALMA'],
  levels: {
    /* ============================== SECUNDARIA 1 · SCHOOL DAY ============================== */
    sec1: {
      name: 'Secundaria 1', crew: 'La Cuadrilla',
      intro: {
        who: { n: 'Vale', e: '📋' },
        t: [
          'Es viernes por la tarde. La Cuadrilla está en la biblioteca de la Escuela San Antonio. Hoy terminan la unidad y preparan el proyecto final.',
          'Vale tiene una lista, como siempre. Emiliano tiene sueño. Renata dibuja en su cuaderno. Andrés lee. Fernanda busca un libro. Ximena mira el reloj: hoy no tiene turno en el puesto de su familia.',
          'De repente… ¡CLAC! La puerta de la biblioteca se cierra. Emiliano empuja la puerta. No se abre.',
          '—¿Y ahora? —pregunta Fernanda. En la puerta hay una nota de Profe Rivera.'
        ],
        note: 'Querida Cuadrilla: esta puerta tiene un candado especial. Para salir, necesitan una palabra secreta de cinco letras. La biblioteca tiene cinco salas. En cada sala hay cuatro retos y, al final, una letra. Trabajen juntos y lean con atención. ¡Nos vemos afuera! — Profe Rivera'
      },
      salas: [
        { id: 1, e: '📅', n: 'Sala del Horario', letter: 'L', cartel: 0,
          who: { n: 'Vale', e: '📋' },
          hi: '¡Esta sala es mi favorita! Aquí todo es sobre horarios y clases. No hay cartel: usen lo que aprendieron en la unidad.',
          retos: [
            { t: 'text', q: 'Completen: todos los estudiantes tienen un ____ con sus clases y sus horas.', ans: ['horario', 'un horario'], p: 'Es la Palabra del Día del episodio 2. Empieza con H.' },
            { t: 'mc', q: 'La clase de historia empieza a las 8:15. ¿Cómo se dice la hora?', o: ['a las ocho y cuarto', 'a las ocho menos cuarto', 'a las nueve y cuarto'], a: 0, p: '15 minutos es «un cuarto». «Menos» es antes de la hora.' },
            { t: 'error', fix: ['interesante', 'divertida', 'fascinante', 'buena', 'importante', 'facil', 'emocionante'], q: 'Encuentren el error de lógica. Toquen la palabra equivocada y escriban una palabra mejor.', s: 'Mi clase preferida es historia porque es aburrida.', w: 'aburrida', p: 'Si es tu clase preferida, ¿es aburrida? Escriban un adjetivo positivo.' },
            { t: 'text', lock: true, spell: true, q: 'Deletreen: ¿cómo se dice «recess» en español?', ans: ['recreo', 'el recreo'], p: 'Para Emiliano, ¡es su clase preferida! Empieza con R.' }
          ] },
        { id: 2, e: '🗺️', n: 'Sala de los Países', letter: 'A', cartel: 1,
          who: { n: 'Renata', e: '🎨' },
          hi: 'Yo soy de Inglaterra y me encanta viajar. Busquen el CARTEL 1: las postales perdidas de Profe Rivera. ¡Las postales no dicen el país!',
          retos: [
            { t: 'mc', q: 'Postal 3: ¿de qué país es?', o: ['Honduras', 'El Salvador', 'Nicaragua'], a: 1, p: 'Busquen la capital en la postal: San Salvador.' },
            { t: 'text', q: 'Postal 1: ¿de qué país es? Escriban el país.', ans: ['nicaragua'], p: 'La capital es Managua. La moneda es el córdoba.' },
            { t: 'error', fix: ['lempira', 'el lempira'], q: 'Encuentren el error. Toquen la palabra equivocada y escriban la correcta.', s: 'La moneda de Honduras es el quetzal.', w: 'quetzal', p: 'Busquen la postal de Tegucigalpa. ¿Cómo se llama la moneda?' },
            { t: 'code', lock: true, q: 'Candado: escriban los números de las postales de Centroamérica, de menor a mayor.', code: '1358', p: 'Centroamérica: Guatemala, Honduras, El Salvador, Nicaragua… Busquen sus postales.' }
          ] },
        { id: 3, e: '🎨', n: 'Sala de la Cultura', letter: 'Z', cartel: 2,
          who: { n: 'Ximena', e: '🧶' },
          hi: 'Mi familia vende artesanías y sabe mucho de tradiciones. Busquen el CARTEL 2: la revista de la Herencia. Lean los artículos con atención.',
          retos: [
            { t: 'mc', q: '¿Quién ganó un pastel en un concurso de radio?', o: ['Frida Kahlo', 'Celia Cruz', 'José Martí'], a: 1, p: 'Busquen el artículo sobre una cantante de Cuba.' },
            { t: 'text', q: 'Completen: Celia Cruz es «la Reina de la ____».', ans: ['salsa', 'la salsa'], p: 'Es un ritmo musical. También es una comida… ¡picante!' },
            { t: 'error', fix: ['espejo', 'un espejo'], q: 'Encuentren el error. Toquen la palabra equivocada y escriban la correcta.', s: 'Frida Kahlo pintó sus autorretratos con una cámara.', w: 'cámara', p: 'Lean el artículo de Frida. ¿Qué usaba para verse en la cama?' },
            { t: 'text', lock: true, spell: true, q: 'Deletreen el nombre de la flor naranja del Día de Muertos.', ans: ['cempasuchil', 'el cempasuchil', 'cempoalxochitl'], p: 'Está en la caja del Día de Muertos. Empieza con C y tiene 11 letras.' }
          ] },
        { id: 4, e: '💭', n: 'Sala de las Emociones', letter: 'O', cartel: 3,
          who: { n: 'Andrés', e: '📓' },
          hi: '…Bueno. Yo escribo en mi diario todos los días. Busquen el CARTEL 3: mi diario. ¿Qué siente cada persona?',
          retos: [
            { t: 'mc', q: 'Entrada 1 del diario: ¿qué siente Vale?', o: ['la alegría', 'la ansiedad', 'el asco'], a: 1, p: 'Vale no puede dormir y su corazón va muy rápido.' },
            { t: 'text', q: 'Entrada 4: ¿qué siente Ximena? Escriban la emoción.', ans: ['asco', 'el asco'], p: 'Hay un insecto en su bubble tea. ¡Puaj! Busquen la lista de emociones.' },
            { t: 'error', fix: ['verguenza', 'la verguenza'], q: 'Encuentren el error. Toquen la palabra equivocada y escriban la correcta.', s: 'Emiliano tiene la cara roja porque siente envidia.', w: 'envidia', p: 'Lean la entrada 3: nadie se ríe de su broma.' },
            { t: 'code', lock: true, q: 'Candado: escriban los números de las entradas con el miedo, el enojo y el aburrimiento. ¡En ese orden!', code: '562', p: 'Primero: un ruido fuerte en la noche. Segundo: un dibujo roto. Tercero: una clase sin nada interesante.' }
          ] },
        { id: 5, e: '🧋', n: 'Sala de La Cuadrilla', letter: 'S', cartel: 0,
          who: { n: 'Emiliano', e: '😎' },
          hi: '¡Por fin, una sala sobre nosotros! Sin cartel: ¿recuerdan los episodios 1 y 2? Yo sí… más o menos.',
          retos: [
            { t: 'mc', q: 'Episodio 1: ¿cómo saludan los amigos a Profe Rivera?', o: ['«¿Qué tal, Profe?»', '«Buenos días, Profe.» (formal, con usted)', '«¡Hola, amiga!»'], a: 1, p: 'Con los amigos dicen «¿qué tal?». Con Profe Rivera usan un tono más formal.' },
            { t: 'text', q: 'Episodio 1: Profe Rivera no recuerda cómo se dice ____ en inglés. Ximena dice: «¡Riddle!»', ans: ['adivinanza', 'la adivinanza', 'adivinanzas'], p: 'A Profe Rivera le gustan mucho. Empieza con A.' },
            { t: 'error', fix: ['recreo', 'el recreo'], q: 'Encuentren el error. Toquen la palabra equivocada y escriban la correcta.', s: 'Emiliano dice: «Mi clase preferida es la historia».', w: 'historia', p: 'Vale le dice: «Emiliano, el ____ no es una clase».' },
            { t: 'text', lock: true, spell: true, q: 'Episodio 2: ¿qué animal dibuja Renata en su cuaderno? Deletreen la palabra.', ans: ['pajaro', 'un pajaro', 'el pajaro'], p: 'Tiene alas y plumas. Empieza con P.' }
          ] }
      ],
      final: {
        who: { n: 'Profe Rivera', e: '💃' },
        q: '¡Tienen las cinco letras! Pongan las letras en orden y escriban la palabra secreta.',
        p: 'Es una palabra en plural. Un ___ une dos cosas, como la amistad une a la Cuadrilla. 🎀',
        tiles: false,
        win: ['¡Lo lograron, Cuadrilla! La palabra secreta es LAZOS.', 'Un lazo une dos cosas. Los lazos de amistad los unen a ustedes: en el horario, en la clase de español y en Café Formosa.', 'Hoy trabajaron juntos, y por eso salieron. ¡Bien hecho!', '¡CLAC! La puerta está abierta. — Profe Rivera']
      }
    },

    /* ============================== SECUNDARIA 2 · HEALTHY HABITS ============================== */
    sec2: {
      name: 'Secundaria 2', crew: 'La Cuadrilla',
      intro: {
        who: { n: 'Vale', e: '📋' },
        t: [
          'Es viernes por la tarde y la Cuadrilla está en la biblioteca de la Escuela San Antonio, terminando el proyecto final de la unidad de hábitos saludables.',
          'Vale ya organizó todo en una lista. Emiliano dice que necesita un descanso (y un bubble tea). Andrés escribe en su cuaderno y Renata dibuja. Fernanda y Joaquín buscan un libro sobre Centroamérica. Y Ximena, por fin, tiene la tarde libre.',
          'De repente… ¡CLAC! La puerta se cierra. Emiliano intenta abrirla, pero no puede.',
          '—Tranquilos —dice Ximena—. Respiren. Seguro hay una solución. Joaquín encuentra una nota de Profe Rivera en la puerta.'
        ],
        note: 'Querida Cuadrilla: la puerta tiene un candado especial. Para salir, van a necesitar una palabra secreta de cinco letras. La biblioteca tiene cinco salas; en cada una hay cuatro retos y, al final, una letra. Trabajen en equipo, cuídense y lean con atención. ¡Los espero afuera! — Profe Rivera'
      },
      salas: [
        { id: 1, e: '💚', n: 'Sala de los Hábitos', letter: 'L', cartel: 0,
          who: { n: 'Ximena', e: '🧶' },
          hi: 'Esta sala es sobre hábitos saludables… y yo todavía tengo que dormir más. No hay cartel: usen lo que aprendieron en la unidad.',
          retos: [
            { t: 'text', q: 'Completen: es importante dormir bien. Seis horas no es ____.', ans: ['suficiente'], p: 'En inglés: «enough». Empieza con S.' },
            { t: 'error', fix: ['escribir'], q: 'Encuentren el error de gramática. Toquen la palabra equivocada y escriban la correcta.', s: 'Cuando estoy estresado, trato de escribiendo en mi cuaderno.', w: 'escribiendo', p: 'Después de «trato de» va el infinitivo: -ar, -er, -ir.' },
            { t: 'mc', q: '¿Qué frase da un consejo?', o: ['Deberías descansar más.', 'Descansé mucho en el verano.', 'Mi rutina diaria empieza a las seis.'], a: 0, p: 'Un consejo usa «deberías», «debes» o «es importante».' },
            { t: 'text', lock: true, spell: true, q: 'Deletreen: ¿cómo se dice «balance» (en la vida) en español? Es una palabra del glosario.', ans: ['equilibrio', 'el equilibrio'], p: 'Empieza con E y tiene 10 letras: e-q-u-…' }
          ] },
        { id: 2, e: '🗺️', n: 'Sala de los Países', letter: 'A', cartel: 1,
          who: { n: 'Joaquín', e: '🧭' },
          hi: 'Ya llevo más de un año en Belice, pero siempre pienso en El Salvador. Busquen el CARTEL 1: las postales perdidas de Profe Rivera. ¡No dicen el país!',
          retos: [
            { t: 'text', q: 'Postal 7: ¿de qué país es? Escriban el país.', ans: ['argentina'], p: 'La capital es Buenos Aires. Allí la gente baila tango.' },
            { t: 'error', fix: ['peso', 'el peso', 'peso colombiano', 'el peso colombiano'], q: 'Encuentren el error. Toquen la palabra equivocada y escriban la correcta.', s: 'En Colombia, la moneda es el euro.', w: 'euro', p: 'Busquen la postal de Bogotá.' },
            { t: 'mc', q: '¿Qué postal NO es de América?', o: ['La postal 2', 'La postal 4', 'La postal 6'], a: 1, p: '¿Qué capital está en Europa?' },
            { t: 'code', lock: true, q: 'Candado: escriban los números de las postales de Sudamérica, de menor a mayor.', code: '267', p: 'Sudamérica: Colombia, Perú, Argentina… Busquen sus postales.' }
          ] },
        { id: 3, e: '🎨', n: 'Sala de la Cultura', letter: 'Z', cartel: 2,
          who: { n: 'Fernanda', e: '🌊' },
          hi: 'Soy garífuna y estoy orgullosa de mis tradiciones. Busquen el CARTEL 2: la revista de la Herencia. Lean con atención: hay datos que sorprenden.',
          retos: [
            { t: 'text', q: 'Según la revista, ¿cómo se llama la música y el baile garífuna de Belice y Honduras?', ans: ['punta', 'la punta'], p: 'Está en la caja de la música. Tiene 5 letras.' },
            { t: 'error', fix: ['ninos', 'los ninos', 'ninas', 'ninos y ninas'], q: 'Encuentren el error. Toquen la palabra equivocada y escriban la correcta.', s: 'José Martí escribió «La Edad de Oro» para los adultos.', w: 'adultos', p: 'Lean el artículo de Martí. ¿Para quién escribió esa revista?' },
            { t: 'mc', q: 'Según la revista, ¿dónde nació la salsa?', o: ['En La Habana', 'En Nueva York', 'En Madrid'], a: 1, p: 'Mucha gente piensa que en Cuba… pero lean la caja de la música.' },
            { t: 'code', lock: true, q: 'Candado: ¿en qué año nació Frida Kahlo? Escriban el año.', code: '1907', p: 'Está en la primera línea del artículo de Frida.' }
          ] },
        { id: 4, e: '💭', n: 'Sala de las Emociones', letter: 'O', cartel: 3,
          who: { n: 'Andrés', e: '📓' },
          hi: 'Escribo en mi diario cuando estoy estresado. Me ayuda a pensar con claridad. Busquen el CARTEL 3: mi diario. ¿Qué siente cada persona?',
          retos: [
            { t: 'text', q: 'Entrada 2: ¿qué siente Renata en la clase de arte? Escriban la emoción.', ans: ['aburrimiento', 'el aburrimiento'], p: 'No hay nada interesante para ella. Busquen la lista de emociones.' },
            { t: 'mc', q: 'Según el diario, ¿qué NO es una buena idea para sentirse mejor?', o: ['Respirar profundo.', 'Dormir poco y no hablar con nadie.', 'Escribir en un diario.'], a: 1, p: 'Lean la caja «Para sentirnos mejor».' },
            { t: 'error', fix: ['miedo', 'el miedo'], q: 'Encuentren el error. Toquen la palabra equivocada y escriban la correcta.', s: 'Fernanda escucha un ruido muy fuerte en la noche y siente mucha alegría.', w: 'alegría', p: 'Lean la entrada 5. ¿Quiere salir de su cuarto?' },
            { t: 'code', lock: true, q: 'Candado: escriban los números de las entradas con la vergüenza, el asco y la ansiedad. ¡En ese orden!', code: '341', p: 'Primero: una broma sin risas. Segundo: un insecto. Tercero: un examen mañana.' }
          ] },
        { id: 5, e: '🧋', n: 'Sala de La Cuadrilla', letter: 'S', cartel: 0,
          who: { n: 'Emiliano', e: '😎' },
          hi: 'Una sala sobre nosotros. Sin cartel: ¿recuerdan los episodios 1 y 2? Yo trabajé este verano… y todavía me cuesta levantarme temprano.',
          retos: [
            { t: 'mc', q: 'Episodio 1: ¿qué hizo Emiliano en el verano?', o: ['Hizo un curso intensivo de arte.', 'Trabajó en la tienda de su tío.', 'Visitó a su familia en la costa.'], a: 1, p: 'Fue difícil, pero aprendió mucho. Y ahora se levanta más temprano.' },
            { t: 'error', fix: ['el salvador'], q: 'Encuentren el error. Toquen la palabra equivocada y escriban la correcta.', s: 'Joaquín quiere visitar Guatemala el próximo verano para ver a su abuela.', w: 'Guatemala', p: '¿De dónde es la familia de Joaquín?' },
            { t: 'text', q: 'Episodio 2: el grupo decide hacer un ____ semanal para preguntarse cómo están.', ans: ['chequeo', 'un chequeo'], p: 'Es la idea de Renata. En inglés: «check-in».' },
            { t: 'text', lock: true, spell: true, q: '¿Qué hace Andrés cuando está estresado? Escribe en su ____. Deletreen la palabra.', ans: ['cuaderno', 'diario', 'su cuaderno', 'su diario'], p: 'Siempre lo lleva con él. Empieza con C.' }
          ] }
      ],
      final: {
        who: { n: 'Profe Rivera', e: '💃' },
        q: '¡Ya tienen las cinco letras! Escriban la palabra secreta para abrir la puerta.',
        p: 'Es una palabra en plural. Un ___ une dos cosas, como la amistad une a la Cuadrilla. 🎀',
        tiles: false,
        win: ['¡Lo lograron, Cuadrilla! La palabra secreta es LAZOS.', 'Los lazos de amistad nos unen y también nos cuidan. Como dijo Vale en el episodio 2: «Cuidarnos un poco más, juntos».', 'Hoy se escucharon, se ayudaron y nadie se quedó atrás. Ese también es un hábito saludable.', '¡CLAC! La puerta se abre. — Profe Rivera']
      }
    }
  },
  /* para la hoja de la maestra */
  teacherIntro: 'Escape room de unos 40 minutos para cerrar la unidad 2 de Secondary. Secundaria 1 (unidad School Day) y Secundaria 2 (unidad Healthy Habits) juegan con La Cuadrilla, episodios 1–2 de su temporada. Repasa la unidad, países y capitales, la Herencia Hispana, el Día de Muertos y las emociones. El juego no tiene voz.',
  keyNotes: [
    'Cartel 1 (postales): 1 Nicaragua · 2 Colombia · 3 El Salvador · 4 España · 5 Honduras · 6 Perú · 7 Argentina · 8 Guatemala. Candado Sec 1 = Centroamérica → <b>1358</b>. Candado Sec 2 = Sudamérica → <b>267</b>.',
    'Cartel 2 (revista): Frida nació en <b>1907</b> (candado Sec 2).',
    'Cartel 3 (diario de Andrés): 1 ansiedad · 2 aburrimiento · 3 vergüenza · 4 asco · 5 miedo · 6 enojo. Candado Sec 1 = miedo, enojo, aburrimiento → <b>562</b>. Candado Sec 2 = vergüenza, asco, ansiedad → <b>341</b>.',
    'Cierre sugerido (5 min): «¿Por qué la palabra secreta es LAZOS? ¿Qué lazos tienen ustedes en esta clase?»'
  ]
};

/* Carteles impresos (escape-carteles.html?juego=biblioteca). Iguales para Sec 1 y Sec 2. Sin respuestas marcadas. */
window.ESCAPE_CARTELES = {
  1: {
    title: 'CARTEL 1 · Las postales perdidas de Profe Rivera',
    lead: 'Profe Rivera viajó mucho, pero sus postales no dicen el país. Lean cada postal. ¿De qué país es? Los países están abajo.',
    items: [
      ['Postal 1', 'Estoy en Managua, la capital. Aquí la moneda es el córdoba. Hay lagos enormes y muchos volcanes.'],
      ['Postal 2', 'Estoy en Bogotá, una capital en las montañas, a más de 2.600 metros. La moneda es el peso. Aquí se toma mucho café.'],
      ['Postal 3', 'Estoy en San Salvador. Aquí la moneda es el dólar estadounidense. ¡Las pupusas son deliciosas!'],
      ['Postal 4', 'Estoy en Madrid, en el centro del país. La moneda es el euro. Hoy visité el Museo del Prado.'],
      ['Postal 5', 'Estoy en Tegucigalpa. La moneda es el lempira, por un líder lenca muy valiente.'],
      ['Postal 6', 'Estoy en Lima, cerca del océano Pacífico. La moneda es el sol. Mañana viajo a Cusco para ver Machu Picchu.'],
      ['Postal 7', 'Estoy en Buenos Aires. La moneda es el peso. Aquí mucha gente baila tango.'],
      ['Postal 8', 'Estoy en la Ciudad de Guatemala. La moneda es el quetzal, como el pájaro nacional.']
    ],
    names: ['Argentina', 'Colombia', 'El Salvador', 'España', 'Guatemala', 'Honduras', 'Nicaragua', 'Perú'],
    namesLabel: 'Países',
    foot: 'Sala de los Países'
  },
  2: {
    title: 'CARTEL 2 · La revista de la Herencia',
    lead: 'Artículos cortos sobre personas especiales y tradiciones del mundo hispano.',
    items: [
      ['Frida Kahlo (México)', 'Nació en 1907. A los seis años, tuvo polio y pasó mucho tiempo en casa. De joven, quería estudiar medicina. A los 18 años, tuvo un accidente grave. Mientras se recuperaba en la cama, empezó a pintar con un espejo. Por eso pintó muchos autorretratos.'],
      ['Celia Cruz (Cuba)', 'De niña, cantaba para dormir a sus hermanos. Su papá quería que fuera maestra, pero su tía la apoyó. Ganó un pastel en un concurso de radio y decidió cantar. Hoy la llaman «la Reina de la Salsa». Su grito famoso: «¡Azúcar!».'],
      ['José Martí (Cuba)', 'Fue poeta y escritor. A los 16 años, lo mandaron a la cárcel por defender la independencia de Cuba, pero nunca dejó de escribir. Escribió «Versos sencillos» y una revista para los niños: «La Edad de Oro».'],
      ['Lionel Messi (Argentina)', 'Nació en Rosario. De niño era muy bajito y lo llamaban «la pulga». Su abuela Celia fue su primera entrenadora y siempre creyó en él.']
    ],
    extra: [
      ['El Día de Muertos', 'Se celebra el 1 y el 2 de noviembre, sobre todo en México. Las familias hacen una ofrenda: el cempasúchil guía a las almas con su color y su olor, las velas dan luz, el agua quita la sed del viaje. La Catrina, una calavera elegante, la dibujó José Guadalupe Posada.'],
      ['La música', 'Muchos ritmos del Caribe tienen raíces africanas. La salsa nació en Nueva York en los años 60 y 70, con ritmos de Cuba y Puerto Rico. La punta es música y baile garífuna de Belice y Honduras.']
    ],
    foot: 'Sala de la Cultura'
  },
  3: {
    title: 'CARTEL 3 · El diario de Andrés',
    lead: 'Andrés escribe en su diario todos los días. Esta semana escribió sobre sus amigos. ¿Qué siente cada persona?',
    items: [
      ['Entrada 1', 'Vale tiene un examen mañana. Piensa en todo lo que puede salir mal. No puede dormir y su corazón va muy rápido.'],
      ['Entrada 2', 'En la clase de arte, Renata mira el reloj cada minuto. No hay nada interesante para ella hoy.'],
      ['Entrada 3', 'Emiliano dice una broma en el salón… pero nadie se ríe. Su cara está muy roja. Quiere desaparecer.'],
      ['Entrada 4', 'Ximena ve un insecto en su bubble tea. ¡Puaj! No quiere tomar más.'],
      ['Entrada 5', 'Fernanda escucha un ruido muy fuerte en la noche. No quiere salir de su cuarto.'],
      ['Entrada 6', 'Alguien rompe el dibujo de Renata. Ella grita y cierra el cuaderno con fuerza.']
    ],
    names: ['la alegría', 'la tristeza', 'el enojo', 'el miedo', 'el asco', 'la ansiedad', 'la vergüenza', 'la envidia', 'el aburrimiento'],
    namesLabel: 'Emociones',
    extra: [
      ['Para sentirnos mejor', 'Respirar profundo · hablar con un amigo · escribir en un diario · dormir bien · hacer ejercicio · pedir ayuda.']
    ],
    foot: 'Sala de las Emociones'
  }
};
