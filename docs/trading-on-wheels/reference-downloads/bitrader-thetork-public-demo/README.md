# Bitrader / Thetork - descarga publica de referencia

Origen:
- Demo solicitada: https://thetork.com/demos/html/bitrader/index.html?theme=dark
- Carpeta local: `docs/trading-on-wheels/reference-downloads/bitrader-thetork-public-demo`

Contenido descargado:
- 33 paginas HTML locales.
- 195 assets publicos descargados por crawler inicial.
- 44 archivos SCSS descargados desde el sourcemap publico.
- 1 sourcemap: `assets/css/style.css.map`.
- Inventario local completo: `local-files.csv`.
- Inventario del crawler inicial: `downloaded-files.csv`.
- Fallos del crawler inicial: `failed-downloads.csv`.

Paginas incluidas:
- `index.html`
- `index--theme_dark.html`
- `index--theme_light.html`
- `index-2.html`
- `index-2--theme_dark.html`
- `index-2--theme_light.html`
- `index-3.html`
- `index-3--theme_dark.html`
- `index-3--theme_light.html`
- `index-4.html`
- `index-4--theme_dark.html`
- `index-4--theme_light.html`
- `index-5.html`
- `index-5--theme_dark.html`
- `index-5--theme_light.html`
- `about.html`
- `services.html`
- `service-details.html`
- `price.html`
- `team.html`
- `team-2.html`
- `team-details.html`
- `blogs.html`
- `blog-sidebar.html`
- `blog-details.html`
- `signup.html`
- `signup-2.html`
- `signin.html`
- `signin-2.html`
- `forgot-pass.html`
- `forgot-pass-2.html`
- `contact.html`
- `404.html`

SCSS incluido:
- Entrada principal: `assets/sass/style.scss`
- Parciales: `assets/sass/abstracts`, `assets/sass/base`, `assets/sass/vendors`, `assets/sass/layout`, `assets/sass/components`, `assets/sass/themes`

Notas:
- `assets/css/style.css` declara `sourceMappingURL=style.css.map`.
- El sourcemap publico lista 44 fuentes SCSS y todas quedaron descargadas.
- `service.html` devuelve 404 en la demo; la pagina real disponible es `services.html`.
- `assets/images/logo/logo-2.png` devuelve 404 en la demo.
- Las URLs externas como YouTube quedan como enlaces externos, no archivos propios del template.
- Esta descarga es solo para auditoria/referencia interna. Para reutilizar codigo, assets o plantilla en produccion hace falta comprar/licenciar el template.
