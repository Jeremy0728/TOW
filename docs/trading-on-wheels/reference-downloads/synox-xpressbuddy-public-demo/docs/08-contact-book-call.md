---
page_name: FAQ
route: /faq.html
phase: MVP
base_html: any page with faq_section, recommended service_details.html shell + faq_section
primary_cta: Buy Membership
secondary_cta: Contact Us
status: ready_for_codex
---

# Página MVP: FAQ

## Objetivo de la página

Responder objeciones clave antes de la compra: experiencia, riesgo, garantías, capital, tiempo, señales, comunidad, broker, resultados y alcance educativo. Esta página debe reducir fricción y proteger legalmente a la marca con respuestas claras, directas y prudentes.

## Base técnica recomendada

- Usar shell interno con `section.page_header`.
- Insertar `.faq_section` con accordion.
- Reutilizar estilos de accordion ya existentes.
- Añadir CTA final a Membership y Contact.
- Footer común `footer_layout_1`.

## SEO / metadata

- Title: `FAQ | Trading On Wheels`
- Meta description: `Answers to common questions about Trading On Wheels, the Gurman Method, the Wheel Strategy, membership, course, risk, capital and options education.`
- Focus keywords: `Trading On Wheels FAQ`, `Gurman Method FAQ`, `Wheel Strategy questions`, `options trading risk`, `TOW membership`

## Estructura de la página

### 1. Page header

**H1:**
```text
Frequently Asked Questions
```

**Breadcrumb:**
```text
Home / FAQ
```

**Subcopy:**
```text
Clear answers about TOW, the Gurman Method, membership, risk and getting started.
```

### 2. FAQ accordion

**Clase base:** `.faq_section`

Organizar en 4 grupos visuales:

- Getting Started
- The Method & Risk
- Products & Community
- Practical Details

## FAQ content

### Getting Started

#### 1. What exactly is Trading On Wheels (TOW)?

```text
Trading On Wheels is an educational platform and investment community focused on generating recurring income through financial options using the Gurman Method and the Wheel Strategy.
```

#### 2. Do I need previous experience to start?

```text
No. The course is designed for people starting from zero and also for investors with experience who want a more structured methodology.
```

#### 3. What is the final objective of TOW?

```text
The objective of TOW is to help people generate income through structured investment education so they can buy back time, gain freedom and build the life they want.
```

#### 4. Can I invest from any country?

```text
In most cases, yes, as long as your local regulations and chosen broker allow you to trade financial options.
```

### The Method & Risk

#### 5. What is the Gurman Method?

```text
The Gurman Method is a proprietary methodology developed by Oscar Gurman to select assets, manage risk and generate recurring income through financial options.
```

#### 6. What is the Wheel Strategy?

```text
The Wheel Strategy is based on selling PUT and CALL options on quality stocks or ETFs, with the objective of generating premiums in a systematic way.
```

#### 7. Do you guarantee profits?

```text
No. No investment can guarantee profits. Our objective is to provide structured methodology, risk management and quality education to help members make better decisions.
```

#### 8. What is the risk of this strategy?

```text
All investing involves risk. A key risk is possible assignment of shares and market fluctuation. For that reason, risk management is a central part of the Gurman Method.
```

#### 9. Are financial options only for experts?

```text
No. When used correctly and with proper education, options can be a structured and understandable investment tool for individual investors. However, they require risk awareness and discipline.
```

#### 10. When will I start seeing results?

```text
Every person is different. Results depend on available capital, discipline, learning process and market conditions. TOW does not guarantee results.
```

### Products & Community

#### 11. What does the membership include?

```text
The membership includes access to the community, trade ideas, market analysis, proprietary tools or resources, ongoing education and exclusive events when available.
```

#### 12. What does the Gurman Method Course include?

```text
The course includes step-by-step training on market context, asset selection, the Wheel Strategy, risk management, portfolio construction and the review of real trading situations for educational purposes.
```

#### 13. Will I have access to a community of investors?

```text
Yes. One of TOW’s objectives is to build an international community of people who want to generate income and gain more financial freedom through education and discipline.
```

#### 14. Do you offer individual mentoring?

```text
Yes. Private mentoring is available for people who want more direct educational support and a faster learning path.
```

#### 15. Can I follow the trades you make?

```text
Yes. TOW members have access to trade proposals, analysis and trade monitoring. The goal is also to understand the logic behind each decision.
```

#### 16. Will I receive buy and sell signals?

```text
Members receive trade ideas and explanations. TOW also teaches a decision-making process so each member can understand why an operation is considered.
```

#### 17. What makes TOW different from other trading services?

```text
TOW focuses on systematic income generation, risk management, operational simplicity and long-term financial freedom through one structured methodology.
```

### Practical Details

#### 18. How much money do I need to start?

```text
It depends on the selected assets, broker requirements and personal risk tolerance. Many people start smaller and scale progressively as they gain experience, but TOW is better suited for investors who have enough capital to operate options responsibly.
```

#### 19. How much time do I need each week?

```text
The methodology is designed for busy people. In many cases, between 30 minutes and 2 hours per week may be enough to review and manage a portfolio, depending on the person and the market situation.
```

#### 20. Which broker do you recommend?

```text
TOW mainly works with brokers that allow efficient options trading, such as Interactive Brokers. Each investor must verify availability, costs and regulations in their own country.
```

## CTA final

**Headline:**
```text
Still have questions?
```

**Body:**
```text
Start with the membership or contact us if you need help choosing the right next step.
```

**CTA primary:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

**CTA secondary:** `Contact Us` → `/contact.html`

## Requisitos de implementación

- Accordion debe permitir deep links opcionales por ID: `faq-what-is-tow`, `faq-risk`, etc.
- Mantener preguntas cerradas por defecto salvo la primera.
- Añadir FAQ teaser en Home que enlace a esta página completa.
- No usar respuestas que prometan resultados.
- Añadir disclaimer en footer.

## Acceptance criteria

- Las 20 preguntas están implementadas.
- El usuario puede leerlas en mobile sin problemas.
- Hay CTA final.
- Riesgo y no garantía quedan claramente comunicados.
