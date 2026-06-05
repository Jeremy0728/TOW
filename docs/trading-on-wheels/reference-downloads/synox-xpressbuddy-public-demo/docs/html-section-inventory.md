# HTML Section Inventory

## Proposito

Este documento inventaria todas las paginas HTML de la descarga Synox/XpressBuddy y explica que seccion contiene cada una. Sirve para que otro agente pueda reordenar, eliminar, mover o reutilizar bloques segun el gusto visual de Trading On Wheels sin tener que inspeccionar el template desde cero.

No modifica la arquitectura vigente: primero se reutilizan clases HTML y parciales SCSS existentes. Si una seccion se reordena, su estilo debe seguir viviendo en el parcial propietario documentado en `docs/architecture.md`.

## Lectura Rapida Del Template

- Todas las paginas principales son HTML estatico en la raiz.
- La mayoria usa el mismo shell: `header.site_header`, `main.page_content`, varias `section`, y `footer.site_footer`.
- Las paginas internas comparten `section.page_header` para titulo y breadcrumb.
- `index.html` es la variante `investment_solution` y es la mejor base para la landing TOW inicial.
- Las variantes home traen bloques utiles que se pueden tomar como referencia, pero no se deben copiar completos si solo se necesita una pieza.
- El CSS final viene de `assets/css/style.css`; los estilos fuente estan en `assets/scss/**`.

## Shell Comun

| Pieza | Clases comunes | Que contiene | SCSS propietario |
|---|---|---|---|
| Header | `.site_header`, `.header_layout_1/2/3` | Logo, nav, dropdowns, botones, sticky menu, mobile menu | `assets/scss/template-parts/_header.scss` |
| Main | `.page_content` | Contenedor de las secciones de cada pagina | reglas distribuidas por componente/template |
| Page header | `.page_header` | Titulo interno, breadcrumb, fondo oscuro/decoracion | `assets/scss/template-parts/_pageheader.scss` |
| Footer | `.site_footer`, `.footer_layout_1/2/3/4/5/6` | Newsletter, columnas, contacto, redes, CTA segun variante | `assets/scss/template-parts/_footer.scss` |

## Paginas Base E Internas

### `index.html`

Body: `investment_solution`.

Uso actual: home principal de inversion/consultoria. Es la mejor base para Trading On Wheels porque ya trae hero financiero, about, services, pricing/offers, team, FAQ y footer.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.hero_section.hero_investment_solution` | Propuesta principal de inversion segura. | H1, lead copy, botones, counters/decoraciones, imagen hero financiera. |
| 2 | `.about_section` | Confianza, datos e inversion informada. | H2, cards de datos, contadores, imagenes y pequenos bloques de valor. |
| 3 | `.service_section` | Servicios que ofrece la empresa. | Grid/cards de servicios, titulos, iconos, CTA menor. |
| 4 | `.review_section` | Testimonios de inversionistas. | Carousel/slider de reviews con nombres y rating. |
| 5 | `.pricing_section` | Niveles o planes. | Bloques de pricing, features, precios y botones. Candidato directo para Membership/Course/Competitions. |
| 6 | `.team_section` | Equipo directivo. | Cards de miembros, nombres, roles e imagenes. Puede eliminarse o reconvertirse a About Oscar. |
| 7 | `.faq_section` | Preguntas frecuentes. | Accordion FAQ. Util si TOW quiere FAQ final. |
| 8 | `.site_footer.footer_layout_1` | Footer comun oscuro. | Newsletter, columnas de links/contacto y decoraciones. |

### `services.html`

Uso actual: pagina listado de servicios.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Our Services`. | Breadcrumb y fondo oscuro. |
| 2 | `.feature_section` | Por que los servicios son mejores. | Cards/features de beneficios. |
| 3 | `.service_section` | Servicios disponibles. | Grid de servicios con iconos/titulos; buen banco para Course o recursos. |
| 4 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

### `service_details.html`

