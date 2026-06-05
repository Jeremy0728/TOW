# Architecture

## Proposito

Documentar la arquitectura real de esta descarga Synox/XpressBuddy para que la adaptacion a Trading On Wheels sea consistente, reversible y mantenible.

## Stack Actual

- Tipo de proyecto: descarga estatica del template Synox/XpressBuddy.
- Render: archivos `.html` servidos directamente desde la raiz.
- CSS publicado: `assets/css/style.css`.
- SCSS fuente recuperado: `assets/scss/**`, expuesto por `assets/css/style.css.map`.
- Estilos vendor: `assets/css/bootstrap.min.css`, `assets/css/fontawesome.css`, `assets/css/animate.min.css`, `assets/css/swiper-bundle.min.css`, `assets/css/magnific-popup.min.css`, `assets/css/odometer.min.css`.
- Scripts: `assets/js/**`, con `assets/js/main.js` como script principal del template.
- Assets visuales: `assets/images/**` y `assets/webfonts/**`.
- Embeds externos capturados: `external-assets/**`.

No hay framework de componentes, data layer, React, Tailwind, Astro ni Next. Los textos viven en HTML estatico y el CSS que carga el navegador sale de la estructura SCSS existente.

## Entrypoints

- Pagina de trabajo inicial: `index.html`.
- Variantes home existentes:
  - `index_online_banking.html`
  - `index_payment_solutions.html`
  - `index_insurance.html`
  - `index_car_insurance.html`
  - `index_financial_consulting.html`
- CSS principal cargado por paginas: `assets/css/style.css`.
- SCSS principal: `assets/scss/style.scss`.
- JS principal: `assets/js/main.js`.
- Carpeta de assets: `assets/images/`.

## Orden CSS Actual

`index.html` carga CSS en este orden:

1. `assets/css/bootstrap.min.css`
2. `assets/css/fontawesome.css`
3. `assets/css/animate.min.css`
4. `assets/css/swiper-bundle.min.css`
5. `assets/css/magnific-popup.min.css`
6. `assets/css/odometer.min.css`
7. `assets/css/style.css`

La adaptacion TOW debe entrar por el SCSS existente que compila a `assets/css/style.css`. No crear hojas paralelas para tema mientras el selector existente pueda resolver el cambio.

## Arquitectura SCSS Real

`assets/scss/style.scss` define el orden de import y debe mantenerse como indice. No debe llenarse de estilos directos.

```txt
assets/scss/
  _variable.scss
  _fonts.scss
  _reset.scss
  style.scss
  _responsive.scss
  elements/
  template-parts/
  components/
  templates/
```

### Global

- `_variable.scss`: variables CSS Bootstrap/Synox en `:root` y `[data-bs-theme=light]`.
- `_fonts.scss`: fuentes locales del template.
- `_reset.scss`: reset/base global.
- `style.scss`: solo imports y tabla de contenido.
- `_responsive.scss`: responsive legacy global del template. Se puede editar si la regla ya vive ahi; para reglas nuevas preferir el parcial propietario.

### `elements/`

Piezas reutilizables y primitivas UI:

- Botones: `elements/_button.scss`.
- Tipografia: `elements/_typography.scss`.
- Formularios: `elements/_form.scss`.
- Listas/checks: `elements/_list.scss`.
- Carruseles, acordeones, social, video, tablas, offcanvas y utilidades similares.

Editar aqui cuando el cambio afecte un patron reutilizable en varias secciones, por ejemplo botones TOW o listas con checks.

### `template-parts/`

Partes persistentes del sitio:

- Header: `template-parts/_header.scss`.
- Footer: `template-parts/_footer.scss`.
- Page header/breadcrumb: `template-parts/_pageheader.scss`.
- Sidebar: `template-parts/_sidebar.scss`.

Editar aqui para nav, sticky header, footer comun, breadcrumbs y estructura persistente.

### `components/`

Bloques grandes reutilizables de seccion:

- Hero: `components/_hero.scss`.
- About: `components/_about.scss`.
- Services: `components/_service.scss`.
- CTA: `components/_calltoaction.scss`.
- Pricing/offers: `components/_pricing.scss`.
- Reviews, team, process, client logo, funfact, policy.

