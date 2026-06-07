---
page_name: TOW Competitions
route: /competitions.html
phase: MVP
base_html: projects.html + optional project_details.html
primary_cta: Join the Next Competition
secondary_cta: Buy Membership
status: ready_for_codex
---

# Página MVP: TOW Competitions

## Objetivo de la página

Mostrar TOW Competitions como herramienta de comunidad, aprendizaje y captación. La página debe transformar los campeonatos en prueba social y energía de marca sin prometer resultados financieros.

Debe comunicar: `aprende, compite, revisa y mejora dentro de una comunidad seria`.

## Base técnica recomendada

- Clonar `projects.html` para la página listado.
- Usar `project_details.html` solo si se decide crear detalle de campeonato o caso NUSIF.
- Mantener `section.page_header`.
- Reutilizar `.project_section` como grilla de competencias/casos.
- Reutilizar `.funfact_section` para datos de participación solo si son reales o placeholders claramente marcados.
- Footer común `footer_layout_1`.

## SEO / metadata

- Title: `TOW Competitions | Trading On Wheels`
- Meta description: `Join TOW Competitions, community trading challenges designed for learning, review and disciplined improvement around the Gurman Method.`
- Focus keywords: `TOW Competitions`, `Trading On Wheels competition`, `options trading challenge`, `Wheel Strategy community`, `Gurman Method competition`

## Estructura de la página

### 1. Page header

**H1:**
```text
TOW Competitions
```

**Breadcrumb:**
```text
Home / Competitions
```

**Subcopy:**
```text
Community challenges designed to learn, review and improve through discipline.
```

### 2. Hero / intro

**Clase base:** `project_section` intro o bloque superior simple.

**Eyebrow:**
```text
Learn by competing
```

**H2:**
```text
A competition is not about luck. It is about process.
```

**Body copy:**
```text
TOW Competitions are community-driven trading challenges created to help members apply discipline, review decisions and learn from real market conditions. The objective is not to sell hype or guarantee performance. The objective is to create a structured environment where investors can compare processes, learn from others and strengthen their understanding of the Gurman Method.
```

**CTA primary:** `Join the Next Competition` → `TODO_COMPETITION_FORM_URL` or `/contact.html?interest=competition`

**CTA secondary:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

### 3. Cómo funcionan las competiciones

**Clase base:** cards de proceso o `.service_section`.

**Section title:**
```text
How TOW Competitions work
```

**Steps:**

1. **Register**
   ```text
   Participants join the competition and receive the rules, timeline and educational framework.
   ```

2. **Apply the process**
   ```text
   Competitors use a disciplined approach to decision-making, risk and review.
   ```

3. **Track progress**
   ```text
   Results and progress are tracked through a leaderboard or internal review system.
   ```

4. **Learn from the review**
   ```text
   The most valuable part is the post-competition analysis: what worked, what did not and what the community can learn.
   ```

### 4. Grilla de competiciones / cards

**Clase base:** `.project_section`.

**Card 1 — First TOW Competition / NUSIF**
```text
A community event with talks, participation and award ceremony materials. Use this card as the first proof-of-community block.
```
- Tag: `Community Event`
- CTA: `View Details` → `/competition-nusif.html` or modal/anchor if detail page not implemented.
- Asset: photos/videos from NUSIF event.

**Card 2 — Upcoming TOW Challenge**
```text
A new challenge for members who want to test their process in a structured environment.
```
- Tag: `Coming Soon`
- CTA: `Join Waitlist` → `/contact.html?interest=competition`

**Card 3 — Community Reviews**
```text
Educational review sessions where the community analyzes process, discipline and decisions.
```
- Tag: `Education`
- CTA: `Join Membership` → `/membership.html`

### 5. Caso destacado: NUSIF

**Clase base:** si se crea detalle, adaptar `project_details.html`. Si no, usar bloque destacado dentro de `competitions.html`.

**Section title:**
```text
First TOW Competition: NUSIF
```

**Body copy:**
```text
The first TOW Competition helped bring the community together around a shared learning experience. The event included talks, participation, review and an award ceremony. It is a key visual asset for showing that Trading On Wheels is not only a course or a membership, but a community with real engagement.
```

**Content blocks:**
```text
- Talks and educational moments.
- Award ceremony.
- Participant stories.
- Community atmosphere.
- Lessons learned.
```

**Important:**
```text
Only use real numbers, names, rankings or results if the client provides confirmed data. Otherwise keep the copy qualitative.
```

### 6. Participant profile block

**Section title:**
```text
A community of independent people with the same objective
```

**Copy:**
```text
TOW attracts professionals, business owners, engineers, doctors, lawyers, executives, expats and independent investors who want to build more control over their financial decisions.
```

**Visual cards:**
```text
- Business owners
- CEOs and executives
- Engineers
- Lawyers
- Doctors
- Expats
- Retirees
- Independent investors
```

### 7. Leaderboard / funfact placeholder

**Clase base:** `.funfact_section`.

**Headline:**
```text
Compete with discipline. Review with honesty. Improve with community.
```

**Counters / placeholders:**
```text
- Participants: TODO_REAL_NUMBER
- Countries represented: TODO_REAL_NUMBER
- Community reviews: TODO_REAL_NUMBER
- Awards / recognitions: TODO_REAL_NUMBER
```

**Developer note:**
```text
Do not show fake counters. If numbers are not available, replace with qualitative cards instead.
```

### 8. CTA final

**Headline:**
```text
Join the next TOW Competition
```

**Body:**
```text
Be part of a structured community challenge and use competition as a way to learn, review and improve.
```

**CTA primary:** `Join the Next Competition` → `TODO_COMPETITION_FORM_URL`

**CTA secondary:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

### 9. Disclaimer

```text
TOW Competitions are educational community events. They do not constitute financial advice and do not guarantee investment results. Investing and options trading involve risk.
```

## Requisitos de implementación

- Usar assets reales de NUSIF cuando estén disponibles.
- No inventar rankings, nombres o resultados.
- Si no hay detalle de NUSIF aún, crear card desactivada o link a `#nusif`.
- Medición: evento `competition_cta_click`.
- Si se crea `/competition-nusif.html`, basarlo en `project_details.html`.

## Acceptance criteria

- La página transmite comunidad y energía, no promesa de dinero.
- Hay al menos 3 cards dentro de `project_section`.
- CTA de waitlist o membresía visible.
- NUSIF queda como prueba visual de comunidad.
- No hay datos falsos.