Uso actual: detalle de un servicio.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Service Details`. | Breadcrumb. |
| 2 | `.service_details_section` | Un servicio puntual y su proceso. | Imagen/copy largo, lista de beneficios, bloque `Service Process`, pasos. |
| 3 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: buen candidato para una pagina `Course` si se adapta el copy a temario, proceso y beneficios.

### `projects.html`

Uso actual: listado de proyectos/casos.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Our Project`. | Breadcrumb. |
| 2 | `.project_section` | Galeria/listado de proyectos completados. | Cards o grilla de proyectos con imagenes y enlaces. |
| 3 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: candidato para `Competitions` si se quiere mostrar challenges, resultados o eventos.

### `project_details.html`

Uso actual: detalle de proyecto/caso.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Project Details`. | Breadcrumb. |
| 2 | `.project_details_section` | Caso especifico y resultado. | Titulo largo, descripcion, requisitos, solucion, resultado, imagenes/decoraciones. |
| 3 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: util para detalle de competencia, caso de alumno o explicacion de una estrategia.

### `pricing.html`

Uso actual: pagina de pricing.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Our Pricing`. | Breadcrumb. |
| 2 | `.policy_section` | Features o ventajas del plan. | Cards de features: documentacion, entrega, soporte, etc. |
| 3 | `.service_section` | Planes/precios. | Bloques de pricing con features y CTA. |
| 4 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: candidato fuerte para `Membership`, porque ya tiene estructura de pricing y features.

### `contact.html`

Uso actual: contacto.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Contact Us`. | Breadcrumb. |
| 2 | `.contact_section` | Envio de mensaje y datos de contacto. | Formulario, campos, datos de contacto, posiblemente mapa/direccion. |
| 3 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: candidato para `Join Now` o aplicacion/contacto.

### `blog.html`

Uso actual: listado de articulos.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Blog`. | Breadcrumb. |
| 2 | `.blog_section` | Articulos recientes. | Cards de blog con imagen, titulo, metadata y enlaces. |
| 3 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: util si se quiere seccion `Resources`, articulos o updates.

### `blog_details.html`

Uso actual: detalle de articulo.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Blog Details`. | Breadcrumb. |
| 2 | `.blog_details_section` | Articulo completo. | Titulo, contenido largo, imagenes, headings, comentarios/formulario o sidebar segun markup. |
| 3 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: util para contenidos educativos o articulos de Wheel Strategy.

### `career.html`

Uso actual: listado de vacantes.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Career`. | Breadcrumb. |
| 2 | `.career_section` | Oportunidades de trabajo. | Cards/listado de roles como Customer Success Manager y Technical Project Manager. |
| 3 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: no es prioridad para landing. Puede reconvertirse a comunidad, mentores o oportunidades.

### `career_details.html`

Uso actual: detalle de una vacante.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.page_header` | Titulo `Career Details`. | Breadcrumb. |
| 2 | `.career_details_section` | Descripcion de un puesto. | Titulo, responsabilidades, experiencia requerida, listas y contenido largo. |
| 3 | `.job_apply_section` | Aplicacion al puesto. | Formulario de aplicacion. |
| 4 | `.site_footer.footer_layout_1` | Footer comun. | Newsletter y columnas. |

Para TOW: posible base para formulario largo de aplicacion, pero no prioridad.

### `error.html`

Uso actual: pagina 404.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.error_section` | Pagina no encontrada. | H1, imagen/decoracion, boton de regreso; no usa header/footer comun. |

Para TOW: adaptar marca/copy solo si se decide mantener pagina 404.

## Variantes Home Del Template

Estas paginas no son la base principal, pero tienen secciones que pueden servir como banco de ideas.

### `index_online_banking.html`

