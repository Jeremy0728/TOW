# Future Project Intake

## Objetivo

Primera accion para proyectos nuevos basados en templates HTML: analizar arquitectura y secciones antes de tocar SCSS. Esto reduce tokens, evita rehacer inventarios y permite decidir que secciones del HTML se pueden reutilizar.

## Primera Pasada Obligatoria

1. Revisar si existe `docs/README.md`, `docs/architecture.md`, `docs/html-section-inventory.md`, `docs/assets-plan.md`, `docs/current-phase.md` y `docs/decisions.md`.
2. Si esos docs existen, leerlos primero y solo abrir HTML puntuales cuando falte una seccion.
3. Si no existen, generar primero:
   - Arquitectura real del proyecto.
   - Inventario de paginas y secciones.
   - Mapa de assets candidatos.
   - Estado actual y decisiones.
4. Revisar carpetas `origin/`, `assets/`, `external-assets/` y cualquier carpeta equivalente de descarga original.
5. Separar assets originales del template y assets de marca/proyecto.
6. En primera pasada no estabilizar todo el SCSS. Solo identificar propietarios de secciones y clases que ya existen.
7. Elegir secciones por funcion: hero, about, services/features, pricing/offers, process, testimonials, FAQ, contact, footer.
8. Registrar que HTML se puede reutilizar y que SCSS propietario controla cada bloque.

## Criterio Para Usar Secciones Del Template

- Reutilizar una seccion si su estructura ya resuelve el contenido aunque el copy cambie.
- Mover HTML con sus clases existentes antes de crear clases nuevas.
- Buscar el parcial SCSS propietario antes de editar estilos.
- No crear una capa paralela de overrides si el parcial original puede absorber el cambio.
- No limpiar responsive completo en la primera pasada salvo que bloquee la visualizacion.

## Entregables Minimos Para Los Proximos Dos Proyectos

- `docs/architecture.md`: stack, entrypoints, SCSS/CSS, JS y assets.
- `docs/html-section-inventory.md`: paginas, secciones, proposito y posible uso.
- `exports/<template>-content/`: texto por pagina/seccion en Markdown, JSON y CSV.
- `exports/assets-candidates/`: carpeta con imagenes candidatas y manifest.
- `docs/current-phase.md`: que ya esta decidido y que queda pendiente.

## Checklist Rapido

- [ ] Lei docs existentes antes de inspeccionar HTML largo.
- [ ] Identifique carpeta `origin` o fuente original.
- [ ] Separe texto original de copy adaptado.
- [ ] Liste secciones reutilizables.
- [ ] Liste assets candidatos.
- [ ] No toque SCSS salvo correccion puntual necesaria.
- [ ] Registre decisiones para el siguiente agente.