Editar aqui para adaptar secciones existentes a TOW. Ejemplo: offers TOW sobre `.pricing_section` y `.pricing_block`, o About Oscar sobre `.about_section`.

### `templates/`

Reglas por pagina o grupos de pagina:

- Home: `templates/_home.scss`.
- Blog, project, details, career, contact, error.

Editar aqui solo cuando el cambio dependa de una pagina concreta y no sea reusable como componente.

## HTML Actual De `index.html`

`index.html` usa `body.investment_solution` y esta estructura principal:

1. Preloader.
2. Header: `.site_header.header_layout_1`.
3. Hero: `.hero_section.hero_investment_solution`.
4. About: `.about_section`.
5. Services: `.service_section`.
6. Reviews: `.review_section`.
7. Pricing/offers: `.pricing_section`.
8. Team: `.team_section`.
9. FAQ: `.faq_section`.
10. Footer: `.site_footer.footer_layout_1`.

La pagina TOW debe reutilizar primero estas clases y secciones. Si una composicion no cabe, agregar un modificador local en el HTML existente, no una arquitectura paralela.

## Mapeo TOW A Synox

| TOW | Synox candidato | SCSS propietario | Nota |
|---|---|---|---|
| Header/nav | `.site_header`, `.header_layout_1`, `.main_menu_list` | `template-parts/_header.scss` | Reemplazar nav demo por Home, Membership, Course, Competitions, About Oscar, Join Now. |
| Hero full image | `.hero_section`, `.hero_investment_solution` | `components/_hero.scss` | Reusar estructura hero y ajustar layout/fondo hacia TOW. |
| Offers | `.pricing_section`, `.pricing_block` | `components/_pricing.scss` | Mejor base para Membership, Course y Competitions. |
| About Oscar | `.about_section` | `components/_about.scss` | Reutilizar bloque About con copy e imagenes TOW. |
| CTA | CTA existente del template | `components/_calltoaction.scss` | Adaptar a banner amarillo cuando se use en HTML. |
| Footer | `.site_footer`, `.footer_layout_1` | `template-parts/_footer.scss` | Reemplazar columnas, quote, socials y contacto. |
| Breadcrumbs internas | page header existente | `template-parts/_pageheader.scss` | Mantener para paginas internas TOW. |

## Politica SCSS Vigente

- No crear SCSS nuevo por defecto.
- Antes de agregar un parcial, buscar el parcial existente que ya controla esa responsabilidad.
- Editar el parcial existente aunque el cambio sea TOW, siempre que la clase y la responsabilidad ya existan.
- Crear SCSS nuevo solo si aparece una responsabilidad nueva que no tenga propietario real en `elements`, `template-parts`, `components` o `templates`.
- No crear una capa paralela tipo `tow-overrides.scss` para resolver estilos que pueden vivir en el SCSS fuente.
- No duplicar secciones completas. Copiar/adaptar solo las propiedades necesarias dentro del selector propietario.
- No editar CSS vendor ni CSS minificado para tema.
- No pegar codigo React/Tailwind de Figma.

## Politica De Tokens

- Mapear primero la paleta TOW sobre variables existentes de `_variable.scss`, especialmente `--bs-primary`, `--bs-dark`, `--bs-secondary`, `--bs-body-color`, `--bs-heading-color`, `--bs-border-color` y sus valores RGB.
- Crear variables nuevas solo para colores semanticamente necesarios que no encajen en Bootstrap/Synox, por ejemplo acentos de Course o Competitions.
- No convertir cada valor de Figma en variable. Medidas locales de cards, headings, gaps o backgrounds deben quedarse en el selector que las usa si no se repiten.

## CSS Publicado Y Compilacion

El navegador no carga SCSS; carga `assets/css/style.css`.

Cuando se cambie SCSS:

1. Editar el parcial propietario en `assets/scss/**`.
2. Actualizar `assets/css/style.css` con el CSS compilado correspondiente.
3. Mantener `assets/scss/style.scss` como indice de imports.
4. Verificar que la pagina afectada carga `assets/css/style.css`.

No hay `package.json` ni comando Sass local documentado en esta descarga. Si se define un compilador en una fase posterior, documentarlo en `docs/decisions.md` y `docs/verification.md`.