Body: `online_banking`.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.hero_section.hero_online_banking` | Hero de banca digital. | H1, assets grandes, logos/clientes, counters, decoraciones. |
| 2 | `.feature_section` | Highlights de producto. | Cards de beneficios rapidos. |
| 3 | `.about_section` | Futuro con online banking. | Copy, metricas, imagenes. |
| 4 | `.video_section` | Tarjeta fisica/producto. | Video o imagen destacada. |
| 5 | `.funfact_section` | Datos/metricas de uso. | Counters y porcentajes. |
| 6 | `.ob_process_section` | Proceso de uso. | Pasos de registro y manejo de tarjetas. |
| 7 | `.review_section` | Testimonios. | Carousel de reviews. |
| 8 | `.integrated_section` | Integraciones mobile wallet. | Logos/cards de integraciones. |
| 9 | `.appstore_section` | Descarga app. | CTA de app stores. |
| 10 | `.site_footer.footer_layout_2` | Footer con contacto/oficina. | Contacto, form y columnas. |

Util para TOW: process section, app/CTA, integration/logo rows.

### `index_payment_solutions.html`

Body: `payment_solutions`.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.hero_section.hero_payment_solutions` | Hero de pagos rapidos. | H1, counters, CTA, imagenes/decoraciones. |
| 2 | `.payment_methods_section` | Metodos de pago. | Cards de metodos. |
| 3 | `.ps_contact_process_section` | Como conectar Synox. | Pasos de setup/activacion. |
| 4 | `.powering_industry_section` | Industrias soportadas. | Accordion/lista por industria. |
| 5 | `.ps_policy_section` | Beneficios de pagos. | Cards de fast/secure/support. |
| 6 | `.pricing_section` | Pricing transaccional. | Cards o bloques General/Individual. |
| 7 | `.ps_pntegrating_section` | CMS populares. | Logos/integraciones. |
| 8 | `.ps_blog_section` | Articulos recientes. | Cards de blog. |
| 9 | `.site_footer.footer_layout_3` | Footer CTA oscuro. | CTA grande y columnas. |

Util para TOW: pasos, pricing alternativo, cards de beneficios.

### `index_insurance.html`

Body: `index_insurance`.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.hero_section.hero_insurance` | Planes de seguro. | H1, bullets/features, counters. |
| 2 | `.about_section` | Solucion de seguro. | Imagen/copy, beneficios. |
| 3 | `.service_section` | Tipos de cobertura. | Cards de servicios. |
| 4 | `.funfact_section` | Cobertura y satisfaccion. | Counters y datos. |
| 5 | `.review_section` | Reviews. | Carousel y ratings. |
| 6 | `.client_feedback_section` | Politica/feedback. | Form o bloque informativo. |
| 7 | `.team_section` | Profesionales certificados. | Cards de equipo. |
| 8 | `.clients_section` | Logos/clientes. | Logos de confianza. |
| 9 | `.contact_section` | Ayuda/contacto. | Cards de contacto, FAQ pequena. |
| 10 | `.faq_section` | Preguntas frecuentes. | Accordion. |
| 11 | `.site_footer.footer_layout_5` | Footer insurance. | Contacto 24/7, app, company links. |

Util para TOW: FAQ, cards de cobertura/beneficios, contacto.

### `index_car_insurance.html`

Body: `car_insurance bg-light`.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.hero_section.hero_car_insurance` | Hero de seguro de auto. | H1, formulario de quote, rating/logos, imagen auto. |
| 2 | `.car_process_section` | Como asegurarse en 3 pasos. | Tres pasos claros. |
| 3 | `.car_insurance_feature_section` | Por que es el mejor proveedor. | Feature layout con slider/carousel. |
| 4 | `.car_insurance_cta_section` | Modalidades DIY/Full Service. | Cards de CTA/servicio. |
| 5 | `.review_section` | Reviews. | Carousel, counters y social proof. |
| 6 | `.blog_section` | Articulos recientes. | Cards de blog. |
| 7 | `.site_footer.footer_layout_6` | Footer app/contacto. | CTA descarga app, contacto, footer. |

Util para TOW: proceso en 3 pasos y formulario hero si se quiere una admision rapida.

### `index_financial_consulting.html`

Body: `financial_consulting`.

| Orden | Seccion | Que explica | Que tiene |
|---:|---|---|---|
| 1 | `.offcanvas_wrapper` | Panel lateral/menu extra. | Texto, ayuda, redes. |
| 2 | `.container-fluid` | Hero de consultoria. | H1, slider/carousel, imagenes grandes. |
| 3 | `.about_section` | Experiencia financiera. | Copy, contadores, imagenes. |
| 4 | `.service_section` | Servicios de consultoria. | Cards de servicios. |
| 5 | `.team_section` | Consultores. | Cards de equipo. |
| 6 | `.portfolio_section` | Proyectos completados. | Portfolio/case cards. |
| 7 | `.pricing_section` | Pricing de consultoria. | Planes, features y CTA. |
| 8 | `.review_section` | Testimonios. | Carousel. |
| 9 | `.contact_section` | Carrera/contacto. | Formulario y bloques de contacto. |
| 10 | `.blog_section` | Updates. | Cards de blog. |
| 11 | `.site_footer.footer_layout_4` | Footer con CTA. | Form/CTA y contacto. |

