# Implementation Plan

Este plan traduce las decisiones vigentes en un flujo para convertir la descarga Synox/XpressBuddy en una pagina Trading On Wheels sin generar SCSS innecesario.

## Principios

- Mantener la base original de Synox mientras se orienta al look TOW.
- Convertir Figma MCP al stack local, no pegar React/Tailwind.
- Editar SCSS existente antes de crear cualquier archivo nuevo.
- Mantener `assets/scss/style.scss` como indice de imports.
- Cada cambio SCSS debe reflejarse en `assets/css/style.css`, porque ese es el archivo que carga el HTML.
- Registrar cada decision aprobada en `docs/decisions.md`.
- Trabajar por pasos pequenos para poder revisar y revertir.

## Paso 1 - Confirmar Base De Trabajo

- Pagina inicial: `index.html`.
- Body actual: `investment_solution`.
- Header: `.site_header.header_layout_1`.
- Hero: `.hero_section.hero_investment_solution`.
- Secciones disponibles: `.about_section`, `.service_section`, `.review_section`, `.pricing_section`, `.team_section`, `.faq_section`.
- Footer: `.site_footer.footer_layout_1`.
- CSS servido: `assets/css/style.css`.
- SCSS fuente: `assets/scss/**`.

## Paso 2 - Fuentes Minimas

Fuente canonica: `docs/export-order.md`.

Figma usa:

- `Bebas Neue Regular` para titulares, nav, botones, labels y headings de cards/footer.
- `Carlito Regular` para cuerpo, parrafos, listas y captions.
- `Carlito Bold` para checks o enfasis pequenos.
- `Geist Mono` solo para chips/anotaciones del frame tipografico.

Politica:

- Reemplazar o complementar fuentes actuales sin agregar familias no usadas por Figma.
- Mapear el cuerpo a `--bs-body-font-family`.
- Mapear titulares a `--bs-heading-font-family`.
- Editar `_variable.scss` y, si aplica, `_fonts.scss` o el HTML de carga de fuentes.

## Paso 3 - Tokens Visuales

Objetivo: actualizar la base visual sin romper paginas internas innecesariamente.

Mapeo inicial:

| Variable Synox | Valor TOW propuesto | Uso esperado |
|---|---:|---|
| `--bs-primary` | `#F7C600` | CTA principal amarillo |
| `--bs-dark` | `#0B0B0B` o `#14202E` segun contexto | Fondos oscuros/header ink |
| `--bs-secondary` | `#040404` | Secciones oscuras |
| `--bs-body-color` | `#AEB8BA` | Texto secundario sobre dark |
| `--bs-heading-color` | `#FFFFFF` en dark / `#14202E` en light | Titulares |
| `--bs-border-color` | `rgba(255,255,255,0.12)` | Dividers y bordes |

Los acentos `#2757A6` y `#498734` se reservan para Course y Competitions. Crear variables nuevas solo si realmente se reutilizan.

## Paso 4 - Estrategia SCSS

Decision vigente: no crear SCSS nuevo por defecto.

Proceso para cada cambio:

1. Identificar el selector HTML existente.
2. Ubicar su parcial propietario.
3. Editar ese parcial.
4. Actualizar `assets/css/style.css`.
5. Verificar la pagina.

Mapa rapido:

| Cambio | Parcial a editar |
|---|---|
| Tokens/fuentes globales | `assets/scss/_variable.scss`, `_fonts.scss` |
| Botones | `assets/scss/elements/_button.scss` |
| Tipografia global | `assets/scss/elements/_typography.scss` |
| Header/nav | `assets/scss/template-parts/_header.scss` |
| Footer | `assets/scss/template-parts/_footer.scss` |
| Hero | `assets/scss/components/_hero.scss` |
| Offers/pricing | `assets/scss/components/_pricing.scss` |
| About Oscar | `assets/scss/components/_about.scss` |
| CTA | `assets/scss/components/_calltoaction.scss` |
| Home-only layout | `assets/scss/templates/_home.scss` |
| Responsive legacy ya existente | `assets/scss/_responsive.scss` |

