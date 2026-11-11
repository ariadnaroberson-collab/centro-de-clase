/* ¡Encerrados en el museo! — escape room de Middle School.
   Lo usan escape.html (juego), escape-carteles.html (carteles impresos) y escape-respuestas.html (hoja de la maestra).
   Dos versiones con la misma historia:
     ms1 → guías de Los Vecinos (episodios 1–2). A1/A2: opciones, banco de letras, más pistas. Sin verbos reflexivos (solo «se llama»).
     ms3 → guías de El Club del Barrio MS2 (episodios 1–2). A2/B1: escriben las respuestas.
   Tipos de reto:
     mc    → opción múltiple: o[], a = posición correcta
     text  → escriben la respuesta: ans[] respuestas aceptadas (sin importar mayúsculas ni acentos)
     tiles → deletrean con fichas de letras: word, extra = letras de más
     error → tocan la palabra equivocada: s = oración, w = palabra equivocada; fix[] = (opcional) escriben la correcta
     code  → candado de números con un cartel: code
   Cada reto tiene p = pista (aparece después de un intento equivocado).
   La palabra secreta final es RAÍZ: R (sala 1), A (sala 2), Í (sala 3), Z (sala 4). */
window.ESCAPE = {
  title: '¡Encerrados en el museo!',
  word: 'RAÍZ',
  carteles: {
    1: { t: 'Las postales de Profe Rivera', sala: 1 },
    2: { t: '¿Quién soy?', sala: 2 },
    3: { t: 'El altar del museo', sala: 3 }
  },
  levels: {
    /* ============================== MS1 · LOS VECINOS ============================== */
    ms1: {
      name: 'Middle School 1', crew: 'Los Vecinos',
      intro: {
        who: { n: 'Renata', e: '📣' },
        t: [
          'Es viernes por la tarde. Los cinco vecinos visitan el Museo de la Herencia en la Escuela San Antonio.',
          'En el museo hay mapas, fotos de personas especiales y un altar de Día de Muertos. Emilio mira todo. Valentina lee todo. Nico observa todo.',
          'De repente… ¡CLIC! La puerta está cerrada. Tomás empuja la puerta. ¡No abre!',
          'En la puerta hay una nota de Profe Rivera.'
        ],
        note: 'Queridos vecinos: la puerta tiene un candado. Para abrir la puerta, necesitan una palabra secreta. Hay cuatro salas. En cada sala hay retos y una letra. Con las cuatro letras, escriben la palabra secreta. ¡Buena suerte! — Profe Rivera'
      },
      salas: [
        { id: 1, e: '🗺️', n: 'Sala de los Países', letter: 'R', cartel: 1,
          who: { n: 'Emilio', e: '🔧' },
          hi: '¿Por qué hay tantos mapas aquí? ¡Vamos a investigar! Busquen el CARTEL 1: las postales de Profe Rivera.',
          retos: [
            { t: 'mc', q: 'Busquen la postal de Perú. ¿Cuál es la capital de Perú?', o: ['Lima', 'Quito', 'Bogotá'], a: 0, p: 'Lean la postal que dice «Perú». La capital tiene 4 letras.' },
            { t: 'error', q: 'Profe Rivera escribe una oración con un error. Toquen la palabra equivocada.', s: 'Tegucigalpa es la capital de Guatemala.', w: 'Guatemala', p: 'Busquen «Tegucigalpa» en el cartel. ¿De qué país es la capital?' },
            { t: 'mc', q: 'La ciudad de Profe Rivera es La Habana. La Habana es la capital de ____.', o: ['México', 'Cuba', 'España'], a: 1, p: 'Busquen la postal de La Habana. Profe Rivera dice: «mi país».' },
            { t: 'tiles', lock: true, q: 'Deletreen la capital de España.', word: 'MADRID', extra: 'ESO', p: 'Busquen la postal de España. La palabra empieza con M.' }
          ] },
        { id: 2, e: '⭐', n: 'Sala de las Personas Especiales', letter: 'A', cartel: 2,
          who: { n: 'Valentina', e: '📖' },
          hi: '¡Me encantan las historias de personas famosas! Busquen el CARTEL 2: ¿Quién soy? Lean las tarjetas.',
          retos: [
            { t: 'mc', q: 'Lean la tarjeta A. ¿Quién es?', o: ['Lionel Messi', 'Lamine Yamal', 'Diego Rivera'], a: 0, p: 'La tarjeta A dice «Rosario, Argentina» y «la pulga».' },
            { t: 'mc', q: 'Lean la tarjeta F. ¿Quién es?', o: ['José Guadalupe Posada', 'Pedro Linares', 'Lin-Manuel Miranda'], a: 1, p: 'La tarjeta F habla de los alebrijes. ¿Quién sueña con los alebrijes?' },
            { t: 'mc', q: 'Lamine Yamal celebra sus goles con el número ____.', o: ['10', '1936', '304'], a: 2, p: 'Lean la tarjeta B. Es el código postal de su barrio.' },
            { t: 'tiles', lock: true, q: 'El apodo de Messi es «la ____». Deletreen la palabra.', word: 'PULGA', extra: 'RET', p: 'Lean la tarjeta A. Es un insecto muy pequeño.' }
          ] },
        { id: 3, e: '🕯️', n: 'Sala del Altar', letter: 'Í', cartel: 3,
          who: { n: 'Nico', e: '✏️' },
          hi: '¡Qué altar tan bonito! Yo observo todo. Busquen el CARTEL 3: el altar del museo. ¿Recuerdan la historia de Mamá Toña?',
          retos: [
            { t: 'mc', q: 'En «El altar de Mamá Toña», ¿qué cocina Mamá Toña?', o: ['Pizza', 'Tamales', 'Hamburguesas'], a: 1, p: 'Santiago dice: «¡Mmm, los ____ de Mamá Toña!» Es una comida de maíz.' },
            { t: 'mc', q: 'Las flores naranjas del altar se llaman ____.', o: ['cempasúchil', 'rosas', 'girasoles'], a: 0, p: 'Lean el número 3 del cartel.' },
            { t: 'error', q: 'Encuentren el error en la oración. Toquen la palabra equivocada.', s: 'Lupita pone una calaverita de chocolate. La calaverita dice «TOÑA».', w: 'chocolate', p: 'Lean el número 8 del cartel. ¿De qué es la calaverita?' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 3. Escriban los números de: el agua, la foto y las velas. ¡En ese orden!', code: '647', p: 'Primero el número del agua. Después el número de la foto. Al final, el número de las velas.' }
          ] },
        { id: 4, e: '🏘️', n: 'Sala de las Historias', letter: 'Z', cartel: 0,
          who: { n: 'Tomás', e: '⚽' },
          hi: '¡Esta sala es de nosotros! Aquí hay historias de la Calle de los Almendros. Ustedes leyeron los episodios 1 y 2, ¿verdad?',
          retos: [
            { t: 'mc', q: '¿Quién es tímido y tiene un cuaderno de dibujos?', o: ['Emilio', 'Renata', 'Nico'], a: 2, p: 'Es el último vecino del episodio 1. Abre la puerta despacio.' },
            { t: 'error', q: 'Encuentren el error. Toquen la palabra equivocada.', s: 'Tomás camina y ¡pum! Valentina está en el suelo.', w: 'Valentina', p: '¿Quién es un poco torpe en el episodio 1?' },
            { t: 'mc', q: 'Emilio es muy curioso. Emilio pregunta «¿____?» mucho.', o: ['¿Dónde?', '¿Por qué?', '¿Cuándo?'], a: 1, p: 'Emilio siempre quiere saber la razón de todo.' },
            { t: 'tiles', lock: true, q: 'Episodio 2: no importa el lugar. Lo importante es estar ____.', word: 'JUNTOS', extra: 'ARE', p: 'Los cinco vecinos están… ¡todos con todos! Empieza con J.' }
          ] }
      ],
      final: {
        who: { n: 'Renata', e: '📣' },
        q: '¡Tenemos las cuatro letras! Pongan las letras en orden y escriban la palabra secreta.',
        p: 'Es una parte del árbol. Está debajo de la tierra. 🌳',
        tiles: true,
        win: ['¡Muy bien, vecinos! La palabra secreta es RAÍZ.', 'Una raíz está debajo del árbol. No vemos la raíz, pero el árbol necesita la raíz.', 'La herencia es como una raíz: los países, las personas especiales, las tradiciones y las historias son nuestras raíces.', '¡CLIC! La puerta está abierta. — Profe Rivera']
      }
    },

    /* ============================== MS3 · EL CLUB DEL BARRIO ============================== */
    ms3: {
      name: 'Middle School 3', crew: 'El Club del Barrio',
      intro: {
        who: { n: 'Mateo', e: '♟️' },
        t: [
          'Es viernes por la tarde. El Club del Barrio visita el nuevo Museo de la Herencia de la Escuela San Antonio, con objetos del festival y un altar de Día de Muertos.',
          'Diego observa los alebrijes. Ana Lucía lee sobre Lin-Manuel Miranda. Sofía quiere ver todo rápido. Camila toma notas.',
          'De repente… ¡CLAC! La puerta se cierra. Sofía empuja con fuerza, pero no se abre.',
          '—¿Y ahora qué hacemos? —pregunta Mateo, un poco nervioso. Camila encuentra una nota de Profe Rivera en la puerta.'
        ],
        note: 'Querido Club: la puerta tiene un candado especial. Para salir, necesitan una palabra secreta. El museo tiene cuatro salas; en cada una hay retos y, al final, una letra. Con las cuatro letras van a formar la palabra. Trabajen en equipo y lean con atención. ¡Nos vemos afuera! — Profe Rivera'
      },
      salas: [
        { id: 1, e: '🗺️', n: 'Sala de los Países', letter: 'R', cartel: 1,
          who: { n: 'Camila', e: '🎮' },
          hi: 'Tengo una teoría: Profe Rivera dejó pistas en sus postales de viaje. Busquen el CARTEL 1 y lean con atención.',
          retos: [
            { t: 'mc', q: 'Según las postales, ¿en qué país la moneda se llama lempira?', o: ['Costa Rica', 'Honduras', 'Guatemala'], a: 1, p: 'Busquen la palabra «lempira» en el cartel.' },
            { t: 'error', fix: ['costa rica'], q: 'Encuentren el error. Toquen la palabra equivocada y después escriban la correcta.', s: 'San José es la capital de Panamá.', w: 'Panamá', p: 'Busquen la postal de San José. ¿De qué país es?' },
            { t: 'text', q: 'Completen la oración: en Guatemala, el ____ es un pájaro y también es la moneda.', ans: ['quetzal', 'el quetzal'], p: 'Lean la postal de Guatemala. Empieza con Q.' },
            { t: 'text', lock: true, spell: true, q: 'Deletreen la capital de Honduras.', ans: ['tegucigalpa'], p: 'Está en una postal del cartel. Tiene 11 letras.' }
          ] },
        { id: 2, e: '⭐', n: 'Sala de las Personas Especiales', letter: 'A', cartel: 2,
          who: { n: 'Ana Lucía', e: '🎤' },
          hi: '¡Esta sala es mi favorita! Arte, música, fútbol… Busquen el CARTEL 2: ¿Quién soy? Cada tarjeta es una persona especial.',
          retos: [
            { t: 'text', q: 'Lean la tarjeta E. ¿Quién es? Escriban su apellido.', ans: ['posada', 'jose guadalupe posada', 'guadalupe posada'], p: 'Dibujó la primera Catrina hace más de cien años. Busquen en la lista de nombres.' },
            { t: 'error', fix: ['moana', 'encanto'], q: 'Encuentren el error. Toquen la palabra equivocada y después escriban la correcta.', s: 'Lin-Manuel Miranda escribió las canciones de la película Coco.', w: 'Coco', p: 'Lean la tarjeta C. ¿De qué películas escribió las canciones?' },
            { t: 'mc', q: '¿Por qué Lamine Yamal hace el número 304 cuando marca un gol?', o: ['Es su número de camiseta.', 'Es el código postal de su barrio, Rocafonda.', 'Es el año de su primer gol.'], a: 1, p: 'Lean la tarjeta B con atención.' },
            { t: 'text', lock: true, spell: true, q: 'La familia de Lamine Yamal es de Guinea Ecuatorial y de ____. Deletreen el país.', ans: ['marruecos'], p: 'Es un país del norte de África. Está en la tarjeta B.' }
          ] },
        { id: 3, e: '🕯️', n: 'Sala del Altar', letter: 'Í', cartel: 3,
          who: { n: 'Diego', e: '🐉' },
          hi: 'Miren ese alebrije… parece una criatura de mis partidas de D&D. Busquen el CARTEL 3: el altar del museo. ¿Recuerdan «El altar de Mamá Toña»?',
          retos: [
            { t: 'text', q: 'Completen la frase de Mamá Toña: «La cocina sin ____ no sabe a nada.»', ans: ['cancion', 'canciones', 'una cancion'], p: 'Mamá Toña siempre hacía esto mientras cocinaba. Es música con palabras.' },
            { t: 'mc', q: '¿Por qué la familia de Santiago pone un vaso de agua en la ofrenda?', o: ['Para regar las flores de cempasúchil.', 'Porque el camino es largo y las almas llegan con sed.', 'Para limpiar la foto de Mamá Toña.'], a: 1, p: 'Piensen en el viaje de Mamá Toña a la casa.' },
            { t: 'error', fix: ['rebozo', 'el rebozo'], q: 'Encuentren el error. Toquen la palabra equivocada y después escriban la correcta.', s: 'El abuelo Nacho pone el sombrero azul de Mamá Toña junto a la foto.', w: 'sombrero', p: 'Es una prenda tradicional: un chal largo. Empieza con R.' },
            { t: 'code', lock: true, q: 'Miren el CARTEL 3. Escriban los números de: lo que purifica, lo que guía a las almas con su color y su olor, y lo que tiene el nombre de la persona. ¡En ese orden!', code: '238', p: 'Primero: algo blanco en un platito. Segundo: flores naranjas. Tercero: algo dulce con un nombre.' }
          ] },
        { id: 4, e: '🏘️', n: 'Sala de las Historias', letter: 'Z', cartel: 0,
          who: { n: 'Sofía', e: '🏃' },
          hi: '¡Esta sala es sobre nosotros! ¿Recuerdan el horario perfecto de Mateo y la tarde del bienestar en Guanacaste Park? ¡Rápido, que yo no sé esperar!',
          retos: [
            { t: 'mc', q: '¿Cómo estudia Camila?', o: ['Mientras camina por el parque.', 'Con una aplicación con recompensas: estudia veinte minutos y descansa cinco.', 'Con música, para concentrarse.'], a: 1, p: 'Camila es la del grupo que ama la tecnología y los videojuegos.' },
            { t: 'error', fix: ['realista'], q: 'Encuentren el error. Toquen la palabra equivocada y después escriban la correcta.', s: 'Profe Rivera pregunta: ¿es mejor tener un horario perfecto o un horario rápido?', w: 'rápido', p: 'Profe Rivera quiere un horario que funcione en la vida real.' },
            { t: 'text', q: 'Completen: Mateo busca ____ entre estudiar, descansar y estar con sus amigos.', ans: ['balance', 'equilibrio', 'el balance', 'un balance'], p: 'Es un cognado: en inglés es igual.' },
            { t: 'text', lock: true, spell: true, q: '¿Cómo se dice «well-being» en español? Deletreen la palabra.', ans: ['bienestar', 'el bienestar'], p: 'Profe Rivera dice que incluye el cuerpo y la mente. Empieza con B.' }
          ] }
      ],
      final: {
        who: { n: 'Profe Rivera', e: '💃' },
        q: '¡Ya tienen las cuatro letras! Escriban la palabra secreta para abrir la puerta.',
        p: 'Es la parte del árbol que no vemos: está bajo la tierra. 🌳',
        tiles: false,
        win: ['¡Lo lograron, Club! La palabra secreta es RAÍZ.', 'Las raíces no se ven, pero sostienen todo el árbol. Así es la herencia: los países, las personas especiales, las tradiciones como el Día de Muertos y las historias que compartimos nos dan fuerza para crecer.', 'Y recuerden: «Don\'t be afraid to be ridiculous». ¡Ustedes no tuvieron miedo de intentar!', '¡CLAC! La puerta se abre. — Profe Rivera']
      }
    }
  }
};

/* Texto de los carteles impresos (los usa escape-carteles.html). Nivel A2, igual para MS1 y MS3. Sin respuestas marcadas. */
window.ESCAPE_CARTELES = {
  1: {
    title: 'CARTEL 1 · Las postales de Profe Rivera',
    lead: '¡Hola, chicos! Me gusta mucho viajar. Aquí están mis postales. Léanlas con atención.',
    items: [
      ['Postal de Perú', '¡Hola desde Lima! Lima es la capital de Perú. La moneda de Perú se llama sol. En Perú también está Machu Picchu, una ciudad antigua en las montañas.'],
      ['Postal de Cuba', '¡Hola desde La Habana! La Habana es la capital de Cuba, mi país. Aquí bailo salsa con mi familia. ¡Qué ritmo!'],
      ['Postal de Guatemala', '¡Hola desde la Ciudad de Guatemala! Es la capital de Guatemala. La moneda se llama quetzal, como el pájaro nacional: verde, rojo y muy elegante.'],
      ['Postal de Honduras', '¡Hola desde Tegucigalpa! Es la capital de Honduras. La moneda se llama lempira, por un líder indígena muy valiente.'],
      ['Postal de Costa Rica', '¡Hola desde San José! Es la capital de Costa Rica. La moneda se llama colón. ¡Hay volcanes, playas y mucha naturaleza!'],
      ['Postal de España', '¡Hola desde Madrid! Madrid es la capital de España. Está en el centro del país. Aquí hay un museo de arte enorme: el Museo del Prado.']
    ]
  },
  2: {
    title: 'CARTEL 2 · ¿Quién soy?',
    lead: 'Seis personas especiales del mundo hispano. Lean cada tarjeta. ¿Quién es? Los nombres están abajo.',
    items: [
      ['Tarjeta A', 'Nací en Rosario, Argentina. De niño, soy muy bajito, pero juego al fútbol con mucha determinación. Mi abuela Celia es mi primera entrenadora. Mi apodo es «la pulga».'],
      ['Tarjeta B', 'Nací en España. Mi familia es de Guinea Ecuatorial y de Marruecos. Soy zurdo. Cuando marco un gol, hago el número 304 con las manos: es el código postal de mi barrio, Rocafonda. De bebé, tengo una foto famosa con Messi.'],
      ['Tarjeta C', 'Nací en Nueva York. Mi familia es de Puerto Rico. De niño, paso los veranos con mis abuelos en Vega Alta. Escribo canciones y musicales. Escribí las canciones de las películas Moana y Encanto.'],
      ['Tarjeta D', 'Soy pintor de México. Pinto murales enormes en las paredes. Mi esposa es la artista Frida Kahlo. En 1947, en un mural famoso, le pongo un vestido elegante y un nombre a una calavera: «la Catrina».'],
      ['Tarjeta E', 'Soy artista de México. Hago grabados: dibujos para imprimir en los periódicos. Hace más de cien años, dibujé una calavera con un sombrero muy elegante. Hoy, todo el mundo la llama «la Catrina».'],
      ['Tarjeta F', 'Soy artesano de la Ciudad de México. Hago piñatas de papel maché. En 1936 tengo mucha fiebre y sueño con animales fantásticos de muchos colores. Los animales gritan: «¡Alebrijes!». Después, hago los primeros alebrijes.']
    ],
    names: ['Diego Rivera', 'Lamine Yamal', 'Pedro Linares', 'Lionel Messi', 'José Guadalupe Posada', 'Lin-Manuel Miranda']
  },
  3: {
    title: 'CARTEL 3 · El altar del museo',
    lead: 'Este es el altar de Día de Muertos del museo. Cada objeto tiene un número.',
    objects: [
      ['1', 'el papel picado', 'papel de colores con figuras recortadas'],
      ['2', 'la sal', 'en un platito blanco'],
      ['3', 'el cempasúchil', 'muchas flores naranjas'],
      ['4', 'la foto', 'de la persona que recordamos'],
      ['5', 'el pan de muerto', 'pan dulce con forma de huesitos encima'],
      ['6', 'el agua', 'en un vaso'],
      ['7', 'las velas', 'blancas, con fuego'],
      ['8', 'la calaverita de azúcar', 'con un nombre escrito']
    ],
    extra: [
      ['¿Sabías que…? La Catrina', 'José Guadalupe Posada dibujó la primera calavera elegante hace más de cien años. En 1947, Diego Rivera le puso vestido y el nombre «Catrina» en un mural.'],
      ['¿Sabías que…? Los alebrijes', 'En 1936, Pedro Linares soñó con criaturas imposibles: alas de mariposa, cuernos de toro, cabeza de águila. Después las hizo de papel maché. Hoy, los alebrijes son arte famoso de México.']
    ]
  }
};
