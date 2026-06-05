# Figma Reference

## Archivo

- Visual URL: `https://www.figma.com/design/O0y2eBiHyJHImQDLmGd56J/Untitled?node-id=161-727`
- Typography URL: `https://www.figma.com/design/O0y2eBiHyJHImQDLmGd56J/Untitled?node-id=10-2`
- File key: `O0y2eBiHyJHImQDLmGd56J`
- Visual node: `161:727`
- Typography node: `10:2`
- Visual frame: `Trading On Wheels - Leadz UI landing / Bebas + Carlito`
- Typography frame: `Typography Frame - Bebas Neue + Calibri test`
- Visual size: `1440 x 3021`
- Typography size: `1440 x 2105`

El nombre del frame conserva `Leadz` por historial del archivo Figma, pero esta carpeta implementa TOW sobre Synox/XpressBuddy. Los nodos no exponen variables Figma publicadas para esta inspeccion. La implementacion debe derivar tokens desde capas, screenshot y contexto de diseno.

## Paleta

```txt
Black/base: #000000 / #040404 / #0B0B0B
Panel/card: #0D0D0D
Header ink/button text: #14202E
Primary yellow: #F7C600
Course blue: #2757A6
Competition green: #498734 / #488A32
Warm canvas from typography guide: #F7F4EA
Muted body text: #AEB8BA
White text: #FFFFFF
Divider: rgba(255,255,255,0.10 - 0.12)
```

## Tipografia

- Display, headings, nav, labels, buttons: `Bebas Neue Regular`.
- Body, lead, captions, lists, footer links: `Carlito Regular`.
- Check marks and strong inline utility text can use `Carlito Bold`.
- `Geist Mono` aparece solo en chips/anotaciones del style frame y no se incorpora al sitio.
- El titulo del nodo menciona Calibri porque Carlito se usa como alternativa libre/metric-compatible para Calibri.

### Escala Tipografica Del Nodo `10:2`

| Style Figma | Familia/peso | Size | Line height | Tracking | Uso |
|---|---|---:|---:|---:|---|
| `TOW/Hero Bebas` | Bebas Neue Regular | 104px | 96px | 0.2px | Hero principal |
| `TOW/Page Bebas` | Bebas Neue Regular | 82px | 82px | 0.2px | Titulos grandes |
| `TOW/H2 Bebas` | Bebas Neue Regular | 64px | 66px | 0.2px | Secciones amplias |
| `TOW/H3 Bebas` | Bebas Neue Regular | 52px | 58px | 0.1px | Secciones compactas |
| `TOW/Card Bebas` | Bebas Neue Regular | 42px | 48px | 0.1px | Cards y CTA |
| `TOW/Nav Bebas` | Bebas Neue Regular | 32px | 38px | 0.2px | Headings pequenos |
| `TOW/Lead Calibri alt` | Carlito Regular | 22px | 34px | 0px | Lead copy |
| `TOW/Body Calibri alt` | Carlito Regular | 18px | 29px | 0px | Body copy |
| `TOW/Small Calibri alt` | Carlito Regular | 15px | 23px | 0px | Listas/captions |
| `TOW/Eyebrow Bebas` | Bebas Neue Regular | 18px | 22px | 1.1px | Eyebrows, nav, botones |

### Usos Confirmados En Nodo `161:727`

- Topbar: `Carlito Regular`, 15px, line-height 23px.
- Nav: `Bebas Neue Regular`, 18px, line-height 22px, tracking 1.1px.
- Hero title: `Bebas Neue Regular`, 104px, line-height 96px.
- Hero paragraph: `Carlito Regular`, 22px, line-height 34px.
- Offers heading: `Bebas Neue Regular`, 52px, line-height 58px.
- Offer titles: `Bebas Neue Regular`, 42px, line-height 48px.
- Offer bullet text: `Carlito Regular`, 15px, line-height 23px.
- About title: `Bebas Neue Regular`, 42px, line-height 48px.
- About body: `Carlito Regular`, 18px, line-height 29px.
- CTA heading: `Bebas Neue Regular`, 42px, line-height 48px.
- Footer headings: `Bebas Neue Regular`, 24px, line-height 28px, tracking 0.8px.

## Estructura Objetivo

### Topbar

- Height: 42px.
- Background: `#F7C600`.
- Text centered, black, Carlito 15px.
- Copy: `Limited Time Offer: 0% Commission on All Trades! Sign up today and start saving.`

### Header

- Height: 100px below topbar.
- Background overlay: rgba blue/dark ink, approx `rgba(20, 32, 46, 0.48)`.
- Divider: rgba white 0.12.
- Logo TOW negative at left.
- Nav centered: Home, Membership, Course, Competitions, About Oscar.
- Active underline yellow under Home.
- Button Join Now yellow, pill radius 26px.

### Hero

- Height approx: 818px under topbar.
- Full image: mountain/guide scene.
- Left black gradient wash for readability.
- Eyebrow: `* Trading On Wheels`.
- Title:
  - `Stop renting` white.
  - `your time` yellow.
- Body copy white.
- Buttons:
  - Join Membership: yellow fill.
  - Explore Course: white outline.

### Offers

- Background: `#040404`.
- Eyebrow: `* Start With The Wheel`.
- Heading: `Choose the path that fits your next move`.
- Supporting copy debe adaptarse a la base Synox: cards financieras sobrias, acciones amarillas y contraste oscuro.
- Three cards:
  - Membership: yellow accent, featured border, chart/effect image.
  - Course: blue badge, yellow title, white button.
  - Competitions: green accent and green checks.
- Cards: dark surfaces, 8px radius, subtle border/shadow.

### About Oscar

- Full-width dark feature card.
- Background image: wheel runner.
- Portrait overlay at left.
- Text content centered/right.
- Eyebrow: `* About Oscar`.
- Title: `From the wheel to structured income`.
- Quote: `Life is Good. Owning Your Life is Better.`
- Button My Story: yellow pill.

### CTA

- Yellow banner, 8px radius.
- Heading: `BECOME A GURMAN WHEELER`.
- Subline: `Limited to 100 Founding Members`.
- Button: black pill with white label.

### Footer

- Black background.
- Logo TOW negative.
- Quote in yellow.
- Columns: Links, Resources, Follow TOW, Contact.
- Social icons: YouTube, TikTok, Instagram, Discord.
- Dividers: rgba white 0.10.

## Assets Detectados En Figma

- `Logo/TOW negative`
- `Asset/hero-mountain-tow`
- `Card 1 effect image`
- `membertship`
- `Course`
- `competition`
- `Asset/about-oscar-wheel-runner`
- `ChatGPT-Image-1-jun-2026,-04_12_33-a.m. 1`
- `youtube-svgrepo-com 1`
- `tiktok-fill-svgrepo-com 1`
- `instagram-logo-facebook-2-svgrepo-com 1`
- `discord-svgrepo-com 1`

Los URLs temporales de assets Figma vencen. Si se descargan, guardarlos con nombres estables en `assets/images/figma/` y registrar el origen.
