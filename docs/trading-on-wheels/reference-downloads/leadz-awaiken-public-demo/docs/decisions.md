# Decisions - Trading On Wheels / Leadz Build

Este documento es la fuente de decisiones para agentes trabajando en esta build. Antes de cambiar HTML, CSS, JS o assets, leer este archivo y mantenerlo actualizado si cambia una decision tecnica, visual u operativa.

## Regla De Documentacion

- Estado: vigente.
- Decision: cada cambio importante debe actualizar documentacion en el mismo trabajo.
- Archivo canonico: `docs/decisions.md`.
- Alcance: arquitectura del template, tema visual, Figma, CSS, HTML, assets, scripts y verificacion.
- Implicacion: si cambia como se tematiza, valida, reemplaza un asset o adapta una seccion, se registra aqui.

## 1. Esta Build Es HTML Estatico Leadz

- Estado: vigente.
- Decision: el frontend actual no es Astro, Next, React ni Tailwind. Es una descarga estatica del template Leadz/Awaiken.
- Evidencia: paginas `.html` en la raiz, `css/custom.css`, `js/**`, `images/**` y `webfonts/**`.
- Implicacion: no crear componentes React, no instalar Tailwind y no introducir un framework nuevo para emular Figma.
- Implicacion: los cambios deben respetar las clases existentes salvo que se apruebe una refactorizacion HTML explicita.

## 2. Figma Es La Referencia Visual, No El Stack

- Estado: vigente.
- Decision: el nodo visual objetivo es `161:727` del archivo `O0y2eBiHyJHImQDLmGd56J`.
- Nombre del frame: `Trading On Wheels - Leadz UI landing / Bebas + Carlito`.
- Decision: el nodo tipografico objetivo es `10:2`.
- Nombre del frame: `Typography Frame - Bebas Neue + Calibri test`.
- Implicacion: usar Figma para colores, jerarquia, assets y layout objetivo, pero convertirlo al stack local: HTML estatico + CSS existente.
- Implicacion: el codigo React/Tailwind de Figma MCP solo sirve para extraer valores, texto, jerarquia y assets temporales.

## 3. Bitrader Solo Es Referencia De Documentacion

- Estado: vigente.
- Decision: los docs de Bitrader se usan como formato y metodo de trabajo, no como fuente visual ni tecnica para Leadz.
- Implicacion: no copiar decisiones de Sass, nodos `161:557`/`2:2`, `Anton`, `Montserrat`, `assets/sass`, `assets/css/style.css` ni `index--theme_dark.html`.
- Implicacion: todo documento de Leadz debe nombrar rutas, clases, fuentes y nodos reales de Leadz.

## 4. CSS Actual Es La Fuente De Estilos

- Estado: vigente.
- Decision: la descarga local no trae SCSS publico ni sourcemap de `custom.css`.
- Fuente actual: `css/custom.css`.
- Variables actuales principales:

```txt
--primary-color: #14202E
--secondary-color: #FAFAFA
--text-color: #828282
--accent-color: #D8E28C
--dark-color: #114A43
--white-color: #FFFFFF
--divider-color: #E3E3E3
--dark-divider-color: #FFFFFF1A
--default-font: "Inter", sans-serif
--accent-font: "Onest", sans-serif
```

- Implicacion: no crear `assets/sass` ni migrar a SCSS sin una tarea explicita.
- Implicacion: `css/custom.css` se mantiene como base del template y no se reescribe para resolver una seccion TOW aislada.
- Decision actualizada: `index-tow.html` usa `css/tow-overrides.css` como capa scoped cargada despues de `css/custom.css`.
- Regla de scope: antes de adaptar una seccion, copiar al scope el selector base relevante de `css/custom.css`, prefijarlo con `.tow-index-page` y modificar solo las propiedades necesarias.
- Implicacion: el scope permitido para esa capa es `body.tow-index-page`; no se debe aplicar a paginas internas salvo decision explicita.
- Implicacion: no crear reglas que ignoren la base existente si hay un selector equivalente en `css/custom.css`.

## 5. Orden De Migracion

- Estado: vigente.
- Decision: la migracion se hace por fases para no romper el template.
- Fase 0: documentar Leadz y Figma MCP.
- Fase 1: cambiar tokens, tipografia y look base de la landing.
- Fase 2: adaptar HTML de `index.html` por secciones a la landing Figma.
- Fase 3: exportar/reemplazar assets principales con staging.
- Fase 4: limpiar secciones no usadas y validar responsive.
- Implicacion: no mezclar reemplazo masivo de imagenes con la primera pasada de tema salvo que sea necesario para probar una seccion.

