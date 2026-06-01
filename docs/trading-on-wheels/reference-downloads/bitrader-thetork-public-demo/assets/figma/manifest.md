# Figma Asset Manifest

Staging temporal para assets descargados desde Figma/MCP.

## Fuente

- Figma file key: `O0y2eBiHyJHImQDLmGd56J`
- Nodo principal: `161:557`
- Frame: `Trading On Wheels Landing - Bitrader UI / TOW Typography`

## Politica

- Todo asset MCP/Figma se guarda primero en `assets/figma/`.
- Si reemplaza un asset existente, conservar el original con sufijo `-original` en su carpeta original.
- No sobrescribir backups `*-original`; si ya existen, crear backup con fecha.
- Las URLs MCP vencen, por eso este manifest debe registrar la descarga cuando ocurra.

## Registro

| Fecha | Layer Figma | URL MCP | Archivo local | Uso previsto | Estado |
|---|---|---|---|---|---|
| 2026-06-01 | Preloader TOW manual export | manual export desde Figma | `assets/images/logo/preloader.png` | Preloader activo del index | replaced |
| 2026-06-01 | Preloader Bitrader original | backup local | `assets/images/logo/preloader-o.png` | Backup del preloader anterior | backup |
| 2026-06-01 | Hero image / guide crop | `https://www.figma.com/api/mcp/asset/c43a7390-8d03-4cf7-ad8e-3fab678980c4` | `assets/figma/hero-guide-road.png` | Hero principal del index | staged |
| 2026-06-01 | Offer card Membership | `https://www.figma.com/api/mcp/asset/8af3e1ab-e516-4c61-b3d3-8fb1f4392551` | `assets/figma/offer-card-membership.png` | Fondo de card Membership | staged |
| 2026-06-01 | Oscar wheel overlay | `https://www.figma.com/api/mcp/asset/b249d9e5-9a23-4021-b0dc-3fdb0321bb32` | `assets/figma/oscar-wheel-overlay.png` | Imagen secundaria About Oscar | staged |
| 2026-06-01 | Logo asset / TOW negative real | `https://www.figma.com/api/mcp/asset/6f8eb487-7943-4971-92c1-9c1cf0572e36` | `assets/figma/logo-negative.png` | Header/footer/logo final | staged |
| 2026-06-01 | ChatGPT-Image Oscar portrait | `https://www.figma.com/api/mcp/asset/8a60fc00-0ad3-4e39-9ae8-3b7c40c48bc7` | `assets/figma/oscar-portrait.png` | Retrato About Oscar | review |
| 2026-06-01 | Header border | `https://www.figma.com/api/mcp/asset/3266face-5044-446e-9f73-c3cb0cdf0ff3` | `assets/figma/header-border.svg` | Separador amarillo; preferible CSS | staged |
| 2026-06-01 | Nav active underline | `https://www.figma.com/api/mcp/asset/f49d0efe-859e-494b-8d08-a891fcc776f7` | `assets/figma/nav-active-underline.svg` | Underline nav; preferible CSS | staged |
| 2026-06-01 | Hero title accent | `https://www.figma.com/api/mcp/asset/942587af-97ad-4e3e-947e-e3f1dd0176a9` | `assets/figma/hero-title-accent.svg` | Acento bajo hero title; preferible CSS | staged |
| 2026-06-01 | Offer icon Membership | `https://www.figma.com/api/mcp/asset/51b776a4-be8a-4c4f-9b06-13a976ee4d85` | `assets/figma/offer-icon-membership.svg` | Icono card Membership | staged |
| 2026-06-01 | membertship | `https://www.figma.com/api/mcp/asset/c9d18092-cc93-473e-ae6b-80953c1a522a` | `assets/figma/offer-label-membership.svg` | Pictograma Membership dentro del icono | staged |
| 2026-06-01 | Offer divider Membership | `https://www.figma.com/api/mcp/asset/fdbccec3-6223-4784-ae51-bea7fd395ce0` | `assets/figma/offer-divider-membership.svg` | Divider card; preferible CSS | staged |
| 2026-06-01 | Check bullet Membership | `https://www.figma.com/api/mcp/asset/70b2ad91-39bf-4517-8881-28f75a2397a7` | `assets/figma/check-bullet-membership.svg` | Bullet lista Membership | staged |
| 2026-06-01 | Offer icon Course | `https://www.figma.com/api/mcp/asset/f8c5be1f-2dc9-40f9-b5c2-f82209521b92` | `assets/figma/offer-icon-course.svg` | Icono card Course | staged |
| 2026-06-01 | Course | `https://www.figma.com/api/mcp/asset/01d5cc0b-b338-4d4d-b475-1b9c192386ac` | `assets/figma/offer-label-course.svg` | Pictograma Course dentro del icono | staged |
| 2026-06-01 | Offer divider Course | `https://www.figma.com/api/mcp/asset/25e620f5-7418-4e63-9194-c07ab3222e0d` | `assets/figma/offer-divider-course.svg` | Divider card; preferible CSS | staged |
| 2026-06-01 | Check bullet Course | `https://www.figma.com/api/mcp/asset/d170b371-7fb9-4cd8-9b3b-cc14fe3cbf49` | `assets/figma/check-bullet-course.svg` | Bullet lista Course | staged |
| 2026-06-01 | Offer icon Competitions | `https://www.figma.com/api/mcp/asset/193392bb-3bdb-4d15-b4ac-c08f99f8a236` | `assets/figma/offer-icon-competitions.svg` | Icono card Competitions | staged |
| 2026-06-01 | competition | `https://www.figma.com/api/mcp/asset/72939c31-80a1-441f-8eb6-ff1025ba3c36` | `assets/figma/offer-label-competitions.svg` | Pictograma Competitions dentro del icono | staged |
| 2026-06-01 | Offer divider Competitions | `https://www.figma.com/api/mcp/asset/f4a43c69-e9fb-4324-8b91-6eea0ec4e63d` | `assets/figma/offer-divider-competitions.svg` | Divider card; preferible CSS | staged |
| 2026-06-01 | Check bullet Competitions | `https://www.figma.com/api/mcp/asset/86a12b64-b9e4-437f-862e-f02084b5ee3a` | `assets/figma/check-bullet-competitions.svg` | Bullet lista Competitions | staged |
| 2026-06-01 | Oscar accent | `https://www.figma.com/api/mcp/asset/b0c0409d-5911-42b2-bf21-97672a139bd4` | `assets/figma/oscar-accent.svg` | Acento About Oscar; preferible CSS | staged |
| 2026-06-01 | Footer social background | `https://www.figma.com/api/mcp/asset/7d535a05-f7b9-44c0-8f53-44f549e882d5` | `assets/figma/footer-social-bg.svg` | Fondo social icons; preferible CSS | staged |
| 2026-06-01 | Footer bottom divider | `https://www.figma.com/api/mcp/asset/c6d96cc4-ee13-4602-9f61-45a72fbe97bb` | `assets/figma/footer-bottom-divider.svg` | Divider footer; preferible CSS | staged |
| 2026-06-01 | youtube-svgrepo-com 1 | `https://www.figma.com/api/mcp/asset/f25c50d0-1cb9-4e25-8bb0-350524c3dafd` | `assets/figma/social-youtube.svg` | Icono social YouTube | staged |
| 2026-06-01 | tiktok-fill-svgrepo-com 1 | `https://www.figma.com/api/mcp/asset/866ae6b0-ee97-49f3-8bfc-c148cbf437c8` | `assets/figma/social-tiktok.svg` | Icono social TikTok | staged |
| 2026-06-01 | instagram-logo-facebook-2-svgrepo-com 1 | `https://www.figma.com/api/mcp/asset/d8c4c6e0-c57b-4491-b58a-569010c76bb8` | `assets/figma/social-instagram.svg` | Icono social Instagram | staged |
| 2026-06-01 | discord-svgrepo-com 1 | `https://www.figma.com/api/mcp/asset/b145e01b-c81f-4600-ae55-cbd18a6a88bf` | `assets/figma/social-discord.svg` | Icono social Discord | staged |
