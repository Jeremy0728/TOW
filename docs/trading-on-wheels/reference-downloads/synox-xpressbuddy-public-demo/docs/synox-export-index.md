# Synox Export Index

## Proposito

Este export junta la informacion original de Synox/XpressBuddy en un formato rapido de consultar para futuros proyectos. La idea es que el proximo agente primero lea arquitectura, inventario y exports antes de abrir HTML largos.

## Archivos Generados

- `exports/synox-content/synox-original-content-export.md`: texto visible por pagina y seccion.
- `exports/synox-content/synox-original-content.json`: la misma informacion en formato estructurado.
- `exports/synox-content/synox-section-index.csv`: indice rapido de paginas, clases, headings e imagenes.
- `exports/synox-content/synox-image-usage.csv`: donde aparece cada imagen/media del HTML original.
- `exports/synox-content/synox-text-only.txt`: texto visible continuo por pagina/seccion.
- `exports/assets-candidates/synox-template/`: imagenes candidatas del template original.
- `exports/assets-candidates/trading-on-wheels-current/`: assets TOW actuales ya separados del template.

## Cobertura

- Paginas Synox procesadas: 17.
- Secciones detectadas: 106.
- Assets Synox candidatos copiados: 373.
- Assets TOW actuales copiados: 37.

## Lectura Recomendada

1. Leer `docs/architecture.md`.
2. Leer `docs/html-section-inventory.md`.
3. Leer `exports/synox-content/synox-original-content-export.md` para copy y textos originales.
4. Revisar `exports/assets-candidates/*/manifest.md` antes de elegir imagenes.
5. Registrar decisiones nuevas en `docs/decisions.md`.
