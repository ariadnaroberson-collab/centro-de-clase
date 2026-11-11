/* El enigma de Chiquibul — contenido por defecto.
   Lo usan enigma.html (juego de los estudiantes) y herramientas.html (editor).
   Si existe data/enigma.json (la versión que publica la maestra), el juego usa esa.
   Preguntas: a = posición de la respuesta correcta (0, 1 o 2). ep = episodio. */
window.ENIGMA_DEFAULT = {
  v: 1,
  title: 'El enigma de Chiquibul',
  maxEp: 2,
  piece: { e: '🌀', n: 'pedazo de la espiral', nn: 'pedazos de la espiral' },
  intro: {
    A: '¡Hola, exploradores! En Chiquibul hay un enigma. Busquen los pedazos de la espiral. Contesten las preguntas. ¡Vamos!',
    A1: '¡Bienvenidos a Chiquibul! Chica y sus amigos tienen un enigma: los pedazos de una espiral están escondidos en la selva. Contesten las preguntas, lean las pistas y encuentren cada lugar en el mapa.'
  },
  first: {
    A: 'Primero, busca la casa de Chica. Es un árbol grande. 🏡',
    A1: 'Primero, busquen la casa de Chica: ella vive en un árbol grande. 🏡'
  },
  stations: [
    { spot: 1, e: '🏡', n: 'La casa de Chica', who: 'chica',
      hi: { A: '¡Hola! Me llamo Chica. ¡Vamos a jugar!', A1: '¡Hola, exploradores! Soy Chica. Vivo en un árbol grande en Chiquibul. ¿Listos para la aventura?' },
      qA: [
        { q: '¿Qué le gusta a Chica?', o: ['🤸 Saltar', '😴 Dormir', '🏊 Nadar'], a: 0, ep: 1 },
        { q: '¿Qué come Chica?', o: ['🍌 Fruta', '🐟 Pescado', '🍕 Pizza'], a: 0, ep: 1 }
      ],
      qA1: [
        { q: '¿Qué dice Chica cada mañana?', o: ['«¡Buenos días, selva!»', '«¡Buenas noches, selva!»', '«¡Adiós, escuela!»'], a: 0, ep: 1 },
        { q: '¿Qué le gusta hacer a Chica?', o: ['Saltar, mirar y preguntar', 'Dormir todo el día', 'Nadar en el río'], a: 0, ep: 1 },
        { q: '¿Dónde vive Chica?', o: ['En una cueva', 'En un árbol grande', 'En el río'], a: 1, ep: 1 }
      ],
      clue: { A: 'Busca al maestro. Es un tucán. Toca una campana. 🔔', A1: 'Ahora busquen la escuela. Allí un tucán viejo y sabio toca una campana. 🔔' } },

    { spot: 2, e: '🔔', n: 'La Escuela del Tucán', who: 'donpico',
      hi: { A: '¡Buenos días! Soy Don Pico. Soy el maestro.', A1: '¡Atención, atención! Soy Don Pico, el maestro. Tengo una pregunta para ustedes.' },
      qA: [
        { q: '¿Qué animal es Don Pico?', o: ['🐒 Un mono', '🐦 Un tucán', '🐊 Un cocodrilo'], a: 1, ep: 1 },
        { q: '¿Qué toca Don Pico?', o: ['🔔 Una campana', '🥁 Un tambor', '🎸 Una guitarra'], a: 0, ep: 1 }
      ],
      qA1: [
        { q: '¿Qué trabajo especial tiene Chica?', o: ['Limpiar la escuela', 'Buscar fruta para todos', 'Saludar al animal nuevo'], a: 2, ep: 1 },
        { q: '¿Por qué Don Pico elige a Chica para dar la bienvenida a Nico?', o: ['Porque es la más rápida de la selva.', 'Porque tiene el don de hacer sentir bienvenidos a los demás.', 'Porque es la más fuerte de la escuela.'], a: 1, ep: 1 },
        { q: '¿Qué toca Don Pico para llamar a los animales?', o: ['Una campana', 'Un tambor', 'Una flauta'], a: 0, ep: 1 }
      ],
      clue: { A: 'Busca al amigo nuevo. Tiene una mochila. 🎒 ¡Las hojas se mueven! 🌿', A1: 'Busquen al amigo nuevo en el bosque. Escuchen bien… ¡las hojas se mueven! 🌿' } },

    { spot: 3, e: '🌿', n: 'El bosque', who: 'nico',
      hi: { A: 'Hola… Me llamo Nico. Soy nuevo.', A1: '¡Hola! Me llamo Nico. Vengo de otra parte de Belice. Estoy un poco nervioso.' },
      qA: [
        { q: '¿Qué tiene Nico?', o: ['🎈 Un globo', '🎒 Una mochila', '⚽ Una pelota'], a: 1, ep: 1 },
        { q: '¿Quién es nuevo en la selva?', o: ['🐒 Chica', '🎒 Nico', '🐗 Bruno'], a: 1, ep: 1 }
      ],
      qA1: [
        { q: '¿Cómo está Nico cuando llega?', o: ['Muy enojado', 'Nervioso y un poco preocupado', 'Cansado y con sueño'], a: 1, ep: 1 },
        { q: '¿Qué le dice Nico a Chica?', o: ['«No conozco a nadie.»', '«Yo conozco a todos.»', '«Quiero ir a casa.»'], a: 0, ep: 1 },
        { q: '¿De dónde viene Nico?', o: ['Del mar', 'De otro planeta', 'De otra parte de Belice'], a: 2, ep: 1 }
      ],
      clue: { A: 'Alguien mira de lejos. No está feliz. 🐗 Busca el tronco viejo. 🪵', A1: 'Alguien los mira desde lejos, escondido detrás de un árbol. No está feliz. Busquen el tronco viejo. 🪵' } },

    { spot: 4, e: '🪵', n: 'El tronco viejo', who: 'bruno',
      hi: { A: 'Hola. Soy Bruno. Estoy un poco triste.', A1: 'Mmm… hola. Soy Bruno. A veces miro a los demás desde aquí, de lejos.' },
      qA: [
        { q: '¿Cómo está Bruno al final?', o: ['😊 Feliz', '😢 Triste', '😴 Cansado'], a: 1, ep: 1 },
        { q: '¿Qué animal es Bruno?', o: ['🐗 Un jabalí', '🐆 Un jaguar', '🐦 Un tucán'], a: 0, ep: 1 }
      ],
      qA1: [
        { q: '¿Cómo se siente Bruno al final del episodio 1?', o: ['Muy contento por Nico.', 'Un poco triste porque nadie lo recibió así a él.', 'No siente nada en particular.'], a: 1, ep: 1 },
        { q: '¿Qué animal es Bruno?', o: ['Un jaguar', 'Un tapir', 'Un jabalí'], a: 2, ep: 1 }
      ],
      clue: { A: 'Busca flores moradas. 💜 Una amiga ama el color morado.', A1: 'Busquen un lugar con flores moradas. A una amiga con alas le encanta ese color. 💜' } },

    { spot: 5, e: '🌸', n: 'Las flores moradas', who: 'mora',
      hi: { A: '¡Hola! Soy Mora. ¡Me gusta el morado!', A1: '¡Hola! Soy Mora. El morado es mi color favorito.' },
      qA: [
        { q: '¿Qué color le gusta a Mora?', o: ['💚 Verde', '💛 Amarillo', '💜 Morado'], a: 2, ep: 2 },
        { q: 'Don Pico dice: «No toquen las…»', o: ['🌸 Flores', '🍌 Frutas', '🪨 Piedras'], a: 0, ep: 2 }
      ],
      qA1: [
        { q: '¿Qué dice Don Pico en la excursión?', o: ['«Corten muchas flores.»', '«Busquen un color. No arranquen flores. Solo miren.»', '«Hoy hay examen.»'], a: 1, ep: 2 },
        { q: '¿Qué ve Nico en la excursión?', o: ['Una guacamaya roja', 'Un lagarto verde', 'Flores moradas'], a: 0, ep: 2 }
      ],
      clue: { A: 'Busca a un amigo verde. Está en la roca. 🦎🪨', A1: 'Busquen a un amigo verde como las hojas. Le gusta descansar en una roca grande. 🪨' } },

    { spot: 6, e: '🪨', n: 'La roca grande', who: 'iggy',
      hi: { A: '¡Hola! Soy Iggy. ¡Soy verde!', A1: '¡Hola! Soy Iggy. En la excursión vi a alguien muy parecido a mí.' },
      qA: [
        { q: 'Iggy ve un lagarto. ¿De qué color es?', o: ['❤️ Rojo', '💚 Verde', '💙 Azul'], a: 1, ep: 2 }
      ],
      qA1: [
        { q: '¿Por qué Iggy dice «¡Como yo!»?', o: ['Porque ve una fruta amarilla', 'Porque ve un río azul', 'Porque ve un lagarto verde, como él'], a: 2, ep: 2 },
        { q: '¿Adónde van los animales en el episodio 2?', o: ['De excursión por el bosque', 'A la playa', 'A la ciudad'], a: 0, ep: 2 }
      ],
      clue: { A: 'Busca la fruta amarilla. 💛 Un amigo dice: ¡Rica!', A1: 'Busquen el árbol de frutas amarillas. Un amigo dice que se pueden comer. 🥭' } },

    { spot: 7, e: '🥭', n: 'El árbol de frutas', who: 'teo',
      hi: { A: '¡Hola! Soy Teo. ¡Me gusta la fruta!', A1: '¡Hola! Soy Teo. ¡Estas frutas amarillas son muy ricas!' },
      qA: [
        { q: '¿Qué ve Teo?', o: ['🌸 Flores moradas', '💛 Fruta amarilla', '🐦 Un pájaro rojo'], a: 1, ep: 2 },
        { q: 'Después, ¿qué tiene la fruta?', o: ['🟤 Barro', '🍫 Chocolate', '❄️ Hielo'], a: 0, ep: 2 }
      ],
      qA1: [
        { q: 'Cuando los amigos regresan, ¿qué pasa con las frutas?', o: ['Desaparecen', 'Tienen barro', 'Son de color azul'], a: 1, ep: 2 },
        { q: '¿Quién ve las huellas y sabe qué pasó?', o: ['Mora', 'Teo', 'Don Pico'], a: 2, ep: 2 }
      ],
      clue: { A: 'Busca el río azul. 💙 ¡Allí hay mucho barro!', A1: 'Busquen el río azul. Cerca del agua alguien hizo mucho barro… ¿quién será? 🏞️' } },

    { spot: 8, e: '🏞️', n: 'El río azul', who: 'bruno',
      hi: { A: '¡Hola otra vez! Soy Bruno. Ahora estoy feliz.', A1: '¡Hola otra vez! Soy Bruno. Aprendí algo muy importante.' },
      qA: [
        { q: '¿Qué cubre Bruno con barro?', o: ['🌸 Las flores', '🦜 Los pájaros', '🌳 El árbol grande'], a: 0, ep: 2 },
        { q: '¿Qué aprende Bruno?', o: ['🟢 Solo el verde es bonito', '🌈 Todos los colores son bonitos', '😴 Nada'], a: 1, ep: 2 }
      ],
      qA1: [
        { q: '¿Por qué Bruno cubre las flores, piedras y hojas con barro?', o: ['Porque quiere jugar con barro.', 'Porque Don Pico se lo pide.', 'Porque cree que el bosque sería más bonito si todo fuera de un solo color.'], a: 2, ep: 2 },
        { q: 'Al final, ¿qué comprende Bruno sobre la selva?', o: ['Que la selva es hermosa porque cada color tiene su propio lugar.', 'Que el verde es el mejor color de todos.', 'Que debe esconder mejor el barro la próxima vez.'], a: 0, ep: 2 }
      ],
      clue: { A: '¡Tienes todos los pedazos! Busca el árbol más grande. 🌳', A1: '¡Tienen todos los pedazos! Ahora busquen el árbol más grande y más viejo de la selva. 🌳' } }
  ],
  finale: {
    who: 'donpico', e: '🌳', n: 'La Gran Ceiba',
    A: '¡Muy bien, exploradores! La espiral está completa. 🌀 ¿Qué es? ¡Es un secreto! Sigan leyendo con Chica.',
    A1: '¡Felicidades, exploradores! Encontraron todos los pedazos de la espiral. 🌀 ¿Qué significa? Nadie lo sabe… todavía. El enigma continúa en las próximas aventuras de Chica.'
  }
};

/* Personajes que puede usar el juego (el editor también los ofrece). */
window.ENIGMA_CAST = {
  chica:   { n: 'Chica',    img: 'img/chica.webp' },
  donpico: { n: 'Don Pico', img: 'img/donpico.webp' },
  mora:    { n: 'Mora',     img: 'img/mora.webp' },
  nico:    { n: 'Nico',     e: '🐹', badge: '🎒' },
  bruno:   { n: 'Bruno',    e: '🐗' },
  teo:     { n: 'Teo',      e: '🐹' },
  iggy:    { n: 'Iggy',     e: '🦎' },
  arlo:    { n: 'Arlo',     e: '🦝' }
};

/* Lugares fijos del mapa (x, y en % del mapa). spot 0 = la Gran Ceiba. */
window.ENIGMA_SPOTS = [
  [86, 17], // 0 Gran Ceiba
  [12, 80], // 1
  [31, 66], // 2
  [16, 40], // 3
  [40, 25], // 4
  [55, 52], // 5
  [71, 79], // 6
  [86, 52], // 7
  [64, 22]  // 8
];
