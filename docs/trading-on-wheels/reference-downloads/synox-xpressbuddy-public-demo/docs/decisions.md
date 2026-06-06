# Decisions - Trading On Wheels / Synox Build

Este documento es la fuente de decisiones para agentes trabajando en esta build. Antes de cambiar HTML, CSS, SCSS, JS o assets, leer este archivo y mantenerlo actualizado si cambia una decision tecnica, visual u operativa.

## Regla De Documentacion

- Estado: vigente.
- Decision: cada cambio importante debe actualizar documentacion en el mismo trabajo.
- Archivo canonico: `docs/decisions.md`.
- Alcance: arquitectura del template, tema visual, Figma, SCSS, CSS compilado, HTML, assets, scripts y verificacion.
- Implicacion: si cambia como se tematiza, valida, reemplaza un asset o adapta una seccion, se registra aqui.

## 1. Esta Build Es HTML Estatico Synox

- Estado: vigente.
- Decision: el frontend actual no es Astro, Next, React ni Tailwind. Es una descarga estatica del template Synox/XpressBuddy.
- Evidencia: paginas `.html` en la raiz, `assets/css/style.css`, `assets/scss/**`, `assets/js/**`, `assets/images/**` y `assets/webfonts/**`.
- Implicacion: no crear componentes React, no instalar Tailwind y no introducir un framework nuevo para emular Figma.
- Implicacion: los cambios deben respetar clases Synox existentes salvo que se apruebe una refactorizacion HTML explicita.

## 2. Figma Es Referencia Visual, No Stack

- Estado: vigente.
- Decision: el nodo visual objetivo es `161:727` del archivo `O0y2eBiHyJHImQDLmGd56J`.
- Decision: el nodo tipografico objetivo es `10:2`.
- Implicacion: usar Figma para colores, jerarquia, assets y layout objetivo, pero convertirlo al stack local: HTML estatico + SCSS existente + CSS compilado.
- Implicacion: el codigo React/Tailwind de Figma MCP solo sirve para extraer valores, texto, jerarquia y assets temporales.

## 3. Bitrader Y Leadz Solo Son Referencias Historicas

- Estado: vigente.
- Decision: los docs previos de Bitrader/Leadz no son fuente tecnica para esta build Synox.
- Implicacion: no copiar rutas `css/custom.css`, `images/**`, `assets/sass`, clases Leadz ni decisiones visuales de otro template.
- Implicacion: todo documento de esta carpeta debe nombrar rutas, clases, fuentes y parciales reales de Synox.

## 4. SCSS Existente Es La Fuente De Estilos

- Estado: vigente.
- Decision: esta descarga si trae SCSS publico recuperado desde `assets/css/style.css.map`.
- Fuente SCSS: `assets/scss/**`.
- Indice SCSS: `assets/scss/style.scss`.
- CSS servido: `assets/css/style.css`.
- Implicacion: no crear SCSS nuevo por defecto.
- Implicacion: adaptar TOW editando los parciales existentes segun responsabilidad.
- Implicacion: si se edita SCSS, tambien debe actualizarse el CSS compilado que carga el navegador.

## 5. Politica De No Crear SCSS Nuevo

- Estado: vigente.
- Decision: no crear nuevos parciales, carpetas o capas SCSS solo para separar TOW.
- Regla: primero buscar el propietario existente:
  - Variables/fuentes/base: `_variable.scss`, `_fonts.scss`, `_reset.scss`.
  - Header/footer/page header/sidebar: `template-parts/**`.
  - Botones, listas, forms, tipografia y piezas reutilizables: `elements/**`.
  - Hero, about, services, CTA, pricing/offers, reviews, team: `components/**`.
  - Reglas especificas de pagina: `templates/**`.
- Decision: crear SCSS nuevo solo si aparece una pieza nueva que no tenga propietario real y se justifica en este documento.
- Implicacion: evitar `tow-overrides.scss`, `tow.scss` o archivos similares mientras la estructura Synox pueda absorber el cambio.

## 6. Orden De Migracion

- Estado: vigente.
- Decision: la migracion se hace por fases para no romper el template.
- Fase 0: documentar Synox y Figma MCP.
- Fase 1: aplicar tokens, tipografia y look base TOW en SCSS existente.
- Fase 2: adaptar HTML de `index.html` por secciones a la landing TOW.
- Fase 3: adaptar paginas internas reutilizando HTML existente.
- Fase 4: exportar/reemplazar assets principales con staging.
- Fase 5: limpiar secciones legacy y validar responsive.
- Implicacion: no mezclar reemplazo masivo de imagenes con la primera pasada de tema salvo que sea necesario para probar una seccion.

## 7. Responsabilidades De Archivos

