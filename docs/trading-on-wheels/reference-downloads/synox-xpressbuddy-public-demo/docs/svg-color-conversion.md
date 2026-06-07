# SVG Color Reference - Synox Icons

Guia canonica para convertir colores de SVGs cuando se pida que un icono use una familia de color especifica. Por defecto, los SVG convertidos deben quedar en degradado usando la luz y el color fuerte de la muestra.

## Regla Base

Mantener la forma original del SVG y cambiar solo los `stop-color`, `fill` o `stroke` necesarios. No convertir el SVG a PNG ni reemplazar el path. Si el icono original es plano, convertirlo a degradado en SVG.

## Pares De Color

Estos tres SVG son la referencia visual de color. El `color fuerte` es el tono base y la `luz` es el highlight del degradado.

| SVG de referencia | Familia | Color fuerte | Luz |
|---|---|---|---|---|
| `assets/images/icons/icon_discord.svg` | Amarillo | `#FFC107` | `#FFDD75` |
| `assets/images/icons/icon_bars.svg` | Azul | `#0754AE` | `#86DBE5` |
| `assets/images/icons/icon_learn.svg` | Verde | `#07AE4D` | `#B4FBD2` |

## Datos Detectados En Los SVG

Los SVG de referencia usan degradados radiales:

```txt
icon_discord.svg: #FFDD75 -> #FFC107
icon_bars.svg:    #86DBE5 -> #0754AE
icon_learn.svg:   #B4FBD2 -> #07AE4D
```

En esos degradados, el primer color es la luz y el ultimo color es el fuerte.

## Como Convertir Un SVG

1. Abrir el SVG fuente en `assets/images/icons/`.
2. Ubicar `stop-color`, `fill` o `stroke`.
3. Si el SVG usa degradado, asignar la luz al primer `stop-color` y el color fuerte al ultimo `stop-color`.
4. Si el SVG es plano, crear un `linearGradient` o `radialGradient` con la luz primero y el color fuerte al final, y usar `fill="url(#...)"` o `stroke="url(#...)"`.
5. Si tiene varios paths, aplicar la misma familia de degradado salvo que el icono necesite profundidad.

## Referencia Rapida

- Amarillo: fuerte `#FFC107`, luz `#FFDD75`.
- Azul: fuerte `#0754AE`, luz `#86DBE5`.
- Verde: fuerte `#07AE4D`, luz `#B4FBD2`.
