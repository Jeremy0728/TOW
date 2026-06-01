# Assets Plan

## Politica

Los assets se reemplazan despues de estabilizar el tema Sass. No crear archivos falsos para tapar referencias rotas. Si un asset no se usa, se elimina la referencia o se reemplaza por el asset correcto.

Todo asset descargado desde Figma/MCP se guarda primero en `assets/figma/`. Esa carpeta funciona como staging temporal hasta que se apruebe la migracion final.

## Prioridad

| Prioridad | Asset objetivo | Rutas actuales probables | Accion |
|---|---|---|---|
| 1 | Logo TOW negativo | `assets/images/logo/logo.png`, `logo-dark.png`, `preloader.png`, `favicon.png`, `og.png` | Reemplazar por marca TOW consistente |
| 2 | Hero guide/carretera | `assets/images/banner/home1/bg.png`, `1.png`, `3.png`, `4.png` | Reemplazar hero crypto por imagen Figma o asset final |
| 3 | Icono Membership | pricing/service icons actuales | Exportar o recrear icono amarillo |
| 4 | Icono Course | pricing/service icons actuales | Exportar o recrear icono azul |
| 5 | Icono Competitions | pricing/service icons actuales | Exportar o recrear icono verde |
| 6 | Oscar portrait | `assets/images/about/1.png` o nueva ruta TOW | Reemplazar bloque About/Oscar |
| 7 | Oscar wheel overlay | nueva ruta TOW o `assets/images/about/**` | Agregar imagen lateral |
| 8 | Social icons footer | Font Awesome actual o SVGs nuevos | Usar YouTube, TikTok, Instagram, Discord |

## Staging Figma

Ruta temporal obligatoria:

```txt
assets/figma/
assets/figma/manifest.md
```

Nombres sugeridos dentro de staging:

```txt
assets/figma/logo-negative.png
assets/figma/hero-guide-road.png
assets/figma/offer-card-membership.png
assets/figma/offer-membership-icon.svg
assets/figma/offer-course-icon.svg
assets/figma/offer-competition-icon.svg
assets/figma/oscar-portrait.png
assets/figma/oscar-wheel-overlay.png
assets/figma/social-youtube.svg
assets/figma/social-tiktok.svg
assets/figma/social-instagram.svg
assets/figma/social-discord.svg
```

## Reemplazo Con Backup

Cuando un asset staged reemplaza un archivo existente, conservar el original con sufijo `-original` en la misma carpeta.

Ejemplo:

```txt
assets/images/logo/logo.png
assets/images/logo/logo-original.png
```

Si el backup `*-original` ya existe, no sobrescribirlo; crear backup con fecha.

## Rutas Finales Posibles

Al final del proyecto, si se aprueba migrar los assets a una estructura final, usar rutas estables y legibles como:

```txt
assets/images/tow/logo-negative.png
assets/images/tow/favicon.png
assets/images/tow/og.png
assets/images/tow/hero-guide-road.png
assets/images/tow/offer-membership-icon.svg
assets/images/tow/offer-course-icon.svg
assets/images/tow/offer-competition-icon.svg
assets/images/tow/oscar-portrait.png
assets/images/tow/oscar-wheel-overlay.png
assets/images/tow/social-youtube.svg
assets/images/tow/social-tiktok.svg
assets/images/tow/social-instagram.svg
assets/images/tow/social-discord.svg
```

La ruta final se decide al cierre; durante desarrollo manda `assets/figma/` mas reemplazos controlados.

## No Prioritarios En La Primera Landing

- Partner logos.
- Blog thumbnails.
- Team images.
- Testimonials.
- Demo screenshots.
- Imagenes de paginas internas no enlazadas desde la landing TOW.

Estos assets pueden quedarse mientras no estorben la landing principal.

## Checklist De Reemplazo

- [ ] Descargar/exportar asset final.
- [ ] Guardarlo primero en `assets/figma/`.
- [ ] Registrar el asset en `assets/figma/manifest.md`.
- [ ] Crear backup `*-original` si reemplaza un asset existente.
- [ ] Actualizar HTML o Sass que lo referencia solo si no se puede conservar la ruta actual.
- [ ] Verificar que no quede referencia rota.
- [ ] Revisar desktop/mobile.
- [ ] Registrar decision o cambio relevante en `docs/decisions.md`.
