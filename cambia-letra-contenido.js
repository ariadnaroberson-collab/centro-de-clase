/* Cambia una letra · contenido
   many:    una palabra → muchas palabras nuevas (cambia UNA letra, mismo largo)
   ladders: escalera de A a B, una letra por paso. Cada paso: w = palabra, e = emoji, p = pista (CI)
   Niveles: k2 · 35 · ms · sec  */
window.CAMBIA_ORDER = ['k2', '35', 'ms', 'sec'];
window.CAMBIA_LEVELS = {
  k2:  { n: '🐣 K–2',   d: 'Palabras cortas con dibujos' },
  '35':{ n: '🧭 3.º–5.º', d: 'Palabras cortas de la clase' },
  ms:  { n: '🏫 Middle School', d: 'Palabras de 4 y 5 letras' },
  sec: { n: '🎓 Secondary', d: 'Escaleras largas y palabras nuevas' }
};
window.CAMBIA_RETO = {
  k2: {
    many: [
      { w: 'pato', e: '🦆', r: [['gato','🐱','Hace miau.'],['pata','🐾','El perro tiene cuatro.'],['pavo','🦃','Un pájaro grande.'],['palo','🪵','Es de madera.']] },
      { w: 'boca', e: '👄', r: [['foca','🦭','Vive en el mar y en el hielo.'],['roca','🪨','Es dura y gris.'],['bota','👢','Va en el pie.'],['boda','💒','Una fiesta: ¡se casan!']] },
      { w: 'casa', e: '🏠', r: [['cama','🛏️','Para dormir.'],['caja','📦','Un regalo viene en una…'],['cara','😊','Ojos, nariz y boca.']] },
      { w: 'luna', e: '🌙', r: [['lana','🧶','Para hacer un suéter.'],['cuna','👶','La cama del bebé.'],['lupa','🔍','Para ver cosas pequeñas.']] },
      { w: 'sol', e: '☀️', r: [['col','🥬','Una verdura verde.'],['sal','🧂','Blanca, en la comida.'],['gol','⚽','¡En el fútbol!']] },
      { w: 'mano', e: '✋', r: [['mono','🐒','Come bananas.'],['mago','🧙','Hace magia.']] }
    ],
    ladders: [
      { s: [['gato','🐱','Hace miau.'],['pato','🦆','Hace cuac.'],['palo','🪵','Es de madera.'],['pelo','💇','Está en tu cabeza.']] },
      { s: [['casa','🏠','Vives en tu…'],['cama','🛏️','Para dormir.'],['rama','🌿','Parte del árbol.'],['rana','🐸','Es verde y salta.']] },
      { s: [['piña','🍍','Fruta amarilla con corona.'],['niña','👧','Una chica pequeña.'],['niño','👦','Un chico pequeño.']] },
      { s: [['boca','👄','Para comer y hablar.'],['foca','🦭','Vive en el mar y en el hielo.'],['roca','🪨','Es dura y gris.'],['ropa','👕','Camisa, pantalón, falda…']] },
      { s: [['mapa','🗺️','Para no perderte.'],['papa','🥔','Para hacer papas fritas.'],['capa','🦸','El superhéroe tiene una.']] },
      { s: [['oso','🐻','Un animal grande y café.'],['ojo','👁️','Para ver.'],['ajo','🧄','Huele fuerte. Va en la comida.']] },
      { s: [['mano','✋','Tiene cinco dedos.'],['mono','🐒','Come bananas.'],['moño','🎀','En el pelo o en un regalo.']] },
      { s: [['gol','⚽','¡En el fútbol!'],['sol','☀️','Amarillo, en el cielo.'],['sal','🧂','Blanca, en la comida.']] },
      { s: [['luna','🌙','En el cielo de noche.'],['lana','🧶','Para hacer un suéter.'],['rana','🐸','Es verde y salta.']] },
      { s: [['pez','🐟','Vive en el agua.'],['paz','☮️','Cuando no hay guerra.'],['pan','🍞','Para el sándwich.']] },
      { s: [['dedo','☝️','Tienes diez en las manos.'],['dado','🎲','Para jugar. Tiene números.']] },
      { s: [['sopa','🍲','Comida caliente, con cuchara.'],['ropa','👕','Camisa, pantalón, falda…'],['rosa','🌹','Una flor roja.']] }
    ]
  },
  '35': {
    many: [
      { w: 'gato', e: '🐱', r: [['pato','🦆','Hace cuac.'],['gata','🐈','Un gato chica.'],['rato','⏳','Un tiempo corto: «un ratito».'],['dato','💡','Información: «un dato curioso».'],['gano','🏆','Yo ___ el partido.']] },
      { w: 'casa', e: '🏠', r: [['caja','📦','Un regalo viene en una…'],['cara','😊','Ojos, nariz y boca.'],['cama','🛏️','Para dormir.'],['masa','🫓','Para hacer pan o tortillas.'],['pasa','🍇','Una uva seca.'],['cosa','❓','Un objeto.']] },
      { w: 'bota', e: '👢', r: [['boca','👄','Para comer y hablar.'],['bata','🥼','La ropa del doctor.'],['nota','🎵','Do, re, mi…'],['gota','💧','Una gota de agua.'],['boda','💒','Una fiesta: ¡se casan!'],['bote','🚤','Un barco pequeño.']] },
      { w: 'palo', e: '🪵', r: [['pelo','💇','Está en tu cabeza.'],['pato','🦆','Hace cuac.'],['pavo','🦃','Un pájaro grande.'],['paso','👣','Un pie adelante.'],['malo','👎','Lo contrario de bueno.'],['pala','🪏','Para hacer un hoyo.'],['polo','🧊','El Polo Norte es frío.']] },
      { w: 'cama', e: '🛏️', r: [['rama','🌿','Parte del árbol.'],['dama','👸','Una señora elegante.'],['fama','⭐','Los famosos tienen mucha…'],['cara','😊','Ojos, nariz y boca.'],['caja','📦','Un regalo viene en una…'],['coma','🍽️','¡Que coma frutas!']] },
      { w: 'mesa', e: '🍽️', r: [['masa','🫓','Para hacer pan o tortillas.'],['pesa','🏋️','En el gimnasio.'],['meta','🏁','El final de la carrera.']] }
    ],
    ladders: [
      { s: [['gato','🐱','Hace miau.'],['pato','🦆','Hace cuac.'],['palo','🪵','Es de madera.'],['pelo','💇','Está en tu cabeza.']] },
      { s: [['casa','🏠','Vives en tu…'],['cama','🛏️','Para dormir.'],['rama','🌿','Parte del árbol.'],['rana','🐸','Es verde y salta.']] },
      { s: [['boca','👄','Para comer y hablar.'],['bota','👢','Va en el pie.'],['gota','💧','Una gota de agua.'],['nota','🎵','Do, re, mi…']] },
      { s: [['luna','🌙','En el cielo de noche.'],['lana','🧶','Para hacer un suéter.'],['rana','🐸','Es verde y salta.'],['rama','🌿','Parte del árbol.']] },
      { s: [['mesa','🍽️','Comemos en la…'],['pesa','🏋️','En el gimnasio.'],['peso','⚖️','¿Cuánto pesas? Tu…']] },
      { s: [['piña','🍍','Fruta amarilla con corona.'],['niña','👧','Una chica pequeña.'],['niño','👦','Un chico pequeño.']] },
      { s: [['mapa','🗺️','Para no perderte.'],['papa','🥔','Para hacer papas fritas.'],['capa','🦸','El superhéroe tiene una.']] },
      { s: [['dedo','☝️','Tienes diez en las manos.'],['dado','🎲','Para jugar. Tiene números.'],['lado','↔️','Izquierda o derecha: un…']] },
      { s: [['sopa','🍲','Comida caliente, con cuchara.'],['ropa','👕','Camisa, pantalón, falda…'],['rosa','🌹','Una flor roja.']] },
      { s: [['foca','🦭','Vive en el mar y en el hielo.'],['roca','🪨','Es dura y gris.'],['ropa','👕','Camisa, pantalón, falda…'],['copa','🏆','El premio del campeón.']] }
    ]
  },
  ms: {
    many: [
      { w: 'toro', e: '🐂', r: [['loro','🦜','Un pájaro que habla.'],['coro','🎤','Un grupo que canta.'],['todo','💯','Lo contrario de nada.'],['tomo','🥤','Yo ___ agua.'],['topo','🕳️','Animal que vive bajo la tierra.']] },
      { w: 'canto', e: '🎤', r: [['santo','😇','Un día de santo.'],['tanto','➕','¡Te quiero ___!'],['manto','🧣','Una capa grande.'],['canta','🎶','Ella ___ muy bien.']] },
      { w: 'pasta', e: '🍝', r: [['pasto','🌱','La hierba verde.'],['pista','🏃','Para correr o bailar.'],['basta','✋','¡Ya es suficiente!'],['hasta','👋','¡___ mañana!']] },
      { w: 'carta', e: '✉️', r: [['corta','✂️','Lo contrario de larga.'],['carga','📦','Un camión lleva…'],['carpa','⛺','Una tienda grande del circo.'],['harta','😤','Ya no aguanta más.']] },
      { w: 'mira', e: '👀', r: [['tira','🗑️','Él ___ la basura.'],['gira','🌀','La rueda ___.'],['mina','⛏️','Para sacar oro.'],['mora','🫐','Una fruta pequeña y morada.']] },
      { w: 'calor', e: '🥵', r: [['color','🎨','Rojo, azul, verde…'],['valor','🦁','Ser valiente.']] }
    ],
    ladders: [
      { s: [['nueve','9️⃣','El número después de ocho.'],['nuevo','✨','Lo contrario de viejo.'],['huevo','🥚','La gallina lo pone.']] },
      { s: [['valor','🦁','Ser valiente.'],['calor','🥵','En Belice hace mucho…'],['color','🎨','Rojo, azul, verde…']] },
      { s: [['pista','🏃','Para correr o bailar.'],['pasta','🍝','Comida italiana.'],['hasta','👋','¡___ mañana!']] },
      { s: [['loro','🦜','Un pájaro que habla.'],['toro','🐂','Animal grande con cuernos.'],['tomo','🥤','Yo ___ agua.']] },
      { s: [['canto','🎤','Yo ___ una canción.'],['santo','😇','Un día de santo.'],['santa','🎅','¡___ Claus!']] },
      { s: [['gato','🐱','Hace miau.'],['pato','🦆','Hace cuac.'],['paso','👣','Un pie adelante.'],['peso','⚖️','¿Cuánto pesas? Tu…']] },
      { s: [['mesa','🍽️','Comemos en la…'],['masa','🫓','Para hacer pan o tortillas.'],['pasa','🍇','Una uva seca.'],['pata','🐾','El perro tiene cuatro.']] },
      { s: [['boca','👄','Para comer y hablar.'],['bota','👢','Va en el pie.'],['nota','🎵','Do, re, mi…']] },
      { s: [['casa','🏠','Vives en tu…'],['cama','🛏️','Para dormir.'],['rama','🌿','Parte del árbol.'],['ramo','💐','Muchas flores juntas.']] },
      { s: [['fiesta','🎉','¡Música, pastel y amigos!'],['siesta','😴','Dormir un rato por la tarde.']] }
    ]
  },
  sec: {
    many: [
      { w: 'carro', e: '🚗', r: [['barro','🟫','Tierra con agua.'],['jarro','🫖','Para servir agua o jugo.'],['corro','🏃','Yo ___ en el parque.'],['cerro','⛰️','Una montaña pequeña.']] },
      { w: 'manta', e: '🛌', r: [['menta','🌿','Una hoja con sabor fresco.'],['santa','😇','Una mujer muy buena.'],['tanta','➕','¡___ gente en la fiesta!'],['canta','🎶','Ella ___ muy bien.'],['manga','👕','La parte de la camisa para el brazo.'],['mansa','🐑','Tranquila, no es salvaje.']] },
      { w: 'siento', e: '💭', r: [['viento','🌬️','Aire que se mueve.'],['ciento','💯','Cien: «por ___».'],['siente','❤️','Ella ___ alegría.'],['sienta','🪑','Se ___ en la silla.']] },
      { w: 'cuento', e: '📖', r: [['cuenta','🧾','El papel con el precio en el restaurante.'],['cuente','🔢','Que ___ hasta diez.']] },
      { w: 'hueso', e: '🦴', r: [['queso','🧀','Se hace con leche.'],['huevo','🥚','La gallina lo pone.'],['hueco','🕳️','Un espacio vacío.']] },
      { w: 'puerta', e: '🚪', r: [['puerto','⚓','Donde llegan los barcos.'],['huerta','🥕','Un jardín de verduras.']] },
      { w: 'playa', e: '🏖️', r: [['plaza','⛲','El centro del pueblo.'],['plaga','🦗','Muchos insectos que hacen daño.']] }
    ],
    ladders: [
      { s: [['gato','🐱','Hace miau.'],['pato','🦆','Hace cuac.'],['pata','🐾','El perro tiene cuatro.'],['pasa','🍇','Una uva seca.'],['masa','🫓','Para hacer pan o tortillas.'],['mesa','🍽️','Comemos en la…']] },
      { s: [['queso','🧀','Se hace con leche.'],['hueso','🦴','El esqueleto tiene muchos.'],['huevo','🥚','La gallina lo pone.']] },
      { s: [['nueve','9️⃣','El número después de ocho.'],['nuevo','✨','Lo contrario de viejo.'],['huevo','🥚','La gallina lo pone.'],['hueso','🦴','El esqueleto tiene muchos.']] },
      { s: [['carro','🚗','Tiene cuatro ruedas.'],['cerro','⛰️','Una montaña pequeña.'],['cerdo','🐖','Hace oinc.']] },
      { s: [['viento','🌬️','Aire que se mueve.'],['ciento','💯','Cien: «por ___».'],['siento','💭','Lo ___ mucho.'],['sienta','🪑','Se ___ en la silla.']] },
      { s: [['manta','🛌','Te tapa en la cama.'],['santa','😇','Una mujer muy buena.'],['santo','😇','Un hombre muy bueno.']] },
      { s: [['puerta','🚪','Para entrar a la casa.'],['huerta','🥕','Un jardín de verduras.'],['huerto','🥬','Otra palabra para huerta.']] },
      { s: [['plato','🍽️','La comida va en el…'],['plata','🥈','Medalla de segundo lugar.'],['plaza','⛲','El centro del pueblo.']] },
      { s: [['loro','🦜','Un pájaro que habla.'],['coro','🎤','Un grupo que canta.'],['copo','❄️','Un ___ de nieve.'],['copa','🏆','El premio del campeón.']] },
      { s: [['valor','🦁','Ser valiente.'],['calor','🥵','En Belice hace mucho…'],['color','🎨','Rojo, azul, verde…']] }
    ]
  }
};