## 6. Responsabilidades De Archivos

- Estado: vigente.
- `index.html`: pagina principal de trabajo.
- `css/custom.css`: variables, base, layout, componentes, secciones y responsive del template.
- `css/bootstrap.min.css`, `css/all.css`, `css/animate.css`, `css/swiper-bundle.min.css`, etc.: vendors; no editarlos para tema.
- `js/function.js`: inicializaciones del template.
- `images/**`: imagenes, SVGs, logos y fondos usados por HTML/CSS.
- `webfonts/**`: Font Awesome local.
- Implicacion: cambios globales propios pueden caer en `css/custom.css`; cambios TOW de `index-tow.html` deben caer en `css/tow-overrides.css` copiando y adaptando la base existente.

## 7. Politica De Tokens

- Estado: vigente.
- Decision: tokenizar solo valores globales o repetidos.
- Paleta objetivo derivada de Figma:

```txt
Black/base: #000000 / #040404 / #0B0B0B
Panel/card: #0D0D0D
Header ink: #14202E
Primary yellow: #F7C600
Course blue: #2757A6
Competition green: #498734 / #488A32
Warm canvas: #F7F4EA
Muted text: #AEB8BA
White: #FFFFFF
```

- Implicacion: mapear primero sobre variables existentes (`--accent-color`, `--dark-color`, `--text-color`, etc.) antes de crear nombres nuevos.
- Implicacion: no convertir cada pixel de Figma en variable. Medidas locales de una card o seccion deben quedarse en su selector.
- Decision: `--accent-color` debe pasar de verde Leadz `#D8E28C` a amarillo TOW `#F7C600` cuando empiece la fase visual.
- Decision: conservar azul `#2757A6` y verde `#498734` como acentos semanticos de Course y Competitions, no como reemplazo global del acento principal.

## 8. Tipografia

- Estado: vigente.
- Decision: la base tipografica nueva es `Bebas Neue` + `Carlito`.
- `Bebas Neue`: titulares display, nav, botones, labels, cards y footer headings.
- `Carlito`: cuerpo, parrafos, listas, footer links y captions.
- Implicacion: reemplazar el import actual de `Inter` + `Onest` en `index.html` o cargar las nuevas familias despues.
- Import propuesto:

```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Carlito:wght@400;700&display=swap" rel="stylesheet">
```

- Implicacion: `--default-font` debe apuntar a `"Carlito", "Calibri", Arial, sans-serif`.
- Implicacion: `--accent-font` debe apuntar a `"Bebas Neue", sans-serif`.
- Decision: `Geist Mono` aparece en chips/anotaciones del style frame y no se incorpora al sitio.

## 9. Landing Objetivo Sobre `index.html`

- Estado: vigente.
- Decision: `index.html` es la pagina inicial de trabajo heredada del template.
- Decision: `index-tow.html` tambien se mantiene como propuesta/home TOW existente en la carpeta; no se crean paginas nuevas para el sitemap.
- Decision: el sitemap TOW reutiliza HTML existentes:
  - Home: `index-tow.html`.
  - Membership: `pricing.html`.
  - Course: `service-single.html`.
  - Competitions: `case-study.html`.
  - About Oscar: `about.html`.
  - Join Now: `contact.html`.
- Decision: header, topbar, footer, titulos, breadcrumbs y copy principal de esas rutas deben apuntar a estas paginas reales, sin submenus demo de Leadz.
- Estructura Leadz actual relevante:
  - Topbar: `.topbar`.
  - Header: `.main-header`, `.header-sticky`, `.main-menu`, `.header-btn`.
  - Hero: `.hero`, `.hero-content`, `.hero-images`, `.hero-counter-box`.
  - Offers candidatos: `.our-pricing` y `.pricing-box`.
  - About candidato: `.about-us`.
  - CTA: `.cta-box`.
  - Footer: `.main-footer`.
- Estructura Figma objetivo:
  - Topbar limited offer.
  - Header con logo TOW, nav y boton Join Now.
  - Hero full image con wash izquierdo.
  - Offers: Membership, Course, Competitions.
  - About Oscar.
  - CTA Become a Gurman Wheeler.
  - Footer TOW.
- Implicacion: la conversion debe reutilizar primero secciones y clases Leadz existentes. Crear clases TOW solo como modificadores locales cuando la estructura actual no alcance.
- Implicacion: no crear `membership.html`, `course.html`, `competitions.html`, `about-oscar.html` ni `join.html` mientras existan rutas Leadz reutilizables.

