# Historias del Bloque 404 — v2.4.0 «Los chicos del bloque»

Aventura narrativa quinqui estática y local-first, inspirada en la novela *Los chicos del bloque*, de I. Roig. Esta campaña recorre desde la primera noche del SEAT 124 en Sant Roc (1981) hasta el epílogo de Dani en 1991.

## Campaña

- 21 escenas principales, 63 decisiones de las escenas troncales, una escena de ruta en el acto II con 6 desenlaces jugables y 2 interludios opcionales de 3 elecciones cada uno; duración orientativa: 30–40 minutos con lectura y decisiones.
- Tres actos más epílogo: el primer robo; la deriva del grupo y la relación con Ramiro; la última carrera, la hospitalización, la prisión y la vida posterior.
- Dos escenas adicionales se desbloquean según la relación con Lucía y las pruebas reunidas para Ferrer; las distintas rutas modifican las consecuencias visibles del expediente. La última elección lleva a uno de tres finales narrativos diferentes, que comparten los hechos centrales del manuscrito. La escena del taller del acto II muestra de inmediato el coste de la decisión, deja una marca visible durante el resto del acto y vuelve a mencionarse meses después. Las decisiones cambian estados de relación, responsabilidad, exposición y pruebas. Las pérdidas centrales de la novela se conservan: las opciones exploran cómo se llega a ellas, no una salida que las borre.
- Misterio ambiental opcional y ambiguo del Universo 404. Es una licencia interactiva, no una causa ni una absolución de las acciones de los personajes.
- El archivo presenta las cuatro historias restantes con sus portadas; están identificadas como material de archivo, no como campañas jugables.

## Funciones y privacidad

- Nuevo juego, continuación y guardado automático y manual en el almacenamiento local del navegador.
- El formato de guardado está versionado; la aventura anterior de nueve escenas no se reanuda como si fuera esta campaña nueva.
- Sonido ambiental generado localmente, apagado por defecto; control de movimiento, compatibilidad con `prefers-reduced-motion` y navegación mediante ratón, tacto o teclas `1`–`3`.
- PWA con caché offline después de la primera carga correcta; rutas relativas compatibles con GitHub Pages.
- Sin backend, dependencias de ejecución, CDN, cuentas, analítica ni telemetría.
- CSP restrictiva y textos del relato renderizados como texto.

## Ejecutar localmente

En Windows, extrae el ZIP y ejecuta `start-local.bat`. En macOS/Linux, ejecuta `./start-local.sh`. También puedes usar:

```bash
python -m http.server 8000
```

Abre `http://localhost:8000/`. Para comprobar PWA y modo offline, accede mediante `localhost`, deja que cargue y desactiva después la red. Abrir `index.html` directamente sirve para leer y jugar, pero no instala el Service Worker.

## Comprobaciones

```bash
node tests/release-smoke.mjs
node tests/interaction-smoke.mjs
node tests/chronology-smoke.mjs
```

Las pruebas automáticas verifican referencias y destinos, 21 escenas principales, 75 opciones totales, interludios condicionales, tres finales narrativos, registro local de descubrimiento, recuperación del guardado, CSP, caché y soporte responsive/accesible. Se adjuntan `REVISION_EDITORIAL_Y_LECTURA.md` y `PRUEBA_CON_LECTORES.md`; el segundo es un protocolo para lectores externos, no resultados obtenidos. Falta una revisión visual real en Chrome/Firefox/Safari de escritorio y en Safari iPhone/Chrome Android, incluido el tacto, el audio, la instalación y el uso offline en dispositivos.

## Publicar en GitHub Pages

El ZIP de entrega tiene `index.html` en su raíz, junto a `.nojekyll`. Extrae y sube **el contenido**, no el ZIP como archivo. Sigue `GITHUB_PAGES.md` para configurar Pages en la rama y carpeta raíz.

## Alcance

Esta versión cierra la primera campaña interactiva, no toda la antología. *El agua de nadie*, *La Estrella Negra*, *La generación neutra* y *El cerco* están en el archivo visual y necesitan adaptación narrativa, arte de escenas, integración y pruebas antes de marcarse como jugables.
