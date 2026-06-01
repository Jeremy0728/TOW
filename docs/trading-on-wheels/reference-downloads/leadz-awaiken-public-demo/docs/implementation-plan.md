# Implementation Plan

Este plan traduce las decisiones actuales en un flujo iterativo para convertir el nodo Figma Leadz/TOW al template local. La meta es mantener el template estable, adaptar primero el sistema visual y despues reemplazar assets con control.

## Principios

- Mantener la base original de Leadz mientras se orienta al look Figma.
- Convertir Figma MCP al stack local, no pegar React/Tailwind.
- Cambiar primero tokens/fuentes y componentes existentes antes de crear estructuras nuevas.
- Registrar cada decision aprobada en `docs/decisions.md`.
- Trabajar por pasos pequenos para poder revisar y revertir.

## Paso 1 - Fuentes Minimas

Fuente canonica: `docs/export-order.md`.

### Verificado En Figma

Figma usa:

- `Bebas Neue Regular` para titulares, nav, botones, labels y headings de cards/footer.
- `Carlito Regular` para cuerpo, parrafos, listas y captions.
- `Carlito Bold` para checks o enfasis pequenos.
- `Geist Mono` solo para chips/anotaciones del frame tipografico.

### Politica

- Reemplazar o complementar el import actual de `Inter` + `Onest`.
- No agregar otras fuentes ni pesos no usados por Figma.
- Mantener variables CSS existentes del template:
  - `--default-font` para cuerpo.
  - `--accent-font` para titulares y botones.

### Import Propuesto

```html
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Carlito:wght@400;700&display=swap" rel="stylesheet">
```

### Variables Propuestas

```css
:root {
  --default-font: "Carlito", "Calibri", Arial, sans-serif;
  --accent-font: "Bebas Neue", sans-serif;
}
```

## Paso 2 - Tokens Visuales

Fuente canonica: `docs/export-order.md`.

### Objetivo

Actualizar la base visual sin romper paginas internas innecesariamente.

### Mapeo Inicial

| Token actual | Valor TOW propuesto | Uso esperado |
|---|---:|---|
| `--accent-color` | `#F7C600` | CTA principal amarillo |
| `--dark-color` | `#0B0B0B` | Fondos oscuros/sections |
| `--primary-color` | `#14202E` | Texto sobre amarillo, header ink |
| `--secondary-color` | `#040404` o mantener segun alcance | Secciones oscuras si se tematiza global |
| `--text-color` | `#AEB8BA` | Texto secundario sobre dark |
| `--white-color` | `#FFFFFF` | Texto fuerte |
| `--divider-color` | `rgba(255,255,255,0.12)` | Dividers en dark |
| `--dark-divider-color` | `rgba(255,255,255,0.10)` | Dividers footer/header |

Los acentos `#2757A6` y `#498734` se reservan para Course y Competitions.

## Paso 3 - Estrategia CSS

Elegir una de estas opciones antes de editar visual:

### Opcion A - Editar `css/custom.css`

Usar cuando el objetivo sea convertir todo Leadz a TOW.

Ventajas:

- Menos archivos.
- Las variables globales afectan todo el template.

Riesgos:

- Cambia paginas internas tambien.
- Dificulta separar cambios TOW de vendor/template.

### Opcion B - Crear Una Capa Paralela

Usar cuando el objetivo inicial sea solo `index.html`.

Requisitos:

- Cargar despues de `css/custom.css`.
- Preferir un scope de pagina.
- Tocar HTML solo para agregar la clase y el link CSS.

Ventajas:

- Reversible.
- Evita romper paginas internas.
- Permite comparar contra el template original.

Decision aplicada: se descarta la Opcion B para Fase 1. Los colores y tipografias se corrigen en `css/custom.css`, que es la base real del template.

## Paso 4 - Adaptar Header Y Hero

- Reemplazar nav por Home, Membership, Course, Competitions, About Oscar.
- Reemplazar header buttons por Join Now.
- Mantener estructura Bootstrap/SlickNav para responsive.
- Convertir `.hero` a composicion full image con wash izquierdo.
- Retirar o ocultar counters/form si no aplican a la landing objetivo.
- Usar textos Figma:
  - `Stop renting your time`.
  - `Build the life you want. Learn the Gurman Method and generate structured income through the Wheel Strategy.`

## Paso 5 - Offers

- Reutilizar `.our-pricing` y `.pricing-box`.
- Mapear tres cards:
  - Membership.
  - Course.
  - Competitions.
- Mantener listas con checks, botones y colores semanticos.
- Usar clases locales solo si la estructura actual no alcanza, por ejemplo `.tow-offer-card`.

## Paso 6 - About Oscar

- Reutilizar `.about-us` como base.
- Incorporar retrato y wheel-runner/runner image cuando los assets esten staged.
- Mantener texto en HTML estatico.
- Evitar JS nuevo.

## Paso 7 - CTA Y Footer

- Convertir `.cta-box` a banner amarillo.
- Convertir `.main-footer` a footer TOW con logo, quote, links, resources, follow y contact.
- Cambiar redes a YouTube, TikTok, Instagram, Discord.

## Paso 8 - Staging De Assets Figma

El orden exacto de exportacion vive en `docs/export-order.md`. No descargar assets fuera de esa secuencia salvo decision documentada.

Carpeta temporal obligatoria:

```txt
images/figma/
images/figma/manifest.md
```

El manifest debe incluir:

- Fecha de descarga.
- Nodo Figma origen.
- Nombre de capa Figma.
- URL MCP temporal usada.
- Nombre local guardado.
- Uso previsto.
- Estado: `staged`, `replaced`, `approved`, `rejected`.

## Paso 9 - Reemplazo Controlado Con Backup

Cuando un asset Figma reemplace un asset existente:

1. Guardar primero en `images/figma/`.
2. Crear backup del asset existente en la misma carpeta con sufijo `-original`.
3. Copiar el asset nuevo al nombre/ruta que el HTML o CSS ya consume.
4. Verificar que el sitio carga sin referencias rotas.
5. Registrar el reemplazo en `images/figma/manifest.md`.

## Paso 10 - Verificacion Por Iteracion

Por cada iteracion:

- Verificar `index.html` en desktop.
- Verificar tambien `index-tow.html` cuando sea la propuesta activa de Home.
- Verificar `index.html` en mobile.
- Confirmar que CSS cargado refleja los cambios.
- Confirmar que no se rompen assets principales.
- Actualizar `docs/current-phase.md` y `docs/decisions.md` si cambia el plan.

## Paso 11 - Sitemap Sobre HTML Existentes

Estado actual: iniciado.

No crear rutas nuevas para la primera version del sitemap. Reutilizar:

- Home: `index-tow.html`.
- Membership: `pricing.html`.
- Course: `service-single.html`.
- Competitions: `case-study.html`.
- About Oscar: `about.html`.
- Join Now: `contact.html`.

Cada ruta debe tener el mismo topbar/header/footer TOW, el nav activo correspondiente, titulos y breadcrumbs consistentes, y copy principal adaptado a Trading On Wheels.

## Preguntas Pendientes

- Verificar visualmente desktop/mobile cuando el navegador integrado o un navegador local este disponible.
- Definir si se mantendran paginas internas de Leadz o si la descarga se reducira a landing.
- Definir si `images/figma/` se versiona con assets temporales o solo manifest hasta aprobar assets finales.
