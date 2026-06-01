# TOW Sitemap - Primera Prueba

## Objetivo

Armar una navegacion minima para presentar Trading On Wheels sobre la propuesta aislada de Bitrader sin reemplazar las paginas originales del template.

## Sitemap

| Nav | Archivo | Rol |
|---|---|---|
| Home | `index-tow.html` | Landing general con hero, ofertas, About Oscar y CTA. |
| Membership | `membership.html` | Pagina rapida para membresia mensual, Gurman Dome, signals, scoring y comunidad. |
| Course | `course.html` | Pagina rapida para el Gurman Method y el camino Beginner to Wheeler. |
| Competitions | `competitions.html` | Pagina rapida para university challenges, campeonato, rankings y Hall of Fame. |
| About Oscar | `about-oscar.html` | Pagina rapida de fundador, metodo y mision TOW. |
| Join Now | `signup.html` | Accion principal; por ahora usa la pagina existente del template Bitrader. |

## Secciones Usadas

Cada pagina nueva copia la estructura aislada de `index-tow.html`:

- Header TOW con logo `assets/figma/logo-negative.png`.
- Hero con imagen `assets/figma/hero-guide-road.png`.
- Cards `.tow-offer-card` con iconos y bullets desde `assets/figma/`.
- Bloque `.tow-about` con retrato `oscar-portrait.png` y overlay `oscar-wheel-overlay.png`.
- CTA final `.tow-cta`.
- Footer TOW con iconos sociales desde `assets/figma/`.

## Politica De Assets

No se movieron ni renombraron assets. Las paginas nuevas mantienen las rutas ya usadas por `index-tow.html` y siguen dependiendo de `assets/figma/` como staging visual de la propuesta.

## Alcance De Esta Iteracion

- Se materializo el sitemap minimo de la barra principal.
- Se evitaron cambios en `price.html`, `service-details.html`, `about.html` y demas paginas legacy.
- El texto es intencionalmente provisional; la prioridad fue tener paginas navegables con secciones suficientes para una primera prueba.
