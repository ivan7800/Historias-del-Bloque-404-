'use strict';
const SAVE_KEY='historias-bloque-404-campaign-v2';
const PREF_KEY='historias-bloque-404-prefs-v1';
const ENDINGS_KEY='historias-bloque-404-endings-v1';
const scenes={
  bar:{n:1,time:'22:10',date:'VIERNES · 16 OCTUBRE 1981',pov:'DANI ROLDÁN',stamp:'01 — BAR MANOLO',kicker:'16 OCTUBRE · 22:10',title:'Ese',quote:'«Una vuelta y lo dejamos donde está.»',alt:'Los cuatro amigos se han reunido frente al Bar Manolo.',text:[
    'El SEAT 124 llevaba tres noches aparcado en el mismo sitio. Blanco, sucio por los bajos, con una mancha de óxido sobre la rueda delantera. Nada especial. En el barrio había coches así por todas partes: coches que dormían en la calle y parecían pertenecer más al bloque que a sus dueños.',
    'A Javi sí le había llamado la atención. Los cuatro estaban frente al Bar Manolo, alargando una noche para la que no tenían dinero. De dentro escapaban el choque de los vasos, el repiqueteo de la máquina recreativa y una luz amarilla que duraba lo que tardaba en cerrarse la puerta.',
    'Dani notaba la grasa del taller alrededor de las uñas. Paco lo había tenido toda la tarde con un Renault 5 y solo lo había llamado carnicero dos veces. En casa lo esperaba la cena tapada; su madre trabajaba de noche y Eva seguramente seguiría haciendo los deberes con el televisor demasiado alto.',
    'Javi no necesitaba convencer a nadie de golpe. Dejaba la idea quieta entre todos hasta que parecía menos idiota. El coche, la calle vacía, una vuelta corta. Dani sabía que no era suyo. También sabía que no tenía por qué acercarse.'
  ],choices:[
    {label:'Le digo a Javi que ni se acerque al coche.',next:'car',effect:{dani:1,sebas:1},note:'Javi finge no escucharte; Sebas sí.'},
    {label:'Me quedo junto a Sebas esperando que Javi se canse.',next:'car',effect:{dani:0,sebas:1},note:'La idea no se va. Tampoco la mirada de Sebas.'},
    {label:'Propongo una vuelta corta y volver antes de las doce.',next:'car',effect:{dani:-1,javi:1},note:'Javi sonríe apenas. Dani acepta formar parte del plan.'}
  ]},
  car:{n:2,time:'22:24',date:'VIERNES · 16 OCTUBRE 1981',pov:'DANI ROLDÁN',stamp:'02 — LA LLAVE VIEJA',kicker:'UN RATO DESPUÉS · 22:24',title:'La llave',quote:'«Los coches te avisan antes de romperse.»',alt:'Dani, junto a la puerta del 124.',text:[
    'Dani cruzó la calle. Acababa de decir que Javi no debía acercarse al coche. Había sido más fácil decirlo desde la acera que quedarse mirando cómo los otros seguían. En el bolsillo llevaba la llave vieja de su padre, una llave de SEAT que ya no abría nada. Antonio le había enseñado a escuchar los motores. Después se había marchado dejando deudas, ropa vieja y aquella llave. Dani no sabía por qué la conservaba.',
    'Javi esperaba junto a la puerta. Melli había cruzado detrás de ellos, diciendo que solo estaba allí para impedir una tontería. Sebas seguía en la acera. Se le veía la cara en el reflejo oscuro del escaparate, quieta, como si todavía esperara que Dani se diera la vuelta.',
    'El coche arrancó a la segunda. El motor tosió y luego se sostuvo. Dani conocía ese sonido. O creyó conocerlo. Bajo el traqueteo hubo un golpe limpio y breve, como si alguien hubiese llamado desde el interior del maletero.',
    '—¿Has oído eso? —preguntó.\n—El qué —dijo Javi.\nMelli hizo una broma sobre el escape. Sebas no dijo nada.'
  ],choices:[
    {label:'Le digo a Sebas que suba. Nadie se queda atrás.',next:'road',effect:{sebas:1,dani:1},note:'Sebas sube sin dar las gracias. Pero sube.'},
    {label:'Le pido que venga, sin discutir más.',next:'road',effect:{sebas:0,javi:1},note:'Javi toma el silencio de Sebas como un sí.'},
    {label:'Arranco antes de que cambie de idea.',next:'road',effect:{sebas:-1,javi:1,exposure:1},note:'El hueco de Sebas se queda entre vosotros.'}
  ]},
  road:{n:3,time:'22:46',date:'VIERNES · 16 OCTUBRE 1981',pov:'DANI ROLDÁN',stamp:'03 — UNA VUELTA',kicker:'SANT ADRIÀ · 22:46',title:'Una vuelta',quote:'«Porque podemos.»',alt:'Los amigos conducen por las calles de Sant Adrià de noche.',text:[
    'Las farolas pasaban por el parabrisas a intervalos regulares. Javi hablaba de dar otra vuelta; Sebas quería regresar. Melli miraba las calles por la ventanilla, sin bromear. Los bloques iban quedando atrás y aparecían talleres cerrados, descampados y solares cercados con alambre.',
    'Dani tenía las manos en el volante. La llave vieja golpeaba su pierna cada vez que el coche cogía un bache. El motor parecía normal ahora. El reloj del salpicadero, en cambio, llevaba varios minutos marcando la misma hora. Dani volvió a mirarlo: 22:46. Al apartar los ojos, oyó el segundero avanzar una sola vez.',
    '—Tira por la avenida —dijo Sebas.\n—Por aquí llegamos antes —contestó Javi.\n—¿A dónde? —preguntó Melli.\nNadie le respondió.',
    'Al fondo apareció una pareja caminando. Javi se incorporó en el asiento. Sebas pronunció su nombre como una advertencia. Dani dijo que tomaría el siguiente cruce de vuelta al barrio. Javi ya tenía una mano en la manilla.'
  ],choices:[
    {label:'Giro en el siguiente cruce. Se acabó la vuelta.',next:'incident',effect:{dani:1,sebas:1},note:'Dani intenta volver. Javi ya ha visto a la pareja.'},
    {label:'Le digo a Javi que se siente y cierre la puerta.',next:'incident',effect:{sebas:1,javi:-1},note:'Por un segundo, Javi parece escuchar.'},
    {label:'No digo nada. Sigo mirando la carretera.',next:'incident',effect:{javi:1,dani:-1,exposure:1},note:'El silencio también puede ser una respuesta.'}
  ]},
  incident:{n:4,time:'23:02',date:'VIERNES · 16 OCTUBRE 1981',pov:'DANI ROLDÁN',stamp:'04 — UN SEGUNDO',kicker:'SANT ADRIÀ · 23:02',title:'Un segundo',quote:'«La única decisión que importaba.»',alt:'La pareja se vuelve al oír al grupo acercarse.',text:[
    'Javi abrió la puerta. Sebas se inclinó hacia delante. Melli dijo que se fueran. Dani tenía el volante, los pedales y tiempo para decidir. La calle rodeaba una manzana larga. Todavía podían continuar recto, tomar la avenida y regresar al barrio.',
    'La pareja caminaba sin prisa. La mujer llevaba el bolso en el hombro; el hombre iba medio paso por delante. Era una escena corriente. Eso la hacía más difícil de convertir en una historia lejana que le había ocurrido a otro.',
    '—Solo un tirón —dijo Javi. La frase redujo la noche a algo manejable. Sebas abrió su puerta. Melli ya no sonreía. Dani notó que apretaba el volante hasta hacerse daño en los nudillos.',
    'El coche redujo. Javi bajó antes de detenerse del todo. La mujer se volvió. Una mano agarró la correa. El hombre giró hacia ellos. Durante un instante, todos quedaron unidos a la misma decisión.'
  ],choices:[
    {label:'Piso el freno un instante, pero no llego a detenerme.',next:'escape',effect:{dani:1,sebas:1},note:'El recuerdo no cambiará: el coche siguió avanzando y el hombre cayó.'},
    {label:'Le grito a Javi que suelte el bolso.',next:'escape',effect:{javi:-1,sebas:1},note:'Javi no te oye. La correa cede cuando el coche ya se mueve.'},
    {label:'Me quedo mirando la carretera. No quiero ver.',next:'escape',effect:{dani:-1,javi:1},note:'Apartar la mirada no detuvo el coche.'}
  ]},
  escape:{n:5,time:'23:05',date:'VIERNES · 16 OCTUBRE 1981',pov:'DANI ROLDÁN',stamp:'05 — LA VUELTA',kicker:'SANT ADRIÀ · 23:05',title:'Las luces detrás',quote:'El retrovisor no te dice quién viene. Solo que algo queda atrás.',alt:'Farolas y calles industriales se reflejan en la luna trasera del SEAT.',text:[
    'El coche volvió a moverse. Las farolas cortaban la noche en franjas amarillas sobre el capó. Nadie pidió que pusieran la radio. El motor ocupaba todo el espacio que habían dejado las voces.',
    'Javi decía que no había sido para tanto. Sebas le contestaba que se callara. Melli miraba por la luna trasera buscando a la pareja, pero cada esquina devolvía una calle distinta y vacía.',
    'A lo lejos apareció una luz que podía ser la de otro coche o el reflejo de una farola. Dani no supo decidirlo. El reloj del salpicadero seguía clavado en las 22:46. Ya no miró otra vez.',
    'La salida del barrio estaba a unos minutos. Dani aún podía detenerse, hablar o fingir que el volante no era suyo.'
  ],choices:[
    {label:'Digo que al amanecer preguntaré por el herido.',next:'aftermath',effect:{dani:1,sebas:1},note:'La promesa todavía no es una reparación.'},
    {label:'Le exijo a Javi que no convierta esto en una hazaña.',next:'aftermath',effect:{javi:-1,sebas:1},note:'Javi se calla, pero no retira lo que ha hecho.'},
    {label:'Propongo que nadie hable hasta saber qué ha pasado.',next:'aftermath',effect:{dani:-1,javi:1},note:'El silencio evita respuestas y también las aplaza.'}
  ]},
  aftermath:{n:6,time:'23:11',date:'VIERNES · 16 OCTUBRE 1981',pov:'DANI ROLDÁN',stamp:'05 — LO QUE QUEDA',kicker:'CAMINO AL BARRIO · 23:11',title:'No mires atrás',quote:'«Solo se ha caído.»',alt:'El SEAT 124 se aleja mientras las farolas cruzan el retrovisor.',text:[
    'Dentro del coche nadie respiraba bien. Javi tenía la cara blanca y seguía intentando reducir lo ocurrido a una frase corta. Sebas decía que tenían que parar. Melli preguntaba si el hombre estaba vivo. Dani miró por el retrovisor y vio una silueta junto a la mujer. No pudo distinguir si se levantaba.',
    'Dani no detuvo el coche. Javi volvió a entrar; el hombre cayó y su mujer corrió hacia él. Sebas exigió que parasen. Melli preguntó si seguía vivo. No vieron el final de la calle: años después, Dani recordaría sobre todo la mano agarrada a la puerta y el ruido pequeño del cuerpo contra el asfalto.',
    'Entonces el motor repitió aquel golpe breve. La llave vieja tembló en el bolsillo de Dani. Por un instante, el espejo mostró la luz amarilla del Bar Manolo detrás de ellos, aunque hacía rato que lo habían dejado atrás.',
    'Dani parpadeó. La carretera volvió a ser carretera. Javi empezó a hablar de lo que dirían si alguien preguntaba. Esta vez nadie hizo una broma.'
  ],choices:[
    {label:'Me quedo con el nombre del barrio y busco el hospital.',next:'morning',effect:{dani:1,sebas:1},note:'Dani intenta averiguar quién es el hombre; el miedo lo demora.'},
    {label:'Sigo la versión de Javi y lo llamo accidente.',next:'morning',effect:{dani:-1,javi:1},note:'La palabra accidente no devuelve a nadie a casa.'},
    {label:'No discuto. Reproduzco el golpe del motor en mi cabeza.',next:'morning',effect:{mystery:1,sebas:1},note:'El sonido vuelve igual cada vez: breve, seco, imposible de ubicar.'}
  ]},
  morning:{n:7,time:'07:20',date:'SÁBADO · 17 OCTUBRE 1981',pov:'DANI ROLDÁN',stamp:'06 — ONCE PLANTAS',kicker:'A LA MAÑANA SIGUIENTE · 07:20',title:'La radio',quote:'«Sube eso.»',alt:'Dani escucha la radio en la cocina mientras su madre prepara café.',text:[
    'La radio estaba demasiado baja. Dani salió de la habitación descalzo y llegó a la cocina justo cuando el locutor cambiaba de noticia. Carmen preparaba café de espaldas a él, todavía con la bata puesta y el pelo recogido sin cuidado. Sobre la mesa había pan, una taza y el paquete de tabaco.',
    'La noticia hablaba de un hombre herido durante la noche en Sant Adrià. No dieron su nombre. Dijeron que una mujer había pedido ayuda y que algunos vecinos vieron un coche blanco abandonar el lugar. La descripción era corta. Suficiente para que Dani dejara de sentir el suelo bajo los pies.',
    'Carmen miró a su hijo. No preguntó nada todavía. Eva seguía dormida en el sofá, con un cuaderno abierto sobre el pecho. En el fregadero quedaba una olla de la cena. La vida de casa había seguido su curso mientras la otra noche no terminaba.',
    'Dani podía contar una parte, esconderlo todo o preguntar si alguien había llamado. Ninguna respuesta iba a devolver el mundo a la hora anterior.'
  ],choices:[
    {label:'Le cuento a Carmen que el coche era el mismo.',next:'rumour',effect:{dani:2},note:'Carmen escucha hasta el final. No te ofrece una salida fácil.'},
    {label:'Digo que anoche estuve en casa.',next:'rumour',effect:{dani:-2,exposure:1},note:'Carmen mira el abrigo húmedo. No insiste todavía.'},
    {label:'Pregunto si alguien ha llamado preguntando por mí.',next:'rumour',effect:{dani:0,exposure:1},note:'Carmen deja la cafetera sobre la mesa antes de contestar.'}
  ]},
  rumour:{n:8,time:'18:35',date:'LUNES · 19 OCTUBRE 1981',pov:'LUCÍA NAVARRO',stamp:'07 — LO QUE DICEN',kicker:'TRES DÍAS DESPUÉS · 18:35',title:'La versión',quote:'A veces el barrio sabe algo antes de saber qué ha pasado.',alt:'Lucía observa el bar y los bloques mientras se extiende un rumor.',text:[
    'Lucía supo que pasaba algo porque Javi llevaba dos días sin hacerse notar. En el barrio eso ya era bastante. Normalmente bastaba con entrar en el Bar Manolo o esperar cinco minutos junto a los bloques para oírlo reír, discutir o convertir una historia mediocre en una hazaña.',
    'Marisa dejó un periódico doblado sobre el mostrador. La noticia ocupaba poco espacio y tenía pocos datos. Cerca de la máquina recreativa, dos hombres discutían si el coche era un 124 o un 1430. Ninguno había visto el coche. Los dos estaban seguros.',
    'Lucía conocía a Dani desde antes de que empezara a hablar como si todo le diera igual. También sabía que Javi desaparecía cuando creía que la gente estaba mirando. La ausencia podía significar miedo, vergüenza o simplemente ganas de no dar explicaciones.',
    'En la puerta del bar, el neón no tenía nada de especial: un tubo viejo que fallaba cada pocas noches. Aun así, durante un parpadeo el reflejo de la calle pareció ir con retraso. Lucía se volvió. Detrás de ella no había nadie.'
  ],choices:[
    {label:'Pregunto a Marisa qué sabe de verdad y qué es rumor.',next:'witness',effect:{lucia:1,mystery:1},note:'Lucía separa lo que alguien vio de lo que alguien oyó.'},
    {label:'Defiendo a Dani, aunque no sé dónde estuvo.',next:'witness',effect:{lucia:1,exposure:1},note:'Tu lealtad queda clara. La certeza, no.'},
    {label:'Me voy sin meterme. Aquí todo acaba llegando.',next:'witness',effect:{lucia:-1},note:'Lucía se marcha. El rumor se queda en la barra.'}
  ]},
  witness:{n:9,time:'09:15',date:'MIÉRCOLES · 21 OCTUBRE 1981',pov:'INSPECTOR MIQUEL FERRER',stamp:'08 — EL TESTIGO',kicker:'BARCELONA · 09:15',title:'Dos cosas',quote:'«Eran jóvenes. Uno llevaba una franja clara en la manga.»',alt:'El inspector Ferrer escucha a un testigo en una sala de entrevistas.',text:[
    'El testigo estaba seguro de dos cosas: eran jóvenes y uno llevaba una cazadora con una franja clara en la manga. Del resto cambiaba de opinión cada vez que el inspector Ferrer volvía a preguntarle.',
    'Ferrer no levantó la voz. Dejó que el silencio ocupara la mesa. El testigo había visto el coche desde una ventana, de noche, después de oír un golpe. Podía recordar una cara o podía haberla reconstruido a partir de lo que se comentaba en el barrio.',
    'Sobre la mesa había un vaso de agua y un bloc. Ferrer anotó “coche claro”, tachó la palabra “blanco” y volvió a escuchar. El detalle que más se repetía en la calle no era siempre el más fiable.',
    'La pregunta era qué podía sostenerse con lo que el hombre había visto, no qué historia resultaba más convincente.'
  ],choices:[
    {label:'Pregunto solo por la franja de la manga y la distancia.',next:'months',effect:{evidence:2},note:'Ferrer registra el detalle que el testigo repite sin ayuda.'},
    {label:'Le pido que separe lo que vio de lo que ha oído después.',next:'months',effect:{evidence:2,lucia:1},note:'La declaración pierde adornos y gana cautela.'},
    {label:'Cierro la entrevista. La descripción todavía es incompleta.',next:'months',effect:{evidence:1,dani:1},note:'Ferrer deja constancia de lo que no puede afirmar.'}
  ]},
  months:{n:10,time:'22:40',date:'VIERNES · 19 MARZO 1982',pov:'DANI ROLDÁN',stamp:'09 — MÁS RÁPIDO',kicker:'CINTURÓN METROPOLITANO · NOCHE',title:'Más rápido',quote:'«Tal vez, si seguía conduciendo así, no podrían.»',alt:'Un coche avanza bajo farolas de carretera en las afueras de Barcelona.',text:[
    'Después de Joaquín, los periódicos dejaron de hablar de los chicos. Ellos siguieron viéndose. Primero para contarse que nadie sabía nada; después porque el dinero de Ramiro pagaba cosas que en casa no podían esperar. Los trabajos eran pequeños y cada uno prometía que sería el último.',
    'Dani descubrió que podía conducir deprisa sin dejar de pensar. Aquello le pareció una habilidad. Sebas veía otra cosa: cada vez que el coche aceleraba, los demás tenían menos tiempo para cambiar de opinión. Javi se reía y decía que por fin estaban dejando de ser chavales.',
    'Lucía dejó de esperar a que Dani terminara una frase que nunca llegaba. Tenía sus propios planes y los apuntaba en una libreta: un local, sillones, un lavacabezas. Cuando él le preguntó dónde quería estar, ella respondió: «En un sitio al que haya llegado yo». No se pelearon. Eso no lo hizo menos definitivo.',
    'El viernes, junto a un descampado, Javi dijo que podían seguir hasta el mar. Dani tenía el motor alto y las manos firmes. En el retrovisor, durante un instante, la carretera parecía continuar por donde ya habían pasado. Luego solo quedó la noche.'
  ],choices:[
    {label:'Le digo a Javi que paremos antes de que esto se convierta en costumbre.',next:'act-two',route:'taller',effect:{dani:1,sebas:1},note:'Dani intenta nombrar el cambio antes de que los demás lo acepten.'},
    {label:'Pregunto cuánto dinero hay y quién se queda con él.',next:'act-two',route:'dinero',effect:{exposure:1,evidence:1},note:'El dinero ya empieza a parecer una respuesta.'},
    {label:'Miro a Sebas; sabe que la noche no ha terminado.',next:'act-two',route:'sebas',effect:{sebas:1,javi:1},note:'Sebas devuelve la mirada. Los dos siguen dentro del coche.'}
  ]},
  price:{n:11,time:'09:30',date:'JUEVES · 14 OCTUBRE 1982',pov:'INSPECTOR MIQUEL FERRER',stamp:'09 — EL PRECIO',kicker:'ACTO III · LOS PERDIDOS',title:'Los que esperan',quote:'«Queríamos a Ramiro.»',alt:'Ferrer revisa carpetas de investigación en una comisaría.',text:[
    'La carpeta de Ramiro ocupaba media mesa. Las de los chicos cabían en una mano. Ferrer sabía que preparaban un golpe, pero no el lugar, la hora ni quién acabaría subiendo al coche. Salcedo quería detenerlos antes. Ferrer quería una prueba que alcanzara al hombre que los ponía a trabajar.',
    'A media tarde vio a Dani y Sebas en el taller de Paco. Discutían por una llave inglesa y se empujaban como si el mundo siguiera siendo pequeño. Ferrer pensó en entrar. No lo hizo. Se dijo que todavía no bastaba. Salcedo, desde el coche, no discutió: «Los ves así y te entran ganas de esperar».',
    'Ramiro apareció en un bar y se sentó frente a Dani. Ferrer podía intervenir. Esperó veinte minutos y dejó que el hombre se marchara. Esa noche escribió una orden para actuar si el golpe se concretaba. La firmó cuando los chicos ya llevaban un año aprendiendo a no pedir ayuda.',
    'El reloj de pared se atrasaba. Ferrer lo corrigió. Al volver a mirar, la aguja estaba otra vez en el mismo minuto. Se dijo que el mecanismo fallaba. En el expediente dejó espacio para lo que sabía y para lo que aún no podía demostrar.'
  ],choices:[
    {label:'Anoto que la vigilancia pudo haber cambiado el desenlace.',next:'melli',effect:{evidence:1,mystery:1},note:'Ferrer conserva una duda incómoda en la carpeta.'},
    {label:'Priorizo la detención de Ramiro y sigo esperando.',next:'melli',effect:{exposure:1},note:'El objetivo crece en importancia; el margen para intervenir se estrecha.'},
    {label:'Pido a Salcedo que refuerce la vigilancia de los chicos.',next:'melli',effect:{evidence:1,sebas:1},note:'La orden llega tarde y no convierte la sospecha en certeza.'}
  ]},
  melli:{n:12,time:'01:45',date:'VIERNES · 15 OCTUBRE 1982',pov:'MELLI CORTÉS',stamp:'10 — EL CLIC',kicker:'SANT ROC · DE MADRUGADA',title:'El mechero',quote:'Clic. Clic. Clic.',alt:'Melli solo en una cocina de madrugada, con un mechero sobre la mesa.',text:[
    'Melli llevaba días diciendo que estaba bien. Rosa ya no le preguntaba qué significaba aquello. Le ponía comida delante, le dejaba la puerta sin cerrar del todo y contaba las veces que oía el mechero desde la habitación.',
    'En el metal había una abolladura junto a la rueda. No recordaba cómo se la había hecho. Lo abría sin encenderlo: clic, clic, clic. El ruido le ordenaba el pecho durante un segundo. Luego volvía el resto: las caras, el periódico, la idea de que el barrio seguía hablando aunque nadie dijera su nombre.',
    'Javi apareció cuando la casa estaba a oscuras. Bromeó con que Melli se había vuelto un viejo. Melli quiso responder como antes. La frase no llegó. Javi le preguntó si iba a volver con ellos. No preguntó cómo estaba.',
    'Melli dijo que no sabía. Era la primera respuesta honesta de toda la semana. Afuera, un coche pasó por la avenida. El mechero vibró contra la mesa, aunque Melli juraría que no lo había tocado.'
  ],choices:[
    {label:'Le digo a Javi que no puedo salvarlo de sí mismo.',next:'ramiro',effect:{javi:-1,mystery:1},note:'Melli pone un límite y carga con el silencio que sigue.'},
    {label:'Le pregunto si Dani ha vuelto a trabajar con Ramiro.',next:'ramiro',effect:{dani:1,evidence:1},note:'La pregunta descubre más de lo que Melli quería saber.'},
    {label:'Me voy con Rosa y dejo el mechero en la mesa.',next:'ramiro',effect:{mystery:1,sebas:1},note:'La casa no resuelve el miedo, pero esta noche Melli no se queda solo.'}
  ]},
  ramiro:{n:13,time:'18:10',date:'JUEVES · 11 NOVIEMBRE 1982',pov:'DANI ROLDÁN',stamp:'11 — UNA ÚLTIMA VEZ',kicker:'BARCELONA · TARDE',title:'El precio',quote:'«No estás atado a mí.»',alt:'Dani y Ramiro sentados frente a frente en una mesa de bar.',text:[
    'Dani había decidido decir que no antes de entrar. Ramiro lo escuchó sin interrumpir. Un almacén, dinero en efectivo, dos hombres dentro. Dani solo tendría que conducir. La última frase era la misma de siempre, colocada para que el riesgo pareciera trabajo.',
    '—No voy.\n—Bien —dijo Ramiro.\nLa facilidad le molestó. Dani esperó que apareciera una amenaza, una deuda, un favor antiguo. Ramiro no levantó la voz. Le recordó que el grupo ya había dejado trabajos a medias y que alguien contaba con ellos. No dijo quién. No hacía falta.',
    'Dani se levantó. En la puerta vio un reflejo retrasado: por un instante, su silla seguía ocupada. Se volvió. La silla estaba vacía. Ramiro pagó el café y le deseó buenas tardes, como si acabaran de hablar del tiempo.',
    'Sebas esperaba en la esquina. Cuando Dani le dijo que había rechazado el trabajo, Sebas sonrió. No era alivio todavía. Era la posibilidad de que una decisión durase más de una noche.'
  ],choices:[
    {label:'Le digo a Sebas que no voy a volver atrás.',next:'melli2',effect:{dani:1,sebas:1},note:'Sebas te cree por ahora.'},
    {label:'Admito que el dinero me hizo dudar.',next:'melli2',effect:{dani:-1,sebas:1},note:'La sinceridad no te libra de la decisión siguiente.'},
    {label:'No le cuento que Ramiro dejó abierta la puerta.',next:'melli2',effect:{javi:1,dani:-1},note:'Hay una parte de la conversación que decides cargar solo.'}
  ]},
  melli2:{n:14,time:'21:30',date:'JUEVES · 11 NOVIEMBRE 1982',pov:'DANI ROLDÁN',stamp:'12 — LOS QUE SE QUEDAN',kicker:'SANT ROC · NOCHE',title:'Mañana',quote:'«Sin Paco.» — «Eso es imposible.»',alt:'Dani y Sebas hablan fuera de un taller de barrio por la noche.',text:[
    'En el taller, Paco había dejado un SEAT 124 blanco con una mancha reciente de aceite. No era el mismo coche. Dani lo sabía. Aun así, se quedó mirando la aleta hasta que Paco le tiró un trapo.',
    'Sebas esperaba fuera. Habló de un taller pequeño, dos elevadores y una moto que nunca se había podido comprar. Dani se rio de la moto. Sebas le dijo que no tenía gusto. Era una conversación ridícula, normal. Por eso parecía posible vivir dentro de ella.',
    'En el bloque, la luz de Carmen seguía encendida. Dani pensó en subir. No lo hizo. A media plaza vio a Javi caminar deprisa hacia el bar de Ramiro. Lo llamó. Javi no se detuvo.',
    'Dani podía volver a casa. Lo hizo durante quince pasos. Después recordó a Joaquín en el suelo, a Melli diciendo que no sabía y a Sebas subiendo al coche porque él tampoco quería dejarlo solo. Dio media vuelta.'
  ],choices:[
    {label:'Voy a buscar a Javi antes de que llegue a Ramiro.',next:'refusal',effect:{javi:1,sebas:1},note:'Le alcanzas; no consigues decidir por él.'},
    {label:'Llamo a Sebas y le pido que hable con Javi.',next:'refusal',effect:{sebas:1,dani:1},note:'Sebas ya va de camino.'},
    {label:'Entro primero a casa y le digo la verdad a Carmen.',next:'refusal',effect:{dani:1,exposure:1},note:'Carmen no puede escoger por ti. Te pregunta qué harás ahora.'}
  ]},
  refusal:{n:15,time:'22:05',date:'JUEVES · 11 NOVIEMBRE 1982',pov:'DANI ROLDÁN',stamp:'13 — EL NO',kicker:'VÍSPERA · BAR DE RAMIRO',title:'No basta',quote:'«No quiero que te mueras.»',alt:'Tres amigos discuten bajo la luz de un bar cerrado.',text:[
    'Javi ya estaba en el bar. Dani le pidió que no fuera. Sebas dijo lo mismo, con menos palabras. Javi les recordó que también habían dicho que no la primera vez. Aquello no lo convertía en una razón. Solo les quitaba la comodidad de fingir que podían hablar desde fuera.',
    'Javi nombró a Joaquín. Después a Melli. Después el taller de Paco y la familia de Dani. Sabía dónde apretar. Dani lo agarró de la cazadora; lo soltó antes de que aquello se convirtiera en otra cosa. Javi no estaba pidiendo permiso. Quería que alguien le demostrara que todavía podía elegir.',
    'Ramiro explicó el trabajo. Una nave, una recogida, dos hombres. Javi entraría. Sebas cubriría. Dani conduciría. Melli no estaba. Ninguno preguntó por qué: llevaban meses evitando esa pregunta.',
    'El coche oscuro esperaba junto a la acera. En el espejo lateral se reflejó una farola que no estaba detrás. Dani miró dos veces. La segunda, la calle era normal. Nadie lo comentó.'
  ],choices:[
    {label:'Acepto conducir mañana; si algo sale mal, quiero poder llevarlos al hospital.',next:'warehouse',effect:{sebas:1,dani:-1},note:'El control que buscas también te hace responsable.'},
    {label:'Le digo a Javi que no voy a llamar trabajo limpio a esto.',next:'warehouse',effect:{javi:-1,dani:1},note:'Javi se va sin mirarte. Os veréis al día siguiente.'},
    {label:'Le pido a Sebas que se quede fuera de la nave.',next:'warehouse',effect:{sebas:-1,dani:1},note:'Sebas no acepta que lo apartes ahora.'}
  ]},
  warehouse:{n:16,time:'21:35',date:'VIERNES · 12 NOVIEMBRE 1982',pov:'DANI ROLDÁN',stamp:'14 — LA NAVE',kicker:'CINTURÓN METROPOLITANO · NOCHE',title:'Antes del ruido',quote:'La calle parecía vacía. Eso fue lo primero que no gustó.',alt:'Un BMW oscuro detenido frente a un almacén industrial de noche.',text:[
    'A la noche siguiente Dani acudió a la cita. Nadie lo había obligado a regresar. El BMW era oscuro, grande y demasiado potente. Dani pasó la mano por el lateral y preguntó de quién era. Ramiro lo miró. Nadie contestó. Javi llevaba una pistola. Dani volvió a pedirle que la dejara. Javi no lo hizo.',
    'En el camino, uno de los hombres de Ramiro cantó mal y Javi hizo una imitación de Manolo. Sebas llegó a reírse. Durante un momento el coche pareció volver a ser el 124 de la primera noche. Luego el almacén apareció delante y la risa se apagó.',
    'Había otro coche estacionado al fondo, dos figuras detrás del cristal. Podían ser policías. Podían no serlo. Sebas dijo que se fueran. El hombre del bigote dijo que ya estaban allí. Javi abrió la puerta.',
    'Dani mantuvo las manos en el volante. Si arrancaba, podía marcharse. Si esperaba, quizá podía sacar a todos cuando salieran. Ya había usado esa explicación antes. No se había vuelto más cierta.'
  ],choices:[
    {label:'Acercaré el coche a la salida y les gritaré que vuelvan.',next:'chase',effect:{dani:1,sebas:1},note:'Dani prepara una salida. No puede obligarlos a usarla.'},
    {label:'Espero a Sebas, mirando la entrada y los espejos.',next:'chase',effect:{sebas:1,evidence:1},note:'Dani espera a que Sebas llegue corriendo.'},
    {label:'Bajo para sacar a Javi de la nave.',next:'chase',effect:{javi:1,exposure:1},note:'Un grito desde la entrada te obliga a volver al coche.'}
  ]},
  chase:{n:17,time:'22:10',date:'VIERNES · 12 NOVIEMBRE 1982',pov:'DANI ROLDÁN',stamp:'15 — LA CARRERA',kicker:'TORRE BARÓ · NOCHE',title:'La última carrera',quote:'«Solo quería llegar.»',alt:'Luces policiales persiguen un coche oscuro por calles nocturnas.',text:[
    'Javi salió con una bolsa. Sebas corrió hacia el coche. Dani arrancó. Detrás aparecieron luces azules y una sirena. El hombre de la nariz rota traía otra bolsa. Javi reía de miedo; Sebas le dijo que se callara. Dani solo veía cruces, faros y gente que no sabía que estaban llegando.',
    'Un golpe rompió el cristal trasero. Javi sacó la pistola. Sebas se abalanzó sobre su brazo. Dani gritó que pararan. Hubo otro estampido, ahogado dentro del coche. Nadie supo de dónde vino el disparo que alcanzó a Sebas.',
    'La camisa se oscureció. Javi dijo que no había sido él. Dani no preguntó todavía. Detrás, las sirenas se acercaban; delante, una calle estrecha bajaba hacia Torre Baró. El del bigote ya no estaba. El hombre de la nariz rota seguía aferrado a su bolsa.',
    'Dani pudo tomar una curva para perder a la policía o seguir las señales hacia el hospital. El coche todavía respondía. Sebas ya no podía esperar.'
  ],choices:[
    {label:'Tomo la calle que lleva a Urgencias.',next:'hospital',effect:{dani:2,sebas:1},note:'Decides llevar a Sebas al hospital aunque te detengan.'},
    {label:'Busco una calle menos expuesta antes de ir al hospital.',next:'hospital',effect:{dani:0,exposure:1},note:'Pierdes minutos que no recuperarás.'},
    {label:'Le ordeno al otro hombre que abandone el coche.',next:'hospital',effect:{evidence:1,sebas:1},note:'El hombre salta con su bolsa. Javi se queda mirando el hueco.'}
  ]},
  hospital:{n:18,time:'00:22',date:'SÁBADO · 13 NOVIEMBRE 1982',pov:'DANI ROLDÁN',stamp:'16 — URGENCIAS',kicker:'HOSPITAL · MADRUGADA',title:'La moto',quote:'«Era bonita.»',alt:'Pasillo de urgencias vacío y frío antes del amanecer.',text:[
    'Javi apretaba la herida de Sebas. La bolsa y la pistola habían quedado en el suelo. Dani condujo al hospital. En un cruce, Javi propuso dejarlo cerca de la entrada y marcharse. Dani frenó. No iba a soltarlo en la acera para conservar una libertad que ya no le parecía libertad.',
    '—La moto —dijo Sebas.\n—Era fea —contestó Dani.\n—Era bonita.\nJavi se rio, pero la risa se le rompió en la garganta. Sebas habló del taller pequeño, de los dos elevadores que había añadido a su sueño y de Paco, que siempre aparecería aunque nadie lo invitara.',
    'La enfermera se llevó a Sebas. Dani esperó con las manos llenas de sangre. Ferrer llegó antes que la madre. Le preguntó por el coche, por Javi, por el disparo. Dani dijo lo que sabía y dejó en blanco lo que no sabía. Ferrer no apartó la culpa de ninguno de los dos.',
    'A las tres y cuarto salió el médico. La madre de Sebas gritó una vez. Después no hubo nada que decir que pudiera cambiarlo.'
  ],choices:[
    {label:'Le cuento a Ferrer lo que ocurrió, incluso lo que me incrimina.',next:'custody',effect:{evidence:2,dani:1},note:'Ferrer obtiene un relato más completo, no una absolución.'},
    {label:'Me niego a cubrir a Javi, pero no invento lo que no vi.',next:'custody',effect:{evidence:1,javi:-1},note:'Dices que disparó al exterior y que no viste quién hirió a Sebas.'},
    {label:'No respondo hasta que llegue la madre de Sebas.',next:'custody',effect:{sebas:1,exposure:1},note:'Ferrer espera. Los agentes se llevan las pruebas del coche.'}
  ]},
  custody:{n:19,time:'10:20',date:'VIERNES · 3 DICIEMBRE 1982',pov:'DANI ROLDÁN',stamp:'17 — LO QUE TE TOCA',kicker:'COMISARÍA · TRES SEMANAS DESPUÉS',title:'La foto',quote:'«Quiero que cojas lo tuyo.»',alt:'Una fotografía de Joaquín sobre la mesa de una sala de interrogatorios.',text:[
    'Lo esposaron aquella madrugada de noviembre. Tres semanas después, Ferrer puso una fotografía sobre la mesa: Joaquín Valero sentado en una terraza, vivo, sonriendo. No era el hombre que caía junto al coche. Era un desconocido al que Dani había ayudado a convertir en un nombre de periódico.',
    'Ferrer pidió que lo contara sin empezar por Javi. Dani se enfadó. Después habló del volante: había girado, había esperado, había acelerado. Javi tiró del bolso. Ramiro los había puesto a trabajar. La policía había esperado para llegar a Ramiro. Varias cosas podían ser verdad a la vez.',
    'Ferrer reconoció que pudo intervenir antes. No ofreció una frase para aliviarlo. Dani comprendió que la culpa de uno no borraba la del otro. La carpeta de Ramiro seguía abierta; la de Sebas ya no podía cerrarse bien.',
    'En una visita posterior, Carmen le preguntó si había comido. Dani lloró por primera vez. No le pidió que lo llamara bueno. Le escribió a Eva que no sabía cuándo volvería y que no iba a mentirle en la carta.'
  ],choices:[
    {label:'Escribo a Eva sin pedirle que me perdone.',next:'javi-last',effect:{dani:1,lucia:1},note:'La carta dice poco, pero no miente.'},
    {label:'Le digo a Ferrer dónde buscar a Ramiro y a Javi.',next:'javi-last',effect:{evidence:2,exposure:1},note:'Tu declaración ayuda a la investigación; no repara a los muertos.'},
    {label:'Guardo silencio sobre lo que no puedo asegurar.',next:'javi-last',effect:{evidence:1,dani:1},note:'Ferrer anota las dudas como dudas.'}
  ]},
  'javi-last':{n:20,time:'10:20',date:'FEBRERO 1983',pov:'DANI ROLDÁN',stamp:'18 — DOS DÍAS',kicker:'PRISIÓN · UN PERIÓDICO',title:'La noticia pequeña',quote:'Dieciocho años. Dos días en la página de sucesos.',alt:'Un recorte de periódico doblado sobre una mesa de prisión.',text:[
    'La noticia llegó durante una visita y cabía en un recorte estrecho. Javi había muerto en otro atraco mal preparado. Dieciocho años. El periódico usó una foto antigua, la misma que llevaba semanas repitiéndose. No habló del chico que imitaba a Paco ni del que una vez se quedó a dormir en casa de Dani.',
    'Dani dobló el papel. No preguntó los detalles. No quería convertir la muerte de su amigo en otra versión útil para contar en el barrio. Tampoco podía fingir que aquel final no nacía de decisiones que todos habían visto venir y nadie supo parar.',
    'Melli sobrevivía por días. Algunas semanas estaba bien; otras volvía a empezar. Lucía abrió su peluquería. Eva guardó la carta de Dani en un cajón. Ferrer siguió buscando a Ramiro a través de papeles, testigos y errores acumulados.',
    'El mechero de Melli ya no era el mismo. Según él, el otro se había perdido. No quiso explicar cuándo. Dani no le preguntó.'
  ],choices:[
    {label:'Guardo el recorte para no reducir a Javi a un titular.',next:'epilogue',effect:{javi:1,mystery:1},note:'La memoria no cambia el final; cambia qué decides recordar.'},
    {label:'Le digo a Ferrer que siga buscando a Ramiro.',next:'epilogue',effect:{evidence:1,exposure:1},note:'La responsabilidad también puede ser insistir en los que siguen libres.'},
    {label:'Escribo otra vez a Eva, aunque no sé qué poner.',next:'epilogue',effect:{lucia:1,dani:1},note:'Dejas el papel abierto. No todos los silencios son iguales.'}
  ]},
  epilogue:{n:21,time:'18:40',date:'9 MAYO 1991',pov:'DANI ROLDÁN',stamp:'19 — EL RUIDO DEL MOTOR',kicker:'EPÍLOGO · TALLER DE PACO',title:'Otro 124',quote:'Esta vez, Dani no se volvió.',alt:'Dani adulto trabaja en un taller mientras un SEAT 124 pasa por la calle.',text:[
    'El SEAT 124 blanco pasó despacio frente al taller. Dani reconoció el motor antes de ver el coche. Las manos se le quedaron quietas sobre el banco. Durante un segundo fue otra vez el chico que conducía por Sant Adrià y creía que el volante podía sacarlo de cualquier sitio.',
    'Paco le dijo que dejara de mirar coches ajenos y terminara el Renault. Dani sonrió. Había vuelto al taller nueve meses después de salir de prisión. Al principio cualquier motor de noche lo devolvía a aquella carrera. Con el tiempo aprendió que reconocer un sonido no obligaba a obedecerlo.',
    'En casa, Carmen había preparado comida de más. Eva se reía de que hubiera subido once plantas andando. Melli llegó con pastas y dijo que hoy estaba bien. Nadie brindó por haberlo superado. Recordaron a Sebas con su moto fea y a Javi hablando cuando todos querían silencio.',
    'Dani acabó el coche del cliente. No era el de aquella noche. No le debía nada y él tampoco al coche. Guardó la vieja llave de su padre en el bolsillo y cerró el taller. Oyó otro motor acercarse. Esta vez no se volvió.'
  ],choices:[
    {label:'Cerrar el taller y caminar a casa.',next:'end',ending:'casa',effect:{dani:1,sebas:1},note:'Dani no confunde seguir viviendo con haberlo arreglado todo.'},
    {label:'Dejar una nota para Melli: mañana tomamos café.',next:'end',ending:'cafe',effect:{javi:1,lucia:1},note:'Mañana ya no es una promesa vacía; es una invitación.'},
    {label:'Apagar la radio y escuchar el taller en silencio.',next:'end',ending:'ruido',effect:{mystery:1,evidence:1},note:'El último sonido podría ser solo un motor. Dani ya no necesita resolverlo.'}
  ]}
  ,'act-two':{step:10,branch:true,time:'09:10',date:'SÁBADO · 20 MARZO 1982',pov:'DANI ROLDÁN',stamp:'ARCHIVO · LO QUE HICISTE AYER',kicker:'ACTO II · A LA MAÑANA SIGUIENTE',title:'La cuenta',quote:'Una decisión también se nota al día siguiente.',alt:'Dani y Sebas en el taller de Paco, frente a un motor desmontado.',text:[
    'El taller de Paco olía a aceite frío y a café recalentado. Dani había dormido poco. El motor sobre el banco seguía esperando a que alguien lo abriera. Afuera, el barrio había amanecido como si la carretera de anoche no existiera.'
  ],choices:[]}

  ,'lucia-interlude':{step:9,optional:true,time:'19:02',date:'MIÉRCOLES · 21 OCTUBRE 1981',pov:'LUCÍA NAVARRO',stamp:'ARCHIVO · UNA CONVERSACIÓN',kicker:'ESCENA OPCIONAL · FUERA DEL EXPEDIENTE',title:'Lo que no se dice',quote:'«No quiero que me elijas. Quiero que dejes de mentirme.»',alt:'Lucía y Dani hablan junto a la persiana de una peluquería aún vacía.',text:[
    'Lucía encontró a Dani junto a la persiana del local que quería alquilar. Él había venido a preguntar por Javi; ella no le permitió esconderse detrás de la pregunta.',
    'Le contó que estaba ahorrando para abrir una peluquería. No era una fantasía para cuando todo mejorara: ya había preguntado el precio, medido el espacio y hablado con su tía. Dani escuchó sin ofrecerse a rescatarla ni a decidir por ella.',
    'Cuando le preguntó qué había pasado aquella noche, Lucía no pidió una confesión perfecta. Le pidió que no la usara como escondite. La calle siguió con su ruido de autobuses y persianas, indiferente a la respuesta.',
    'No arreglaron nada. Pero por una vez, Dani tuvo que contestar a la persona que tenía delante.'
  ],choices:[
    {label:'Le cuento lo que recuerdo y lo que no puedo asegurar.',next:'months',effect:{lucia:1,dani:1},note:'Lucía no promete perdonar. Agradece que no adornes la verdad.'},
    {label:'Le digo que todavía no puedo hablar de esa noche.',next:'months',effect:{lucia:0,dani:-1},note:'Lucía acepta el límite, no la mentira.'},
    {label:'Le pregunto por el local y escucho sus planes.',next:'months',effect:{lucia:1},note:'Por unos minutos, la vida de Lucía no gira alrededor de los chicos.'}
  ]},
  'ferrer-interlude':{step:16,optional:true,time:'21:42',date:'VIERNES · 12 NOVIEMBRE 1982',pov:'INSPECTOR MIQUEL FERRER',stamp:'ARCHIVO · UNA LLAMADA',kicker:'ESCENA OPCIONAL · ANTES DEL GOLPE',title:'La llamada que faltaba',quote:'«Si intervengo sin pruebas, Ramiro vuelve a la calle.»',alt:'El inspector Ferrer observa un teléfono junto a una carpeta abierta.',text:[
    'Ferrer reconoció el coche descrito por el testigo. No tenía una matrícula completa ni una cara que pudiera sostener ante un juez. Tenía una franja clara, un modelo probable y demasiadas horas de espera.',
    'Salcedo le preguntó si debían entrar. Ferrer miró la carpeta de Ramiro y luego la lista de jóvenes que habían aparecido en los informes. Sabía que una intervención podía detener el golpe. También podía dejar al hombre que los reclutaba fuera de la investigación.',
    'El teléfono estaba a mano. Llamar a Dani podía alertar a los demás, quemar al testigo y quizá evitar una tragedia. No llamar significaba aceptar que el expediente iba detrás de la noche.'
  ],choices:[
    {label:'Llamo a Salcedo y dejo constancia de la demora.',next:'chase',effect:{evidence:1,exposure:1},note:'La duda de Ferrer queda escrita. La demora también es una decisión.'},
    {label:'Intento avisar a Dani sin prometer inmunidad.',next:'chase',effect:{evidence:1,dani:1},note:'El aviso llega tarde para cambiar el curso de la noche.'},
    {label:'Espero una confirmación antes de mover a la unidad.',next:'chase',effect:{evidence:0,exposure:1},note:'Ferrer conserva el procedimiento; pierde minutos.'}
  ]}

};

