# Docs - Trading On Wheels / Bitrader

Este folder contiene la documentacion operativa de la build actual. Es el punto de arranque para cualquier agente antes de tocar HTML, Sass, JS o assets.

## Lectura Recomendada

1. `decisions.md`: decisiones canonicas y reglas vigentes.
2. `bitrader-synox-transfer-map.md`: mapa de traslado Synox -> Bitrader/TOW.
3. `architecture.md`: como esta armado el template local.
4. `current-phase.md`: trabajo activo y checklist de la fase actual.
5. `figma-reference.md`: lectura del nodo Figma objetivo.
6. `implementation-plan.md`: flujo paso a paso para fuentes, tokens y assets.
7. `assets-plan.md`: assets que se deben reemplazar y prioridad.
8. `verification.md`: validacion minima antes de entregar cambios visuales.

## Estado Actual

- Stack: HTML estatico + Sass + CSS compilado + JS del template.
- Template destino: Bitrader/Thetork.
- Marca/contenido real: Trading On Wheels.
- Referencia de contenido y arquitectura: Synox exportado en `../synox-xpressbuddy-public-demo/exports/`.
- Pagina inicial de trabajo: `index.html`.
- Sass entrypoint: `assets/sass/style.scss`.
- CSS publicado: `assets/css/style.css`.
- Fase vigente: transferir la propuesta Synox/TOW hacia secciones nativas de Bitrader Origin.

## Reglas Rapidas Para Agentes

- No introducir React, Astro, Next, Tailwind ni otro framework.
- No renombrar clases existentes sin decision explicita.
- Usar Bitrader como template base y Trading On Wheels como marca real.
- Usar Synox como referencia de contenido, no como referencia visual a copiar.
- Revisar `docs/bitrader-synox-transfer-map.md` antes de reconstruir HTML.
- Mantener `assets/sass` como fuente de estilos.
- Si cambia una decision, actualizar `docs/decisions.md`.
- Si cambia el estado de trabajo, actualizar `docs/current-phase.md`.
- Assets descargados desde Figma/MCP se guardan primero en `assets/figma/`.
