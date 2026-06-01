# Figma Reference

## Archivo

- Landing URL: `https://www.figma.com/design/O0y2eBiHyJHImQDLmGd56J/Untitled?node-id=161-557`
- Typography URL: `https://www.figma.com/design/O0y2eBiHyJHImQDLmGd56J/Untitled?node-id=2-2`
- File key: `O0y2eBiHyJHImQDLmGd56J`
- Landing node: `161:557`
- Typography node: `2:2`
- Landing frame: `Trading On Wheels Landing - Bitrader UI / TOW Typography`
- Typography frame: `Typography Frame`
- Size: `1440 x 3020`

El nodo no expone variables Figma publicadas para esta inspeccion; la implementacion debe derivar tokens desde capas, screenshot y contexto de diseno.

## Paleta

```txt
Background: #0c0c0d
Surface/Card: #141414
Primary yellow: #f7c600
Course blue: #2757a6
Competition green: #498734
White text: #ffffff
Muted text: #908f8f
Black text/button: #0c0c0d
```


## Tipografia

- Display hero/offers: `Anton Regular`.
- UI/body/nav/cards/buttons: `Montserrat`.
- Pesos confirmados por capas de landing: `Montserrat Regular`, `Montserrat Medium`, `Montserrat Bold`, `Montserrat ExtraBold`, `Anton Regular`.
- Pesos confirmados por el style frame `2:2`: `Montserrat Regular`, `Medium`, `SemiBold`, `Bold`, `ExtraBold`, `Black`; `Anton Regular`.
- `Geist Mono` aparece solo en chips/anotaciones del style frame y no se incorpora al sitio.
- Nav: `Montserrat Bold`, 12px, uppercase/label style, tracking aproximado 1.2px.
- Hero title: `Anton`, 88px desktop, line-height 84px.
- Offers heading: `Anton`, 68px desktop, line-height 76px.
- Body copy: `Montserrat Regular`, 16px, line-height 26px.
- Card titles: `Montserrat Bold`, 30px.
- CTA heading: `Montserrat Bold`, 30px.

### Escala Tipografica Del Nodo `2:2`

| Style Figma | Familia/peso | Size | Line height | Tracking | Uso |
|---|---|---:|---:|---:|---|
| `TOW/Hero Display` | Anton Regular | 88px | 84px | -0.9px | Hero principal |
| `TOW/Page Title` | Anton Regular | 68px | 76px | -0.7px | Titulos grandes |
| `TOW/Section Heading` | Montserrat Black | 48px | 56px | -1.1px | Headings de seccion |
| `TOW/Block Heading` | Montserrat ExtraBold | 40px | 48px | -0.72px | Bloques tipo About Oscar |
| `TOW/Card Title` | Montserrat Bold | 30px | 38px | -0.3px | Cards |
| `TOW/Nav / Small Title` | Montserrat SemiBold | 22px | 30px | 0px | Titulos pequenos |
| `TOW/Lead Body` | Montserrat Regular | 20px | 32px | 0px | Lead copy |
| `TOW/Body` | Montserrat Regular | 16px | 26px | 0px | Body copy |
| `TOW/Caption` | Montserrat Medium | 14px | 22px | 0px | Captions/listas |
| `TOW/Eyebrow` | Montserrat Bold | 12px | 18px | 1.2px | Eyebrows/nav labels |

## Estructura Objetivo

### Header

- Height: 92px.
- Background: `#0c0c0d`.
- Bottom border: yellow.
- Logo TOW negativo a la izquierda.
- Nav centrado: Home, Membership, Course, Competitions, About Oscar.
- Active underline yellow bajo Home.
- Boton Join Now amarillo, radius 8px.

### Hero

- Height aproximado: 760px.
- Imagen hero full-width con sujeto al centro/derecha.
- Gradiente oscuro desde izquierda para legibilidad.
- Eyebrow amarillo: `TRADING EDUCATION / PRIVATE COMMUNITY`.
- Title:
  - `Stop renting` blanco.
  - `your time` amarillo.
- Copy gris.
- Botones:
  - Join Membership: amarillo.
  - Explore Course: outline amarillo.

### Offers

- Fondo negro.
- Eyebrow amarillo: `MEMBERSHIP / COURSE / COMPETITIONS`.
- Heading: `Choose your path on the wheel.`
- Tres cards:
  - Membership: acento amarillo, boton amarillo.
  - Course: acento azul, boton azul.
  - Competitions: acento verde, boton verde.
- Cards oscuras con radius 18px.
- Checks circulares con color por producto.

### About Oscar

- Panel oscuro `#141414`, radius 18px.
- Retrato de Oscar a la izquierda.
- Copy central con heading `About Oscar`.
- Imagen wheel overlay a la derecha.
- Boton `My Story` amarillo.

### CTA

- Panel amarillo, radius 10px.
- Heading: `Become a Gurman Wheeler`.
- Copy: `Limited to 100 Founding Members`.
- Boton negro.

### Footer

- Fondo negro.
- Logo TOW negativo.
- Slogan:
  - `LIFE IS GOOD.`
  - `OWNING YOUR LIFE IS BETTER.`
- Titulos de columnas amarillos.
- Links muted.
- Social icons en circulos amarillos: YouTube, TikTok, Instagram, Discord.
- Divider inferior amarillo.

## Assets Detectados En Figma

- `Logo asset / TOW negative real`
- `Hero image / guide crop`
- `Offer card Membership`
- `Offer icon Membership`
- `membertship`
- `Offer icon Course`
- `Course`
- `Offer icon Competitions`
- `competition`
- `Oscar wheel overlay`
- `ChatGPT-Image-1-jun-2026,-04_12_33-a.m. 2`
- `Footer social`
- `youtube-svgrepo-com 1`
- `tiktok-fill-svgrepo-com 1`
- `instagram-logo-facebook-2-svgrepo-com 1`
- `discord-svgrepo-com 1`

Los URLs temporales de assets Figma vencen; si se descargan, guardarlos con nombres estables en `assets/images/tow/` o en la carpeta existente mas cercana.
Para esta build, la politica vigente es guardar primero en `assets/figma/` y migrar a rutas finales solo cuando se apruebe el asset.