const actTwoBranches={
  taller:{text:[
    'Sebas contó a Paco que Dani quería dejar los encargos de Ramiro. Paco no dio un discurso: señaló el cuadrante y ofreció dos sábados de trabajo pagado. Javi esperaba fuera y vio a Dani acercarse a la hoja de turnos. La oferta no pagaba las deudas de casa, pero sí ocupaba horas que Ramiro daba por suyas.',
    'Dani tuvo que decir algo delante de Paco y de Sebas. Javi podía enterarse después; esta vez no decidiría por él.'
  ],choices:[
    {label:'Acepto el turno fijo y aviso a Javi de que no cuente conmigo los sábados.',next:'price',action:'turno',effect:{dani:1,sebas:1,javi:-1},note:'Paco escribe tu nombre en el cuadrante. Javi oye el no sin intermediarios.'},
    {label:'Digo que iré al taller, pero evito decírselo a Javi.',next:'price',action:'medias',effect:{dani:-1,sebas:-1,javi:1},note:'Paco deja el turno abierto. La promesa ya tiene un hueco.'}
  ]},
  dinero:{text:[
    'Javi llegó al taller con un sobre arrugado de Ramiro. Lo dejó entre los dos, junto al motor abierto. Dani había preguntado por el dinero anoche; ahora sabía la cifra y que Ramiro esperaba cobrarla en obediencia. Paco miró el sobre, cerró el cajón de las herramientas y volvió a su trabajo.',
    'El dinero estaba al alcance de Dani. Devolverlo no borraría lo que ya había hecho; guardarlo le pondría una cifra a la próxima llamada de Ramiro.'
  ],choices:[
    {label:'Devuelvo el sobre por medio de Javi, sin tocar el dinero.',next:'price',action:'devuelto',effect:{javi:-1,exposure:1},note:'Ramiro recibe su dinero y sabe que esta vez has dicho que no.'},
    {label:'Guardo el sobre y anoto la cantidad para no llamarla favor.',next:'price',action:'deuda',effect:{dani:-1,javi:1,evidence:1},note:'La cifra queda escrita en una libreta. Ramiro conserva una forma de pedirte otro viaje.'}
  ]},
  sebas:{text:[
    'Sebas le había pedido a Paco un ciclomotor viejo para desmontarlo los domingos. Ahora le hizo sitio a Dani frente a la bancada. Tenían las manos igual de negras, pero Sebas no soltó un chiste sobre la carrera de anoche. Esperó a que Dani decidiera si se quedaba.',
    'No había dinero en aquella mesa. Había un motor que podían arreglar juntos y una conversación que ninguno de los dos sabía empezar.'
  ],choices:[
    {label:'Me quedo con Sebas y le prometo volver el domingo.',next:'price',action:'moto',effect:{sebas:2,dani:1},note:'Paco os deja la llave del taller. Sebas cuenta contigo el domingo.'},
    {label:'Le digo a Sebas que tengo miedo de lo que viene, sin prometer nada.',next:'price',action:'escucha',effect:{sebas:1,dani:1},note:'Sebas se queda escuchando. No te exige una promesa para estar ahí.'}
  ]}
};
const actTwoImpacts={
  turno:{label:'Turno de Paco',text:'Paco puso a Dani en el cuadrante de los sábados.',callback:'Ramiro mencionó el turno que Paco le había dado en marzo. Dani lo había cumplido algunos sábados; sabía cuánto valía aquel trabajo y cuánto más ofrecía Ramiro por una sola noche.'},
  medias:{label:'Promesa a medias',text:'Dani dejó el turno abierto y Javi siguió contando con él.',callback:'Dani recordó el sábado que prometió a Paco y no se atrevió a contar a Javi. La puerta que había dejado abierta en marzo seguía delante de él.'},
  devuelto:{label:'Sobre devuelto',text:'Ramiro recibió de vuelta el dinero sin gastar.',callback:'Ramiro no mencionó el sobre que Dani le había devuelto en marzo. No tenía que hacerlo: ambos recordaban el día en que Dani había rechazado la cifra.'},
  deuda:{label:'Dinero aceptado',text:'Dani guardó el sobre y escribió la cifra que debía.',callback:'Ramiro apoyó la mano junto a la taza. Dani recordó la cifra anotada en su libreta: el sobre de marzo aún no se había convertido en un favor terminado.'},
  moto:{label:'Domingos en el taller',text:'Sebas y Dani quedaron para arreglar un motor con Paco.',callback:'Dani pensó en el ciclomotor que había abierto con Sebas los domingos. Aquellas horas no habían borrado los encargos de Ramiro, pero le mostraban una vida que podía perder.'},
  escucha:{label:'Sebas se quedó',text:'Dani habló de su miedo; Sebas escuchó sin exigir una promesa.',callback:'Al otro lado de la puerta estaba Sebas. Dani recordó la mañana de marzo en que se quedó con él en el taller sin pedirle una promesa que no sabía cumplir.'}
};

