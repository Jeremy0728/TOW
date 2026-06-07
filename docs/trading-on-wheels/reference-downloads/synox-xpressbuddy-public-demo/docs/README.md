# Docs - Trading On Wheels / Synox

Este folder contiene la documentacion operativa para adaptar la descarga estatica de Synox/XpressBuddy al sistema visual Trading On Wheels usando Figma MCP como referencia.

## Lectura Recomendada

1. `decisions.md`: decisiones canonicas y reglas vigentes.
2. `architecture.md`: como esta armado el template local Synox y como se maneja la web.
3. `current-phase.md`: fase activa y checklist.
4. `figma-reference.md`: lectura de los nodos Figma objetivo.
5. `export-order.md`: orden canonico para tokens, tipografia y assets Figma.
6. `implementation-plan.md`: flujo para tema, tipografia, HTML, SCSS y assets.
7. `assets-plan.md`: assets Figma que se deben exportar y prioridad.
8. `verification.md`: validacion minima antes de entregar cambios visuales.
9. `html-section-inventory.md`: inventario de paginas HTML y secciones reutilizables.
10. `svg-color-conversion.md`: referencia de color fuerte y luz para conversion de SVGs.
11. `synox-export-index.md`: indice del export de textos, secciones y assets candidatos.
12. `future-project-intake.md`: primera pasada recomendada para los proximos templates.

## Estado Actual

- Stack: HTML estatico + CSS compilado + SCSS fuente + JS del template Synox.
- Pagina inicial de trabajo: `index.html`.
- CSS principal servido: `assets/css/style.css`.
- SCSS fuente: `assets/scss/**`.
- Indice SCSS: `assets/scss/style.scss`.
- Figma visual objetivo: archivo `O0y2eBiHyJHImQDLmGd56J`, nodo `161:727`.
- Figma tipografia objetivo: archivo `O0y2eBiHyJHImQDLmGd56J`, nodo `10:2`.
- Base tipografica nueva: `Bebas Neue` para titulares/nav/botones y `Carlito` como alternativa Calibri para cuerpo.
- Fase vigente: corregir documentacion y arquitectura antes de tocar visual.

## Reglas Rapidas Para Agentes

- No introducir React, Next, Astro, Tailwind ni otro framework.
- El codigo React/Tailwind entregado por Figma MCP es referencia visual, no codigo para pegar.
- No copiar decisiones de Bitrader ni Leadz; solo pueden servir como referencia historica de metodo.
- No crear SCSS nuevo por defecto.
- Editar primero los parciales existentes en `assets/scss/**`.
- Mantener `assets/scss/style.scss` como indice, no como archivo de estilos directos.
- Si se cambia SCSS, actualizar tambien `assets/css/style.css`.
- Usar `npm run sass:build` para compilar una vez.
- Usar `npm run sass:watch` mientras se editan parciales SCSS.
- No editar CSS vendor ni CSS minificado para tema.
- Si cambia una decision, actualizar `docs/decisions.md`.
- Si cambia la fase de trabajo, actualizar `docs/current-phase.md`.
- Assets descargados desde Figma/MCP se guardan primero en `assets/images/figma/`.
- Para reutilizar copy o secciones Synox, revisar primero `exports/synox-content/`.
- Para elegir imagenes candidatas, revisar `exports/assets-candidates/*/manifest.md`.