- Estado: vigente.
- `index.html`: pagina principal de trabajo, basada en `body.investment_solution`.
- `assets/scss/style.scss`: indice de imports; mantenerlo como indice.
- `assets/scss/_variable.scss`: tokens CSS base Synox/Bootstrap.
- `assets/scss/template-parts/_header.scss`: header, nav, sticky y responsive de menu.
- `assets/scss/template-parts/_footer.scss`: footer.
- `assets/scss/components/_hero.scss`: heroes.
- `assets/scss/components/_about.scss`: bloques About.
- `assets/scss/components/_pricing.scss`: pricing/offers.
- `assets/scss/components/_calltoaction.scss`: CTA.
- `assets/scss/elements/_button.scss`: botones.
- `assets/scss/_responsive.scss`: responsive legacy global.
- `assets/css/style.css`: CSS compilado final que carga el navegador.
- `assets/css/*.min.css` y otros vendor: no editarlos para tema.
- `assets/js/main.js`: inicializaciones del template; no usarlo para resolver layout que pertenece a SCSS/HTML.
- `assets/images/**`: imagenes, SVGs, logos y fondos usados por HTML/CSS.

## 8. Politica De Tokens

- Estado: vigente.
- Decision: tokenizar solo valores globales, repetidos o semanticamente importantes.
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

- Implicacion: mapear primero sobre variables existentes (`--bs-primary`, `--bs-dark`, `--bs-secondary`, `--bs-body-color`, etc.) antes de crear nombres nuevos.
- Implicacion: no convertir cada pixel de Figma en variable. Medidas locales de una card o seccion deben quedarse en su selector.
- Decision: `--bs-primary` sera el acento amarillo TOW cuando empiece la fase visual.
- Decision: azul `#2757A6` y verde `#498734` se reservan como acentos semanticos de Course y Competitions.

## 9. Tipografia

- Estado: vigente.
- Decision: la base tipografica nueva es `Bebas Neue` + `Carlito`.
- `Bebas Neue`: titulares display, nav, botones, labels, cards y footer headings.
- `Carlito`: cuerpo, parrafos, listas, footer links y captions.
- Implicacion: reemplazar o complementar la carga de fuentes del template sin introducir familias no usadas por Figma.
- Implicacion: mapear familias sobre variables existentes:
  - `--bs-body-font-family`
  - `--bs-heading-font-family`
- Decision: `Geist Mono` aparece en chips/anotaciones del style frame y no se incorpora al sitio.

## 10. Landing Objetivo Sobre `index.html`

- Estado: vigente.
- Decision: `index.html` es la pagina inicial de trabajo.
- Estructura Synox actual relevante:
  - Header: `.site_header.header_layout_1`.
  - Nav: `.main_menu_list`.
  - Hero: `.hero_section.hero_investment_solution`.
  - About: `.about_section`.
  - Services: `.service_section`.
  - Reviews: `.review_section`.
  - Offers candidato: `.pricing_section`, `.pricing_block`.
  - Team: `.team_section`.
  - FAQ: `.faq_section`.
  - Footer: `.site_footer.footer_layout_1`.
- Estructura TOW objetivo:
  - Header con logo TOW, nav y boton Join Now.
  - Hero full image con wash izquierdo.
  - Offers: Membership, Course, Competitions.
  - About Oscar.
  - CTA Become a Gurman Wheeler.
  - Footer TOW.
- Implicacion: la conversion debe reutilizar primero secciones y clases Synox existentes.
- Implicacion: crear clases TOW solo como modificadores locales cuando la estructura actual no alcance.

## 11. Assets Prioritarios

- Estado: vigente.
- Decision: los assets se reemplazan despues de estabilizar tema y estructura.
- Decision: el orden canonico de exportacion vive en `docs/export-order.md`.
- Decision: todos los assets descargados desde Figma/MCP se guardan primero en `assets/images/figma/` con manifest.
- Decision: si un asset Figma reemplaza una ruta existente, el archivo actual se conserva con sufijo `-original` en la misma carpeta.
- Implicacion: `assets/images/figma/` es staging; la ruta final probable es `assets/images/tow/`.

## 12. Politica De HTML

- Estado: vigente.
- Decision: conservar clases Synox/XpressBuddy mientras sea viable.
- Implicacion: adaptar `.hero_section`, `.pricing_section`, `.about_section`, CTA existente y `.site_footer` antes de inventar una landing paralela.
- Implicacion: si Figma exige una composicion que no cabe en la clase existente, se puede agregar una clase modificadora local como `.tow-offers` o `.tow-about`.
- Implicacion: los textos TOW se cambian en HTML estatico por ahora; no hay data layer ni build framework.

## 13. Politica De JS

- Estado: vigente.
- Decision: mantener los scripts existentes solo para comportamiento del template.
- Implicacion: no introducir JS para resolver decisiones que son de layout o tema.
- Implicacion: si una seccion se elimina del HTML, revisar que `assets/js/main.js` no dependa de ella.
- Implicacion: no agregar dependencias nuevas sin necesidad clara.

