/* ¿Cuál es el intruso? — juego de vocabulario (odd one out).
   Lo usan intruso.html (estudiantes) y la herramienta 🔎 «¿Cuál es el intruso?» de herramientas.html (TV + editor).
   Niveles: k2 (3 cosas, emoji), 35 (4 cosas, emoji), ms (4 palabras), sec (4 palabras).
   Cada grupo: { th: tema, it: [[emoji, palabra], …], odd: posición del intruso, why: [razón correcta, razón falsa, razón falsa] }
   Las razones completan la frase: «___ es el intruso porque …». La primera razón es la correcta (el juego las mezcla).
   Revisado: las razones falsas no son ciertas para el intruso. */
window.INTRUSO_LEVELS = {
  k2: { n: '🐣 K–2', d: 'Lower Elementary · 3 dibujos' },
  '35': { n: '🧭 3.º–5.º', d: 'Upper Elementary · 4 dibujos' },
  ms: { n: '🏫 Middle School', d: '4 palabras · explica por qué' },
  sec: { n: '🎓 Secondary', d: '4 palabras · explica por qué' }
};
window.INTRUSO_ORDER = ['k2', '35', 'ms', 'sec'];
window.INTRUSO_DEFAULT = {
  k2: [
    { th: 'Los animales', it: [['🐶', 'el perro'], ['🐱', 'el gato'], ['🍎', 'la manzana']], odd: 2, why: ['no es un animal', 'es grande', 'es azul'] },
    { th: 'Los animales', it: [['🐟', 'el pez'], ['🐬', 'el delfín'], ['🐒', 'el mono']], odd: 2, why: ['no vive en el agua', 'no es un animal', 'es azul'] },
    { th: 'Los animales', it: [['🐦', 'el pájaro'], ['🦋', 'la mariposa'], ['🐢', 'la tortuga']], odd: 2, why: ['no vuela', 'no es un animal', 'es roja'] },
    { th: 'Los animales', it: [['🐘', 'el elefante'], ['🦒', 'la jirafa'], ['🐜', 'la hormiga']], odd: 2, why: ['es pequeña', 'no es un animal', 'vive en el agua'] },
    { th: 'Los colores', it: [['🔴', 'rojo'], ['🔵', 'azul'], ['🍌', 'el plátano']], odd: 2, why: ['no es un color', 'es grande', 'es un animal'] },
    { th: 'Los colores', it: [['🍓', 'la fresa'], ['🍅', 'el tomate'], ['🥦', 'el brócoli']], odd: 2, why: ['no es rojo', 'no es comida', 'es un animal'] },
    { th: 'Los colores', it: [['🐸', 'la rana'], ['🥒', 'el pepino'], ['🌻', 'el girasol']], odd: 2, why: ['no es verde', 'es un animal', 'es azul'] },
    { th: 'Los colores', it: [['☀️', 'el sol'], ['🍋', 'el limón'], ['🍆', 'la berenjena']], odd: 2, why: ['no es amarilla', 'es un animal', 'es roja'] },
    { th: 'La comida', it: [['🍕', 'la pizza'], ['🍔', 'la hamburguesa'], ['👟', 'el zapato']], odd: 2, why: ['no es comida', 'es rojo', 'es un animal'] },
    { th: 'La comida', it: [['🥛', 'la leche'], ['🧃', 'el jugo'], ['🍪', 'la galleta']], odd: 2, why: ['no es una bebida', 'no es comida', 'es azul'] },
    { th: 'La comida', it: [['🍎', 'la manzana'], ['🍌', 'el plátano'], ['🥕', 'la zanahoria']], odd: 2, why: ['no es una fruta', 'no es comida', 'es un animal'] },
    { th: 'La ropa y el cuerpo', it: [['👕', 'la camisa'], ['👖', 'los pantalones'], ['🐄', 'la vaca']], odd: 2, why: ['no es ropa', 'es pequeña', 'es comida'] },
    { th: 'La ropa y el cuerpo', it: [['👁️', 'el ojo'], ['👃', 'la nariz'], ['🧦', 'el calcetín']], odd: 2, why: ['no es parte del cuerpo', 'es un animal', 'es comida'] },
    { th: 'La ropa y el cuerpo', it: [['🧢', 'la gorra'], ['🎩', 'el sombrero'], ['🧤', 'los guantes']], odd: 2, why: ['no son para la cabeza', 'no son ropa', 'son un animal'] },
    { th: 'La escuela y los números', it: [['✏️', 'el lápiz'], ['📚', 'el libro'], ['🍉', 'la sandía']], odd: 2, why: ['no es de la escuela', 'es un animal', 'es azul'] },
    { th: 'La escuela y los números', it: [['1️⃣', 'uno'], ['2️⃣', 'dos'], ['🔵', 'azul']], odd: 2, why: ['no es un número', 'es comida', 'es un animal'] }
  ],
  '35': [
    { th: 'Los animales y sus hábitats', it: [['🐒', 'el mono'], ['🦜', 'el loro'], ['🐆', 'el jaguar'], ['🐪', 'el camello']], odd: 3, why: ['no vive en la selva', 'no es un animal', 'no tiene patas'] },
    { th: 'Los animales y sus hábitats', it: [['🐠', 'el pez'], ['🦈', 'el tiburón'], ['🐙', 'el pulpo'], ['🐄', 'la vaca']], odd: 3, why: ['no vive en el mar', 'no es un animal', 'es pequeña'] },
    { th: 'Los animales y sus hábitats', it: [['🦅', 'el águila'], ['🦉', 'el búho'], ['🦇', 'el murciélago'], ['🐍', 'la serpiente']], odd: 3, why: ['no puede volar', 'no es un animal', 'vive en el mar'] },
    { th: 'Los animales y sus hábitats', it: [['🐻‍❄️', 'el oso polar'], ['🐧', 'el pingüino'], ['🦭', 'la foca'], ['🦒', 'la jirafa']], odd: 3, why: ['no vive donde hace mucho frío', 'no es un animal', 'no tiene patas'] },
    { th: 'La comida', it: [['🍎', 'la manzana'], ['🍇', 'las uvas'], ['🍉', 'la sandía'], ['🥔', 'la papa']], odd: 3, why: ['no es una fruta', 'no es comida', 'es roja'] },
    { th: 'La comida', it: [['🍦', 'el helado'], ['🍰', 'el pastel'], ['🍫', 'el chocolate'], ['🧅', 'la cebolla']], odd: 3, why: ['no es dulce', 'no es comida', 'es una bebida'] },
    { th: 'La comida', it: [['🥤', 'el refresco'], ['☕', 'el café'], ['🧃', 'el jugo'], ['🍞', 'el pan']], odd: 3, why: ['no es una bebida', 'no es comida', 'es una fruta'] },
    { th: 'La comida', it: [['🌮', 'el taco'], ['🫔', 'el tamal'], ['🍣', 'el sushi'], ['🌯', 'el burrito']], odd: 2, why: ['no es comida mexicana', 'no es comida', 'es dulce'] },
    { th: 'La ropa y el clima', it: [['🧥', 'el abrigo'], ['🧣', 'la bufanda'], ['🧤', 'los guantes'], ['🩳', 'los pantalones cortos']], odd: 3, why: ['no son ropa para el frío', 'no son ropa', 'son para la cabeza'] },
    { th: 'La ropa y el clima', it: [['☀️', 'hace sol'], ['🌧️', 'llueve'], ['❄️', 'nieva'], ['🍕', 'la pizza']], odd: 3, why: ['no habla del clima', 'es un animal', 'es un color'] },
    { th: 'La ropa y el clima', it: [['🩴', 'las chanclas'], ['🕶️', 'las gafas de sol'], ['👙', 'el traje de baño'], ['🥾', 'las botas de lluvia']], odd: 3, why: ['no son para la playa', 'son comida', 'son un animal'] },
    { th: 'La escuela', it: [['✏️', 'el lápiz'], ['✂️', 'las tijeras'], ['📏', 'la regla'], ['🛏️', 'la cama']], odd: 3, why: ['no es de la escuela', 'es comida', 'es un animal'] },
    { th: 'La escuela', it: [['🧮', 'las matemáticas'], ['🔬', 'las ciencias'], ['🎨', 'el arte'], ['🛝', 'el recreo']], odd: 3, why: ['no es una materia', 'es comida', 'es un animal'] },
    { th: 'Los días, los meses y la familia', it: [['📅', 'el lunes'], ['📅', 'el martes'], ['📅', 'el viernes'], ['📅', 'enero']], odd: 3, why: ['es un mes, no un día', 'es un número', 'es un color'] },
    { th: 'Los días, los meses y la familia', it: [['🗓️', 'julio'], ['🗓️', 'agosto'], ['🗓️', 'junio'], ['🗓️', 'el sábado']], odd: 3, why: ['es un día, no un mes', 'es un número', 'es un animal'] },
    { th: 'Los días, los meses y la familia', it: [['👩', 'la mamá'], ['👨', 'el papá'], ['👵', 'la abuela'], ['👩‍🏫', 'la maestra']], odd: 3, why: ['no es de la familia', 'es un animal', 'es pequeña'] }
  ],
  ms: [
    { th: 'Deportes y pasatiempos', it: [['', 'el fútbol'], ['', 'el baloncesto'], ['', 'el voleibol'], ['', 'el ajedrez']], odd: 3, why: ['no se juega con una pelota', 'no es un juego', 'se juega en el agua'] },
    { th: 'Deportes y pasatiempos', it: [['', 'nadar'], ['', 'correr'], ['', 'leer'], ['', 'saltar']], odd: 2, why: ['no es una actividad física', 'no es un verbo', 'se hace en el agua'] },
    { th: 'Deportes y pasatiempos', it: [['', 'la cancha'], ['', 'la piscina'], ['', 'el estadio'], ['', 'la cocina']], odd: 3, why: ['no es un lugar para hacer deporte', 'no es un lugar', 'está al aire libre'] },
    { th: 'Deportes y pasatiempos', it: [['', 'el bate'], ['', 'la raqueta'], ['', 'el balón'], ['', 'la almohada']], odd: 3, why: ['no es equipo deportivo', 'no es un objeto', 'es para comer'] },
    { th: 'Comida saludable', it: [['', 'la zanahoria'], ['', 'la lechuga'], ['', 'el brócoli'], ['', 'las papas fritas']], odd: 3, why: ['no es una verdura fresca: es comida frita', 'no es comida', 'es una fruta'] },
    { th: 'Comida saludable', it: [['', 'el desayuno'], ['', 'el almuerzo'], ['', 'la cena'], ['', 'la cuchara']], odd: 3, why: ['no es una comida del día', 'no es de la cocina', 'es una bebida'] },
    { th: 'Comida saludable', it: [['', 'hervir'], ['', 'freír'], ['', 'hornear'], ['', 'dormir']], odd: 3, why: ['no es una forma de cocinar', 'no es un verbo', 'es una comida'] },
    { th: 'Comida saludable', it: [['', 'salado'], ['', 'dulce'], ['', 'picante'], ['', 'cansado']], odd: 3, why: ['no describe un sabor', 'no es un adjetivo', 'es un color'] },
    { th: 'Celebraciones y tradiciones', it: [['', 'el pastel'], ['', 'las velas'], ['', 'la piñata'], ['', 'el lápiz']], odd: 3, why: ['no es para una fiesta de cumpleaños', 'no es un objeto', 'es comida'] },
    { th: 'Celebraciones y tradiciones', it: [['', 'el cempasúchil'], ['', 'el pan de muerto'], ['', 'el papel picado'], ['', 'el árbol de Navidad']], odd: 3, why: ['no es del Día de Muertos', 'no es una decoración', 'es comida'] },
    { th: 'Celebraciones y tradiciones', it: [['', 'la Navidad'], ['', 'el Año Nuevo'], ['', 'el Día de Muertos'], ['', 'el martes']], odd: 3, why: ['no es una celebración', 'no es una palabra', 'es un mes'] },
    { th: 'Celebraciones y tradiciones', it: [['', 'bailar'], ['', 'celebrar'], ['', 'regalar'], ['', 'estudiar']], odd: 3, why: ['no es algo típico de una fiesta', 'no es un verbo', 'es comida'] },
    { th: 'Lugares naturales', it: [['', 'el volcán'], ['', 'la montaña'], ['', 'el cerro'], ['', 'la playa']], odd: 3, why: ['no es un lugar alto', 'no es un lugar natural', 'es una ciudad'] },
    { th: 'Lugares naturales', it: [['', 'el río'], ['', 'el lago'], ['', 'el mar'], ['', 'el desierto']], odd: 3, why: ['no tiene mucha agua', 'no es un lugar natural', 'es una ciudad'] },
    { th: 'Lugares naturales', it: [['', 'la cueva'], ['', 'la catarata'], ['', 'el arrecife'], ['', 'el centro comercial']], odd: 3, why: ['no es un lugar natural', 'no es un lugar', 'es un animal'] },
    { th: 'En la tienda', it: [['', 'la camiseta'], ['', 'la falda'], ['', 'los jeans'], ['', 'el probador']], odd: 3, why: ['no es ropa: es el lugar para probarse la ropa', 'es una persona', 'es comida'] },
    { th: 'En la tienda', it: [['', 'barato'], ['', 'la oferta'], ['', 'el descuento'], ['', 'caro']], odd: 3, why: ['no te ayuda a pagar menos', 'no es una palabra de la tienda', 'es ropa'] },
    { th: 'La tecnología', it: [['', 'la computadora'], ['', 'la tableta'], ['', 'el celular'], ['', 'el cuaderno']], odd: 3, why: ['no es un aparato electrónico', 'no sirve para escribir', 'es un animal'] },
    { th: 'La tecnología', it: [['', 'descargar'], ['', 'subir'], ['', 'guardar'], ['', 'nadar']], odd: 3, why: ['no es una acción en la computadora', 'no es un verbo', 'es un sustantivo'] }
  ],
  sec: [
    { th: 'La ciudad', it: [['', 'el semáforo'], ['', 'la esquina'], ['', 'la cuadra'], ['', 'la almohada']], odd: 3, why: ['no se encuentra en la calle', 'es un edificio', 'es un medio de transporte'] },
    { th: 'La ciudad', it: [['', 'el banco'], ['', 'la farmacia'], ['', 'el correo'], ['', 'el cajón']], odd: 3, why: ['no es un lugar de la ciudad', 'es un medio de transporte', 'es una persona'] },
    { th: 'La ciudad', it: [['', 'doblar a la derecha'], ['', 'seguir derecho'], ['', 'cruzar la calle'], ['', 'lavar los platos']], odd: 3, why: ['no sirve para dar direcciones', 'no es una acción', 'es un lugar'] },
    { th: 'La casa', it: [['', 'el sofá'], ['', 'la lámpara'], ['', 'la alfombra'], ['', 'el inodoro']], odd: 3, why: ['no está en la sala', 'no es un objeto de la casa', 'es comida'] },
    { th: 'La casa', it: [['', 'barrer'], ['', 'aspirar'], ['', 'sacudir'], ['', 'roncar']], odd: 3, why: ['no es un quehacer de la casa', 'no es un verbo', 'es un lugar'] },
    { th: 'La casa', it: [['', 'el ático'], ['', 'el sótano'], ['', 'el garaje'], ['', 'el vecino']], odd: 3, why: ['no es una parte de la casa: es una persona', 'es un mueble', 'es un electrodoméstico'] },
    { th: 'Los viajes', it: [['', 'el pasaporte'], ['', 'la maleta'], ['', 'el boleto'], ['', 'la licuadora']], odd: 3, why: ['no la necesitas para viajar', 'es un documento', 'es ropa'] },
    { th: 'Los viajes', it: [['', 'el aeropuerto'], ['', 'la estación de tren'], ['', 'la terminal de autobuses'], ['', 'la biblioteca']], odd: 3, why: ['no es un lugar de transporte', 'no es un edificio', 'está en la playa'] },
    { th: 'Los viajes', it: [['', 'aterrizar'], ['', 'despegar'], ['', 'abordar'], ['', 'cocinar']], odd: 3, why: ['no es una acción de un vuelo', 'no es un verbo', 'es un lugar'] },
    { th: 'Las noticias', it: [['', 'el periodista'], ['', 'el reportero'], ['', 'el presentador'], ['', 'el carpintero']], odd: 3, why: ['no trabaja en las noticias', 'no es una profesión', 'es un animal'] },
    { th: 'Las noticias', it: [['', 'el titular'], ['', 'la noticia'], ['', 'el artículo'], ['', 'el semáforo']], odd: 3, why: ['no es parte de un periódico', 'es una persona', 'es un verbo'] },
    { th: 'Animales asombrosos', it: [['', 'la ballena'], ['', 'el delfín'], ['', 'el manatí'], ['', 'el tiburón']], odd: 3, why: ['no es un mamífero: es un pez', 'no vive en el agua', 'es un ave'] },
    { th: 'Animales asombrosos', it: [['', 'el jaguar'], ['', 'el puma'], ['', 'el ocelote'], ['', 'el tapir']], odd: 3, why: ['no es un felino', 'no vive en Belice', 'es un ave'] },
    { th: 'Animales asombrosos', it: [['', 'la rana'], ['', 'el sapo'], ['', 'la salamandra'], ['', 'la iguana']], odd: 3, why: ['no es un anfibio: es un reptil', 'no es un animal', 'puede volar'] },
    { th: 'Temas globales', it: [['', 'reciclar'], ['', 'reducir'], ['', 'reutilizar'], ['', 'desperdiciar']], odd: 3, why: ['no ayuda al planeta', 'no es un verbo', 'es un lugar'] },
    { th: 'Temas globales', it: [['', 'la contaminación'], ['', 'la deforestación'], ['', 'la sequía'], ['', 'la solidaridad']], odd: 3, why: ['no es un problema: es algo positivo', 'no es una palabra', 'es un lugar'] }
  ]
};
