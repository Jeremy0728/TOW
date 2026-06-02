# Current Phase

## Fase Vigente

Fase 1: aplicar colores y tipografia base de TOW sobre la base real de Leadz.

## Objetivo

Aplicar el primer pase de sistema visual desde los nodos Figma `161:727` y `10:2` al template Leadz/Awaiken:

- HTML estatico.
- CSS principal del template: `css/custom.css`.
- Tipografia `Bebas Neue` + `Carlito`.
- Paleta TOW sobre base Leadz.
- Orden de exportacion en `docs/export-order.md`.
- Staging futuro de assets en `images/figma/`.
- Landing objetivo en `index.html`.

## Alcance De Fase 1

Tocar:

- `index.html`
- `css/custom.css`
- `docs/README.md`
- `docs/decisions.md`
- `docs/architecture.md`
- `docs/current-phase.md`
- `docs/figma-reference.md`
- `docs/export-order.md`
- `docs/implementation-plan.md`
- `docs/assets-plan.md`
- `docs/verification.md`

No tocar todavia:

- `css/custom.css`
- `js/function.js`
- assets en `images/**`
- rutas de logos o imagenes

## Checklist De Preparacion

- [x] Ubicar Leadz local: `leadz-awaiken-public-demo`.
- [x] Leer docs de Bitrader solo como referencia de formato.
- [x] Confirmar stack real de Leadz: HTML estatico + CSS + JS.
- [x] Confirmar que no hay SCSS publico en Leadz.
- [x] Leer nodo Figma visual `161:727`.
- [x] Leer nodo Figma tipografico `10:2`.
- [x] Confirmar que el visual objetivo usa `Bebas Neue` + `Carlito`.
- [x] Crear carpeta `docs/` en Leadz.
- [x] Crear documentacion canonica de Leadz.
- [x] Crear orden canonico de exportacion en `docs/export-order.md`.
- [x] Aprobar politica de CSS: mantener `css/custom.css` como base y usar scope para `index-tow.html`.
- [x] Pasar a Fase 1.

## Implementacion De Fase 1

Fase 1: actualizar tema y tipografia de Leadz hacia TOW.

Checklist inicial:

- [x] Reemplazar import de Google Fonts en `index-tow.html` por `Bebas Neue` + `Carlito`.
- [x] Crear scope `body.tow-page` mediante `css/tow-overrides.css`.
- [x] Cargar `css/tow-overrides.css` despues de `css/custom.css`.
- [x] Definir regla: copiar selector base de `custom.css`, prefijar con `.tow-page` y adaptar.
- [x] Definir estrategia para fondos negros sin romper paginas internas.
- [x] Primer pase de colores para topbar/header/nav/botones.
- [x] Primer pase de colores y tipografia para hero.
- [x] Primer pase de colores y tipografia para offers usando `.our-pricing` / `.pricing-box`.
- [ ] Ajustar copy/estructura de offers a Membership/Course/Competitions.
- [ ] Ajustar About Oscar.
- [x] Primer pase de CTA amarillo.
- [x] Primer pase de footer.
- [ ] Verificar desktop en navegador.
- [ ] Verificar mobile en navegador.
- [x] Registrar decisiones nuevas en `docs/decisions.md`.

## Definicion De Terminado De Fase 1

La fase 1 se considera lista cuando:

- `index-tow.html` carga `Bebas Neue` + `Carlito`.
- `css/custom.css` queda como base del template.
- `css/tow-overrides.css` contiene solo reglas scoped copiadas/adaptadas desde la base.
- Topbar, header, hero, offers, CTA y footer usan la paleta TOW base.
- Desktop y mobile se verifican en navegador.

## Sitemap Actual Sin Crear Paginas

- Home: `index-tow.html`.
- Membership: `pricing.html`.
- Course: `service-single.html`.
- Competitions: `case-study.html`.
- About Oscar: `about.html`.
- Join Now: `contact.html`.

Estado:

- [x] Reutilizar HTML existentes en lugar de crear paginas nuevas.
- [x] Simplificar header y topbar en las rutas del sitemap.
- [x] Actualizar footer comun en las rutas del sitemap.
- [x] Ajustar titulos, breadcrumbs y copy principal de Membership/Course/Competitions/About/Join.
- [x] Agregar estado activo del nav en `css/custom.css`.
- [ ] Reemplazar logo Leadz por logo TOW cuando el asset este aprobado en esta carpeta.
- [ ] Revisar desktop en navegador.
- [ ] Revisar mobile en navegador.

## Siguiente Fase

Fase 2: revisar visualmente el sitemap sobre paginas existentes, aprobar rutas y preparar descarga/reemplazo de assets.
