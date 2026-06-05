# Export Order

Este documento define el orden canonico de exportacion desde Figma MCP para la build Synox/TOW. Antes de descargar assets o migrar colores, usar este orden para no mezclar tokens, assets temporales y reemplazos finales.

## Fuentes Canonicas

| Tipo | Figma | Nodo | Uso |
|---|---|---|---|
| Visual landing | `O0y2eBiHyJHImQDLmGd56J` | `161:727` | Colores de landing, layout, assets, secciones y copy objetivo. |
| Tipografia | `O0y2eBiHyJHImQDLmGd56J` | `10:2` | Familias, escala, line-height y letter-spacing. |

No usar nodos de Bitrader/Leadz para valores finales de Synox. Esas referencias solo aportan metodo historico.

## Regla Base

El orden es:

1. Registrar tokens exactos.
2. Registrar tipografia exacta.
3. Mapear tokens a variables Synox existentes.
4. Crear staging y manifest.
5. Exportar marca.
6. Exportar assets estructurales de landing.
7. Exportar iconos de secciones.
8. Exportar assets de About Oscar.
9. Exportar sociales.
10. Reemplazar rutas con backup.
11. Migrar assets aprobados a ruta final.

No reemplazar assets del template antes de tener el token map y el manifest.

## 1. Tokens De Color

Estos valores se extraen de los nodos Figma abiertos y se documentan antes de tocar SCSS.

| Token TOW | Valor exacto | Fuente Figma | Uso Synox |
|---|---:|---|---|
| `--tow-black` | `#000000` | landing `161:727` | Fondo hero, about, footer. |
| `--tow-page-black` | `#040404` | landing `161:727` | Fondo offers. |
| `--tow-ink` | `#0B0B0B` | typography `10:2` | Headline dark, base negra alternativa. |
| `--tow-card` | `#0D0D0D` | landing `161:727` | Cards no destacadas. |
| `--tow-navy` | `#14202E` | landing/base | Header ink, texto sobre amarillo. |
| `--tow-yellow` | `#F7C600` | landing `161:727`, typography `10:2` | Acento principal, botones, CTA. |
| `--tow-blue` | `#2757A6` | landing `161:727`, typography `10:2` | Course badge/accent. |
| `--tow-green` | `#498734` | landing `161:727` | Competitions badge/accent. |
| `--tow-green-alt` | `#488A32` | landing `161:727` | Texto/divider/checks de Competitions. |
| `--tow-warm-canvas` | `#F7F4EA` | typography `10:2` | Solo documentacion/style guide, no landing dark. |
| `--tow-muted` | `#AEB8BA` | landing `161:727` | Body secundario sobre dark. |
| `--tow-white` | `#FFFFFF` | landing `161:727` | Texto fuerte y botones outline. |
| `--tow-header-wash` | `rgba(20, 32, 46, 0.48)` | landing `161:727` | Overlay header. |
| `--tow-divider-10` | `rgba(255, 255, 255, 0.10)` | landing `161:727` | Footer dividers. |
| `--tow-divider-12` | `rgba(255, 255, 255, 0.12)` | landing `161:727` | Header/card dividers. |
| `--tow-membership-border` | `rgba(226, 196, 140, 0.95)` | landing `161:727` | Border card Membership. |

## 2. Mapeo A Variables Synox

Antes de crear variables nuevas, mapear valores TOW sobre `_variable.scss`.

| Variable Synox | Uso |
|---|---|
| `--bs-body-font-family` | Body `Carlito`. |
| `--bs-heading-font-family` | Headings `Bebas Neue`. |
| `--bs-primary` / `--bs-primary-rgb` | Amarillo TOW. |
| `--bs-dark` / `--bs-dark-rgb` | Negro/navy oscuro segun tema. |
| `--bs-secondary` / `--bs-secondary-rgb` | Fondo oscuro de secciones. |
| `--bs-body-color` / `--bs-body-color-rgb` | Texto muted. |
| `--bs-heading-color` | Titulares. |
| `--bs-border-color` | Dividers/bordes. |

Crear variables TOW adicionales solo cuando una semantica no exista en Bootstrap/Synox y se reutilice.

## 3. Tipografia

Registrar la tipografia antes de exportar imagenes.

| Familia | Peso | Uso |
|---|---|---|
| `Bebas Neue` | 400 Regular | Titulares, nav, labels, botones, card titles, footer headings. |
| `Carlito` | 400 Regular | Body, lead copy, listas, footer links, captions. |
| `Carlito` | 700 Bold | Checks y enfasis pequenos. |

`Geist Mono` aparece solo en chips/anotaciones del frame tipografico. No se exporta ni se implementa.

