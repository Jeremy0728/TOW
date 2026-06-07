---
page_name: About Oscar Gurman
route: /about-oscar.html
phase: MVP
base_html: service_details.html + reusable about_section from index.html
primary_cta: Buy Membership
secondary_cta: Explore the Gurman Method
status: ready_for_codex
---

# Página MVP: About Oscar Gurman

## Objetivo de la página

Construir confianza y autoridad sin caer en el tono de “gurú financiero”. La página debe explicar quién es Oscar, por qué creó Trading On Wheels y por qué el Método Gurman existe como una alternativa estructurada frente al ruido, la especulación y la dependencia del tiempo por dinero.

La emoción principal debe ser: `esta persona tiene un proceso serio, simple y disciplinado`.

## Base técnica recomendada

- Clonar `service_details.html` como base inicial.
- Usar `section.page_header` para título y breadcrumb.
- Reutilizar `.about_section` de `index.html` para la historia y el retrato de Oscar.
- Reutilizar `.funfact_section` solo con métricas cualitativas o contadores prudentes. No inventar resultados de rentabilidad.
- Usar un bloque tipo proceso dentro de `.service_details_section` para timeline / filosofía.
- Mantener footer común `footer_layout_1`.

## SEO / metadata

- Title: `About Oscar Gurman | Trading On Wheels`
- Meta description: `Meet Oscar Gurman, founder of Trading On Wheels and creator of the Gurman Method, a structured approach to recurring income through options education.`
- Focus keywords: `Oscar Gurman`, `Trading On Wheels founder`, `Gurman Method`, `Wheel Strategy education`, `recurring income options`

## Estructura de la página

### 1. Page header

**Clase base:** `.page_header`

**H1:**
```text
About Oscar Gurman
```

**Breadcrumb:**
```text
Home / About Oscar Gurman
```

**Subcopy opcional:**
```text
The story behind Trading On Wheels and the method built to help people stop renting their time.
```

### 2. Hero / intro de confianza

**Clase base:** `.about_section`

**Eyebrow:**
```text
Founder of Trading On Wheels
```

**H2:**
```text
A method built from the search for freedom, not from market predictions.
```

**Body copy:**
```text
Oscar Gurman created Trading On Wheels after years of studying the markets and searching for a more structured way to generate recurring income. His goal was not to build another noisy trading brand. It was to design a clear process that helps investors make better decisions without depending on constant predictions.

Trading On Wheels exists for people who want more control over their time, their capital and their learning process. The Gurman Method is the result of that philosophy: one strategy, clear rules, disciplined risk management and a long-term focus on freedom.
```

**Bullets:**
```text
- Built around one core strategy: the Wheel Strategy.
- Focused on rules, process and risk management.
- Designed for people who value time, clarity and independence.
- Educational first: no promises, no hype, no luxury lifestyle marketing.
```

**CTA primary:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

**CTA secondary:** `Explore the Gurman Method` → `/gurman-method.html`

**Visual direction:**
- Foto realista de Oscar en escritorio o estudio premium, revisando mercado o enseñando.
- Evitar pose exagerada, riqueza ostentosa, autos, relojes, dinero, y símbolos de “get rich quick”.
- Fondo oscuro profesional con acentos azul/amarillo.

### 3. Historia / timeline

**Clase base:** usar estructura de proceso dentro de `.service_details_section`, sin crear parcial nuevo.

**Section title:**
```text
From the hamster wheel to Trading On Wheels.
```

**Intro:**
```text
The brand was born from a simple realization: life improves when you stop depending only on trading your time for money.
```

**Timeline items:**

1. **The search for freedom**
   ```text
   Oscar started from the same concern many professionals share: how to build more control over time, income and future decisions.
   ```

2. **Years studying markets**
   ```text
   Instead of chasing every new trend, he focused on understanding how options could be used with structure, patience and discipline.
   ```

3. **One strategy, one method**
   ```text
   The Gurman Method was built around the Wheel Strategy: a repeatable process for selecting assets, managing risk and generating recurring option premiums.
   ```

4. **A community for independent investors**
   ```text
   Trading On Wheels was created to help others learn the process, share ideas and build confidence through education and community.
   ```

### 4. Filosofía de inversión

**Clase base:** `.service_section` o cards simples dentro de `.about_section`

**Section title:**
```text
The principles behind the Gurman Method
```

**Cards:**

1. **Rules over predictions**
   ```text
   TOW does not depend on guessing the next market move. The focus is on following a defined process.
   ```

2. **Simplicity over complexity**
   ```text
   One method, one framework and a clear set of decisions. Less noise, more discipline.
   ```

3. **Risk before return**
   ```text
   Options can be powerful, but only when risk is understood and managed before entering a trade.
   ```

4. **Time is the real asset**
   ```text
   The purpose is not only financial performance. The deeper objective is to buy back time and gain more control over life.
   ```

### 5. Misión, visión y valores

**Clase base:** `.funfact_section` o `.service_section` con tres bloques.

**Mission:**
```text
Help people build recurring income using a structured methodology based on financial options.
```

**Vision:**
```text
Become a global reference community for investors seeking freedom through the Wheel Strategy.
```

**Values:**
```text
Freedom · Discipline · Transparency · Simplicity · Responsibility · Continuous Learning · Independent Thinking
```

### 6. Rol de Oscar dentro de TOW

**Section title:**
```text
What Oscar brings to the community
```

**Copy:**
```text
Oscar’s role is to provide structure, context and education. TOW members are not only looking for ideas; they are looking for a way to understand why a trade exists, how it fits into the method and how risk is managed.
```

**Bullets:**
```text
- Market context and educational explanations.
- Method-based trade logic.
- Clear risk conversations.
- Community guidance and continuous learning.
```

### 7. CTA final

**Clase base:** footer CTA o bloque reutilizable de `pricing_section`/`contact_section`.

**Headline:**
```text
Ready to stop renting your time?
```

**Body:**
```text
Join Trading On Wheels and learn the structured method behind the community.
```

**CTA primary:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

**CTA secondary:** `See the Course` → `/gurman-method-course.html`

## Requisitos de implementación

- Actualizar header para incluir link a `/about-oscar.html`.
- Usar un único retrato principal de Oscar y máximo 2 imágenes secundarias.
- No colocar claims de rentabilidad.
- No usar contadores tipo “millions made”, “win rate” o “guaranteed income”.
- Incluir disclaimer breve en footer.

## Acceptance criteria

- La página explica quién es Oscar sin sonar agresiva o exagerada.
- La historia conecta con `Stop Renting Your Time`.
- Hay CTA visible arriba y abajo.
- La página usa clases existentes del template.
- La página se ve coherente con Home.
- En mobile, timeline y cards se apilan correctamente.
