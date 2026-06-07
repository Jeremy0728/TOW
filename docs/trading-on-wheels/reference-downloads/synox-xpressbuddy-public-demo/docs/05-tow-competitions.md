---
page_name: Gurman Method Course
route: /gurman-method-course.html
phase: MVP
base_html: service_details.html
primary_cta: Buy Course
secondary_cta: Join Membership
price: USD 2000
status: ready_for_codex
---

# Página MVP: Gurman Method Course

## Objetivo de la página

Vender el curso online del Método Gurman como formación completa para quien quiere aprender la metodología desde cero o consolidar una base estructurada antes de aplicar la estrategia por su cuenta.

La página debe diferenciar el curso de la membresía:

- **Course:** formación completa paso a paso para entender e implementar el método.
- **Membership:** comunidad, ideas, seguimiento y educación continua.

## Base técnica recomendada

- Clonar `service_details.html`.
- Mantener `.page_header`.
- Usar `.service_details_section` para explicación larga.
- Adaptar `Service Process` como temario / módulos del curso.
- Añadir bloque de pricing del curso desde `.pricing_section` si está disponible o reutilizar card simple.
- Footer común `footer_layout_1`.

## SEO / metadata

- Title: `Gurman Method Course | Trading On Wheels`
- Meta description: `Learn the Gurman Method step by step with the Trading On Wheels online course. Understand market context, asset selection, the Wheel Strategy and risk management.`
- Focus keywords: `Gurman Method Course`, `Wheel Strategy course`, `options trading course`, `recurring income course`, `Trading On Wheels course`

## Estructura de la página

### 1. Page header

**H1:**
```text
Gurman Method Course
```

**Breadcrumb:**
```text
Home / Course
```

**Subcopy:**
```text
A complete online training program to learn the Gurman Method step by step.
```

### 2. Hero / intro del curso

**Clase base:** `.service_details_section`

**Eyebrow:**
```text
Complete online training
```

**H2:**
```text
Learn the structured method behind Trading On Wheels.
```

**Body copy:**
```text
The Gurman Method Course is designed for investors who want to understand how to apply the Wheel Strategy through a clear, rules-based framework. The course teaches the foundations of the method: market context, asset selection, option selling, assignment management, covered calls, portfolio construction and risk review.

It is built for people who want more than isolated trade ideas. The goal is to help you understand the process so you can make better decisions with more confidence and discipline.
```

**Price:**
```text
USD 2,000
```

**Format:**
```text
Online
```

**CTA primary:** `Buy Course` → `TODO_CHECKOUT_COURSE_URL`

**CTA secondary:** `Join Membership` → `/membership.html`

### 3. Qué vas a aprender

**Section title:**
```text
What you will learn
```

**Learning outcomes:**
```text
- Understand the logic behind the Wheel Strategy.
- Learn how the Gurman Method filters opportunities.
- Select assets with assignment risk in mind.
- Sell cash-secured puts with a defined plan.
- Manage assigned shares through covered calls.
- Build a rules-based options income process.
- Review trades and improve decision-making.
- Understand risk before entering any position.
```

### 4. Temario / módulos

**Clase base:** adaptar `Service Process`.

**Section title:**
```text
Course curriculum
```

**Modules:**

1. **Foundations of options and recurring income**
   ```text
   Understand the role of options, premiums, assignment and why the Wheel Strategy can be used as a recurring income framework.
   ```

2. **The Wheel Strategy explained**
   ```text
   Learn the sequence of selling puts, possible assignment, owning shares and selling covered calls.
   ```

3. **Market context**
   ```text
   Learn how to evaluate the broader market environment before considering new trades.
   ```

4. **Asset selection**
   ```text
   Study the criteria used to select stocks or ETFs that fit the method.
   ```

5. **Cash-secured put process**
   ```text
   Learn how trade ideas are structured, what matters before selling a put and how risk is reviewed.
   ```

6. **Assignment and covered calls**
   ```text
   Learn how assignment can be managed as part of the process and how covered calls fit into the Wheel.
   ```

7. **Portfolio and capital management**
   ```text
   Understand position sizing, capital allocation and the importance of avoiding concentration.
   ```

8. **Review, discipline and continuous improvement**
   ```text
   Build a repeatable review habit so each trade becomes a learning opportunity.
   ```

### 5. Para quién es el curso

**Section title:**
```text
Who the course is for
```

**Bullets:**
```text
- Beginners who want to learn options through a structured framework.
- Investors with experience who want to simplify their process.
- Professionals, business owners and retirees who want a more disciplined way to approach recurring income.
- People who want to understand the method before joining trade discussions.
- Investors who value risk management and independent thinking.
```

### 6. Qué incluye

**Cards:**

1. **Step-by-step methodology**
   ```text
   Learn the process in a clear sequence, from foundations to implementation.
   ```

2. **Practical examples**
   ```text
   Understand how the method can be applied to real market situations for educational purposes.
   ```

3. **Risk framework**
   ```text
   Study the risks of options, assignment, market movement and position management.
   ```

4. **Implementation roadmap**
   ```text
   Finish the course with a clearer path for how to continue learning and practicing responsibly.
   ```

### 7. Pricing block

**Plan name:**
```text
Gurman Method Course
```

**Price:**
```text
$2,000
```

**Features:**
```text
- Complete online training
- Step-by-step curriculum
- Gurman Method framework
- Wheel Strategy education
- Risk management foundations
- Implementation roadmap
```

**CTA:** `Buy Course` → `TODO_CHECKOUT_COURSE_URL`

### 8. Course vs Membership

**Section title:**
```text
Course or membership?
```

| Option | Best for | Main value |
|---|---|---|
| Gurman Method Course | Learning the full method from the ground up | Complete structured training |
| TOW Membership | Staying connected to community, trade ideas and ongoing education | Community, ideas and follow-up |

**Copy:**
```text
Many people start with the course to build the foundation, then use the membership for ongoing learning and community support.
```

### 9. FAQ específica

1. **Do I need experience?**
   ```text
   No. The course is designed for beginners and experienced investors who want a structured method.
   ```

2. **Does the course guarantee results?**
   ```text
   No. No investment course can guarantee results. The course provides education, structure and risk awareness.
   ```

3. **Is the course online?**
   ```text
   Yes. The course is delivered online.
   ```

4. **Is the membership included?**
   ```text
   Define final commercial policy. If not included, link to the membership page as the next step.
   ```

### 10. CTA final

**Headline:**
```text
Learn the method before you trade the noise.
```

**Body:**
```text
Build your foundation with the Gurman Method Course and understand the process behind Trading On Wheels.
```

**CTA primary:** `Buy Course` → `TODO_CHECKOUT_COURSE_URL`

**CTA secondary:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

## Requisitos de implementación

- No hablar de “profits guaranteed”.
- No convertir el curso en una página de lujo/lifestyle.
- Visuales: pantallas, notas, gráficos, escritorio profesional, Oscar enseñando.
- Añadir disclaimer visible al cierre.
- Medición: evento `course_cta_click`.

## Acceptance criteria

- Precio y formato online son claros.
- El temario se entiende rápido.
- Se diferencia de la membresía.
- Hay CTAs visibles.
- No se promete rentabilidad.
