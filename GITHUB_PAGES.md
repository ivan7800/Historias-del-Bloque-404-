# Publicar esta campaña en GitHub Pages

Este ZIP ya tiene `index.html`, `app.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, `assets/` y `.nojekyll` en la **raíz del archivo**. No hace falta compilarlo.

1. Extrae el ZIP y sube **el contenido extraído**, conservando `assets/` y `.nojekyll`, a la raíz de un repositorio de GitHub. GitHub no descomprime automáticamente un ZIP subido como archivo.
2. En el repositorio, abre **Settings → Pages → Build and deployment**. Selecciona **Deploy from a branch**, la rama que contiene los archivos (por ejemplo `main`) y la carpeta **/(root)**. Guarda los cambios.
3. Abre la dirección que muestre GitHub Pages y comprueba que se ve la portada. Si el repositorio se llama `Historias-del-Bloque-404` y el usuario es `ivan7800`, la dirección habitual sería `https://ivan7800.github.io/Historias-del-Bloque-404/`. La URL exacta depende de los nombres y de la configuración final.
4. Prueba **Empezar**, una elección, **Guardar ahora**, **Continuar**, los tres finales y el sonido opcional. Comprueba el modo offline solo **después** de que el sitio haya cargado una vez conectado. En móvil, revisa el tamaño del texto, las opciones y la pantalla de final.
5. Si actualizas una versión anterior, espera a que se publique y vuelve a cargar la página para que el Service Worker `v2.4.0` sustituya su caché. Si ves la versión vieja, cierra todas las pestañas de la app y ábrela de nuevo.

La campaña 01 es jugable de inicio a fin. Las otras cuatro historias figuran como archivo, sin campañas interactivas. La estimación de 30–40 minutos todavía no procede de lectores externos.

Referencias oficiales: [origen de publicación de GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) y [solución de errores 404 / ubicación de `index.html`](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-404-errors-for-github-pages-sites).
