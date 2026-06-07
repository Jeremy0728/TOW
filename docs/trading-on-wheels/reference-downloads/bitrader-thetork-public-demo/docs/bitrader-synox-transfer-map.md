# Bitrader / Synox Transfer Map

## Proposito

Este documento define como trasladar el trabajo ya armado en Synox hacia la
template Bitrader.

La regla principal es:

- Bitrader es la template visual y estructural de destino.
- Trading On Wheels es la marca y el contenido real del sitio.
- Synox es referencia de contenido, arquitectura de paginas, copy, compliance
  y orden de secciones.
- Synox no debe copiarse visualmente dentro de Bitrader.
- La carpeta `origin/` de Bitrader es el banco de secciones HTML que se debe
  reutilizar primero.

## Fuentes Canonicas

### En Bitrader

- Template destino: `bitrader-thetork-public-demo/`
- Secciones originales reutilizables: `origin/`
- Sass fuente: `assets/sass/**`
- CSS publicado: `assets/css/style.css`
- HTML activos actuales: `index.html`, `membership.html`, `course.html`,
  `competitions.html`, `about-oscar.html`, `contact.html`, `404.html`

### En Synox

- HTML TOW ya trabajado:
  - `index.html`
  - `membership.html`
  - `gurman-method.html`
  - `gurman-method-course.html`
  - `competitions.html`
  - `private-mentoring.html`
  - `about.html`
  - `faq.html`
  - `contact.html`
  - `legal.html`
- Export de referencia: `synox-xpressbuddy-public-demo/exports/`
- Contenido exportado: `exports/synox-content/`
- Assets TOW separados: `exports/assets-candidates/trading-on-wheels-current/`

## Correccion De Enfoque

La reconstruccion no debe convertir Bitrader en una marca nueva llamada
BitTrader. Bitrader es solo la plantilla base. La propuesta del sitio sigue
siendo Trading On Wheels.

El trabajo anterior de Bitrader ya contiene una primera implementacion TOW, pero
usa muchas clases `tow-*` propias. La nueva pasada debe apoyarse mas en las
secciones nativas de Bitrader Origin para que la pagina se sienta integrada a la
template.

## Mapeo De Home

| Contenido Synox/TOW | Seccion Bitrader sugerida | Fuente Bitrader | Decision |
|---|---|---|---|
| Hero `Stop Renting Your Time` + CTA doble | Hero/Banner | `origin/index--theme_dark.html` `.banner--style1` o `origin/index-4--theme_dark.html` `.banner--style4` | Usar banner Bitrader, con copy Synox. |
| Barra de credibilidad | Partner strip o mini feature row | `origin/index--theme_dark.html` partner / `feature` | Adaptar como claims cortos, no logos falsos. |
| Tres pilares: Method, Live Trades, Risk First | Feature cards | `origin/index-3--theme_dark.html` `.feature--style2` | Reutilizar cards y reemplazar copy. |
| TOW Method in 4 Moves | Roadmap/process | `origin/index--theme_dark.html` `.roadmap--style1` | Reutilizar roadmap para proceso. |
| Discipline, Not Luck + metricas | About/counter | `origin/index-4--theme_dark.html` counter o `about--style3` | Usar solo metricas verificadas. |
| Pricing: VIP Monthly, VIP 5-Year, Course | Pricing | `origin/price.html` o `origin/index-3--theme_dark.html` `.pricing` | Adaptar a ofertas TOW. |
| Risk First | Service/feature section | `origin/index-3--theme_dark.html` `.service__item--style2` | Reforzar compliance y riesgo. |
| Join the Movement / Discord | CTA/About | `origin/index-3--theme_dark.html` CTA o `origin/index--theme_dark.html` about | Reemplaza bloques bancarios o genericos. |
| Testimonials | Testimonial | `origin/index-3--theme_dark.html` `.testimonial` | Ocultar hasta tener testimonios reales. |
| FAQ + compliance | FAQ | `origin/index-3--theme_dark.html` `.faq` | Incluir pregunta `Is this financial advice?`. |
| Footer + newsletter + disclaimer | Footer | Footer Origin | Adaptar links y disclaimer legal TOW. |

## Mapeo De Paginas