/* ===== 📖 PALABRAS DEL CUENTO (default) =====
   Solo palabras que cada grupo ya leyó/escuchó en sus cuentos de Cuentópolis.
   La pista es una frase del mundo del cuento: antes de mostrar la palabra, la frase sale con ____ (lectura con significado).
   many:    { w, e, src, r: [[palabra, emoji, frase]] }
   ladders: { src, s: [[palabra, emoji, frase], …] }  */
window.CAMBIA = {
  k2: {
    many: [
      { w: 'nico', e: '🦝', src: 'Chica y sus Amigos 1–2', r: [['pico','🦜','Don Pico es un pájaro.'],['niño','👦','Un niño lee el cuento.']] },
      { w: 'rojo', e: '🔴', src: 'Don Pico: Los colores', r: [['roja','🍎','La manzana es roja.']] },
      { w: 'hoy', e: '🗓️', src: 'Don Pico: Los días', r: [['soy','🙋','¡Hola! Soy Chica.']] },
      { w: 'manos', e: '🙌', src: 'Don Pico: Los números', r: [['magos','🧙','Los magos dicen: ¡abracadabra!']] },
      { w: 'martes', e: '🗓️', src: 'Don Pico: Los días', r: [['partes','🧩','El cuento tiene partes.']] },
      { w: 'contar', e: '🔢', src: 'Don Pico: Los números', r: [['cantar','🎶','¡Vamos a cantar!']] }
    ],
    ladders: [
      { src: 'Chica y sus Amigos 1–2', s: [['niño','👦','Un niño lee el cuento.'],['nico','🦝','Nico es un coatí.'],['pico','🦜','Don Pico es un pájaro.']] },
      { src: 'Don Pico: Los colores', s: [['rojo','🔴','El color rojo.'],['roja','🍎','La manzana es roja.'],['ropa','👕','Mi ropa favorita.']] },
      { src: 'Don Pico: Los números · Las estaciones', s: [['nuevo','✨','Nico es un amigo nuevo.'],['nueve','9️⃣','Uno, dos… ¡nueve!'],['nieve','❄️','En invierno hay nieve.']] }
    ]
  },
  '35': {
    many: [
      { w: 'casa', e: '🏠', src: 'Don Pico 3–5 · El altar de Mamá Toña', r: [['cada','🗓️','Cada día llueve un poco.'],['caja','📦','Una caja de chocolate.'],['casi','🤏','¡Casi es el Día de Muertos!']] },
      { w: 'ropa', e: '👕', src: 'Don Pico 3–5', r: [['rosa','🌹','Una rosa para la ofrenda.'],['roja','🔴','¿La gorra es roja?']] },
      { w: 'nico', e: '🦝', src: 'Chica y sus Amigos · Don Pico 3–5', r: [['pico','🦜','Don Pico mira el cielo.'],['niño','👦','Un niño necesita un suéter.']] },
      { w: 'calor', e: '🥵', src: 'Don Pico 3–5: Salió el sol', r: [['color','🎨','¿De qué color es la mariposa?'],['valor','🦁','Nico tiene valor.']] },
      { w: 'hoy', e: '🗓️', src: 'Don Pico 3–5', r: [['soy','🙋','¡Hola! Soy Marisol.'],['voy','🚶','Voy al mercado.']] },
      { w: 'luego', e: '👋', src: 'Don Pico 3–5', r: [['juego','🎲','Un juego para jugar adentro.'],['fuego','🔥','Las velas tienen fuego.']] },
      { w: 'toca', e: '👆', src: 'El altar de Mamá Toña', r: [['boca','👄','El pan va a la boca.'],['toña','👵','¡Hola, Mamá Toña!']] },
      { w: 'sol', e: '☀️', src: 'Don Pico 3–5: Salió el sol', r: [['sal','🧂','La sal va en la comida.']] }
    ],
    ladders: [
      { src: 'Chica y sus Amigos · Don Pico 3–5', s: [['niño','👦','Un niño necesita un suéter.'],['nico','🦝','Nico tiene frío.'],['pico','🦜','Don Pico mira el cielo.'],['poco','🤏','Llueve un poco.']] },
      { src: 'Don Pico 3–5 · El altar de Mamá Toña', s: [['rosa','🌹','Una rosa para la ofrenda.'],['ropa','👕','Nico necesita ropa: ¡llueve!'],['roja','🔴','¿La gorra es roja?']] },
      { src: 'Don Pico 3–5: Salió el sol', s: [['valor','🦁','Nico tiene valor.'],['calor','🥵','¡Hace calor!'],['color','🎨','¿De qué color es la mariposa?']] },
      { src: 'Don Pico 3–5 · El altar de Mamá Toña', s: [['fuego','🔥','Las velas tienen fuego.'],['juego','🎲','Un juego para jugar adentro.'],['luego','👋','¡Hasta luego, Marisol!']] },
      { src: 'Don Pico 3–5 · El altar de Mamá Toña', s: [['caja','📦','Una caja de chocolate.'],['casa','🏠','La familia está en casa.'],['cada','🗓️','Cada día llueve un poco.']] },
      { src: 'Don Pico 3–5 · El altar de Mamá Toña', s: [['voy','🚶','Voy al mercado.'],['hoy','🗓️','Hoy es el Día de Muertos.'],['soy','🙋','¡Hola! Soy Marisol.']] },
      { src: 'El altar de Mamá Toña', s: [['boca','👄','El pan va a la boca.'],['toca','👆','Don Pico toca la puerta.'],['toña','👵','¡Hola, Mamá Toña!']] },
      { src: 'Don Pico 3–5: Salió el sol', s: [['sal','🧂','La sal va en la comida.'],['sol','☀️','¡Salió el sol!'],['soy','🙋','¡Hola! Soy Marisol.']] }
    ]
  },
  ms: {
    many: [
      { w: 'casa', e: '🏠', src: 'Los Vecinos 1–2 (MS1)', r: [['cada','🗓️','Cada sábado jugamos en la calle.'],['casi','🤏','¡Casi es sábado!'],['pasa','❓','¿Qué pasa en la calle?']] },
      { w: 'alto', e: '📏', src: 'Los Vecinos · El Club del Barrio', r: [['alta','🧍‍♀️','¿Es alta o baja?'],['algo','🎁','¿Quieres algo?']] },
      { w: 'niño', e: '👦', src: 'Los Vecinos 1–2 (MS1)', r: [['niña','👧','Es una niña muy activa.'],['nico','🙋‍♂️','¡Hola, Nico!']] },
      { w: 'activo', e: '⚡', src: 'Los Vecinos 1–2 (MS1)', r: [['activa','⚡','Ella es muy activa.']] },
      { w: 'hacer', e: '🛠️', src: 'Los Vecinos 1–2 (MS1)', r: [['haces','🙋','¿Qué haces el sábado?'],['hacen','👥','¿Qué hacen tus amigos?']] },
      { w: 'piso', e: '🏢', src: 'El Club del Barrio 1–2 (MS3)', r: [['paso','👣','Paso a paso.'],['peso','⚖️','El peso de la mochila.']] },
      { w: 'camino', e: '🛤️', src: 'El Club del Barrio 1–2 (MS3)', r: [['camina','🚶‍♀️','Camila camina a la escuela.']] },
      { w: 'cuidar', e: '🫶', src: 'El Club del Barrio 1–2 (MS3)', r: [['cuidas','🙋','¿Cómo te cuidas?'],['cuidan','👥','Los amigos se cuidan.']] }
    ],
    ladders: [
      { src: 'Los Vecinos 1–2 (MS1)', s: [['nico','🙋‍♂️','¡Hola, Nico!'],['niño','👦','Nico es un niño.'],['niña','👧','¿Y su amiga? Es una niña.']] },
      { src: 'Los Vecinos 1–2 (MS1)', s: [['pasa','❓','¿Qué pasa?'],['casa','🏠','Estoy en mi casa.'],['cada','🗓️','Cada sábado jugamos en la calle.']] },
      { src: 'Los Vecinos · El Club del Barrio', s: [['algo','🎁','¿Quieres algo?'],['alto','📏','¿Nico es alto?'],['alta','🧍‍♀️','¿Y la niña? ¿Es alta?']] },
      { src: 'Los Vecinos 1–2 (MS1)', s: [['hacer','🛠️','¿Qué vas a hacer?'],['haces','🙋','¿Qué haces el sábado?'],['hacen','👥','¿Qué hacen tus amigos?']] },
      { src: 'El Club del Barrio 1–2 (MS3)', s: [['camila','🙋‍♀️','¡Hola, Camila!'],['camina','🚶‍♀️','Camila camina…'],['camino','🛤️','…por el camino a la escuela.']] },
      { src: 'El Club del Barrio 1–2 (MS3)', s: [['peso','⚖️','El peso de la mochila.'],['piso','🏢','¿En qué piso vives?'],['paso','👣','Paso a paso.']] },
      { src: 'El Club del Barrio 1–2 (MS3)', s: [['vez','🔁','Otra vez.'],['voz','🗣️','Habla en voz alta.'],['voy','🚶','Voy al club.']] },
      { src: 'El Club del Barrio 1–2 (MS3)', s: [['sentirme','🙂','Quiero sentirme bien.'],['sentirte','🙋','¿Cómo quieres sentirte?'],['sentirse','👥','Es normal sentirse nervioso.']] }
    ]
  },
  sec: {
    many: [
      { w: 'vez', e: '🔁', src: 'La Cuadrilla', r: [['voz','🗣️','Lee en voz alta.'],['ver','👀','Vamos a ver.'],['ven','👋','¡Ven aquí!']] },
      { w: 'maestra', e: '👩‍🏫', src: 'La Cuadrilla', r: [['maestro','👨‍🏫','El maestro explica.'],['muestra','🖼️','Muestra su dibujo a la clase.']] },
      { w: 'corta', e: '✂️', src: 'La Cuadrilla', r: [['corto','📏','Un video corto.'],['costa','🏖️','La costa de Belice.']] },
      { w: 'serie', e: '📺', src: 'La Cuadrilla', r: [['serio','😐','¿Por qué estás tan serio?'],['seria','😐','Ella está seria.']] },
      { w: 'fuente', e: '⛲', src: 'La Cuadrilla', r: [['frente','👉','Está frente a la escuela.'],['puente','🌉','Cruzan el puente.']] },
      { w: 'usar', e: '📱', src: 'La Cuadrilla', r: [['usas','🙋','¿Cuánto tiempo usas el celular?'],['usan','👥','Ellos usan la computadora.']] },
      { w: 'dibujar', e: '✏️', src: 'La Cuadrilla', r: [['dibujas','🙋','¿Tú dibujas bien?'],['dibujan','👥','Ellos dibujan en clase.']] }
    ],
    ladders: [
      { src: 'La Cuadrilla', s: [['maestro','👨‍🏫','El maestro explica.'],['maestra','👩‍🏫','La maestra pregunta.'],['muestra','🖼️','Muestra su dibujo a la clase.']] },
      { src: 'La Cuadrilla', s: [['frente','👉','Frente a la escuela…'],['fuente','⛲','…hay una fuente.'],['puente','🌉','Después cruzan el puente.']] },
      { src: 'La Cuadrilla', s: [['saludo','👋','Un saludo para todos.'],['saluda','🙋','Saluda al nuevo estudiante.'],['salida','🚪','Nos vemos en la salida.']] },
      { src: 'La Cuadrilla', s: [['tema','📝','¿Cuál es el tema?'],['toma','🥤','Toma agua.'],['toca','🎸','Toca la guitarra.']] },
      { src: 'La Cuadrilla', s: [['costa','🏖️','La costa de Belice.'],['corta','✂️','La clase es corta.'],['corto','📏','Un video corto.']] },
      { src: 'La Cuadrilla', s: [['ver','👀','Vamos a ver.'],['vez','🔁','Una vez más.'],['voz','🗣️','Lee en voz alta.']] },
      { src: 'La Cuadrilla', s: [['dibujar','✏️','Me gusta dibujar.'],['dibujas','🙋','¿Tú dibujas bien?'],['dibujan','👥','Ellos dibujan en clase.']] },
      { src: 'La Cuadrilla', s: [['serie','📺','Mi serie favorita.'],['serio','😐','¿Por qué estás tan serio?'],['seria','😐','Ella está seria.']] }
    ]
  }
};

