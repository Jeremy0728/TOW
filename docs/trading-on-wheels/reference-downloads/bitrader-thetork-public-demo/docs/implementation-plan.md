# Implementation Plan

Este plan traduce las decisiones actuales en un flujo de trabajo iterativo. La meta es que el mismo proceso pueda reutilizarse en otro proyecto: primero se estabiliza tema, luego se recopilan assets, despues se reemplazan con backup y finalmente se migra lo aprobado a rutas definitivas.

## Principios

- Mantener la base original del template mientras se orienta al look Figma.
- Cambiar primero datos/tokens existentes antes de crear estructuras nuevas.
- Usar Figma como referencia visual y fuente temporal de assets, no como stack.
- Registrar cada decision aprobada en `docs/decisions.md`.
- Trabajar por pasos pequenos para poder revisar y revertir.

## Paso 1 - Fuentes Minimas

### Verificado En Figma

Figma usa:

- `Anton Regular` para titulares display.
- `Montserrat Regular`, `Medium`, `SemiBold`, `Bold`, `ExtraBold` y `Black` para UI, cuerpo, nav, cards, CTA y footer.
- `Geist Mono` aparece solo en chips/anotaciones del style frame y no se usa en el sitio.

### Politica

- Reemplazar el import actual de `Anek Telugu` + `Open Sans` por solo las familias necesarias.
- No agregar otras fuentes ni pesos no usados por Figma.
- Mantener la base del template: variables `$title-font` y `$text-font` siguen existiendo.
- Recomendacion tecnica: usar `Montserrat` como fuente base para `$title-font` y `$text-font`; aplicar `Anton` solo en selectores display donde corresponda.

### Import Propuesto

```scss
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
```

## Paso 2 - Tokens Dark

### Objetivo

Actualizar primero `[data-bs-theme="dark"]` en `assets/sass/abstracts/_variables.scss`.

Estado actual: ejecutado en Sass y compilado a `assets/css/style.css`.

### Mapeo Inicial

| Token actual dark | Valor TOW propuesto | Uso esperado |
|---|---:|---|
| `--brand-color` | `#f7c600` | CTA principal amarillo |
| `--secondary-color` | `#f7c600` | Acento secundario si el componente espera second color |
| `--body-color` | `#0c0c0d` | Fondo del documento dark |
| `--title-color` | `#ffffff` | Titulos |
| `--text-color` | `#908f8f` | Texto base secundario |
| `--text-color-light` | `#ffffff` | Texto fuerte sobre dark |
| `--bg-color-3` | `#0c0c0d` | Superficie principal dark heredada |
| `--service-item-bg-color` | `#141414` | Cards oscuras |
| `--footer-bg-color` | `#0c0c0d` | Footer |
| `--border-color*` | rgba amarillo/blanco tenue | Bordes segun componente |

Los acentos azul `#2757a6` y verde `#498734` se reservan para cards Course/Competitions, no para reemplazar todos los tokens globales.

Decision aplicada: el amarillo principal queda en `#f7c600`, alineado a la landing y labels Figma.

## Paso 3 - Staging De Assets Figma

### Carpeta Temporal

Todos los assets descargados desde MCP/Figma se guardan primero en:

```txt
assets/figma/
```

Esta carpeta es staging. No significa que esos assets ya esten aprobados como estructura final del proyecto.

### Manifest

Cada tanda de descarga debe registrar un manifest:

```txt
assets/figma/manifest.md
```

El manifest debe incluir:

- Fecha de descarga.
- Nodo Figma origen.
- Nombre de capa Figma.
- URL MCP temporal usada.
- Nombre local guardado.
- Uso previsto.
- Estado: `staged`, `replaced`, `approved`, `rejected`.

## Paso 4 - Reemplazo Controlado Con Backup

Cuando un asset Figma se use para reemplazar un asset existente del template:

1. Guardar primero el asset Figma en `assets/figma/`.
2. Crear backup del asset existente en su misma carpeta con sufijo `-original`.
3. Copiar el asset nuevo al nombre/ruta que el HTML ya consume.
4. Verificar que el sitio sigue cargando sin cambiar rutas innecesariamente.
5. Registrar el reemplazo en `assets/figma/manifest.md`.

### Ejemplo Logo

Si se reemplaza:

```txt
assets/images/logo/logo.png
```

Entonces antes se conserva:

```txt
assets/images/logo/logo-original.png
```

Y el nuevo logo queda en:

```txt
assets/images/logo/logo.png
```

La misma regla aplica a:

- `assets/images/logo/logo-dark.png` -> `logo-dark-original.png`
- `assets/images/logo/preloader.png` -> `preloader-original.png`
- `assets/images/logo/Logo-2-dark.png` -> `Logo-2-dark-original.png`

Si ya existe un `*-original`, no sobrescribirlo; crear un backup con fecha.

## Paso 5 - Migracion Final De Assets

Al final del proyecto, cuando los assets queden aprobados:

- Decidir si permanecen reemplazando rutas originales.
- O migrar a una carpeta final semantica como `assets/images/tow/`.
- Actualizar HTML/Sass solo cuando la estructura final este aprobada.
- Retirar assets staged no usados de `assets/figma/`.

## Paso 6 - Verificacion Por Iteracion

Por cada iteracion:

- Verificar cambio visual en `index--theme_dark.html`.
- Verificar que no se rompen assets.
- Verificar que Sass y CSS compilado estan sincronizados.
- Actualizar `docs/current-phase.md` y `docs/decisions.md` si cambia el plan.

## Preguntas Pendientes

- Definir en que componente se incorpora primero el verde `#498734`: cards de Competitions o assets/iconografia.