const initial=()=>({version:2,scene:'bar',javi:0,sebas:0,dani:0,exposure:0,mystery:0,lucia:0,evidence:0,notes:[],signalSeen:false,endingPath:null,actTwoRoute:null,actTwoAction:null});
let state=initial(),soundEngine=null;
const $=id=>document.getElementById(id);const home=$('home'),game=$('game'),ending=$('ending');
function toast(message){const el=$('toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),1700)}
function persist(){try{localStorage.setItem(SAVE_KEY,JSON.stringify(state));$('continue-game').disabled=false}catch{toast('No se pudo guardar en este navegador')}}
function validSave(d){return d&&d.version===2&&(scenes[d.scene]||d.scene==='end')&&['javi','sebas','dani','exposure','mystery','lucia','evidence'].every(k=>Number.isFinite(d[k]))&&Array.isArray(d.notes)&&(d.endingPath===undefined||d.endingPath===null||['casa','cafe','ruido'].includes(d.endingPath))&&(d.actTwoRoute===undefined||d.actTwoRoute===null||['taller','dinero','sebas'].includes(d.actTwoRoute))&&(d.actTwoAction===undefined||d.actTwoAction===null||Object.hasOwn(actTwoImpacts,d.actTwoAction))}
function show(view){for(const el of [home,game,ending]){el.classList.toggle('active',el===view);el.setAttribute('aria-hidden',String(el!==view))}window.scrollTo({top:0,behavior:document.body.classList.contains('motion-off')?'instant':'smooth'})}
function applyEffect(data){for(const key of ['javi','sebas','dani','exposure','mystery','lucia','evidence'])state[key]=Math.max(-4,Math.min(8,state[key]+(data[key]||0)))}
function paragraphsFor(scene){const text=[...scene.text];if(state.scene==='act-two')text.push(...actTwoBranches[state.actTwoRoute||'taller'].text);if(state.scene==='ramiro'&&actTwoImpacts[state.actTwoAction])text.splice(1,0,actTwoImpacts[state.actTwoAction].callback);return text}
function choicesFor(scene){return state.scene==='act-two'?actTwoBranches[state.actTwoRoute||'taller'].choices:scene.choices}
function render(){const s=scenes[state.scene];if(!s){finish();return}const step=s.n??s.step;show(game);document.body.dataset.scene=state.scene;$('progress-label').textContent=`EL 124 · ${step}/21${s.branch?' · TU RUTA':s.optional?' · ESCENA EXTRA':''}`;$('clock').textContent=s.time;$('date-label').textContent=s.date;$('pov-label').textContent=s.pov;$('chapter-overline').textContent=s.branch?'ACTO II · CONSECUENCIA':s.optional?'INTERLUDIO OPCIONAL':s.n<=9?'ACTO I · LOS CHAVALES':s.n<=12?'ACTO II · LA DERIVA':s.n<=19?'ACTO III · LOS PERDIDOS':s.n===20?'INTERLUDIO · 1983':'EPÍLOGO · 1991';$('scene-stamp').textContent=s.stamp;$('scene-kicker').textContent=s.kicker;$('scene-title').textContent=s.title;$('scene-image').setAttribute('aria-label',s.alt);$('memory-quote').textContent=s.quote;$('narrative').replaceChildren(...paragraphsFor(s).map(t=>{const p=document.createElement('p');p.textContent=t;return p}));
  $('timeline-track').replaceChildren();$('timeline-track').setAttribute('aria-valuenow',String(step));for(let i=1;i<=21;i++){const d=document.createElement('span');d.className=`timeline-dot${i<step?' done':''}${i===step?' current':''}`;d.setAttribute('aria-hidden','true');$('timeline-track').append(d);if(i<21){const line=document.createElement('span');line.className='timeline-line';line.setAttribute('aria-hidden','true');$('timeline-track').append(line)}}
  const buttons=choicesFor(s).map((c,i)=>{const b=document.createElement('button');b.type='button';b.className='choice';const ix=document.createElement('span');ix.className='choice-index';ix.textContent=String(i+1).padStart(2,'0');const label=document.createElement('span');label.textContent=c.label;b.append(ix,label);b.addEventListener('click',()=>choose(c));return b});$('choices').replaceChildren(...buttons);
  $('javi-state').textContent=state.javi>=2?'Confía en que lo seguirás':state.javi<=-1?'Sabe que lo frenas':'Te está midiendo';$('sebas-state').textContent=state.sebas>=2?'Sabe que lo escuchas':state.sebas<=-1?'Cree que ya has elegido':'No se fía del plan';$('night-state').textContent=state.exposure>=3?'Alguien recuerda el coche':state.dani>=2?'Dani intenta responder':'Todavía puede acabar pronto';
  if((s.n===3||s.n===15)&&!state.signalSeen){$('quiet-signal').hidden=false}else $('quiet-signal').hidden=true;
  const impact=actTwoImpacts[state.actTwoAction];$('act-two-impact').hidden=!(impact&&step>=11&&step<=16);if(impact){$('act-two-impact-title').textContent=impact.label;$('act-two-impact-copy').textContent=impact.text}
  $('scene-title').focus({preventScroll:true});persist();
}
function choose(c){const from=state.scene;applyEffect(c.effect||{});if(c.route)state.actTwoRoute=c.route;if(c.action)state.actTwoAction=c.action;if(c.note)state.notes.push(c.note);if(c.ending)state.endingPath=c.ending;state.scene=from==='witness'&&state.lucia>=2?'lucia-interlude':from==='warehouse'&&state.evidence>=5?'ferrer-interlude':c.next;if(c.next==='end'){persist();finish()}else render()}
function finish(){
  show(ending);document.body.dataset.scene='ending';
  const path=['casa','cafe','ruido'].includes(state.endingPath)?state.endingPath:'casa';
  document.body.dataset.ending=path;
  const j=state.javi>=2?'Lo recuerdas sin excusarlo':state.javi<=-1?'Te cuesta nombrarlo':'Su recuerdo sigue presente';
  const s=state.sebas>=2?'Recuerdas que intentó frenaros':state.sebas<=-1?'Te pesa no haberlo escuchado':'Su ausencia sigue ahí';
  const d=state.dani>=2?'Empieza a asumir su parte':state.dani<=-1?'Aún busca cómo escapar':'Intenta vivir con lo ocurrido';
  $('end-javi').textContent=j;$('end-sebas').textContent=s;$('end-dani').textContent=d;
  const outcomes={
    casa:{label:'FINAL I · VOLVER A CASA',title:'Las once plantas',coda:'Dani cerró el taller y subió a pie. En casa, Eva había dejado un plato sobre la mesa. Él se sentó con Carmen y le dijo a su hermana que había sido él quien conducía aquella noche. Eva conocía los hechos; necesitaba oírle decirlo sin esconderse detrás de Javi. Hablaron poco. Al día siguiente habría trabajo, y la conversación no quedaría terminada por haber empezado.'},
    cafe:{label:'FINAL II · QUEDARSE',title:'Mañana hay café',coda:'Dani dejó una nota para Melli en el taller. A la mañana siguiente, Melli apareció con dos cafés y un chiste malo que no remató. Se quedaron junto a la persiana levantada, mirando los coches pasar. Dijeron los nombres de Sebas y Javi sin convertirlos en excusas ni titulares. Melli dijo que estaba bien ese día. Dani le creyó solo por ese día. Quedaron para otro café.'},
    ruido:{label:'FINAL III · LA SEÑAL',title:'El último ruido',coda:'Dani apagó la radio. El motor que se acercaba sonó durante un instante como el del viejo 124. En el cristal del taller creyó ver la luz amarilla del Bar Manolo; al volver la cabeza solo había una farola. No podía probar que fuera algo más que memoria, cansancio y reflejos. Cerró la puerta. El ruido quedó en la calle, sin elegir por él.'}
  };
  const result=outcomes[path];$('ending-route').textContent=result.label;$('ending-title').textContent=result.title;$('ending-coda').textContent=result.coda;
  let close='Joaquín murió, Sebas murió y Javi murió. Ramiro tardó años en caer. Dani llegó a los treinta, volvió al taller y aprendió a vivir con lo ocurrido sin llamarlo absolución.';
  const accountability=state.dani>=2?'Dejó de contar la historia como si el volante hubiera pertenecido a otro.':state.dani<=-1?'Tardó más en aceptar su parte; el tiempo no la hizo desaparecer.':'Aprendió a nombrar su responsabilidad sin borrar la de los demás.';
  const investigation=state.evidence>=5?'Las pruebas que ayudó a reunir sostuvieron parte del expediente que alcanzó a Ramiro.':state.evidence>=2?'Ferrer conservó las dudas junto a las pruebas hasta poder alcanzar a Ramiro.':'La detención de Ramiro llegó por testimonios, papeles y errores acumulados.';
  if(state.mystery&&path!=='ruido')close+=' Todavía había noches en que una luz llegaba al espejo fuera de tiempo.';
  $('ending-copy').textContent=`${close} ${accountability} ${investigation}`;
  $('ending-notes').replaceChildren(...state.notes.slice(-8).map(t=>{const li=document.createElement('li');li.textContent=t;return li}));
  try{const previous=JSON.parse(localStorage.getItem(ENDINGS_KEY)||'[]');const seen=Array.isArray(previous)?previous.filter(v=>['casa','cafe','ruido'].includes(v)):[];if(!seen.includes(path))seen.push(path);localStorage.setItem(ENDINGS_KEY,JSON.stringify(seen));$('ending-discovery').textContent=`Finales descubiertos: ${seen.length} de 3`}
  catch{$('ending-discovery').textContent='Tres finales disponibles'}
  $('ending-title').focus({preventScroll:true});persist();
}
$('new-game').addEventListener('click',()=>{state={...initial(),version:2};render()});$('continue-game').addEventListener('click',()=>{try{const d=JSON.parse(localStorage.getItem(SAVE_KEY)||'null');if(validSave(d)){state=d;state.scene==='end'?finish():render()}else toast('No hay una partida válida guardada')}catch{toast('No se pudo recuperar la partida')}});$('how-button').addEventListener('click',()=>$('how-dialog').showModal());$('back-home').addEventListener('click',()=>show(home));$('save-button').addEventListener('click',()=>{persist();toast('Partida guardada')});$('replay').addEventListener('click',()=>{state={...initial(),version:2};render()});$('ending-home').addEventListener('click',()=>show(home));$('reset-save').addEventListener('click',()=>{if(confirm('¿Borrar la partida guardada de este dispositivo?')){localStorage.removeItem(SAVE_KEY);localStorage.removeItem(ENDINGS_KEY);$('continue-game').disabled=true;state={...initial(),version:2};toast('Partida guardada borrada')}});
$('inspect-signal').addEventListener('click',()=>{state.signalSeen=true;state.mystery=1;state.notes.push('Dani vio una luz amarilla en el espejo. El Bar Manolo quedaba lejos.');render();toast('Dani no encuentra una explicación')});
$('motion-toggle').addEventListener('click',e=>{const on=document.body.classList.toggle('motion-off');e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=`MOVIMIENTO: ${on?'NO':'SÍ'}`;storePrefs()});
function storePrefs(){try{localStorage.setItem(PREF_KEY,JSON.stringify({motion:document.body.classList.contains('motion-off')}))}catch{}}
function readPrefs(){try{const p=JSON.parse(localStorage.getItem(PREF_KEY)||'{}');if(p.motion){document.body.classList.add('motion-off');$('motion-toggle').setAttribute('aria-pressed','true');$('motion-toggle').textContent='MOVIMIENTO: NO'}return p}catch{return {}}}
function startSound(){if(soundEngine){soundEngine.ctx.resume();soundEngine.gain.gain.setTargetAtTime(.16,soundEngine.ctx.currentTime,.5);return}const C=window.AudioContext||window.webkitAudioContext;if(!C){toast('Este navegador no admite audio local');return}const ctx=new C(),gain=ctx.createGain(),master=ctx.createGain(),low=ctx.createBiquadFilter();low.type='lowpass';low.frequency.value=560;gain.gain.value=.11;master.gain.value=0;const osc=ctx.createOscillator(),osc2=ctx.createOscillator();osc.type='sawtooth';osc.frequency.value=54;osc2.type='sine';osc2.frequency.value=57;const buffer=ctx.createBuffer(1,ctx.sampleRate*2,ctx.sampleRate),data=buffer.getChannelData(0);let seed=19811016;for(let i=0;i<data.length;i++){seed=(seed*16807)%2147483647;data[i]=((seed-1)/1073741823)*.18}const noise=ctx.createBufferSource();noise.buffer=buffer;noise.loop=true;const ng=ctx.createGain();ng.gain.value=.13;osc.connect(gain);osc2.connect(gain);noise.connect(ng).connect(low).connect(gain);gain.connect(master).connect(ctx.destination);osc.start();osc2.start();noise.start();master.gain.setTargetAtTime(.16,ctx.currentTime,.4);soundEngine={ctx,gain:master};ctx.resume()}
function stopSound(){if(soundEngine){soundEngine.gain.gain.setTargetAtTime(0,soundEngine.ctx.currentTime,.2);setTimeout(()=>{if($('sound-toggle').getAttribute('aria-pressed')==='false')soundEngine?.ctx.suspend()},700)}}
$('sound-toggle').addEventListener('click',e=>{const on=e.currentTarget.getAttribute('aria-pressed')!=='true';e.currentTarget.setAttribute('aria-pressed',String(on));e.currentTarget.textContent=`SONIDO: ${on?'ON':'OFF'}`;on?startSound():stopSound();storePrefs()});
readPrefs();try{const existing=JSON.parse(localStorage.getItem(SAVE_KEY)||'null');if(validSave(existing))$('continue-game').disabled=false}catch{}
document.addEventListener('keydown',e=>{if(!game.classList.contains('active')||e.altKey||e.ctrlKey||e.metaKey)return;if(/^[1-3]$/.test(e.key)){const button=$('choices').querySelectorAll('button')[Number(e.key)-1];button?.click()}});
for(const el of [game,ending])el.setAttribute('aria-hidden','true');
if('serviceWorker'in navigator&&(location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1'))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
