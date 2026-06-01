# Architecture

## Proposito

Documentar la arquitectura real de esta build Leadz para que los cambios sobre el template sean consistentes, reversibles y verificables.

## Stack Actual

- Tipo de proyecto: descarga estatica del template Leadz/Awaiken.
- Render: archivos `.html` servidos directamente.
- Estilos fuente actuales: `css/custom.css`.
- Estilos vendor: `css/bootstrap.min.css`, `css/all.css`, `css/animate.css`, `css/swiper-bundle.min.css`, `css/slicknav.min.css`, `css/magnific-popup.css`, `css/mousecursor.css`.
- Scripts: `js/**` y vendors enlazados desde HTML.
- Assets visuales: `images/**`, `webfonts/**` y un video externo descargado en `external/**`.

No hay framework de componentes, data layer, SCSS publico ni build local documentado. Los textos de la landing viven en HTML y los estilos en CSS.

## Entrypoints

- Pagina de trabajo inicial: `index.html`.
- Variantes home: `index-image.html`, `index-video.html`, `index-slider.html`.
- CSS principal usado por paginas: `css/custom.css`.
- JS principal del template: `js/function.js`.
- Logo actual: `images/logo.svg`.
- Footer logo actual: `images/footer-logo.svg`.
- Favicon actual: `images/favicon.png`.

## Orden CSS Actual

`index.html` carga CSS en este orden:

1. Google Fonts: `Inter` y `Onest`.
2. `css/bootstrap.min.css`.
3. `css/slicknav.min.css`.
4. `css/swiper-bundle.min.css`.
5. `css/all.css`.
6. `css/animate.css`.
7. `css/magnific-popup.css`.
8. `css/mousecursor.css`.
9. `css/custom.css`.

La migracion TOW se aplica en `css/custom.css`; no se usa una capa paralela para la primera pasada.

## Responsabilidades

### `css/custom.css`

- Variables globales en `:root`.
- Base de `body`, headings, links, imagenes y helpers.
- Header, topbar, hero, secciones, componentes, footer y responsive.
- Es la fuente publicada actual; cualquier cambio directo afecta el sitio sin compilacion.

### `css/vendor`

No existe carpeta vendor, pero los archivos vendor estan en `css/`. No se editan para tema.

### `js/function.js`

- Inicializaciones de animaciones, menus, sliders, cursor, counters, tabs y plugins.
- No debe recibir logica de tema si puede resolverse con HTML/CSS.

### `images/**`

- Logos, fondos, ilustraciones, iconos SVG, imagenes de secciones y favicon.
- Staging Figma propuesto: `images/figma/`.
- Ruta final TOW probable: `images/tow/`.

## HTML Actual De `index.html`

La pagina activa contiene muchas secciones heredadas:

1. Preloader.
2. Topbar: `.topbar`.
3. Header: `.main-header`.
4. Hero: `.hero`.
5. Scrolling ticker.
6. About: `.about-us`.
7. Services: `.our-services`.
8. Expertise.
9. Why choose.
10. Approach.
11. Company wisdom.
12. Features.
13. Pricing: `.our-pricing`.
14. CTA: `.cta-box`.
15. Testimonials.
16. FAQ.
17. Latest posts.
18. Footer: `.main-footer`.

La landing Figma objetivo solo necesita topbar, header, hero, offers, About Oscar, CTA y footer. La limpieza del HTML es una fase posterior.

## Mapeo De Secciones Figma A Leadz

| Figma | Leadz candidato | Nota |
|---|---|---|
| Topbar limited offer | `.topbar` | Ya existe y el copy coincide con Figma. |
| Header/nav | `.main-header`, `.main-menu`, `.header-btn` | Reemplazar nav y logo, conservar estructura Bootstrap/SlickNav. |
| Hero full image | `.hero` | Figma usa imagen full width con wash; Leadz actual usa layout de 3 columnas. Requiere ajuste HTML/CSS. |
| Offers | `.our-pricing`, `.pricing-box` | Mejor candidato para Membership/Course/Competitions. |
| About Oscar | `.about-us` | Reutilizable con imagen/copy TOW. |
| CTA yellow banner | `.cta-box` | Puede simplificarse a banner horizontal. |
| Footer | `.main-footer` | Reemplazar columnas y sociales. |

## Politica De Cambios

- Fase de tema: tocar fuentes, tokens y CSS.
- Fase de estructura: ajustar HTML por secciones de `index.html`.
- Fase de assets: reemplazar rutas con backups y staging.
- Fase de limpieza: retirar secciones legacy que no formen parte de la landing TOW.
- Cualquier cambio de clase debe ser local, justificado y documentado.

## CSS Publicado

No hay compilacion. Si se edita CSS, el archivo que carga el navegador ya es el final.

Opciones aceptadas:

- Editar `css/custom.css` directamente cuando el cambio sea global y claro.
- Editar `css/custom.css` directamente cuando el cambio pertenezca a la base real del template.

No editar CSS minificado de terceros para resolver tema.
