# Current Phase

## Fase Vigente

Fase 2: transferir la propuesta Trading On Wheels ya trabajada en Synox hacia
Bitrader, usando Bitrader Origin como base visual y estructural.

## Objetivo

Reconstruir los HTML de Bitrader para TOW usando:

- Bitrader como template destino.
- `origin/` como banco de secciones reutilizables.
- Synox como fuente de contenido, sitemap, copy, compliance y decisiones.
- TOW previo en Bitrader como referencia de assets y trabajo ya existente.

La meta no es copiar Synox. La meta es que TOW funcione en Bitrader con una
estructura limpia, editable y consistente con la template.

## Alcance Actual

Primera pasada:

- Documentar el puente Synox -> Bitrader.
- Reconstruir `index.html` con secciones Bitrader.
- Mantener contenido TOW v2 de Synox:
  - Hero `Stop Renting Your Time`.
  - Credibility strip.
  - Tres pilares.
  - Proceso en 4 moves.
  - Pricing.
  - Risk First.
  - FAQ con compliance.
  - Footer con disclaimer.

Siguiente pasada:

- Complementar `membership.html` sin borrar su base TOW existente.
- Complementar `course.html` sin borrar su base TOW existente.
- Decidir si `gurman-method.html` existe como ruta propia.
- Complementar `competitions.html`.
- Complementar `about-oscar.html`.
- Crear `legal.html`.

## Reglas Vigentes

- No introducir frameworks.
- No copiar visualmente Synox.
- No tratar Bitrader como marca nueva.
- Usar clases Bitrader existentes siempre que sea razonable.
- Agregar clases `tow-*` solo como modificadores locales.
- No inventar testimonios ni metricas de rentabilidad.
- Mantener disclaimer visible.
- Si se edita Sass, compilar `assets/css/style.css` con `npm run build`.

## Checklist

- [x] Identificar que Bitrader es template destino y TOW es marca real.
- [x] Identificar que Synox exports es la fuente de contenido/estructura.
- [x] Detectar docs Bitrader desactualizados que citaban `index-tow.html`.
- [x] Crear `docs/bitrader-synox-transfer-map.md`.
- [x] Reconstruir `index.html` con secciones Bitrader.
- [x] Crear `legal.html` minimo con disclaimer Synox/TOW para evitar enlace roto.
- [x] Complementar `membership.html` manteniendo header, hero, servicios, about, offers, CTA y footer base.
- [x] Complementar `course.html` manteniendo banner y estructura base.
- [x] Complementar `competitions.html` manteniendo banner y estructura base.
- [x] Complementar `about-oscar.html` manteniendo hero, roadmap, CTA y footer base.
- [x] Verificar estaticamente que assets principales y rutas internas existen.
- [ ] Revisar desktop.
- [ ] Revisar mobile.
- [ ] Compilar Sass si se editan parciales.
- [ ] Registrar decisiones nuevas en `docs/decisions.md`.

## Pendientes

- Confirmar URLs reales de checkout.
- Confirmar si `gurman-method.html` sera pagina propia en Bitrader.
- Confirmar metricas `200K+` y `27+ years` antes de publicarlas.
- Confirmar testimonios reales o mantener bloque oculto.
- Migrar assets finales desde Synox exports si falta algun asset TOW en Bitrader.
