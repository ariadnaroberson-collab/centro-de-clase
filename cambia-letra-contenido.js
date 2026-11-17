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
window.CAMBIA = {
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
