# Decisions - Trading On Wheels / Bitrader Build

Este documento es la fuente de decisiones para agentes trabajando en esta build.
Antes de cambiar SCSS, HTML, JS o assets, leer este archivo y mantenerlo actualizado
si cambia una decision tecnica, visual u operativa.

## Regla De Documentacion

- Estado: vigente.
- Decision: cada cambio importante debe actualizar documentacion en el mismo trabajo.
- Archivo canonico: `docs/decisions.md`.
- Alcance: arquitectura del template, tema visual, Figma, Sass, HTML, assets, scripts, verificacion visual y decisiones de migracion.
- Implicacion: si cambia como se tematiza, compila, valida o reemplaza un asset, se registra aqui.

## 1. Esta Build Es HTML Estatico Bitrader

- Estado: vigente.
- Decision: el frontend actual no es Astro, Next, React ni Tailwind. Es una descarga estatica del template Bitrader/Thetork.
- Evidencia: paginas `.html` en la raiz, `assets/css/style.css`, `assets/sass/style.scss`, `assets/js/**` y `assets/images/**`.
- Implicacion: no crear componentes React, no instalar Tailwind y no introducir un framework nuevo para emular Figma.
- Implicacion: los cambios deben respetar las clases existentes salvo que se apruebe una refactorizacion HTML explicita.

## 2. Figma Es La Referencia Visual, No El Stack

- Estado: vigente.
- Decision: el nodo Figma de referencia es `161:557` del archivo `O0y2eBiHyJHImQDLmGd56J`.
- Nombre del frame: `Trading On Wheels Landing - Bitrader UI / TOW Typography`.
- Implicacion: usar Figma para colores, jerarquia, assets y layout objetivo, pero convertirlo al stack local: HTML estatico + Sass existente.
- Implicacion: el codigo React/Tailwind que entregue Figma MCP es solo referencia visual, no codigo a pegar.

## 3. Orden De Migracion

- Estado: vigente.
- Decision: la migracion se hace por fases para no romper el template.
- Fase 1: cambiar el tema completo desde Sass.
- Fase 2: reemplazar assets principales.
- Fase 3: simplificar/ajustar HTML por secciones para acercarse a la landing Figma.
- Fase 4: limpiar secciones no usadas y validar responsive.
- Implicacion: no mezclar grandes cambios de HTML con la primera pasada de tema salvo que sea necesario para probar una seccion.

## 4. Sass Mantiene La Arquitectura Actual

- Estado: vigente.
- Decision: se conserva la estructura real del template:

```txt
assets/sass/
  abstracts/
  base/
  components/
  layout/
  themes/
  vendors/
  style.scss
```

- Implicacion: no crear una carpeta `assets/scss` ni renombrar parciales mientras el template use `assets/sass`.
- Implicacion: `assets/sass/style.scss` sigue siendo el entrypoint.
- Implicacion: el CSS publicado vive en `assets/css/style.css`; despues de tocar Sass hay que regenerar o sincronizar el CSS compilado.
- Decision: Bitrader tiene setup Node local con `package.json` y `package-lock.json`. Comando principal de desarrollo desde la raiz del template: `npm run watch`.
- Decision: compilacion puntual desde la raiz del template: `npm run build`.
- Decision: `sass` queda como devDependency local para que la compilacion no dependa solo del binario global.
- Decision: Sass CLI global puede seguir usandose como fallback. Comando directo desde la raiz del template: `sass assets/sass/style.scss assets/css/style.css --style=expanded --source-map --quiet`.
- Decision: Sass Migrator queda instalado globalmente para conversiones/migraciones controladas. Version verificada: `sass-migrator 2.5.7`.
- Implicacion: usar `sass-migrator` primero con `--dry-run`; no convertir masivamente `@import` a `@use` ni division legacy sin una tarea explicita y revision visual posterior.
- Decision: `vendors/_nice-select.scss` y `pages/_home.scss` existen como parciales vacios porque `style.scss` los importaba y el CSS distribuido no contenia reglas de esos imports.

## 5. Responsabilidades De Sass

