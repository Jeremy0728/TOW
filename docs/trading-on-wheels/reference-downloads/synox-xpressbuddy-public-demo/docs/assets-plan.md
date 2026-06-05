# Assets Plan

## Politica

Los assets se reemplazan despues de estabilizar tema y estructura. No crear archivos falsos para tapar referencias rotas. Si un asset no se usa, se elimina la referencia o se reemplaza por el asset correcto.

Todo asset descargado desde Figma/MCP se guarda primero en `assets/images/figma/`. Esa carpeta funciona como staging temporal hasta que se apruebe la migracion final.

El orden canonico de exportacion vive en `docs/export-order.md`. Este archivo lista prioridades y rutas; `export-order.md` define la secuencia operativa.

## Prioridad

| Prioridad | Asset objetivo | Rutas actuales probables Synox | Accion |
|---|---|---|---|
| 1 | Logo TOW negative | `assets/images/site_logo/*.svg` o logo actual equivalente | Reemplazar marca Synox por marca TOW consistente |
| 2 | Hero mountain/guide | `assets/images/hero/**`, `assets/images/backgrounds/**` | Reemplazar composicion financiera por hero Figma |
| 3 | Membership effect/chart | `assets/images/pricing/**`, `assets/images/shapes/**` o nueva ruta TOW | Usar como fondo/texture de card Membership |
| 4 | Icono Membership | iconos actuales de services/pricing | Exportar SVG amarillo |
| 5 | Icono Course | iconos actuales de services/pricing | Exportar SVG azul |
| 6 | Icono Competitions | iconos actuales de services/pricing | Exportar SVG verde |
| 7 | About Oscar portrait | `assets/images/about/**`, `assets/images/team/**` o nueva ruta TOW | Reemplazar bloque About Oscar |
| 8 | About wheel runner | `assets/images/about/**`, `assets/images/backgrounds/**` o nueva ruta TOW | Usar como fondo/imagen del feature card |
| 9 | Social icons footer | Font Awesome actual o SVGs nuevos en `assets/images/tow/` | Usar YouTube, TikTok, Instagram, Discord |

## Staging Figma

Ruta temporal obligatoria:

```txt
assets/images/figma/
assets/images/figma/manifest.md
```

Nombres sugeridos dentro de staging:

```txt
assets/images/figma/tow-logo-negative.svg
assets/images/figma/tow-logo-negative.png
assets/images/figma/tow-hero-mountain.jpg
assets/images/figma/tow-membership-effect.png
assets/images/figma/tow-offer-membership-icon.svg
assets/images/figma/tow-offer-course-icon.svg
assets/images/figma/tow-offer-competition-icon.svg
assets/images/figma/tow-oscar-portrait.png
assets/images/figma/tow-about-wheel-runner.jpg
assets/images/figma/tow-social-youtube.svg
assets/images/figma/tow-social-tiktok.svg
assets/images/figma/tow-social-instagram.svg
assets/images/figma/tow-social-discord.svg
```

## Assets Detectados

Desde nodo visual `161:727`:

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

## Reemplazo Con Backup

Cuando un asset staged reemplaza un archivo existente, conservar el original con sufijo `-original` en la misma carpeta.

Ejemplo:

```txt
assets/images/site_logo/logo.svg
assets/images/site_logo/logo-original.svg
```

Si el backup `*-original` ya existe, no sobrescribirlo; crear backup con fecha.

## Rutas Finales Posibles

Al final del proyecto, si se aprueba migrar los assets a una estructura final, usar rutas estables y legibles como:

```txt
assets/images/tow/logo-negative.svg
assets/images/tow/favicon.png
assets/images/tow/hero-mountain.jpg
assets/images/tow/membership-effect.png
assets/images/tow/offer-membership-icon.svg
assets/images/tow/offer-course-icon.svg
assets/images/tow/offer-competition-icon.svg
assets/images/tow/oscar-portrait.png
assets/images/tow/about-wheel-runner.jpg
assets/images/tow/social-youtube.svg
assets/images/tow/social-tiktok.svg
assets/images/tow/social-instagram.svg
assets/images/tow/social-discord.svg
```

La ruta final se decide al cierre; durante desarrollo manda `assets/images/figma/` mas reemplazos controlados.

## No Prioritarios En La Primera Landing

- Logos de clientes legacy.
- Blog thumbnails.
- Imagenes de team legacy.
- Testimonials legacy.
- Imagenes de paginas internas que no formen parte del sitemap TOW.
- Galerias.

Estos assets pueden quedarse mientras no estorben `index.html`.

## Checklist De Reemplazo

- [ ] Descargar/exportar asset final.
- [ ] Guardarlo primero en `assets/images/figma/`.
- [ ] Registrar el asset en `assets/images/figma/manifest.md`.
- [ ] Crear backup `*-original` si reemplaza un asset existente.
- [ ] Actualizar HTML o SCSS que lo referencia solo si no se puede conservar la ruta actual.
- [ ] Actualizar `assets/css/style.css` si cambia una referencia en SCSS.
- [ ] Verificar que no quede referencia rota.
- [ ] Revisar desktop/mobile.
- [ ] Registrar decision o cambio relevante en `docs/decisions.md`.
