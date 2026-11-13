/* ¡Encerrados en la tienda de ropa! — escape room fácil para Upper Elementary (3–5).
   Unidad: ¿Qué me pongo cuando hace…? (el tiempo y la ropa). Muchas imágenes (emoji) como apoyo.
   escape.html?juego=tienda · carteles: escape-carteles.html?juego=tienda · respuestas: escape-respuestas.html?juego=tienda
   7 secciones · unos 35–40 minutos · palabra secreta MARISOL (una letra por sección).
   Secciones 1–4: la ropa y el tiempo (3 retos fáciles). Secciones 5–7: «retos de capitán», un poco más difíciles
   (Marisol la monarca · El altar de Mamá Toña · Personas especiales de El Baúl de Emilio).
   Guías: Chica y sus Amigos. Sin voz. */
window.ESCAPE = {
  id: 'tienda',
  title: '¡Encerrados en la tienda de ropa!',
  sub: 'Escape room · miren los carteles, contesten los retos y encuentren la <b>palabra secreta</b> para salir de la tienda.',
  word: 'MARISOL',
  ui: { plan: '🏬 Plano de la tienda', door: 'La puerta de la tienda', escaped: '¡ESCAPARON DE LA TIENDA!', planBtn: '🗺️ Ver el plano de la tienda', icon: '🏬' },
  words: ['MONARCA', 'OFRENDA', 'CEMPASÚCHIL', 'BUFANDA', 'PARAGUAS', 'GUANTES', 'ABRIGO', 'CHANCLAS', 'SOMBRERO', 'BOTAS', 'GAFAS', 'VIENTO', 'NIEVE', 'LLUVIA', 'SOL'],
  levels: {
    u35: {
      name: 'Upper Elementary (3–5)', crew: 'Chica y sus Amigos',
      intro: {
        who: { n: 'Chica', e: '🐒', img: 'img/chica.webp' },
        t: [
          '¡Hola! Me llamo Chica. Hoy mis amigos y yo visitamos la Tienda de Ropa de la Selva. 🏬',
          'Hay ropa para el calor ☀️, para el frío ❄️, para la lluvia 🌧️ y para el viento 💨. ¡Y hay una mariposa monarca 🦋, un altar 🕯️ y un baúl 🧳 muy especial!',
          '¡CLIC! 🔒 La puerta está cerrada. ¡Oh, no!',
          'En la puerta hay una nota de Don Pico.'
        ],
        noteTitle: 'Nota de Don Pico',
        note: 'Queridos amigos: para abrir la puerta, necesitan una palabra secreta. La tienda tiene siete secciones. En cada sección hay retos y una letra. Las secciones con ⭐ son retos de capitán. Miren bien los carteles. ¡Buena suerte! — Don Pico'
      },
      salas: [
        { id: 1, e: '☀️', n: 'Sección del Calor', letter: 'M', cartel: 1,
          who: { n: 'Iggy', e: '🦎' },
          hi: '¡Me encanta el sol! ☀️ Hoy hace mucho calor. Busquen el CARTEL 1.',
          retos: [
            { t: 'mc', q: 'Hace calor. ☀️🥵 ¿Qué me pongo?', o: ['🩳 los pantalones cortos', '🧥 el abrigo', '🧤 los guantes'], a: 0, p: 'Cuando hace calor, necesitas ropa fresca y corta.' },
            { t: 'error', q: '🔍 Una palabra está mal. ¡Tóquenla!', s: 'Hace calor. ☀️ Me pongo la bufanda. 🧣', w: 'bufanda.', p: '¿La bufanda 🧣 es para el calor o para el frío?' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 1. ¿Qué me pongo cuando hace calor? ☀️ Escriban los 3 números, de menor a mayor.', code: '246', p: 'Busquen: 🕶️ las gafas de sol, 🩳 los pantalones cortos y 🩴 las chanclas.' }
          ] },
        { id: 2, e: '❄️', n: 'Sección del Frío', letter: 'A', cartel: 2,
          who: { n: 'Teo', e: '🐹' },
          hi: '¡Brrr! 🥶 Tengo mucho frío. Busquen el CARTEL 2.',
          retos: [
            { t: 'mc', q: '✏️ ¿Qué le falta? «Cuando hace ____, me pongo el abrigo. 🧥»', o: ['frío 🥶', 'calor 🥵', 'sol ☀️'], a: 0, p: 'El abrigo 🧥 es para el invierno.' },
            { t: 'tiles', q: 'Deletreen: 🧣 la ____', word: 'BUFANDA', extra: 'OE', p: 'Empieza con B y termina con A: B _ _ _ _ _ A' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 2. ¿Qué me pongo cuando hace frío? ❄️ Escriban los 3 números, de menor a mayor.', code: '145', p: 'Busquen: 🧥 el abrigo, 🧣 la bufanda y 🧤 los guantes.' }
          ] },
        { id: 3, e: '🌧️', n: 'Sección de la Lluvia', letter: 'R', cartel: 3,
          who: { n: 'Mora', e: '🌸', img: 'img/mora.webp' },
          hi: '¡Ay, no! Hoy llueve mucho. 🌧️ No quiero mojarme. Busquen el CARTEL 3.',
          retos: [
            { t: 'mc', q: 'Llueve. 🌧️ ¿Qué necesito?', o: ['🕶️ las gafas de sol', '☂️ el paraguas', '🩱 el traje de baño'], a: 1, p: 'Lo usas sobre la cabeza para no mojarte. ☂️' },
            { t: 'error', q: '🔍 Miren el dibujo. Una palabra está mal. ¡Tóquenla!', s: '🌧️ Hoy hace sol.', w: 'sol.', p: 'En el dibujo hay nubes y agua. ¿Hace sol?' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 3. ¿Qué me pongo cuando llueve? 🌧️ Escriban los 3 números, de menor a mayor.', code: '245', p: 'Busquen: ☂️ el paraguas, 🥾 las botas de lluvia y el impermeable.' }
          ] },
        { id: 4, e: '💨', n: 'Sección del Tiempo Loco', letter: 'I', cartel: 4,
          who: { n: 'Bruno', e: '🐗' },
          hi: '¡El tiempo está loco hoy! Sol, viento, lluvia… 🌀 Busquen el CARTEL 4.',
          retos: [
            { t: 'mc', q: '💨🍃 ¿Qué tiempo hace?', o: ['Nieva.', 'Hace viento.', 'Hace calor.'], a: 1, p: 'Las hojas 🍃 vuelan por el aire.' },
            { t: 'tiles', q: '❄️ ¿Qué tiempo hace? Deletreen la palabra: ____', word: 'NIEVA', extra: 'LOS', p: 'Empieza con N. Es como «nieve»… N _ _ _ A' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 4. Escriban los números de: hace viento, nieva y hay tormenta. ¡En ese orden!', code: '346', p: 'Primero 💨, después ❄️ y al final ⛈️.' }
          ] }
     ,
        { id: 5, e: '🦋', n: '⭐ Sección de la Monarca', letter: 'S', cartel: 5,
          who: { n: 'Marisol', e: '🦋' },
          hi: '¡Hola! Soy Marisol, una mariposa monarca. Vuelo muy, muy lejos. ⭐ Reto de capitán: busquen el CARTEL 5, el viaje de Marisol.',
          retos: [
            { t: 'mc', q: '¿De dónde es Marisol? 🦋', o: ['De Belice 🌴', 'De Canadá 🍁', 'De México 🇲🇽'], a: 1, p: 'Lean el cartel 5. Busquen la hoja 🍁.' },
            { t: 'mc', q: '¿Cómo está Marisol cuando llega a la Gran Ceiba?', o: ['Está cansada y perdida. 😴', 'Está contenta y en casa. 😀', 'Está enojada. 😠'], a: 0, p: 'El viento es muy fuerte y Marisol vuela mucho.' },
            { t: 'error', fix: ['viento', 'el viento', 'hace viento'], q: '⭐ Reto de capitán: toquen la palabra equivocada y escriban la correcta.', s: 'Marisol está perdida porque hace calor.', w: 'calor.', p: 'En el otoño 🍂 hace… 💨' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 5. Escriban los números: ¿de dónde es Marisol? ¿Dónde está perdida? ¿Adónde va? ¡En ese orden!', code: '143', p: 'Primero 🍁, después 🌴 y al final el país de las monarcas en noviembre.' }
          ] },
        { id: 6, e: '🕯️', n: '⭐ Sección del Altar', letter: 'O', cartel: 6,
          who: { n: 'Arlo', e: '🦝' },
          hi: 'En esta sección hay una ofrenda, como la ofrenda de Santiago para Mamá Toña. 🕯️🌼 ⭐ Reto de capitán: busquen el CARTEL 6.',
          retos: [
            { t: 'mc', q: '¿Cómo se llama la abuela de Santiago?', o: ['Lupita', 'Mamá Toña', 'Mamá Rosa'], a: 1, p: 'Lupita es la hermanita de Santiago.' },
            { t: 'mc', q: '¿Por qué ponen agua 💧 en la ofrenda?', o: ['Para las flores. 🌼', 'El camino es largo y Mamá Toña tiene sed.', 'Para Lupita.'], a: 1, p: 'Mamá Toña viaja a casa. El camino es muy largo…' },
            { t: 'error', fix: ['azucar', 'de azucar'], q: '⭐ Reto de capitán: toquen la palabra equivocada y escriban la correcta.', s: 'Lupita pone una calaverita de chocolate. Dice «TOÑA».', w: 'chocolate.', p: 'Lean el número 6 del cartel. ¿De qué es la calaverita? 🍬' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 6. Escriban los números de: la foto, el cempasúchil y la calaverita. ¡En ese orden!', code: '316', p: 'Primero 🖼️, después 🌼 y al final 💀.' }
          ] },
        { id: 7, e: '⭐', n: '⭐ Sección de las Personas Especiales', letter: 'L', cartel: 7,
          who: { n: 'Emilio', e: '🧳' },
          hi: '¡Hola! Soy Emilio, de Colombia. En mi baúl hay historias de personas especiales. ⭐ Reto de capitán: busquen el CARTEL 7 y lean las tarjetas.',
          retos: [
            { t: 'mc', q: 'Lean la tarjeta A. ¿Quién es?', o: ['Lamine Yamal', 'Lionel Messi', 'Franklin Chang Díaz'], a: 1, p: 'Es de Rosario, Argentina. Lo llaman «la pulga».' },
            { t: 'mc', q: '¿Quién pinta muchos autorretratos? 🎨🪞', o: ['Shakira', 'José Andrés', 'Frida Kahlo'], a: 2, p: 'Es una pintora de México con flores en el pelo. 🌺' },
            { t: 'mc', q: '¿Quién cocina para las personas después de un huracán? 🌀🍲', o: ['José Andrés', 'Franklin Chang Díaz', 'Frida Kahlo'], a: 0, p: 'Es chef 👨‍🍳. De niño, cuida el fuego de la paella de su papá.' },
            { t: 'error', fix: ['colombia'], q: '⭐ Reto de capitán: toquen la palabra equivocada y escriban la correcta.', s: 'Shakira es de Barranquilla, México.', w: 'México.', p: 'Emilio dice: «¡Ella es de mi país!»' },
            { t: 'mc', q: '¿Quién hace naves de cartón 📦 con sus primos y hoy es astronauta? 🚀', o: ['Lionel Messi', 'Franklin Chang Díaz', 'Lamine Yamal'], a: 1, p: 'Es de Costa Rica. Trabaja en la NASA.' },
            { t: 'code', lock: true, q: 'Lamine Yamal hace un número con las manos ✋ cuando hace un gol. ¿Qué número es?', code: '304', p: 'Lean la tarjeta C. Es el código postal de su barrio.' }
          ] }
      ],
      final: {
        who: { n: 'Don Pico', e: '🐦', img: 'img/donpico.webp' },
        q: '¡Tienen las siete letras! Pongan las letras en orden y escriban la palabra secreta.',
        p: 'Es el nombre de la mariposa monarca. 🦋 Empieza con M.',
        tiles: true,
        win: ['¡Muy bien! La palabra secreta es MARISOL. 🦋', 'Ahora ustedes saben qué ropa ponerse cuando hace calor, cuando hace frío, cuando llueve y cuando hace viento. También recuerdan a Marisol, la ofrenda de Mamá Toña y a muchas personas especiales.', 'Marisol va al norte, a México. ¡Buen viaje, Marisol! 🦋', '¡CLIC! 🔓 La puerta de la tienda está abierta. — Don Pico']
      }
    }
  },
  teacherIntro: 'Escape room de unos 35–40 minutos para Upper Elementary (3–5). Secciones 1–4 (fáciles): «¿Qué me pongo cuando hace…?» (el tiempo y la ropa). Secciones 5–7 (⭐ retos de capitán, para que los capitanes guíen a su equipo): Marisol la monarca (cuentos 3–4 de Don Pico), El altar de Mamá Toña y la ofrenda, y personas especiales de El Baúl de Emilio (Messi, Frida, Lamine Yamal, José Andrés, Franklin Chang Díaz, Shakira). En los retos de capitán, al encontrar el error escriben la palabra correcta. Las guías son Chica y sus Amigos. Mucho apoyo visual con emoji. Retos: preguntas de opción, ¿qué le falta?, encuentra el error (solo tocan la palabra), deletrear con fichas de letras y candados de números con los carteles. El juego no tiene voz.',
  keyNotes: [
    'Cartel 1 (calor): 1 bufanda · 2 gafas de sol · 3 abrigo · 4 pantalones cortos · 5 guantes · 6 chanclas → candado <b>246</b>.',
    'Cartel 2 (frío): 1 abrigo · 2 traje de baño · 3 gafas de sol · 4 bufanda · 5 guantes · 6 chanclas → candado <b>145</b>.',
    'Cartel 3 (lluvia): 1 gafas de sol · 2 paraguas · 3 sombrero de playa · 4 botas de lluvia · 5 impermeable · 6 traje de baño → candado <b>245</b>.',
    'Cartel 4 (el tiempo): 1 hace sol · 2 llueve · 3 hace viento · 4 nieva · 5 está nublado · 6 hay tormenta → candado <b>346</b>.',
    'Cartel 5 (Marisol): 1 Canadá · 2 Estados Unidos · 3 México · 4 Belice · 5 Guatemala → candado <b>143</b> (de dónde es, dónde está perdida, adónde va).',
    'Cartel 6 (ofrenda): 1 cempasúchil · 2 velas · 3 foto · 4 agua · 5 tamales · 6 calaverita de azúcar · 7 rebozo · 8 papel picado → candado <b>316</b>.',
    'Cartel 7 (¿Quién soy?): A Messi · B Frida Kahlo · C Lamine Yamal · D José Andrés · E Franklin Chang Díaz · F Shakira. Candado <b>304</b>.',
    'Letras: Calor M · Frío A · Lluvia R · Tiempo loco I · Monarca S · Altar O · Personas L → <b>MARISOL</b>.',
    'Cierre sugerido (5 min): cada equipo dice una oración: «Cuando hace ____, me pongo ____.» y una cosa que aprendieron de una persona especial.'
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
    extra: [['Para hablar', '¿Qué tiempo hace hoy? · Hoy hace… · Hoy llueve… · Hoy nieva…']], foot: 'Sección del Tiempo Loco' },
  5: { title: 'CARTEL 5 · El viaje de Marisol 🦋', lead: 'Marisol es una mariposa monarca. Es anaranjada y negra. Es de Canadá 🍁. En el otoño 🍂 hace viento 💨. El viento es muy fuerte y Marisol está perdida en Belice 🌴. Está cansada 😴. Los amigos de la Gran Ceiba la ayudan: Teo le da una flor 🌺. Mañana, Marisol va al norte ⬆️, a México. En noviembre, en México hay muchas, muchas monarcas.',
    objects: [['1', 'Canadá', '', '🍁'], ['2', 'Estados Unidos', '', '🗽'], ['3', 'México', '', '🌋'], ['4', 'Belice', '', '🌴'], ['5', 'Guatemala', '', '🏛️']],
    extra: [['Para hablar', 'Marisol es de… · Marisol está… · Marisol va a…']], foot: '⭐ Sección de la Monarca' },
  6: { title: 'CARTEL 6 · La ofrenda de Mamá Toña 🕯️', lead: 'Santiago vive en Pátzcuaro, México. Su abuela, Mamá Toña, murió hace dos años. En el Día de Muertos, la familia pone una ofrenda para recordarla. Cada cosa tiene un número.',
    objects: [['1', 'el cempasúchil', 'flores naranjas: el camino a casa', '🌼'], ['2', 'las velas', 'dan luz', '🕯️'], ['3', 'la foto', 'Mamá Toña sonríe', '🖼️'], ['4', 'el agua', 'en un vaso', '💧'], ['5', 'los tamales', 'la comida de Mamá Toña', '🫔'], ['6', 'la calaverita de azúcar', 'dice «TOÑA»', '💀'], ['7', 'el rebozo', 'del abuelo Nacho', '🧣'], ['8', 'el papel picado', 'papel de colores', '🎏']],
    foot: '⭐ Sección del Altar' },
  7: { title: 'CARTEL 7 · ¿Quién soy? 🧳', lead: 'En el baúl de Emilio hay seis tarjetas. Lean cada tarjeta. ¿Quién es? Los nombres están abajo.',
    items: [
      ['Tarjeta A ⚽', 'Soy de Rosario, Argentina. De niño soy muy pequeño. Me llaman «la pulga». Mi abuela Celia me ayuda mucho. Juego al fútbol.'],
      ['Tarjeta B 🎨', 'Soy de México. Soy pintora. Pinto muchos autorretratos: pinto mi cara con un espejo 🪞. Tengo flores en el pelo 🌺.'],
      ['Tarjeta C ⚽', 'Soy de España. Mi familia es de Marruecos y de Guinea Ecuatorial. Juego al fútbol en el Barcelona. Cuando hago un gol, hago el número 304 con las manos ✋.'],
      ['Tarjeta D 🍳', 'Soy de España. Soy chef. De niño, mi papá cocina paella y yo cuido el fuego 🔥. Hoy cocino para las personas después de un huracán 🌀.'],
      ['Tarjeta E 🚀', 'Soy de Costa Rica. De niño hago naves de cartón 📦 con mis primos. Hoy soy el primer astronauta latinoamericano de la NASA.'],
      ['Tarjeta F 🎤', 'Soy de Barranquilla, Colombia. De niña, mi maestra dice que mi voz es «diferente». ¡Pero yo canto siempre! 🎶 Escribo mi primera canción a los ocho años.']
    ],
    names: ['Shakira', 'Lionel Messi', 'Franklin Chang Díaz', 'Frida Kahlo', 'José Andrés', 'Lamine Yamal'],
    foot: '⭐ Sección de las Personas Especiales' }
};