| Contenido Synox | Ruta Bitrader propuesta | Base Bitrader | Estado |
|---|---|---|---|
| Home | `index.html` | `origin/index--theme_dark.html` + bloques de `index-3`/`index-4` | Prioridad alta. |
| Membership | `membership.html` | `origin/price.html` + `pricing`/`faq` | Ya existe ruta; reconstruir contenido. |
| Gurman Method | `gurman-method.html` o seccion dentro de `course.html` | `origin/service-details.html` | Falta decidir si es ruta propia. |
| Gurman Method Course | `course.html` o `gurman-method-course.html` | `origin/service-details.html` + `pricing` | Usar `course.html` para MVP actual. |
| Competitions | `competitions.html` | `origin/services.html` / `roadmap` / `faq` | Ya existe ruta; adaptar. |
| Private Mentoring | `private-mentoring.html` | `origin/service-details.html` + `contact` | Opcional/F2. |
| About Oscar | `about-oscar.html` | `origin/about.html` + `about--style3` | Ya existe ruta; adaptar desde Synox `about.html`. |
| FAQ | `faq.html` | FAQ section Origin | Crear si se necesita pagina propia. |
| Contact / Book a Call | `contact.html` | `origin/contact.html` | Ya existe ruta; adaptar. |
| Legal / Risk Disclaimer | `legal.html` | page header + content simple | Crear por compliance. |

## Secciones Origin Clasificadas

| Tipo | Archivos candidatos | Uso recomendado |
|---|---|---|
| Header | Todos los `origin/*.html` | Reutilizar shell, limpiar megamenu de demos. |
| Hero | `index--theme_dark`, `index-3--theme_dark`, `index-4--theme_dark` | Home y heroes internos. |
| Partner/credibility | `index--theme_dark`, `index-5--theme_dark` | Solo como tira de claims o confianza real. |
| About | `about.html`, `index-3--theme_dark`, `index-4--theme_dark` | About Oscar, Discipline, Not Luck. |
| Feature | `index--theme_dark`, `index-3--theme_dark` | Pilares y beneficios. |
| Service | `services.html`, `index-3--theme_dark` | Risk First, Course modules, community features. |
| Roadmap | `index--theme_dark`, `index-2--theme_dark`, `about.html` | 4 Moves, curriculum, competition flow. |
| Counter | `index-4--theme_dark` | Solo con metricas verificadas. |
| Pricing | `price.html`, `index-3--theme_dark` | Membership, 5-Year, Course. |
| FAQ | `index-3--theme_dark`, `price.html`, `services.html` | FAQ home y paginas internas. |
| Contact | `contact.html` | Book a call/contact form. |
| Footer | Todos los `origin/*.html` | Footer comun con newsletter y disclaimer. |

## Contenido Que Se Debe Traer De Synox

- Hero v2: `Stop Renting Your Time.`
- CTA primario: `Become a VIP`.
- CTA secundario: `Start with Free Training`.
- Credibility strip:
  - `A method, not a tip service`
  - `A private community`
  - `Real trades, full transparency`
  - `Education, not advice`
- Tres pilares:
  - `The Method`
  - `Live Trades`
  - `Risk First`
- Proceso:
  - `Join the community`
  - `Master the Gurman Method`
  - `Execute with risk rules`
  - `Review & compete`
- Pricing:
  - `VIP - Monthly`
  - `VIP - 5-Year`
  - `The Course`
- Compliance:
  - `Educational content only`
  - `Not financial advice`
  - `Trading involves risk`
  - `Past performance does not guarantee future results`

## Reglas De Construccion

- Usar primero clases Bitrader existentes: `.banner`, `.feature`, `.service`,
  `.roadmap`, `.pricing`, `.faq`, `.cta`, `.footer`.
- Agregar clases `tow-*` solo como modificadores locales cuando haga falta
  adaptar una seccion sin romper la template.
- No copiar layouts Synox literal.
- No inventar testimonios, metricas de rentabilidad ni claims de resultados.
- Si una metrica no esta verificada, reemplazarla por copy cualitativo o dejarla
  pendiente.
- Mantener disclaimer visible en footer y cerca de CTAs comerciales.
- Si se cambia Sass, compilar con `npm run build`.

## Primera Version A Construir

La primera version de `index.html` debe contener:

1. Header Bitrader simplificado con links TOW.
2. Hero con copy Synox v2.
3. Credibility strip.
4. Tres pilares.
5. Roadmap de 4 moves.
6. Pricing de 3 ofertas.
7. Risk First.
8. FAQ corta con compliance.
9. CTA final.
10. Footer con links y disclaimer.

## Pendientes

- Confirmar si `gurman-method.html` debe existir en Bitrader o integrarse en
  `course.html`.
- Confirmar checkout URLs reales para Membership, 5-Year y Course.
- Confirmar metricas `200K+ Live Trades Shared` y `27+ Years Trading Markets`
  antes de publicarlas.
- Confirmar testimonios reales; si no existen, el bloque queda oculto.
- Migrar assets TOW desde Synox exports a una ruta final en Bitrader si faltan
  los equivalentes actuales.
