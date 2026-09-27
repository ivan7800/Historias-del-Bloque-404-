# Auditoría de entrega — Historias del Bloque 404 v2.4.0

## Estado

Campaña interactiva completa de **Los chicos del bloque**, desde la primera noche del 16 de octubre de 1981 hasta el epílogo de 1991. La antología muestra las otras cuatro obras en el archivo con estado «en el archivo». El proyecto no se presenta como una antología completa hasta que esas campañas se adapten.

## Narrativa y experiencia

- 21 escenas principales, 63 decisiones principales, seis opciones adicionales en la escena de ruta del acto II y dos interludios opcionales de tres elecciones cada uno; 30–40 minutos estimados, sin medición con lectores externos.
- Tres actos y epílogo, con escenas de Dani, Melli, Ferrer y Lucía y saltos temporales hasta 1991.
- La consecuencia del acto II se muestra antes del desenlace, permanece en la interfaz y reaparece en la escena de Ramiro. Seis fondos nuevos dan identidad visual al taller, la cocina de Melli, la nave, la persecución, el hospital y el epílogo. Los interludios se desbloquean según las decisiones de relación e investigación. Las decisiones modifican vínculos, responsabilidad, exposición, pruebas y el texto del cierre y uno de tres finales narrativos seleccionables. Las pérdidas centrales del manuscrito se mantienen en todas las rutas para evitar finales que deshagan el sentido de la obra.
- Horror cósmico sutil y opcional, claramente separado de la cadena de decisiones criminales. Fechas, saltos y expectativas de las opciones revisados contra el manuscrito y el calendario; véase `REVISION_EDITORIAL_Y_LECTURA.md`.
- Las cinco historias tienen portadas en el archivo; solo la primera es jugable.

## Técnica y privacidad

- HTML, CSS y JavaScript sin dependencias; PWA con caché versionada `v2.4.0`.
- Guardado automático/manual local con esquema v2 y validación al reanudar.
- No hay telemetría, solicitudes a terceros ni servicio backend.
- CSP restrictiva, inserción segura como texto, control de movimiento y tamaños de toque de al menos 44 px.

## Pruebas ejecutadas

- `node --check app.js` y `node --check sw.js`: correctos.
- `node tests/release-smoke.mjs`: 13/13 comprobaciones.
- `node tests/interaction-smoke.mjs`: tres rutas completas de 21 escenas principales, que incorporan ambos interludios cuando se desbloquean; las pérdidas centrales se mantienen, hay tres escenas finales distintas, se guardan los finales descubiertos y la partida final se puede reanudar.
- `node tests/chronology-smoke.mjs`: orden temporal y días de la semana de las 21 escenas y dos interludios.
- Integridad de HTML, destinos, referencias a imágenes/estilos/scripts, CSP y lista de precarga comprobada estáticamente. ZIP de raíz plana apto para subir sus contenidos a GitHub Pages; véase `GITHUB_PAGES.md`.

## Pendiente antes de publicación pública

1. Inspección visual y consola en un navegador real de escritorio y en móvil; este entorno no dispone de un navegador ejecutable.
2. Pruebas táctiles, orientación, legibilidad de los textos largos, recortes de arte y controles de sonido/movimiento en dispositivos.
3. Instalación PWA, actualización desde versión anterior y funcionamiento offline tras carga inicial.
4. Revisión editorial de las licencias de adaptación y del tono por el autor.
5. Ejecutar con seis participantes externos el protocolo de `PRUEBA_CON_LECTORES.md`. No hay aún medidas reales de duración, abandono o satisfacción.
6. Adaptar y probar las otras cuatro historias antes de declarar final la antología completa.
