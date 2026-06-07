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

### 2026-06-07 - Membership complementada sobre base TOW

- Se ajusto `membership.html` sin reemplazar su estructura base: header TOW, hero, servicios, about, offers, CTA y footer se mantienen.
- Se corrigio el fondo del hero para mantener el asset propio existente de membership: `assets/images/banner/home4/1.png`.
- Se actualizo el about para retirar texto/metrica generica de consultoria y usar `assets/figma/oscar-portrait.png`.
- Se reviso estaticamente que no quedaran textos como `Consulting`, `Satisfied`, `guide structure`, `signup.html`, `index-tow`, `Synox` ni favicon viejo `20260601`.
- Se validaron rutas/assets principales usados por membership: hero, retrato de Oscar, `legal.html`, `contact.html`, `course.html` y `competitions.html`.
- Quedan `href="#"` solo en redes sociales placeholder y `scrollToTop`.
- No se edito Sass en esta pasada. El CSS compilado no requiere build por estos cambios HTML.

### 2026-06-07 - Course, competitions y About Oscar complementados

- Se complemento `course.html` manteniendo su banner propio `assets/images/banner/home4/coursebanner.png`.
- Se reemplazo el roadmap generico del curso por modulos: Options Foundations, Gurman Framework, Trade Selection, Risk Rules, Execution Routine y Review & Repetition.
- Se reemplazaron FAQ/outcomes genericos de finanzas/insurance en `course.html` por contenido educativo del Gurman Method.
- Se complemento `competitions.html` manteniendo su banner propio `assets/images/banner/home4/competitionbanner.png`.
- En `competitions.html` se agrego un FAQ visible especifico de demo challenges; el FAQ viejo del template quedo oculto con `d-none` para preservar base sin mostrar contenido generico.
- Se complemento `about-oscar.html` con copy de hero mas claro, CTA `Become a VIP` y enlaces legales reales.
- Se validaron assets propios de membership/course/competitions/about y `legal.html`.
- No se edito Sass en esta pasada.

### 2026-06-07 - Transferencia Synox a Bitrader home

- Se reconstruyo `index.html` con secciones nativas Bitrader y contenido Synox/TOW.
- Se creo `legal.html` para cubrir el enlace legal del footer.
- Se confirmo estaticamente que existen las rutas internas enlazadas desde home: `membership.html`, `course.html`, `competitions.html`, `about-oscar.html`, `contact.html` y `legal.html`.
- Se confirmo que assets principales referenciados por la home existen: logo TOW, hero, iconos de ofertas, retrato de Oscar y fondo de pricing.
- Se busco en `index.html` y `legal.html` referencias heredadas como `index-tow`, `Synox`, `Bitrader - Professional`, `signup.html` y `service-details.html`; no quedaron coincidencias relevantes.
- Browser interno no pudo inicializar por `windows sandbox failed: spawn setup refresh`; queda pendiente revision visual real desktop/mobile.
- No se corrio `npm run build` porque esta iteracion no edito Sass.

### 2026-06-01 - Sitemap TOW aislado

- Se validaron estaticamente `index-tow.html`, `membership.html`, `course.html`, `competitions.html` y `about-oscar.html`.
- Resultado: cada pagina tiene `title` propio, nav activo correcto y referencias locales resueltas.
- No se recompilo Sass porque no se editaron archivos `.scss`.
- Browser interno no pudo inicializar por `windows sandbox failed: spawn setup refresh`; queda pendiente una revision visual real desktop/mobile.