Crear un parcial nuevo solo si una pieza nueva no encaja en ninguna responsabilidad anterior y la decision queda registrada.

## Paso 5 - Adaptar Header Y Hero

- Reemplazar nav por Home, Membership, Course, Competitions, About Oscar.
- Reemplazar buttons por Join Now.
- Mantener estructura de menu de Synox.
- Convertir `.hero_investment_solution` a composicion TOW con imagen full width y wash izquierdo.
- Retirar u ocultar decoraciones financieras que no aplican a TOW.
- Usar textos Figma:
  - `Stop renting your time`.
  - `Build the life you want. Learn the Gurman Method and generate structured income through the Wheel Strategy.`

## Paso 6 - Offers

- Reutilizar `.pricing_section` y `.pricing_block`.
- Mapear tres cards:
  - Membership.
  - Course.
  - Competitions.
- Mantener listas con checks, botones y acentos semanticos.
- Usar modificadores locales solo si la estructura actual no alcanza.

## Paso 7 - About Oscar

- Reutilizar `.about_section` como base.
- Incorporar retrato y wheel-runner/runner image cuando los assets esten staged.
- Mantener texto en HTML estatico.
- Evitar JS nuevo.

## Paso 8 - CTA Y Footer

- Reutilizar el CTA existente del template y adaptar su parcial `components/_calltoaction.scss`.
- Convertir `.site_footer.footer_layout_1` a footer TOW con logo, quote, links, resources, follow y contact.
- Cambiar redes a YouTube, TikTok, Instagram, Discord.

## Paso 9 - Staging De Assets Figma

El orden exacto de exportacion vive en `docs/export-order.md`.

Carpeta temporal obligatoria:

```txt
assets/images/figma/
assets/images/figma/manifest.md
```

El manifest debe incluir:

- Fecha de descarga.
- Nodo Figma origen.
- Nombre de capa Figma.
- URL MCP temporal usada.
- Nombre local guardado.
- Uso previsto.
- Estado: `staged`, `replaced`, `approved`, `rejected`.

## Paso 10 - Reemplazo Controlado Con Backup

Cuando un asset Figma reemplace un asset existente:

1. Guardar primero en `assets/images/figma/`.
2. Crear backup del asset existente en la misma carpeta con sufijo `-original`.
3. Copiar el asset nuevo al nombre/ruta que el HTML o CSS ya consume, o moverlo a `assets/images/tow/`.
4. Verificar que el sitio carga sin referencias rotas.
5. Registrar el reemplazo en `assets/images/figma/manifest.md`.

## Paso 11 - Verificacion Por Iteracion

Por cada iteracion:

- Verificar `index.html` en desktop.
- Verificar `index.html` en mobile.
- Confirmar que CSS cargado refleja los cambios de SCSS.
- Confirmar que no se rompen assets principales.
- Actualizar `docs/current-phase.md` y `docs/decisions.md` si cambia el plan.

## Paso 12 - Sitemap Sobre HTML Existentes

No crear rutas nuevas para la primera version del sitemap. Reutilizar HTML existentes cuando sea viable.

Propuesta inicial:

- Home: `index.html`.
- Membership: `pricing.html`.
- Course: `service_details.html`.
- Competitions: `projects.html` o `project_details.html`.
- About Oscar: adaptar una seccion/pagina existente antes de crear nueva.
- Join Now: `contact.html`.

Cada ruta debe tener el mismo header/footer TOW, nav activo correspondiente, titulos y breadcrumbs consistentes, y copy principal adaptado a Trading On Wheels.

## Preguntas Pendientes

- Definir comando Sass local si se va a compilar desde SCSS en esta carpeta.
- Verificar visualmente desktop/mobile cuando el navegador integrado o un navegador local este disponible.
- Definir si se mantendran paginas internas demo o si la descarga se reducira a landing.
- Definir si `assets/images/figma/` se versiona con assets temporales o solo manifest hasta aprobar assets finales.
