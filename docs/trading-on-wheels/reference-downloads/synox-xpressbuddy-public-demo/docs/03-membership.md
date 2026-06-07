---
page_name: Gurman Method
route: /gurman-method.html
phase: MVP
base_html: service_details.html
primary_cta: Buy Membership
secondary_cta: Take the Course
status: ready_for_codex
---

# Página MVP: Gurman Method

## Objetivo de la página

Explicar el diferencial central de Trading On Wheels: el Método Gurman. La página debe dejar claro que TOW no vende predicciones ni trading impulsivo, sino una metodología estructurada basada en la Wheel Strategy para generar ingresos recurrentes con opciones financieras de forma educativa y disciplinada.

La página debe responder: `¿qué es el método, por qué existe, cómo funciona y por qué confiar en este enfoque?`

## Base técnica recomendada

- Clonar `service_details.html`.
- Mantener `section.page_header`.
- Usar `.service_details_section` para el bloque principal del método.
- Adaptar el bloque `Service Process` para los pasos del Método Gurman.
- Usar una sección de cards con `.service_section` si se necesitan principios o beneficios.
- Footer común `footer_layout_1`.

## SEO / metadata

- Title: `The Gurman Method | Trading On Wheels`
- Meta description: `Learn the Gurman Method, Trading On Wheels' structured educational framework for recurring income through options and the Wheel Strategy.`
- Focus keywords: `Gurman Method`, `Wheel Strategy`, `options trading education`, `recurring income`, `rules-based trading`

## Estructura de la página

### 1. Page header

**H1:**
```text
The Gurman Method
```

**Breadcrumb:**
```text
Home / Gurman Method
```

**Subcopy:**
```text
A structured options methodology built around rules, discipline and recurring income.
```

### 2. Intro principal del método

**Clase base:** `.service_details_section`

**Eyebrow:**
```text
One strategy. Clear rules. Less noise.
```

**H2:**
```text
A method for generating recurring income without depending on market predictions.
```

**Body copy:**
```text
The Gurman Method is Trading On Wheels' proprietary educational framework for applying the Wheel Strategy with structure and discipline. It is designed to help investors understand market context, select quality assets, sell options with a plan, manage assignment and review trades through a repeatable process.

The goal is not to predict every market move. The goal is to follow a method that makes decision-making clearer, calmer and more consistent.
```

**Core bullets:**
```text
- Based on the Wheel Strategy.
- Focused on recurring income through option premiums.
- Built around asset selection, risk management and process.
- Designed for investors who want structure, not speculation.
```

**CTA primary:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

**CTA secondary:** `Take the Course` → `/gurman-method-course.html`

### 3. Qué es y qué no es

**Section title:**
```text
What the Gurman Method is — and what it is not
```

**Two-column content:**

**It is:**
```text
- A rules-based educational process.
- A structured way to apply the Wheel Strategy.
- A framework for selecting assets and managing risk.
- A method for building confidence through repetition and review.
```

**It is not:**
```text
- A guarantee of profit.
- Financial advice.
- Day trading or constant screen watching.
- A system based on hype, predictions or lifestyle promises.
```

### 4. Pasos del Método Gurman

**Clase base:** adaptar `Service Process` dentro de `service_details.html`.

**Section title:**
```text
How the method works
```

**Intro:**
```text
The process is designed to reduce uncertainty by giving each decision a clear role.
```

**Steps:**

1. **Understand market context**
   ```text
   Review the general market environment before selecting opportunities. Context matters because the same strategy behaves differently across market conditions.
   ```

2. **Select quality assets**
   ```text
   Focus on stocks or ETFs that meet the method’s criteria. The asset comes first because assignment must be part of the plan, not a surprise.
   ```

3. **Sell cash-secured puts**
   ```text
   Use put options to generate premium while defining the price at which you would be willing to own the asset.
   ```

4. **Manage assignment with a plan**
   ```text
   If assigned, the position is handled as part of the Wheel process, not as a failure of the trade.
   ```

5. **Sell covered calls**
   ```text
   Once shares are owned, covered calls can be used to continue generating premium while managing exits.
   ```

6. **Review, adjust and repeat**
   ```text
   The method depends on review, risk control and consistency. Every trade should improve the investor’s process.
   ```

### 5. Principios del método

**Clase base:** `.service_section` con cards.

**Cards:**

1. **Rules over predictions**
   ```text
   The method is designed to make decisions based on process, not emotion or headlines.
   ```

2. **Risk first**
   ```text
   Every trade begins with the question: what can go wrong and how will it be managed?
   ```

3. **Quality assets only**
   ```text
   The Wheel Strategy requires discipline in asset selection because assignment is always possible.
   ```

4. **Recurring income mindset**
   ```text
   The focus is on repeatable premium generation, not chasing the next big trade.
   ```

5. **Simplicity**
   ```text
   Fewer strategies, fewer distractions and a clearer learning path.
   ```

6. **Continuous learning**
   ```text
   Each trade becomes a case study for better future decisions.
   ```

### 6. Para quién es

**Section title:**
```text
Who this method is for
```

**Bullets:**
```text
- Professionals, entrepreneurs and retirees who want a structured investment process.
- Investors interested in recurring income through options education.
- People who prefer rules and discipline over prediction and speculation.
- Members who want to understand the logic behind each trade idea.
- Investors with enough capital to operate options responsibly according to broker requirements and personal risk tolerance.
```

### 7. Para quién NO es

**Section title:**
```text
Who this method is not for
```

**Bullets:**
```text
- People looking for guaranteed returns.
- People who want to copy trades without learning the process.
- Anyone expecting a no-risk strategy.
- Investors who are not willing to understand assignment risk.
- People looking for aggressive day trading or lifestyle promises.
```

### 8. CTA hacia productos

**Section title:**
```text
Choose how you want to start
```

**Cards:**

1. **Join the Membership**
   ```text
   Access the private community, trade ideas, market analysis, Discord and ongoing education.
   ```
   CTA: `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

2. **Take the Gurman Method Course**
   ```text
   Learn the full methodology step by step and build the foundation to implement it yourself.
   ```
   CTA: `See Course` → `/gurman-method-course.html`

3. **Book Private Mentoring**
   ```text
   Get one-on-one support if you need personalized guidance on your learning process.
   ```
   CTA: `Book a Call` → `/private-mentoring.html`

### 9. Disclaimer visible

```text
Educational content only. The Gurman Method does not constitute financial advice. Options involve risk, including possible assignment and market losses. Past results do not guarantee future results.
```

## Requisitos de implementación

- No usar frases como `safe income`, `guaranteed income`, `risk-free`, `win rate`.
- No representar el método como señal automática.
- El bloque de pasos debe ser muy claro visualmente.
- Usar iconografía sencilla: rules, wheel, risk, community, time.
- CTA de membresía debe aparecer al inicio, mitad y final.

## Acceptance criteria

- El usuario entiende el método en menos de 60 segundos.
- Queda claro que no se predice el mercado.
- Queda claro que hay riesgo y que es educativo.
- La página conecta naturalmente con Course y Membership.
- Codex reutiliza `service_details.html` sin crear arquitectura nueva.