- Estado: vigente.
- Decision: las responsabilidades se mantienen segun los parciales existentes.
- `abstracts/_variables.scss`: tokens globales, variables CSS por tema, fuentes globales y alias Sass reutilizados.
- `base/_fonts.scss`: imports o `@font-face` de fuentes.
- `base/_typography.scss`: body, headings, links, listas e imagenes base.
- `layout/_header.scss`: header, nav persistente y wrapper de menu.
- `layout/_banner.scss`: hero/banner.
- `layout/_footer.scss`: footer.
- `components/_button.scss`: botones `.trk-btn`.
- `components/_pricing.scss`: cards de oferta/membership/course/competition cuando se reutilicen como pricing.
- `components/_cta.scss`: CTA amarillo final.
- `components/_about.scss`: bloque About/Oscar si se reutiliza sobre la seccion existente.
- `themes/_theme.scss`: ajustes especificos de `html[data-bs-theme='dark']`.
- Implicacion: responsive de una pieza se escribe en su propio parcial, no en un archivo catch-all.

## 6. Politica De Tokens

- Estado: vigente.
- Decision: tokenizar solo valores globales o repetidos.
- Tokens del tema TOW objetivo:

```txt
--tow-bg: #0c0c0d
--tow-surface: #141414
--tow-yellow: #f7c600
--tow-blue: #2757a6
--tow-green: #498734
--tow-white: #ffffff
--tow-muted: #908f8f
```

- Implicacion: mapear estos valores sobre los tokens actuales (`--brand-color`, `--body-color`, `--title-color`, `--text-color`, `--footer-bg-color`, etc.) antes de crear nombres nuevos.
- Implicacion: no convertir cada pixel de Figma en variable. Tamanos locales de una card o seccion deben quedar en el selector que los usa.

## 7. Tipografia

- Estado: vigente.
- Decision: la referencia Figma usa solo `Anton` y `Montserrat` para la vista objetivo. El nodo `2:2` es la guia tipografica.
- Decision: usar solo las fuentes y pesos necesarios confirmados: `Anton 400`; `Montserrat 400, 500, 600, 700, 800, 900`.
- Decision aplicada: el import anterior de `Anek Telugu` + `Open Sans` fue reemplazado por `Anton` + `Montserrat` en `base/_fonts.scss`.
- Decision: `Montserrat` queda como fuente base para `$title-font` y `$text-font`; `Anton` se reserva para titulares display donde Figma lo exige.
- Implicacion: mantener la base original de variables Sass, cambiando sus valores en vez de crear un sistema nuevo de fuentes.
- Decision aplicada: se agrega `$display-font: 'Anton'` y se usa en hero `.banner__content-heading` y en heading de pricing/ofertas. La base global de `body`, headings, nav, cards, botones y CTA queda en `Montserrat`.
- Implicacion: `letter-spacing` se mantiene en `0` en implementacion CSS para evitar tracking negativo o deformaciones responsive.
- Implicacion: no agregar `Geist Mono`; solo aparece en chips/anotaciones del style frame.

## 8. Tema Visual Dark

- Estado: vigente.
- Decision: la referencia Figma esta alineada al dark look y debe aplicarse sobre `[data-bs-theme="dark"]`, sin desarmar la mecanica light/dark heredada del template.
- Implicacion: no convertir el dark look de Figma en tema global absoluto ni reescribir `:root` completo si el cambio corresponde solo al modo dark.
- Implicacion: el primer objetivo tecnico es actualizar los valores correspondientes dentro de `[data-bs-theme="dark"]` en `assets/sass/abstracts/_variables.scss`.
- Tema dark objetivo:
  - Fondo global negro casi puro.
  - Header negro con border amarillo.
  - Botones primarios amarillos con texto negro.
  - Botones secundarios outline amarillo sobre negro.
  - Cards oscuras con radios moderados.
  - Texto secundario gris `#908f8f`.
  - Acentos por producto: amarillo membership, azul course, verde competitions.
- Implicacion: los tokens verdes originales del dark theme de Bitrader deben mapearse a la paleta TOW solo dentro del alcance dark, excepto donde una card requiera azul o verde semantico.
- Decision aplicada: el primer pase de tokens dark usa `#F7C600` como brand/acento principal, `#0C0C0D` como fondo base, `#141414` como superficie y `#2757A6` como acento azul disponible.
- Implicacion: `:root` mantiene por ahora los colores originales del template para no romper light mode.
- Decision: si un componente tiene sombras o fondos verdes hardcodeados y se ven en dark, cubrirlos desde `themes/_theme.scss` dentro de `html[data-bs-theme='dark']` antes de cambiar estilos globales que tambien afecten light.

## 9. HTML Actual Y Landing Objetivo