/* ===== 🔤 SÍLABAS (K–2): sílaba → palabras que ya conocen (oral primero) ===== */
window.CAMBIA_SILABAS = [
  { s: 'ma', w: [['mano','✋'],['mangos','🥭'],['martes','🗓️']] },
  { s: 'mo', w: [['Mora','🦋'],['monita','🐒']] },
  { s: 'ni', w: [['Nico','🦝'],['niños','👧👦']] },
  { s: 'pi', w: [['Pico','🦜']] },
  { s: 'chi', w: [['Chica','🐒'],['Chiquibul','🌳']] },
  { s: 'ro', w: [['rojo','🔴'],['rombo','🔷'],['ropa','👕']] },
  { s: 'lu', w: [['lunes','🗓️'],['luz','💡']] },
  { s: 'co', w: [['colores','🎨'],['coatí','🦝'],['contar','🔢']] },
  { s: 'ho', w: [['hola','👋'],['hojas','🍃'],['hoy','🗓️']] },
  { s: 'ca', w: [['canasta','🧺'],['cantar','🎶']] },
  { s: 'se', w: [['selva','🌴'],['semana','🗓️']] },
  { s: 'a', w: [['azul','🔵'],['amarillo','🟡'],['árbol','🌳'],['amigos','🤝']] }
];
