# Export Order

Este documento define el orden canonico de exportacion desde Figma MCP para la build Leadz/TOW. Antes de descargar assets o migrar colores, usar este orden para no mezclar tokens, assets temporales y reemplazos finales.

## Fuentes Canonicas

| Tipo | Figma | Nodo | Uso |
|---|---|---|---|
| Visual landing | `O0y2eBiHyJHImQDLmGd56J` | `161:727` | Colores de landing, layout, assets, secciones y copy objetivo. |
| Tipografia | `O0y2eBiHyJHImQDLmGd56J` | `10:2` | Familias, escala, line-height y letter-spacing. |

No usar nodos de Bitrader para valores finales de Leadz. Bitrader solo aporta la secuencia operativa.

## Regla Base

El orden es:

1. Registrar tokens exactos.
2. Registrar tipografia exacta.
3. Crear staging y manifest.
4. Exportar marca.
5. Exportar assets estructurales de landing.
6. Exportar iconos de secciones.
7. Exportar assets de About Oscar.
8. Exportar sociales.
9. Reemplazar rutas con backup.
10. Migrar assets aprobados a ruta final.

No reemplazar assets del template antes de tener el token map y el manifest.

## 1. Tokens De Color

Estos valores se extraen de los nodos Figma abiertos y se documentan antes de tocar CSS.

| Token TOW | Valor exacto | Fuente Figma | Uso Leadz |
|---|---:|---|---|
| `--tow-black` | `#000000` | landing `161:727` | Fondo hero, about, footer. |
| `--tow-page-black` | `#040404` | landing `161:727` | Fondo offers. |
| `--tow-ink` | `#0B0B0B` | typography `10:2` | Headline dark, base negra alternativa. |
| `--tow-card` | `#0D0D0D` | landing `161:727` | Cards no destacadas. |
| `--tow-navy` | `#14202E` | Leadz base + landing | Header ink, texto sobre amarillo. |
| `--tow-yellow` | `#F7C600` | landing `161:727`, typography `10:2` | Acento principal, topbar, botones, CTA. |
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

## 2. Tipografia

Registrar la tipografia antes de exportar imagenes. El sitio debe usar estas familias, no las de Bitrader.

### Familias

| Familia | Peso | Uso |
|---|---|---|
| `Bebas Neue` | 400 Regular | Titulares, nav, labels, botones, card titles, footer headings. |
| `Carlito` | 400 Regular | Body, lead copy, listas, footer links, captions. |
| `Carlito` | 700 Bold | Checks y enfasis pequenos. |

`Geist Mono` aparece solo en chips/anotaciones del frame tipografico. No se exporta ni se implementa.

### Escala

| Style | Familia | Size | Line height | Tracking | Uso |
|---|---|---:|---:|---:|---|
| `TOW/Hero Bebas` | Bebas Neue | 104px | 96px | 0.2px | Hero principal. |
| `TOW/Page Bebas` | Bebas Neue | 82px | 82px | 0.2px | Titulos de pagina si aparecen. |
| `TOW/H2 Bebas` | Bebas Neue | 64px | 66px | 0.2px | Secciones amplias. |
| `TOW/H3 Bebas` | Bebas Neue | 52px | 58px | 0.1px | Offers heading. |
| `TOW/Card Bebas` | Bebas Neue | 42px | 48px | 0.1px | Cards, About title, CTA headline. |
| `TOW/Nav Bebas` | Bebas Neue | 32px | 38px | 0.2px | Titulos pequenos. |
| `TOW/Lead Calibri alt` | Carlito | 22px | 34px | 0px | Hero lead. |
| `TOW/Body Calibri alt` | Carlito | 18px | 29px | 0px | Body de secciones. |
| `TOW/Small Calibri alt` | Carlito | 15px | 23px | 0px | Bullets, footer links, captions. |
| `TOW/Eyebrow Bebas` | Bebas Neue | 18px | 22px | 1.1px | Eyebrows, nav, botones. |

## 3. Staging Y Manifest

Crear antes de descargar assets:

