# Docs - Trading On Wheels / Leadz

Este folder contiene la documentacion operativa para adaptar la descarga estatica de Leadz/Awaiken al sistema visual Trading On Wheels usando Figma MCP como referencia.

## Lectura Recomendada

1. `decisions.md`: decisiones canonicas y reglas vigentes.
2. `architecture.md`: como esta armado el template local Leadz.
3. `current-phase.md`: fase activa y checklist.
4. `figma-reference.md`: lectura de los nodos Figma objetivo.
5. `export-order.md`: orden canonico para tokens, tipografia y assets Figma.
6. `implementation-plan.md`: flujo para tema, tipografia, HTML y assets.
7. `assets-plan.md`: assets Figma que se deben exportar y prioridad.
8. `verification.md`: validacion minima antes de entregar cambios visuales.

## Estado Actual

- Stack: HTML estatico + CSS compilado/publicado + JS del template Awaiken.
- Pagina inicial de trabajo: `index.html`.
- CSS principal: `css/custom.css`.
- No hay SCSS publico en la descarga local.
- Figma visual objetivo: archivo `O0y2eBiHyJHImQDLmGd56J`, nodo `161:727`.
- Figma tipografia objetivo: archivo `O0y2eBiHyJHImQDLmGd56J`, nodo `10:2`.
- Base tipografica nueva: `Bebas Neue` para titulares/nav/botones y `Carlito` como alternativa Calibri para cuerpo.
- Fase vigente: cerrar el orden de exportacion Figma MCP para Leadz antes de tocar el visual.

## Reglas Rapidas Para Agentes

- No introducir React, Next, Astro, Tailwind ni otro framework.
- El codigo React/Tailwind entregado por Figma MCP es referencia visual, no codigo para pegar.
- No copiar decisiones de Bitrader; solo se usa su estructura documental como referencia.
- No asumir que hay Sass. Si se crea Sass, debe existir decision explicita.
- Mantener `css/custom.css` y las clases Leadz existentes salvo decision documentada.
- Corregir primero la base real del template (`css/custom.css`) antes de crear capas paralelas.
- Si cambia una decision, actualizar `docs/decisions.md`.
- Si cambia la fase de trabajo, actualizar `docs/current-phase.md`.
- Assets descargados desde Figma/MCP se guardan primero en `images/figma/`.
