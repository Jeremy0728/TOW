---
page_name: Private Mentoring
route: /private-mentoring.html
phase: MVP/F2
base_html: service_details.html + contact.html
primary_cta: Book a Call
secondary_cta: Join Membership
price: USD 200/hour
status: optional_ready_for_codex
---

# Página MVP/F2: Private Mentoring

## Objetivo de la página

Dejar preparada una página de mentoría privada 1:1 para usuarios que quieren acompañamiento personalizado. Aunque el plan de fase sitúa mentoría como MVP/F2, esta página conviene dejarla lista porque aparece como servicio directo y puede enlazarse desde Course, Contact y Gurman Method.

Debe comunicar: `acompañamiento individual para acelerar claridad, no asesoramiento financiero personalizado`.

## Base técnica recomendada

- Clonar `service_details.html` para explicación del servicio.
- Reutilizar `contact.html` o `.contact_section` para formulario / Calendly.
- Mantener `section.page_header`.
- Footer común `footer_layout_1`.

## SEO / metadata

- Title: `Private Mentoring | Trading On Wheels`
- Meta description: `Book private mentoring with Trading On Wheels for one-on-one educational support around the Gurman Method and options trading process.`
- Focus keywords: `private mentoring`, `Trading On Wheels mentoring`, `Gurman Method mentoring`, `options trading mentor`

## Estructura de la página

### 1. Page header

**H1:**
```text
Private Mentoring
```

**Breadcrumb:**
```text
Home / Private Mentoring
```

**Subcopy:**
```text
One-on-one educational support for your learning process.
```

### 2. Intro principal

**Eyebrow:**
```text
Personalized educational support
```

**H2:**
```text
Get clarity on the method with one-on-one guidance.
```

**Body copy:**
```text
Private Mentoring is designed for people who want direct educational support while learning the Gurman Method. Sessions can help clarify the logic of the process, review concepts, organize your learning path and better understand the risks and decisions involved in options education.

Mentoring is not personalized financial advice. It is educational support to help you think more clearly and independently.
```

**Price:**
```text
USD 200 / hour
```

**CTA primary:** `Book a Call` → `TODO_CALENDLY_URL`

**CTA secondary:** `Join Membership` → `/membership.html`

### 3. Para quién es

**Section title:**
```text
Who mentoring is for
```

**Bullets:**
```text
- Students who completed or are considering the Gurman Method Course.
- Members who need help understanding the process more deeply.
- Investors who want to organize their learning path.
- People who value direct explanations and structured review.
- Professionals who want to save time by asking focused questions.
```

### 4. Qué puede cubrir una sesión

**Cards:**

1. **Method clarification**
   ```text
   Understand specific parts of the Gurman Method and how they connect.
   ```

2. **Options foundations**
   ```text
   Review concepts such as puts, calls, assignment, premium and covered calls.
   ```

3. **Risk thinking**
   ```text
   Learn how to approach risk, capital allocation and assignment scenarios from an educational perspective.
   ```

4. **Learning roadmap**
   ```text
   Build a clearer path for how to continue learning and practicing responsibly.
   ```

### 5. Cómo funciona

**Steps:**

1. **Book a session**
   ```text
   Choose a time through Calendly.
   ```

2. **Share your questions**
   ```text
   Submit the main topics you want to review before the session.
   ```

3. **Meet online**
   ```text
   Join a focused one-on-one educational session.
   ```

4. **Leave with next steps**
   ```text
   Finish with clearer concepts and an organized learning direction.
   ```

### 6. Pricing block

**Plan name:**
```text
Private Mentoring
```

**Price:**
```text
$200 / hour
```

**Includes:**
```text
- One-on-one online session
- Educational support
- Method clarification
- Learning roadmap
- Risk-focused discussion
```

**CTA:** `Book a Call` → `TODO_CALENDLY_URL`

### 7. FAQ corta

1. **Is mentoring financial advice?**
   ```text
   No. Mentoring is educational and does not provide personalized financial advice.
   ```

2. **Do I need to be a member?**
   ```text
   Define final commercial policy. Recommended: allow both members and non-members, but offer priority or better flow to members.
   ```

3. **How long is a session?**
   ```text
   Default session duration should be defined in Calendly. Price reference is USD 200 per hour.
   ```

4. **Can mentoring replace the course?**
   ```text
   No. Mentoring is best used to clarify and deepen learning, while the course provides the complete structured foundation.
   ```

### 8. CTA final

**Headline:**
```text
Need direct guidance?
```

**Body:**
```text
Book a private mentoring session and bring structure to your learning process.
```

**CTA:** `Book a Call` → `TODO_CALENDLY_URL`

## Requisitos de implementación

- Integrar Calendly cuando exista URL final.
- Si Calendly no está listo, botón debe ir a `/contact.html?interest=mentoring`.
- Añadir evento `mentoring_cta_click`.
- No describir la sesión como asesoría financiera.

## Acceptance criteria

- Precio visible.
- CTA de Calendly visible.
- Disclaimer educativo claro.
- Página no bloquea MVP si se decide dejarla oculta en navegación.