- Estado: vigente.
- Decision: `index--theme_dark.html` fue la pagina de trabajo inicial para validar tema, pero la rearmada pesada se prueba ahora en una pagina nueva: `index-tow.html`.
- Decision: `index.html`, `index--theme_dark.html` y el resto de paginas originales quedan intactas mientras se valida la propuesta.
- Decision: `index-tow.html` usa `data-bs-theme="dark"`, conserva dependencias CSS/JS vendor del template y evita `assets/js/custom.js` porque ese script asume markup legacy completo. La pagina nueva usa un script minimo para preloader, AOS y scroll-to-top.
- Decision: el sitemap de primera prueba TOW queda aislado en paginas nuevas: `index-tow.html`, `membership.html`, `course.html`, `competitions.html` y `about-oscar.html`; el CTA superior `Join Now` apunta a `signup.html`.
- Implicacion: no reemplazar todavia `price.html`, `service-details.html`, `about.html` ni otras paginas legacy de Bitrader para esta prueba rapida.
- Estructura HTML actual relevante:
  - Header: `.header-section.header-section--style2`.
  - Hero: `.banner.banner--style1`.
  - About legacy: `.about.about--style1`.
  - Pricing: `.pricing`.
  - CTA: `.cta`.
  - Footer: `.footer`.
- Estructura Figma objetivo:
  - Header.
  - Hero.
  - Offers: Membership, Course, Competitions.
  - About Oscar.
  - CTA: Become a Gurman Wheeler.
  - Footer.
- Implicacion: el HTML actual tiene secciones extra heredadas del template. No eliminarlas en la fase de tema salvo que la tarea pida limpiar la landing.
- Implicacion: cualquier ajuste agresivo de layout o contenido se prueba primero en `index-tow.html`; solo se migra al index original cuando se apruebe.

## 10. Assets Prioritarios

- Estado: vigente.
- Decision: los assets se reemplazan despues de la primera pasada de Sass.
- Decision: todos los assets descargados desde Figma/MCP se guardan primero en `assets/figma/` con manifest.
- Decision: si un asset Figma reemplaza una ruta existente, el archivo actual se conserva en la misma carpeta con sufijo `-original`.
- Decision: durante la rearmada pesada se trabaja sobre `index-tow.html` como pagina propuesta; las demas paginas del template quedan para el cierre.
- Decision: assets puramente decorativos de Figma como lineas, dividers, underlines y algunos bullets pueden quedar staged, pero se prefiere implementarlos en CSS si no aportan contenido visual unico.
- Implicacion: el staging Figma no es estructura final; al cierre se decide si los assets migran a `assets/images/tow/` u otra ruta definitiva.
- Prioridad:
  1. Logo TOW negativo para header/footer/preloader/favicon/OG.
  2. Hero image del guia con paisaje/carretera.
  3. Iconos de Membership, Course y Competitions.
  4. Fondo/chart wash para la card Membership si se busca mayor fidelidad.
  5. Retrato de Oscar.
  6. Imagen wheel overlay de Oscar.
  7. Iconos sociales: YouTube, TikTok, Instagram, Discord.
- Implicacion: no crear assets decorativos falsos para tapar referencias rotas; si una referencia no se usa, se elimina o se cambia por el asset correcto.

## 11. Politica De HTML

- Estado: vigente.
- Decision: conservar clases Bitrader/BEM mientras sea viable.
- Implicacion: adaptar `.banner`, `.pricing`, `.about`, `.cta`, `.footer` antes de inventar nuevas secciones.
- Implicacion: si Figma exige una composicion que no cabe en la clase existente, se puede agregar una clase modificadora local, pero no renombrar toda la estructura.
- Implicacion: los textos TOW se cambian en HTML estatico por ahora; no hay data layer ni build framework.

## 12. Politica De JS

- Estado: vigente.
- Decision: mantener los scripts existentes solo para comportamiento del template.
- Implicacion: no introducir JS para resolver decisiones que son puramente de layout o tema.
- Implicacion: si una seccion se elimina del HTML, revisar que no quede JS propio dependiendo de ella.
- Implicacion: no agregar dependencias nuevas sin necesidad clara.

## 13. Responsive

- Estado: vigente.
- Decision: todo cambio visual debe revisarse en desktop y mobile.
- Implicacion: los valores desktop pueden seguir Figma 1440px, pero cada seccion debe tener ajustes moviles en su parcial Sass propietario.
- Implicacion: evitar texto que se salga de botones/cards. Si un label largo no cabe, ajustar padding, ancho o line-height en el componente.

## 14. Verificacion Minima

- Estado: vigente.
- Decision: la verificacion minima despues de cambios visuales es:
  - Revisar que `index-tow.html` carga sin assets rotos visibles durante la fase de propuesta.
  - Revisar que `index--theme_dark.html` no se rompio si se tocan estilos compartidos.
  - Revisar desktop y mobile.
  - Confirmar que `assets/css/style.css` refleja los cambios Sass.
  - Confirmar que no se rompen header, hero, cards, CTA ni footer.
