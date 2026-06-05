# Current Phase

## Fase Vigente

Fase 1: aplicar variables y colores base de TOW sobre el SCSS existente.

## Objetivo

Aplicar el primer pase visual sobre la estructura real del proyecto:

- HTML estatico Synox/XpressBuddy.
- CSS principal servido: `assets/css/style.css`.
- SCSS fuente existente: `assets/scss/**`.
- Regla vigente: no crear SCSS nuevo salvo responsabilidad nueva justificada.
- Pagina inicial de trabajo: `index.html`.
- Landing objetivo: Trading On Wheels.
- Figma visual: archivo `O0y2eBiHyJHImQDLmGd56J`, nodo `161:727`.
- Figma tipografia: archivo `O0y2eBiHyJHImQDLmGd56J`, nodo `10:2`.

## Alcance De Fase 1

Tocar:

- `assets/scss/_variable.scss`
- parciales SCSS existentes segun responsabilidad
- `index-tow.html` cuando el cambio sea contenido o assets del home TOW
- `docs/decisions.md`
- `docs/current-phase.md`

No tocar todavia sin decision explicita:

- `assets/js/**`.
- rutas internas que no formen parte del home TOW.
- archivos SCSS nuevos.

## Checklist De Preparacion

- [x] Confirmar stack real: HTML estatico + CSS + JS.
- [x] Confirmar CSS servido: `assets/css/style.css`.
- [x] Confirmar SCSS recuperado: `assets/scss/**`.
- [x] Confirmar indice SCSS: `assets/scss/style.scss`.
- [x] Confirmar paginas HTML disponibles.
- [x] Confirmar estructura inicial de `index.html`.
- [x] Cambiar documentacion desde Leadz hacia Synox.
- [x] Establecer politica: editar SCSS existente antes de crear archivos nuevos.
- [x] Definir y validar comando Sass local para compilar `assets/scss/style.scss`.
- [x] Pasar a Fase 1 visual.
- [x] Aplicar primer pase de variables TOW en `_variable.scss`.

## Definicion De Terminado De Fase 1

La fase 1 se considera lista cuando:

- `_variable.scss` contiene los colores base TOW sin renombrar la estructura original.
- Header, botones, hero, pricing, FAQ y footer leen correctamente los nuevos tokens.
- No se crean parciales SCSS nuevos.
- `assets/css/style.css` queda sincronizado por el watch o build Sass.

## Siguiente Fase

Continuar Fase 1: revisar tipografia, botones, header, hero y secciones usando los parciales SCSS existentes.
