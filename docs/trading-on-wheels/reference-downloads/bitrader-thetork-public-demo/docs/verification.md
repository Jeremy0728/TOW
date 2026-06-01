# Verification

## Objetivo

Definir la verificacion minima para cambios visuales en esta build estatica.

## Antes De Entregar Un Cambio Visual

- [ ] Revisar `index--theme_dark.html` en desktop.
- [ ] Revisar `index--theme_dark.html` en mobile.
- [ ] Confirmar que header, hero, cards, CTA y footer renderizan.
- [ ] Confirmar que los textos no se salen de botones/cards.
- [ ] Confirmar que no hay imagenes principales rotas.
- [ ] Confirmar que `assets/css/style.css` contiene los cambios finales si se edito Sass.
- [ ] Confirmar que no se introdujo framework nuevo.

## Formas De Probar

### Archivo Directo

Como la build es estatica, se puede abrir `index--theme_dark.html` directamente en el navegador.

### Servidor Local

Si se necesita probar rutas, assets o Browser/Playwright con un origen HTTP, levantar un servidor estatico en la carpeta del template.

Ejemplo conceptual:

```txt
bitrader-thetork-public-demo/
  index--theme_dark.html
  assets/
```

El servidor debe servir esa carpeta como raiz.

## Validacion Sass/CSS

Si se cambia Sass:

- Durante desarrollo, correr el watcher desde la carpeta `bitrader-thetork-public-demo/`:

```powershell
npm run watch
```

- Para una compilacion puntual, usar:

```powershell
npm run build
```

Los scripts base ejecutan:

```powershell
sass assets/sass/style.scss assets/css/style.css --style=expanded --source-map --quiet
sass assets/sass/style.scss assets/css/style.css --style=expanded --source-map --watch
```

- Si no hay compilador disponible, documentar la alternativa usada y mantener Sass/CSS sincronizados.
- No dejar cambios solo en Sass si el HTML sigue cargando el CSS compilado viejo.
- El template usa `@import` y RFS legacy. Dart Sass muestra deprecations si no se usa `--quiet`; esas advertencias no bloquean la compilacion actual.
- `assets/sass/style.scss` importa `vendors/nice-select` y `pages/home`; en esta build se restauraron como parciales vacios porque el CSS distribuido no contenia reglas de esos imports.
- `sass-migrator 2.5.7` esta disponible globalmente para conversiones Sass controladas. Usar primero `--dry-run`; no ejecutar una migracion masiva de `module`/`division` sin revisar el diff.

Ejemplo seguro:

```powershell
sass-migrator module --dry-run assets/sass/style.scss
```

## Riesgos Conocidos

- El template descargado no trae un `package.json` documentado para compilar Sass.
- Sass tambien queda instalado como devDependency local de Bitrader. Sass Migrator sigue global por ahora.
- Hay muchas secciones legacy que no forman parte de la landing Figma.
- Figma entrega assets con URLs temporales; deben descargarse y renombrarse antes de depender de ellos.
- El archivo root `decisions.md` es referencia heredada y no debe usarse como fuente canonica.

## Registro De Verificacion

### 2026-06-01 - Sitemap TOW aislado

- Se validaron estaticamente `index-tow.html`, `membership.html`, `course.html`, `competitions.html` y `about-oscar.html`.
- Resultado: cada pagina tiene `title` propio, nav activo correcto y referencias locales resueltas.
- No se recompilo Sass porque no se editaron archivos `.scss`.
- Browser interno no pudo inicializar por `windows sandbox failed: spawn setup refresh`; queda pendiente una revision visual real desktop/mobile.
