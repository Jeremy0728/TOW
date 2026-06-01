# Architecture

## Proposito

Documentar la arquitectura real de esta build para que los cambios sobre el template sean consistentes, reversibles y verificables.

## Stack Actual

- Tipo de proyecto: descarga estatica del template Bitrader/Thetork.
- Render: archivos `.html` servidos directamente.
- Estilos fuente: `assets/sass/**`.
- Estilos compilados: `assets/css/style.css`.
- Scripts: `assets/js/**` y vendors enlazados desde HTML.
- Assets visuales: `assets/images/**`, `assets/webfonts/**`.

No hay framework de componentes ni data layer. Los textos de la landing viven en HTML y los estilos en Sass/CSS.

## Entrypoints

- Pagina de trabajo inicial: `index--theme_dark.html`.
- Version light equivalente: `index--theme_light.html`.
- Home generica: `index.html`.
- Sass entrypoint: `assets/sass/style.scss`.
- CSS usado por paginas: `assets/css/style.css`.

## Orden Sass Actual

`assets/sass/style.scss` importa en este orden:

1. `abstracts/extends`
2. `abstracts/variables`
3. `abstracts/functions`
4. `abstracts/mixins`
5. `vendors/normalize`
6. `vendors/nice-select`
7. `vendors/rfs`
8. `base/fonts`
9. `base/typography`
10. `base/animations`
11. `base/common`
12. `base/helpers`
13. `layout/header`
14. `layout/banner`
15. `layout/contact`
16. `layout/account`
17. `layout/form`
18. `layout/footer`
19. `components/**`
20. `pages/home`
21. `themes/theme`

El orden importa porque las variables y helpers se usan en casi todos los parciales, y `themes/theme` aplica overrides al final.

Nota: `vendors/_nice-select.scss` y `pages/_home.scss` existen como parciales vacios para mantener el entrypoint compilable; el CSS distribuido no traia reglas asociadas a esos imports.

## Responsabilidades

### `abstracts/`

- Variables CSS por tema.
- Alias Sass sobre variables CSS.
- Mixins, functions y placeholders.
- Colores globales, fuentes globales, transiciones y breakpoints existentes.

No poner estilos de secciones aqui salvo tokens globales.

### `base/`

- Imports de fuentes.
- Defaults de `body`, headings, links, listas e imagenes.
- Helpers globales que afectan a todo el documento.

No poner aqui estilos especificos de hero, cards, CTA o footer.

### `layout/`

- Estructura persistente o secciones principales heredadas del template.
- Header, banner/hero, footer, forms, contact y account.

`layout/_banner.scss` funciona como propietario actual del hero.

### `components/`

- Piezas reutilizables: botones, pricing cards, service cards, CTA, about, blog, faq, social links, etc.
- Las cards de la landing TOW deben reutilizar primero `pricing` o `service` antes de crear nuevos bloques.

### `themes/`

- Overrides especificos de `html[data-bs-theme='dark']`.
- Ajustes por tema que no deben duplicarse dentro de cada componente.

## HTML Actual De `index--theme_dark.html`

La pagina activa contiene mas secciones que la landing Figma:

1. Header: `.header-section.header-section--style2`
2. Hero: `.banner.banner--style1`
3. Partner strip
4. About legacy
5. Feature
6. Service
7. Roadmap
8. Pricing
9. Team
10. Blog
11. Testimonial
12. FAQ
13. CTA
14. Footer

La landing Figma objetivo solo necesita header, hero, offers, About Oscar, CTA y footer. La limpieza del HTML es una fase posterior.

## Politica De Cambios

- Fase de tema: tocar Sass, no reordenar HTML completo.
- Fase de assets: reemplazar rutas y archivos visuales priorizados.
- Fase HTML: simplificar secciones y textos cuando el tema ya este estable.
- Cualquier cambio de clase debe ser local, justificado y documentado.

## CSS Compilado

El template incluye `assets/css/style.css` y `style.css.map`. Si se edita Sass, el CSS compilado debe mantenerse sincronizado.

Mientras no haya script de build documentado, cada tarea que cambie Sass debe definir como verifico que `style.css` refleja el cambio: compilacion Sass si hay herramienta disponible, o cambio controlado y documentado del CSS compilado si no hay alternativa.

Comando actual usado desde la raiz del template:

```powershell
sass assets/sass/style.scss assets/css/style.css --style=expanded --source-map --quiet
```
