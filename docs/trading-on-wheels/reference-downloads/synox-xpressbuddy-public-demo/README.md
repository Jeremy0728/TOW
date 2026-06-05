# Synox / XpressBuddy public demo download

Downloaded: 2026-06-04

Source: <https://html.xpressbuddy.com/synox/>

Local folder:

`docs/trading-on-wheels/reference-downloads/synox-xpressbuddy-public-demo`

## Result

- 17 internal HTML pages from the Synox demo.
- 391 referenced internal assets checked.
- 0 referenced internal assets missing after the final pass.
- 7 CSS files.
- 13 JS files.
- 45 SCSS files recovered from the public `assets/css/style.css.map` sourcemap.
- 181 SVG files.
- 177 WebP files.
- 15 PNG files.
- 7 TTF font files.
- 1 CSS sourcemap: `assets/css/style.css.map`.
- 2 external HTML embeds were captured incidentally from the first crawl attempt: Google Maps and YouTube.

## Main files

- `index.html`
- `index_online_banking.html`
- `index_payment_solutions.html`
- `index_insurance.html`
- `index_car_insurance.html`
- `index_financial_consulting.html`
- `services.html`
- `service_details.html`
- `projects.html`
- `project_details.html`
- `pricing.html`
- `blog.html`
- `blog_details.html`
- `career.html`
- `career_details.html`
- `contact.html`
- `error.html`

## Asset structure

- `assets/css/`: compiled CSS and `style.css.map`.
- `assets/scss/`: SCSS sources recovered through the public sourcemap.
- `assets/js/`: local JavaScript dependencies and `main.js`.
- `assets/images/`: WebP, PNG and SVG visual assets.
- `assets/webfonts/`: local Font Awesome font files.
- `external-assets/`: incidental external embeds/CSS captured during the first crawl.

## SCSS structure observed

The SCSS is organized into:

- Root partials: `_fonts.scss`, `_reset.scss`, `_variable.scss`, `style.scss`.
- `components/`: about, CTA, client logo, funfact, hero, pricing, process, review, service, team, etc.
- `elements/`: accordion, animation, buttons, forms, icons, image boxes, lists, social, typography, video, etc.
- `template-parts/`: header, footer, page header, sidebar.
- `templates/`: blog, career, contact, details, home, project.

This is useful for Trading On Wheels because it is close to the maintainable static-template architecture we prefer: base variables, reusable elements, components, template parts and page-level templates.

## Inventory files

- `download-summary.json`: generated download stats.
- `local-files.csv`: local file inventory.
- `downloaded-files.csv`: same final local file inventory, kept for consistency with prior reference downloads.
- `referenced-assets.txt`: unique `assets/...` references found in HTML/CSS/JS.
- `missing-referenced-assets.txt`: final missing reference list; should be empty.
- `failed-downloads.csv`: final failure list; no Synox download failures are currently recorded.

## Notes

- `robots.txt` and `/synox/sitemap.xml` were not available as useful crawl sources.
- The public demo exposes SCSS through `assets/css/style.css.map`.
- Treat this folder as an internal audit/reference download.
- For reuse of code, assets or the full template in production, buy or confirm the appropriate Synox/XpressBuddy license.
