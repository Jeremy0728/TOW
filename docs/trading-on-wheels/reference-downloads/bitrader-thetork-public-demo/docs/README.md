# Docs - Trading On Wheels / Bitrader

Este folder contiene la documentacion operativa de la build actual. Es el punto de arranque para cualquier agente antes de tocar HTML, Sass, JS o assets.

## Lectura Recomendada

1. `decisions.md`: decisiones canonicas y reglas vigentes.
2. `architecture.md`: como esta armado el template local.
3. `current-phase.md`: trabajo activo y checklist de la fase actual.
4. `figma-reference.md`: lectura del nodo Figma objetivo.
5. `implementation-plan.md`: flujo paso a paso para fuentes, tokens y assets.
6. `assets-plan.md`: assets que se deben reemplazar y prioridad.
7. `verification.md`: validacion minima antes de entregar cambios visuales.

## Estado Actual

- Stack: HTML estatico + Sass + CSS compilado + JS del template.
- Pagina inicial de trabajo: `index--theme_dark.html`.
- Sass entrypoint: `assets/sass/style.scss`.
- CSS publicado: `assets/css/style.css`.
- Figma objetivo: archivo `O0y2eBiHyJHImQDLmGd56J`, nodo `161:557`.
- Fase vigente: actualizacion del modo dark desde Sass, empezando por `[data-bs-theme="dark"]`.

## Reglas Rapidas Para Agentes

- No introducir React, Astro, Next, Tailwind ni otro framework.
- No renombrar clases existentes sin decision explicita.
- No tocar HTML en fase de tema salvo ajuste minimo y documentado.
- Mantener `assets/sass` como fuente de estilos.
- Si cambia una decision, actualizar `docs/decisions.md`.
- Si cambia el estado de trabajo, actualizar `docs/current-phase.md`.
- Assets descargados desde Figma/MCP se guardan primero en `assets/figma/`.