## 10. Assets Prioritarios

- Estado: vigente.
- Decision: los assets se reemplazan despues de estabilizar tema y estructura.
- Decision: el orden canonico de exportacion vive en `docs/export-order.md`.
- Decision: todos los assets descargados desde Figma/MCP se guardan primero en `images/figma/` con manifest.
- Decision: si un asset Figma reemplaza una ruta existente, el archivo actual se conserva con sufijo `-original` en la misma carpeta.
- Implicacion: `images/figma/` es staging; la ruta final probable es `images/tow/`.
- Implicacion: primero se registran colores y tipografia exactos, despues se exportan assets.

## 11. Politica De HTML

- Estado: vigente.
- Decision: conservar clases Leadz/Awaiken mientras sea viable.
- Implicacion: adaptar `.hero`, `.our-pricing`, `.about-us`, `.cta-box` y `.main-footer` antes de inventar una landing paralela.
- Implicacion: si Figma exige una composicion que no cabe en la clase existente, se puede agregar una clase modificadora local como `.tow-offers` o `.tow-about`.
- Implicacion: los textos TOW se cambian en HTML estatico por ahora; no hay data layer ni build framework.

## 12. Politica De JS

- Estado: vigente.
- Decision: mantener los scripts existentes solo para comportamiento del template.
- Implicacion: no introducir JS para resolver decisiones que son de layout o tema.
- Implicacion: si una seccion se elimina del HTML, revisar que `js/function.js` no dependa de ella.
- Implicacion: no agregar dependencias nuevas sin necesidad clara.

## 13. Responsive

- Estado: vigente.
- Decision: todo cambio visual debe revisarse en desktop y mobile.
- Implicacion: los valores desktop pueden seguir Figma 1440px, pero cada seccion debe tener ajustes moviles en CSS.
- Implicacion: evitar texto que se salga de botones/cards, especialmente por el uso de `Bebas Neue`.

## 14. Verificacion Minima

- Estado: vigente.
- Decision: la verificacion minima despues de cambios visuales es:
  - Revisar `index.html` en desktop.
  - Revisar `index.html` en mobile.
  - Confirmar que `css/custom.css` contiene los cambios finales.
  - Confirmar que no se rompen topbar, header, hero, offers, About, CTA ni footer.
  - Confirmar que no hay assets principales rotos.
- Implicacion: si se levanta servidor local o se abre Browser/Playwright, registrar hallazgos relevantes si cambian decisiones.

## Registro De Cambios Importantes

### 2026-06-01

- Se corrigio el rumbo de Fase 1 para trabajar sobre la base real del template: `css/custom.css`.
- Se reemplazo el import de Google Fonts en `index.html`: `Inter` + `Onest` sale, `Bebas Neue` + `Carlito` entra.
- Se recupero el enfoque scoped para `index-tow.html`: `css/tow-overrides.css` cargado despues de `css/custom.css` y limitado a `body.tow-index-page`.
- Se aplico el primer pase de colores y tipografia directamente en `css/custom.css`: variables base, body/headings, botones, section titles, header/nav, hero, pricing, CTA, footer y hardcodes verdes principales.
- Se verifico estaticamente con `git diff --check` y busqueda de referencias. El navegador integrado no pudo abrir la pagina porque el runtime `node_repl` fallo con `windows sandbox failed: spawn setup refresh`.
- Se creo la documentacion operativa de Leadz basada en el metodo documental de Bitrader, sin copiar sus decisiones visuales ni tecnicas.
- Se confirmo que Leadz es HTML estatico con `css/custom.css` como CSS principal y sin SCSS publico.
- Se documento el nodo Figma visual `161:727`.
- Se documento el nodo Figma tipografico `10:2`.
- Se establecio `Bebas Neue` + `Carlito` como base tipografica para Leadz/TOW.
- Se creo `docs/export-order.md` como secuencia canonica para tokens, tipografia, staging, assets y reemplazos.
- Se definio `images/figma/` como staging para assets MCP/Figma y `images/tow/` como ruta final probable.
- Se mapeo el sitemap TOW sobre paginas HTML existentes, sin crear archivos nuevos: `index-tow.html`, `pricing.html`, `service-single.html`, `case-study.html`, `about.html` y `contact.html`.
- Se simplifico el header/footer de las rutas del sitemap para usar Home, Membership, Course, Competitions, About Oscar y Join Now; se agrego estado activo en CSS para el nav.
