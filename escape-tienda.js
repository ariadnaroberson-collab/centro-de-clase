/* ¡Encerrados en la tienda de ropa! — escape room fácil para Upper Elementary (3–5).
   Unidad: ¿Qué me pongo cuando hace…? (el tiempo y la ropa). Muchas imágenes (emoji) como apoyo.
   escape.html?juego=tienda · carteles: escape-carteles.html?juego=tienda · respuestas: escape-respuestas.html?juego=tienda
   4 secciones × 3 retos (el último es el candado) · unos 20 minutos · palabra secreta ROPA (R · O · P · A).
   Guías: Chica y sus Amigos. Sin voz. */
window.ESCAPE = {
  id: 'tienda',
  title: '¡Encerrados en la tienda de ropa!',
  sub: 'Escape room · miren los carteles, contesten los retos y encuentren la <b>palabra secreta</b> para salir de la tienda.',
  word: 'ROPA',
  ui: { plan: '🏬 Plano de la tienda', door: 'La puerta de la tienda', escaped: '¡ESCAPARON DE LA TIENDA!', planBtn: '🗺️ Ver el plano de la tienda', icon: '🏬' },
  words: ['BUFANDA', 'PARAGUAS', 'GUANTES', 'ABRIGO', 'CHANCLAS', 'SOMBRERO', 'BOTAS', 'GAFAS', 'VIENTO', 'NIEVE', 'LLUVIA', 'SOL'],
  levels: {
    u35: {
      name: 'Upper Elementary (3–5)', crew: 'Chica y sus Amigos',
      intro: {
        who: { n: 'Chica', e: '🐒', img: 'img/chica.webp' },
        t: [
          '¡Hola! Me llamo Chica. Hoy mis amigos y yo visitamos la Tienda de Ropa de la Selva. 🏬',
          'Hay ropa para el calor ☀️, para el frío ❄️, para la lluvia 🌧️ y para el viento 💨.',
          '¡CLIC! 🔒 La puerta está cerrada. ¡Oh, no!',
          'En la puerta hay una nota de Don Pico.'
        ],
        noteTitle: 'Nota de Don Pico',
        note: 'Queridos amigos: para abrir la puerta, necesitan una palabra secreta. La tienda tiene cuatro secciones. En cada sección hay tres retos y una letra. Miren bien los carteles. ¡Buena suerte! — Don Pico'
      },
      salas: [
        { id: 1, e: '☀️', n: 'Sección del Calor', letter: 'R', cartel: 1,
          who: { n: 'Iggy', e: '🦎' },
          hi: '¡Me encanta el sol! ☀️ Hoy hace mucho calor. Busquen el CARTEL 1.',
          retos: [
            { t: 'mc', q: 'Hace calor. ☀️🥵 ¿Qué me pongo?', o: ['🩳 los pantalones cortos', '🧥 el abrigo', '🧤 los guantes'], a: 0, p: 'Cuando hace calor, necesitas ropa fresca y corta.' },
            { t: 'error', q: '🔍 Una palabra está mal. ¡Tóquenla!', s: 'Hace calor. ☀️ Me pongo la bufanda. 🧣', w: 'bufanda.', p: '¿La bufanda 🧣 es para el calor o para el frío?' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 1. ¿Qué me pongo cuando hace calor? ☀️ Escriban los 3 números, de menor a mayor.', code: '246', p: 'Busquen: 🕶️ las gafas de sol, 🩳 los pantalones cortos y 🩴 las chanclas.' }
          ] },
        { id: 2, e: '❄️', n: 'Sección del Frío', letter: 'O', cartel: 2,
          who: { n: 'Teo', e: '🐹' },
          hi: '¡Brrr! 🥶 Tengo mucho frío. Busquen el CARTEL 2.',
          retos: [
            { t: 'mc', q: '✏️ ¿Qué le falta? «Cuando hace ____, me pongo el abrigo. 🧥»', o: ['frío 🥶', 'calor 🥵', 'sol ☀️'], a: 0, p: 'El abrigo 🧥 es para el invierno.' },
            { t: 'tiles', q: 'Deletreen: 🧣 la ____', word: 'BUFANDA', extra: 'OE', p: 'Empieza con B y termina con A: B _ _ _ _ _ A' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 2. ¿Qué me pongo cuando hace frío? ❄️ Escriban los 3 números, de menor a mayor.', code: '145', p: 'Busquen: 🧥 el abrigo, 🧣 la bufanda y 🧤 los guantes.' }
          ] },
        { id: 3, e: '🌧️', n: 'Sección de la Lluvia', letter: 'P', cartel: 3,
          who: { n: 'Mora', e: '🌸', img: 'img/mora.webp' },
          hi: '¡Ay, no! Hoy llueve mucho. 🌧️ No quiero mojarme. Busquen el CARTEL 3.',
          retos: [
            { t: 'mc', q: 'Llueve. 🌧️ ¿Qué necesito?', o: ['🕶️ las gafas de sol', '☂️ el paraguas', '🩱 el traje de baño'], a: 1, p: 'Lo usas sobre la cabeza para no mojarte. ☂️' },
            { t: 'error', q: '🔍 Miren el dibujo. Una palabra está mal. ¡Tóquenla!', s: '🌧️ Hoy hace sol.', w: 'sol.', p: 'En el dibujo hay nubes y agua. ¿Hace sol?' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 3. ¿Qué me pongo cuando llueve? 🌧️ Escriban los 3 números, de menor a mayor.', code: '245', p: 'Busquen: ☂️ el paraguas, 🥾 las botas de lluvia y el impermeable.' }
          ] },
        { id: 4, e: '💨', n: 'Sección del Tiempo Loco', letter: 'A', cartel: 4,
          who: { n: 'Bruno', e: '🐗' },
          hi: '¡El tiempo está loco hoy! Sol, viento, lluvia… 🌀 Busquen el CARTEL 4.',
          retos: [
            { t: 'mc', q: '💨🍃 ¿Qué tiempo hace?', o: ['Nieva.', 'Hace viento.', 'Hace calor.'], a: 1, p: 'Las hojas 🍃 vuelan por el aire.' },
            { t: 'tiles', q: '❄️ ¿Qué tiempo hace? Deletreen la palabra: ____', word: 'NIEVA', extra: 'LOS', p: 'Empieza con N. Es como «nieve»… N _ _ _ A' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 4. Escriban los números de: hace viento, nieva y hay tormenta. ¡En ese orden!', code: '346', p: 'Primero 💨, después ❄️ y al final ⛈️.' }
          ] }
      ],
      final: {
        who: { n: 'Don Pico', e: '🐦', img: 'img/donpico.webp' },
        q: '¡Tienen las cuatro letras! Pongan las letras en orden y escriban la palabra secreta.',
        p: 'Camisetas 👕, abrigos 🧥, bufandas 🧣… ¡todo es ____!',
        tiles: true,
        win: ['¡Muy bien! La palabra secreta es ROPA. 👕🧥🧣', 'Ahora ustedes saben qué ropa ponerse cuando hace calor, cuando hace frío, cuando llueve y cuando hace viento.', '¡CLIC! 🔓 La puerta de la tienda está abierta. — Don Pico']
      }
    }
  },
  teacherIntro: 'Escape room fácil de unos 20 minutos para Upper Elementary (3–5). Unidad: «¿Qué me pongo cuando hace…?» (el tiempo y la ropa). Las guías son Chica y sus Amigos. Mucho apoyo visual con emoji. Retos: preguntas de opción, ¿qué le falta?, encuentra el error (solo tocan la palabra), deletrear con fichas de letras y candados de números con los carteles. El juego no tiene voz.',
  keyNotes: [
    'Cartel 1 (calor): 1 bufanda · 2 gafas de sol · 3 abrigo · 4 pantalones cortos · 5 guantes · 6 chanclas → candado <b>246</b>.',
    'Cartel 2 (frío): 1 abrigo · 2 traje de baño · 3 gafas de sol · 4 bufanda · 5 guantes · 6 chanclas → candado <b>145</b>.',
    'Cartel 3 (lluvia): 1 gafas de sol · 2 paraguas · 3 sombrero de playa · 4 botas de lluvia · 5 impermeable · 6 traje de baño → candado <b>245</b>.',
    'Cartel 4 (el tiempo): 1 hace sol · 2 llueve · 3 hace viento · 4 nieva · 5 está nublado · 6 hay tormenta → candado <b>346</b>.',
    'Cierre sugerido (5 min): cada pareja dice una oración: «Cuando hace ____, me pongo ____.»'
  ]
};

/* Carteles impresos: cada uno es un estante de la tienda con 6 cosas numeradas (emoji grande + palabra). Sin respuestas marcadas. */
window.ESCAPE_CARTELES = {
  1: { title: 'CARTEL 1 · Sección del Calor ☀️', lead: 'Hace calor. ☀️🥵 ¿Qué me pongo? Miren los números.',
    objects: [['1', 'la bufanda', '', '🧣'], ['2', 'las gafas de sol', '', '🕶️'], ['3', 'el abrigo', '', '🧥'], ['4', 'los pantalones cortos', '', '🩳'], ['5', 'los guantes', '', '🧤'], ['6', 'las chanclas', '', '🩴']],
    extra: [['Para hablar', 'Cuando hace calor, me pongo… · Cuando hace calor, no me pongo…']], foot: 'Sección del Calor' },
  2: { title: 'CARTEL 2 · Sección del Frío ❄️', lead: 'Hace frío. ❄️🥶 ¿Qué me pongo? Miren los números.',
    objects: [['1', 'el abrigo', '', '🧥'], ['2', 'el traje de baño', '', '🩱'], ['3', 'las gafas de sol', '', '🕶️'], ['4', 'la bufanda', '', '🧣'], ['5', 'los guantes', '', '🧤'], ['6', 'las chanclas', '', '🩴']],
    extra: [['Para hablar', 'Cuando hace frío, me pongo… · Cuando hace frío, no me pongo…']], foot: 'Sección del Frío' },
  3: { title: 'CARTEL 3 · Sección de la Lluvia 🌧️', lead: 'Llueve. 🌧️☔ ¿Qué me pongo? Miren los números.',
    objects: [['1', 'las gafas de sol', '', '🕶️'], ['2', 'el paraguas', '', '☂️'], ['3', 'el sombrero de playa', '', '👒'], ['4', 'las botas de lluvia', '', '🥾'], ['5', 'el impermeable', 'una chaqueta para la lluvia', '🧥'], ['6', 'el traje de baño', '', '🩱']],
    extra: [['Para hablar', 'Cuando llueve, me pongo… · Cuando llueve, necesito…']], foot: 'Sección de la Lluvia' },
  4: { title: 'CARTEL 4 · ¿Qué tiempo hace? 🌀', lead: 'En la Sección del Tiempo Loco, el tiempo cambia mucho. Miren los números.',
    objects: [['1', 'Hace sol.', '', '☀️'], ['2', 'Llueve.', '', '🌧️'], ['3', 'Hace viento.', '', '💨'], ['4', 'Nieva.', '', '❄️'], ['5', 'Está nublado.', '', '☁️'], ['6', 'Hay tormenta.', '', '⛈️']],
    extra: [['Para hablar', '¿Qué tiempo hace hoy? · Hoy hace… · Hoy llueve… · Hoy nieva…']], foot: 'Sección del Tiempo Loco' }
};