## 4. Staging Y Manifest

Crear antes de descargar assets:

```txt
assets/images/figma/
assets/images/figma/manifest.md
```

Cada asset exportado debe registrar:

- Fecha.
- Figma file key.
- Node id.
- Nombre de capa.
- URL temporal MCP.
- Nombre local.
- Ruta final prevista.
- Estado: `staged`, `replaced`, `approved`, `rejected`.
- Notas de reemplazo/backups.

## 5. Orden De Assets

| Orden | Asset Figma | Node/layer | Export | Staging | Ruta final probable | Motivo |
|---:|---|---|---|---|---|---|
| 1 | Logo TOW negative | `Logo/TOW negative` | SVG si conserva vector; PNG fallback | `assets/images/figma/tow-logo-negative.svg` | `assets/images/tow/logo-negative.svg` | Bloquea header, footer, loader y favicon. |
| 2 | Hero mountain | `Asset/hero-mountain-tow` | JPG/PNG | `assets/images/figma/tow-hero-mountain.jpg` | `assets/images/tow/hero-mountain.jpg` | Define hero y contraste de color. |
| 3 | Membership effect | `Card 1 effect image` | PNG | `assets/images/figma/tow-membership-effect.png` | `assets/images/tow/membership-effect.png` | Fondo de card destacada. |
| 4 | Membership icon | `membertship` | SVG preferido | `assets/images/figma/tow-offer-membership-icon.svg` | `assets/images/tow/offer-membership-icon.svg` | Card Membership. |
| 5 | Course icon | `Course` | SVG preferido | `assets/images/figma/tow-offer-course-icon.svg` | `assets/images/tow/offer-course-icon.svg` | Card Course. |
| 6 | Competition icon | `competition` | SVG preferido | `assets/images/figma/tow-offer-competition-icon.svg` | `assets/images/tow/offer-competition-icon.svg` | Card Competitions. |
| 7 | About background | `Asset/about-oscar-wheel-runner` | JPG/PNG | `assets/images/figma/tow-about-wheel-runner.jpg` | `assets/images/tow/about-wheel-runner.jpg` | Feature card About Oscar. |
| 8 | Oscar portrait | `ChatGPT-Image-1-jun-2026,-04_12_33-a.m. 1` | PNG | `assets/images/figma/tow-oscar-portrait.png` | `assets/images/tow/oscar-portrait.png` | Imagen lateral About Oscar. |
| 9 | YouTube | `youtube-svgrepo-com 1` | SVG | `assets/images/figma/tow-social-youtube.svg` | `assets/images/tow/social-youtube.svg` | Footer social. |
| 10 | TikTok | `tiktok-fill-svgrepo-com 1` | SVG | `assets/images/figma/tow-social-tiktok.svg` | `assets/images/tow/social-tiktok.svg` | Footer social. |
| 11 | Instagram | `instagram-logo-facebook-2-svgrepo-com 1` | SVG | `assets/images/figma/tow-social-instagram.svg` | `assets/images/tow/social-instagram.svg` | Footer social. |
| 12 | Discord | `discord-svgrepo-com 1` | SVG | `assets/images/figma/tow-social-discord.svg` | `assets/images/tow/social-discord.svg` | Footer social. |

## 6. Orden De Reemplazo En Synox

Despues de staging:

1. Identificar rutas Synox actuales en HTML/SCSS.
2. Crear backups solo de assets que se vayan a pisar.
3. Reemplazar logo/header/footer solo cuando el logo este aprobado.
4. Reemplazar hero cuando el layout hero ya use una imagen full-width.
5. Reemplazar icons/cards cuando `.pricing_section` ya este convertido en offers.
6. Reemplazar About assets cuando `.about_section` ya este convertido en About Oscar.
7. Reemplazar sociales al final junto con footer.

No hacer backups de archivos que no se reemplazan. Si se usa una nueva ruta `assets/images/tow/**`, no hace falta backup porque no pisa un asset existente.

## 7. Orden De Implementacion Visual

El orden de exportacion se coordina con el orden visual:

1. Tokens SCSS y fuentes.
2. Header.
3. Hero.
4. Offers.
5. About Oscar.
6. CTA.
7. Footer.
8. Limpieza de secciones legacy.

## 8. Criterio De Aprobacion

Un asset queda aprobado cuando:

- Esta registrado en `assets/images/figma/manifest.md`.
- Tiene nombre local estable.
- Se verifico que no vence por depender de URL MCP.
- No rompe desktop/mobile.
- El uso final esta documentado en `docs/assets-plan.md` o `docs/decisions.md`.
