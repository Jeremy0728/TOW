# Current Phase

## Fase Vigente

Fase 1: actualizar el modo dark del template desde Sass para acercar Bitrader al lenguaje visual Trading On Wheels sin romper la mecanica light/dark heredada.

## Objetivo

Transformar el modo `[data-bs-theme="dark"]` crypto/green actual en una base visual TOW:

- Fondo negro `#0c0c0d`.
- Paneles/cards `#141414`.
- Acento principal amarillo `#f7c600`.
- Acento course azul `#2757a6`.
- Acento competitions verde `#498734`.
- Texto principal blanco.
- Texto secundario gris `#908f8f`.
- Tipografia `Montserrat` + `Anton`.

## Alcance De Fase 1

Tocar primero:

- `assets/sass/abstracts/_variables.scss`, seccion `[data-bs-theme="dark"]`
- `assets/sass/base/_fonts.scss`
- `assets/sass/base/_typography.scss`
- `assets/sass/components/_button.scss`
- `assets/sass/layout/_header.scss`
- `assets/sass/layout/_banner.scss`
- `assets/sass/components/_pricing.scss`
- `assets/sass/components/_cta.scss`
- `assets/sass/layout/_footer.scss`
- `assets/sass/themes/_theme.scss`

Politica de fuentes:

- Usar solo familias confirmadas en Figma: `Anton` y `Montserrat`.
- Usar solo pesos necesarios del style frame: `Anton 400`; `Montserrat 400, 500, 600, 700, 800, 900`.
- Mantener la base original de variables Sass; orientar `$title-font` y `$text-font` sin crear un sistema nuevo de fuentes.

No tocar todavia:

- Reescritura completa de `:root` light si no es necesaria para el dark look.
- Reemplazo masivo de imagenes.
- Limpieza completa de secciones HTML.
- Refactor de clases.
- Introduccion de framework o build system nuevo.

## Checklist De Implementacion

- [x] Confirmar familias y pesos desde Figma `161:557` y `2:2`.
- [x] Confirmar que `Montserrat` queda como fuente base para `$title-font` y `$text-font`, dejando `Anton` solo para titulares display.
- [x] Instalar Sass CLI global para compilar desde terminal: `sass 1.100.0`.
- [x] Instalar Sass Migrator global para conversiones controladas: `sass-migrator 2.5.7`.
- [x] Crear setup Node local de Bitrader con `package.json`, `package-lock.json`, `sass:build` y `sass:watch`.
- [x] Restaurar imports SCSS faltantes con parciales vacios controlados: `vendors/_nice-select.scss` y `pages/_home.scss`.
- [x] Mapear tokens dark actuales a paleta TOW.
- [x] Ajustar `[data-bs-theme="dark"]` para que el fondo base sea negro TOW.
- [x] Cubrir sombras/fondos verdes hardcodeados con overrides en `themes/_theme.scss` dentro de dark.
- [ ] Ajustar tipografia base y display headings.
- [ ] Ajustar botones `.trk-btn` a yellow fill y yellow outline.
- [ ] Ajustar header oscuro, borde amarillo y nav compacto.
- [ ] Ajustar hero/banner a look Figma aunque use assets temporales.
- [ ] Ajustar cards de pricing/ofertas a dark surfaces.
- [ ] Ajustar CTA amarillo con boton negro.
- [ ] Ajustar footer negro, links muted y titulos amarillos.
- [x] Regenerar o sincronizar `assets/css/style.css`.
- [ ] Revisar desktop.
- [ ] Revisar mobile.
- [ ] Registrar cambios relevantes en `docs/decisions.md`.

## Definicion De Terminado

La fase 1 se considera lista cuando:

- `index--theme_dark.html` ya no se ve como Bitrader verde/crypto.
- Los colores base y fuentes coinciden con la referencia TOW.
- Header, hero, cards, CTA y footer comparten el nuevo tema.
- El CSS compilado refleja los cambios Sass.
- No hay assets visualmente rotos en la pagina principal.

## Preparacion De Fase 2

- [x] Crear `assets/figma/`.
- [x] Crear `assets/figma/manifest.md`.
- [ ] Descargar assets MCP/Figma a staging.
- [ ] Definir primera tanda de reemplazos con backup `*-original`.

## Siguiente Fase

Fase 2: reemplazar assets principales segun `docs/assets-plan.md`.