## 14. Responsive

- Estado: vigente.
- Decision: todo cambio visual debe revisarse en desktop y mobile.
- Implicacion: si una regla responsive ya existe en `_responsive.scss`, puede editarse ahi.
- Implicacion: responsive nuevo debe vivir preferentemente en el parcial propietario del componente o template-part.
- Implicacion: evitar texto que se salga de botones/cards, especialmente por el uso de `Bebas Neue`.

## 15. Verificacion Minima

- Estado: vigente.
- Decision: la verificacion minima despues de cambios visuales es:
  - Revisar `index.html` en desktop.
  - Revisar `index.html` en mobile.
  - Confirmar que `assets/scss/**` y `assets/css/style.css` estan sincronizados.
  - Confirmar que no se rompe header, hero, offers, About, CTA ni footer.
  - Confirmar que no hay assets principales rotos.
- Implicacion: si se define un comando Sass/build, debe quedar documentado antes de depender de el.

## 16. Sass Local

- Estado: vigente.
- Decision: Sass se instala localmente en esta carpeta con npm.
- Archivos de configuracion:
  - `package.json`
  - `package-lock.json`
- Dependencia: `sass`.
- Script de build:

```txt
npm run sass:build
```

- Script de watch:

```txt
npm run sass:watch
```

- Entrada/salida:

```txt
assets/scss/style.scss -> assets/css/style.css
```

- Implicacion: usar el script local, no un Sass global.
- Implicacion: el watch debe quedar corriendo mientras se editan parciales SCSS.
- Nota: el template usa `@import`; Dart Sass lo compila, pero muestra warnings de deprecacion. No migrar a `@use` salvo tarea explicita porque cambiaria toda la arquitectura del SCSS.

## 17. Referencia De Colores SVG

- Estado: vigente.
- Decision: `icon_discord.svg`, `icon_bars.svg` e `icon_learn.svg` son referencias de color para futuras conversiones de SVG.
- Decision: conservar los paths del icono que se esta corrigiendo y cambiar solo `stop-color`, `fill` o `stroke`.
- Decision: las conversiones de color de SVG deben quedar en degradado usando la luz y el color fuerte de la muestra; si el SVG original es plano, se le agrega un degradado SVG.
- Mapeo vigente:
  - Amarillo: fuerte `#FFC107`, luz `#FFDD75`.
  - Azul: fuerte `#0754AE`, luz `#86DBE5`.
  - Verde: fuerte `#07AE4D`, luz `#B4FBD2`.
- Implicacion: cuando se pida cambiar un SVG a una familia de color, usar estos pares como guia.

## Registro De Cambios Importantes

### 2026-06-06

- Se documento `icon_discord.svg`, `icon_bars.svg` e `icon_learn.svg` como referencias de color fuerte y luz para conversiones futuras de SVG.
- Se agrego `docs/svg-color-conversion.md` como guia para futuras conversiones de color de SVG.
- Se enlazo la guia desde `docs/README.md`.

### 2026-06-05

- Se inicio la fase de variables SCSS para TOW en `assets/scss/_variable.scss`.
- Se mantuvo la estructura original de variables Bootstrap/Synox y se actualizaron valores existentes en lugar de renombrar tokens.
- Se mapearon los colores base TOW sobre `--bs-primary`, `--bs-dark`, `--bs-light`, `--bs-secondary`, `--bs-body-color`, `--bs-heading-color` y variables RGB correspondientes.
- Se actualizo tambien `assets/scss/templates/_home.scss` porque `index-tow.html` usa `body.investment_solution` y ese bloque pisa variables del root.
- Se agregaron solo variables TOW con nombres explicitos para semanticas que Bootstrap no cubre directamente: Course, Competitions, card, header ink y dividers.
- No se creo ningun archivo SCSS nuevo.

### 2026-06-04

- Se instalo Sass local con npm y se agregaron scripts `sass:build` y `sass:watch`.
- Se ejecuto `npm run sass:build` correctamente para validar la compilacion de `assets/scss/style.scss` hacia `assets/css/style.css`.
- Se corrigio la documentacion para esta base real: Synox/XpressBuddy, no Leadz.
- Se confirmo que el proyecto tiene SCSS recuperado en `assets/scss/**` y CSS servido en `assets/css/style.css`.
- Se establecio la regla operativa: no crear SCSS nuevo por defecto; editar parciales existentes segun responsabilidad.
- Se actualizo el mapa de arquitectura para `elements`, `template-parts`, `components`, `templates`, `_variable.scss`, `_responsive.scss` y `style.scss`.
- Se definio `assets/images/figma/` como staging de assets Figma para esta carpeta.
