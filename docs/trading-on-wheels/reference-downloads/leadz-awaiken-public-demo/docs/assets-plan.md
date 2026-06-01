# Assets Plan

## Politica

Los assets se reemplazan despues de estabilizar tema y estructura. No crear archivos falsos para tapar referencias rotas. Si un asset no se usa, se elimina la referencia o se reemplaza por el asset correcto.

Todo asset descargado desde Figma/MCP se guarda primero en `images/figma/`. Esa carpeta funciona como staging temporal hasta que se apruebe la migracion final.

El orden canonico de exportacion vive en `docs/export-order.md`. Este archivo lista prioridades y rutas; `export-order.md` define la secuencia operativa.

## Prioridad

| Prioridad | Asset objetivo | Rutas actuales probables | Accion |
|---|---|---|---|
| 1 | Logo TOW negative | `images/logo.svg`, `images/footer-logo.svg`, `images/loader.svg`, `images/favicon.png` | Reemplazar marca Leadz por marca TOW consistente |
| 2 | Hero mountain/guide | `images/hero-bg.jpg`, `images/hero-image.jpg` | Reemplazar composicion financiera por hero Figma |
| 3 | Membership effect/chart | `images/pricing/**` no existe; posible `images/service-box-image-1.png` | Usar como fondo/texture de card Membership |
| 4 | Icono Membership | iconos actuales de services/pricing | Exportar SVG amarillo |
| 5 | Icono Course | iconos actuales de services/pricing | Exportar SVG azul |
| 6 | Icono Competitions | iconos actuales de services/pricing | Exportar SVG verde |
| 7 | About Oscar portrait | `images/about-*`, `images/team-*` o nueva ruta | Reemplazar bloque About Oscar |
| 8 | About wheel runner | `images/cta-box-image.jpg` o nueva ruta | Usar como fondo/imagen del feature card |
| 9 | Social icons footer | Font Awesome actual o SVGs nuevos | Usar YouTube, TikTok, Instagram, Discord |

## Staging Figma

Ruta temporal obligatoria:

```txt
images/figma/
images/figma/manifest.md
```

Nombres sugeridos dentro de staging:

```txt
images/figma/tow-logo-negative.svg
images/figma/tow-logo-negative.png
images/figma/tow-hero-mountain.jpg
images/figma/tow-membership-effect.png
images/figma/tow-offer-membership-icon.svg
images/figma/tow-offer-course-icon.svg
images/figma/tow-offer-competition-icon.svg
images/figma/tow-oscar-portrait.png
images/figma/tow-about-wheel-runner.jpg
images/figma/tow-social-youtube.svg
images/figma/tow-social-tiktok.svg
images/figma/tow-social-instagram.svg
images/figma/tow-social-discord.svg
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
images/logo.svg
images/logo-original.svg
```

Si el backup `*-original` ya existe, no sobrescribirlo; crear backup con fecha.

## Rutas Finales Posibles

Al final del proyecto, si se aprueba migrar los assets a una estructura final, usar rutas estables y legibles como:

```txt
images/tow/logo-negative.svg
images/tow/favicon.png
images/tow/hero-mountain.jpg
images/tow/membership-effect.png
images/tow/offer-membership-icon.svg
images/tow/offer-course-icon.svg
images/tow/offer-competition-icon.svg
images/tow/oscar-portrait.png
images/tow/about-wheel-runner.jpg
images/tow/social-youtube.svg
images/tow/social-tiktok.svg
images/tow/social-instagram.svg
images/tow/social-discord.svg
```

La ruta final se decide al cierre; durante desarrollo manda `images/figma/` mas reemplazos controlados.

## No Prioritarios En La Primera Landing

- Logos de clientes.
- Blog thumbnails.
- Imagenes de team legacy.
- Testimonials legacy.
- Imagenes de paginas internas.
- Galerias.

Estos assets pueden quedarse mientras no estorben `index.html`.

## Checklist De Reemplazo

- [ ] Descargar/exportar asset final.
- [ ] Guardarlo primero en `images/figma/`.
- [ ] Registrar el asset en `images/figma/manifest.md`.
- [ ] Crear backup `*-original` si reemplaza un asset existente.
- [ ] Actualizar HTML o CSS que lo referencia solo si no se puede conservar la ruta actual.
- [ ] Verificar que no quede referencia rota.
- [ ] Revisar desktop/mobile.
- [ ] Registrar decision o cambio relevante en `docs/decisions.md`.
