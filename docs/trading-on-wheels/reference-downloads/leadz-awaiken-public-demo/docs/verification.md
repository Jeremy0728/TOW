# Verification

## Objetivo

Definir la verificacion minima para cambios visuales en esta build estatica Leadz.

## Antes De Entregar Un Cambio Visual

- [ ] Revisar `index.html` en desktop.
- [ ] Revisar `index.html` en mobile.
- [ ] Confirmar que topbar, header, hero, offers, About Oscar, CTA y footer renderizan.
- [ ] Confirmar que los textos no se salen de botones/cards.
- [ ] Confirmar que no hay imagenes principales rotas.
- [ ] Confirmar que `css/custom.css` contiene los cambios finales.
- [ ] Confirmar que no se introdujo framework nuevo.
- [ ] Confirmar que el codigo React/Tailwind de Figma no fue pegado directamente.

## Formas De Probar

### Archivo Directo

Como la build es estatica, se puede abrir `index.html` directamente en el navegador.

### Servidor Local

Si se necesita probar rutas, assets o Browser/Playwright con un origen HTTP, levantar un servidor estatico en la carpeta del template.

Ejemplo conceptual:

```txt
leadz-awaiken-public-demo/
  index.html
  css/
  images/
  js/
```

El servidor debe servir esa carpeta como raiz.

## Validacion CSS

Si se cambia CSS:

- Confirmar que el HTML carga el archivo editado.
- Confirmar que no hay una hoja paralela de tema si la decision vigente es corregir la base.
- Confirmar que `index.html` no depende de un scope temporal para recibir el tema.
- No dejar estilos finales solo en notas o snippets.

No hay compilacion Sass documentada en Leadz. No ejecutar comandos de build inventados.

## Validacion Figma

- Confirmar que la referencia visual usada es `161:727`.
- Confirmar que la referencia tipografica usada es `10:2`.
- Confirmar que las fuentes implementadas son `Bebas Neue` y `Carlito`.
- Confirmar que `Geist Mono` no se incorpora al sitio.
- Confirmar que assets de Figma se guardan con nombres estables antes de depender de ellos.

## Riesgos Conocidos

- El template descargado no trae SCSS publico.
- `css/custom.css` es grande y mezcla base, componentes, secciones y responsive.
- Cambiar tokens en `:root` puede afectar paginas internas.
- Figma MCP entrega URLs temporales de assets que vencen.
- La landing objetivo usa composicion hero full image, mientras Leadz actual usa hero de 3 columnas.
- Leadz tiene muchas secciones legacy que no forman parte de la landing TOW.

## Registro De Verificacion

### 2026-06-01

- `git diff --check` paso para `index.html` y `css/custom.css`.
- Se confirmo que `index.html` carga `Bebas Neue` + `Carlito`.
- Se confirmo que `index.html` solo carga `css/custom.css` como CSS propio.
- `index-tow.html` carga `css/tow-overrides.css` despues de `css/custom.css` para aislar el scope TOW.
- Se confirmo que `css/custom.css` contiene tokens TOW y cubre hero, offers, CTA y footer desde la base.
- Verificacion en navegador pendiente: el navegador integrado fallo antes de cargar la pagina por `windows sandbox failed: spawn setup refresh`.