Util para TOW: portfolio, consultoria, pricing y footer con CTA.

## Biblioteca De Secciones Reutilizables

| Seccion | Donde aparece | Mejor uso para TOW | Parcial SCSS |
|---|---|---|---|
| `.hero_section` | Todas las homes | Hero principal o heroes internos | `components/_hero.scss` |
| `.about_section` | `index.html`, homes varias | About Oscar, historia, propuesta | `components/_about.scss` |
| `.service_section` | `index.html`, `services.html`, homes varias | Beneficios, curso, recursos | `components/_service.scss` |
| `.pricing_section` | `index.html`, `pricing.html`, payment, consulting | Membership/Course/Competitions | `components/_pricing.scss` |
| `.review_section` | Homes varias | Testimonios/social proof | `components/_review.scss` |
| `.faq_section` | `index.html`, insurance | FAQ | revisar `components`/`elements/_accordion.scss` |
| `.contact_section` | `contact.html`, insurance, consulting | Join Now, contacto, aplicacion | `templates/_contact.scss` y `elements/_form.scss` |
| `.blog_section` | Blog y homes varias | Resources, articulos, updates | `templates/_blog.scss` |
| `.project_section` | `projects.html` | Competitions/casos/resultados | `templates/_project.scss` |
| `.team_section` | Homes varias | Mentores, Oscar, comunidad si aplica | `components/_team.scss` |
| `.funfact_section` | Online banking, insurance | Numeros, stats, social proof | `components/_funfact.scss` |
| `.page_header` | Paginas internas | Titulos/breadcrumbs internos | `template-parts/_pageheader.scss` |

## Recomendacion Para Reordenar

Para armar la landing TOW sin espaguetti:

1. Partir de `index.html`.
2. Mantener header y footer como piezas comunes.
3. Elegir solo secciones necesarias:
   - Hero.
   - Offers desde `.pricing_section`.
   - About Oscar desde `.about_section`.
   - CTA desde el componente CTA o footer CTA.
   - FAQ/testimonials solo si aportan conversion.
4. Eliminar secciones legacy que no tengan rol claro: team, reviews, FAQ o services segun el gusto final.
5. Reordenar HTML primero con clases existentes.
6. Ajustar SCSS solo en el parcial propietario.
7. Compilar con `npm run sass:build` o mantener `npm run sass:watch`.

## Candidatos De Sitemap TOW

| Objetivo TOW | HTML recomendado | Por que |
|---|---|---|
| Home | `index.html` | Ya trae hero, about, offers, reviews, team, FAQ y footer. |
| Membership | `pricing.html` | Tiene page header, features y estructura de pricing. |
| Course | `service_details.html` | Tiene detalle largo, proceso y beneficios. |
| Competitions | `projects.html` o `project_details.html` | Tiene listado/detalle de proyectos que puede mapearse a challenges/resultados. |
| About Oscar | Seccion en `index.html` o pagina a definir | No existe `about.html`; mejor usar `.about_section` antes de crear ruta nueva. |
| Join Now | `contact.html` | Ya trae formulario y datos de contacto. |
| Resources | `blog.html` / `blog_details.html` | Ya trae listado y detalle de articulos. |

## Reglas Para Otro Agente

- No crear paginas nuevas si una existente se puede adaptar.
- No crear parciales SCSS nuevos para reordenar HTML.
- No cambiar nombres de clases solo por gusto visual.
- Si una seccion se mueve entre paginas, revisar que sus assets y scripts sigan cargando.
- Si se elimina una seccion con slider, accordion, counter o form, revisar que `assets/js/main.js` no necesite ajustes.
- Registrar decisiones nuevas en `docs/decisions.md`.