- Implicacion: si se levanta un servidor local o se abre Browser/Playwright, registrar hallazgos relevantes aqui si cambian decisiones.

## 15. No Copiar Decisiones Del Proyecto Anterior

- Estado: vigente.
- Decision: la version antigua de `decisions.md` de otro proyecto solo sirve como referencia de formato.
- Implicacion: decisiones sobre Astro, Kubernetes, S3, CloudFront, route registries, Unlighthouse, formularios Astro o componentes `.astro` no aplican a esta build.
- Implicacion: si el proyecto migra en el futuro a otro stack, se abrira una decision nueva con evidencia local.

## Registro De Cambios Importantes

### 2026-06-01

- Se instalo Sass CLI global (`sass 1.100.0`) para compilar SCSS desde terminal.
- Se instalo Sass Migrator global (`sass-migrator 2.5.7`) para conversiones/migraciones controladas de Sass.
- Se creo setup Node local de Bitrader con scripts `build`, `watch`, `sass:build` y `sass:watch`; `npm run build` compila correctamente y `npm run watch` queda como comando de desarrollo.
- Se creo `index-tow.html` como pagina propuesta aislada basada en la estructura del index, usando assets de `assets/figma/` y sin reemplazar todavia el index original.
- Se armo el sitemap minimo TOW en paginas aisladas: `membership.html`, `course.html`, `competitions.html` y `about-oscar.html`, copiando la estructura de `index-tow.html` y manteniendo assets definidos en cada HTML.
- Se agrego `docs/tow-sitemap.md` con el mapa de navegacion, rol de cada pagina y secciones copiadas para la primera prueba.
- Se agrego `assets/sass/pages/_tow-index.scss` y se importo desde `assets/sass/style.scss`; todos los selectores de la propuesta quedan encapsulados bajo `.tow-page`.
- Se descargo la tanda completa de assets expuestos por Figma MCP para el nodo `161:557` en `assets/figma/` y se registro en `assets/figma/manifest.md`.
- Se verifico el preloader manual: `assets/images/logo/preloader.png` ahora contiene el simbolo TOW amarillo/azul; `preloader-o.png` conserva el preloader verde anterior.
- Se ejecuto el primer pase tipografico: Google Fonts ahora carga `Anton` + `Montserrat`; `$title-font` y `$text-font` usan `Montserrat`; `$display-font` usa `Anton`; hero y pricing/ofertas reciben display font; CTA/cards/nav quedan en `Montserrat`.
- Se restauraron `assets/sass/vendors/_nice-select.scss` y `assets/sass/pages/_home.scss` como parciales vacios para que `assets/sass/style.scss` compile sin alterar el CSS heredado.
- Se ejecuto el primer pase de migracion de colores dark en `assets/sass/abstracts/_variables.scss`, se cubrieron glows verdes hardcodeados en `assets/sass/themes/_theme.scss` y se regenero `assets/css/style.css`.
- Se verifico que Figma usa `Anton Regular` y `Montserrat Regular/Medium/Bold/ExtraBold`; luego el nodo `2:2` agrego `Montserrat SemiBold` y `Black` como pesos necesarios. `Geist Mono` queda excluida del sitio.
- Se confirmo que `Montserrat` sera base para `$title-font` y `$text-font`, con `Anton` reservado para titulares display.
- Se definio `assets/figma/` como carpeta de staging para assets MCP/Figma y backups `*-original` para reemplazos temporales.
- Se creo `assets/figma/manifest.md` como registro de assets descargados, usos previstos y estado.
- Se agrego `docs/implementation-plan.md` con el flujo de fuentes, tokens dark, staging de assets, backups y migracion final.
- Se aclaro que Figma dark no reemplaza todo el sistema global: guia la actualizacion de `[data-bs-theme="dark"]` manteniendo la estructura light/dark del template.
- Se ejecuto la decision de documentacion inicial y se agregaron `docs/README.md`, `docs/architecture.md`, `docs/current-phase.md`, `docs/figma-reference.md`, `docs/assets-plan.md` y `docs/verification.md`.
- Se creo este documento canonico para la build Trading On Wheels sobre Bitrader.
- Se establecio que la primera fase es tema Sass, antes de reemplazar assets.
- Se documento el nodo Figma de referencia `161:557`.
- Se separo explicitamente esta build estatica de la documentacion heredada de un proyecto Astro anterior.
