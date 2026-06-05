# Verification

## Objetivo

Definir la verificacion minima para cambios visuales en esta build estatica Synox/XpressBuddy.

## Antes De Entregar Un Cambio Visual

- [ ] Revisar `index.html` en desktop.
- [ ] Revisar `index.html` en mobile.
- [ ] Confirmar que header, hero, offers, About Oscar, CTA y footer renderizan.
- [ ] Confirmar que los textos no se salen de botones/cards.
- [ ] Confirmar que no hay imagenes principales rotas.
- [ ] Confirmar que el cambio vive en el parcial SCSS propietario.
- [ ] Confirmar que `assets/css/style.css` refleja el cambio SCSS.
- [ ] Confirmar que no se creo SCSS nuevo salvo decision documentada.
- [ ] Confirmar que no se introdujo framework nuevo.
- [ ] Confirmar que el codigo React/Tailwind de Figma no fue pegado directamente.

## Formas De Probar

### Archivo Directo

Como la build es estatica, se puede abrir `index.html` directamente en el navegador.

### Servidor Local

Si se necesita probar rutas, assets o Browser/Playwright con un origen HTTP, levantar un servidor estatico en la carpeta del template.

Ejemplo conceptual:

```txt
synox-xpressbuddy-public-demo/
  index.html
  assets/
```

El servidor debe servir esa carpeta como raiz.

## Validacion SCSS/CSS

Si se cambia SCSS:

- Confirmar que el HTML carga `assets/css/style.css`.
- Confirmar que el parcial editado corresponde a la responsabilidad del selector.
- Confirmar que `assets/scss/style.scss` sigue siendo solo el indice de imports.
- Confirmar que no se dejo el cambio solo en SCSS sin actualizar el CSS compilado.
- Confirmar que no se creo una hoja paralela de overrides para una regla que podia vivir en el SCSS existente.

## Comandos Sass

Sass esta instalado localmente en el proyecto.

Compilar una vez:

```txt
npm run sass:build
```

Dejar Sass observando cambios:

```txt
npm run sass:watch
```

Entrada y salida configuradas:

```txt
assets/scss/style.scss -> assets/css/style.css
```

El watch debe quedar corriendo mientras se editan parciales en `assets/scss/**`.

## Validacion Figma

- Confirmar que la referencia visual usada es `161:727`.
- Confirmar que la referencia tipografica usada es `10:2`.
- Confirmar que las fuentes implementadas son `Bebas Neue` y `Carlito`.
- Confirmar que `Geist Mono` no se incorpora al sitio.
- Confirmar que assets de Figma se guardan con nombres estables en `assets/images/figma/` antes de depender de ellos.

## Riesgos Conocidos

- El navegador carga CSS compilado, no SCSS.
- Todavia no hay comando Sass local documentado.
- `assets/scss/_responsive.scss` concentra responsive legacy; mover reglas sin revisar cascada puede romper mobile.
- Cambiar variables en `_variable.scss` puede afectar todas las paginas internas.
- Figma MCP entrega URLs temporales de assets que vencen.
- La landing objetivo usa composicion hero full image, mientras `index.html` actual usa hero financiero con decoraciones.

## Registro De Verificacion

### 2026-06-04

- Se instalo Sass local con npm.
- `npm run sass:build` compilo correctamente.
- La compilacion mostro warnings por `@import` deprecado en Dart Sass, sin error de build.
- Se verifico documentalmente que `index.html` carga `assets/css/style.css`.
- Se verifico que existe SCSS fuente en `assets/scss/**`.
- Verificacion visual en navegador pendiente.