```txt
images/figma/
images/figma/manifest.md
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

## 4. Orden De Assets

| Orden | Asset Figma | Node/layer | Export | Staging | Ruta final probable | Motivo |
|---:|---|---|---|---|---|---|
| 1 | Logo TOW negative | `Logo/TOW negative` | SVG si conserva vector; PNG fallback | `images/figma/tow-logo-negative.svg` | `images/tow/logo-negative.svg` | Bloquea header, footer, loader y favicon. |
| 2 | Hero mountain | `Asset/hero-mountain-tow` | JPG/PNG | `images/figma/tow-hero-mountain.jpg` | `images/tow/hero-mountain.jpg` | Define hero y contraste de color. |
| 3 | Membership effect | `Card 1 effect image` | PNG | `images/figma/tow-membership-effect.png` | `images/tow/membership-effect.png` | Fondo de card destacada. |
| 4 | Membership icon | `membertship` | SVG preferido | `images/figma/tow-offer-membership-icon.svg` | `images/tow/offer-membership-icon.svg` | Card Membership. |
| 5 | Course icon | `Course` | SVG preferido | `images/figma/tow-offer-course-icon.svg` | `images/tow/offer-course-icon.svg` | Card Course. |
| 6 | Competition icon | `competition` | SVG preferido | `images/figma/tow-offer-competition-icon.svg` | `images/tow/offer-competition-icon.svg` | Card Competitions. |
| 7 | About background | `Asset/about-oscar-wheel-runner` | JPG/PNG | `images/figma/tow-about-wheel-runner.jpg` | `images/tow/about-wheel-runner.jpg` | Feature card About Oscar. |
| 8 | Oscar portrait | `ChatGPT-Image-1-jun-2026,-04_12_33-a.m. 1` | PNG | `images/figma/tow-oscar-portrait.png` | `images/tow/oscar-portrait.png` | Imagen lateral About Oscar. |
| 9 | YouTube | `youtube-svgrepo-com 1` | SVG | `images/figma/tow-social-youtube.svg` | `images/tow/social-youtube.svg` | Footer social. |
| 10 | TikTok | `tiktok-fill-svgrepo-com 1` | SVG | `images/figma/tow-social-tiktok.svg` | `images/tow/social-tiktok.svg` | Footer social. |
| 11 | Instagram | `instagram-logo-facebook-2-svgrepo-com 1` | SVG | `images/figma/tow-social-instagram.svg` | `images/tow/social-instagram.svg` | Footer social. |
| 12 | Discord | `discord-svgrepo-com 1` | SVG | `images/figma/tow-social-discord.svg` | `images/tow/social-discord.svg` | Footer social. |

## 5. Orden De Reemplazo En Leadz

Despues de staging:

1. Crear backups de marca actual:
   - `images/logo.svg`
   - `images/footer-logo.svg`
   - `images/loader.svg`
   - `images/favicon.png`
2. Reemplazar logo/header/footer solo cuando el logo este aprobado.
3. Reemplazar hero cuando el layout hero ya use una imagen full-width.
4. Reemplazar icons/cards cuando `.our-pricing` ya este convertido en offers.
5. Reemplazar About assets cuando `.about-us` ya este convertido en About Oscar.
6. Reemplazar sociales al final junto con footer.

No hacer backups de archivos que no se reemplazan. Si se usa una nueva ruta `images/tow/**`, no hace falta backup porque no pisa un asset existente.

## 6. Orden De Implementacion Visual

El orden de exportacion se coordina con el orden visual:

1. Tokens CSS y fuentes.
2. Topbar/header.
3. Hero.
4. Offers.
5. About Oscar.
6. CTA.
7. Footer.
8. Limpieza de secciones legacy.

## 7. Criterio De Aprobacion

Un asset queda aprobado cuando:

- Esta registrado en `images/figma/manifest.md`.
- Tiene nombre local estable.
- Se verifico que no vence por depender de URL MCP.
- No rompe desktop/mobile.
- El uso final esta documentado en `docs/assets-plan.md` o `docs/decisions.md`.
