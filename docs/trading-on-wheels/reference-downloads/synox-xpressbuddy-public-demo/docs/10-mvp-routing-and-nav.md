---
page_name: Legal / Risk Disclaimer
route: /legal.html
phase: MVP
base_html: simple internal page + page_header
primary_cta: Back to Home
secondary_cta: Contact Us
status: ready_for_codex_needs_legal_review
---

# Página MVP: Legal / Risk Disclaimer

## Objetivo de la página

Crear una página legal mínima para el MVP que deje claro que Trading On Wheels ofrece contenido educativo, no asesoramiento financiero personalizado, y que invertir con opciones implica riesgos. Esta página debe estar enlazada desde el footer y desde cualquier checkout o formulario.

**Importante:** este texto es un borrador operativo para MVP y debe revisarlo un abogado antes de publicarse como versión definitiva.

## Base técnica recomendada

- Crear página simple usando shell común.
- Mantener `section.page_header`.
- Usar contenedor de contenido con tipografía legible.
- Footer común `footer_layout_1`.
- Enlazar desde footer como `Legal / Risk Disclaimer`.

## SEO / metadata

- Title: `Legal & Risk Disclaimer | Trading On Wheels`
- Meta description: `Educational and risk disclaimer for Trading On Wheels, the Gurman Method, membership, course and competitions.`
- Robots: `index, follow` o según criterio final.

## Estructura de la página

### 1. Page header

**H1:**
```text
Legal & Risk Disclaimer
```

**Breadcrumb:**
```text
Home / Legal
```

**Subcopy:**
```text
Important information about education, risk and responsibility.
```

### 2. Main legal content

**Suggested copy:**

```text
Last updated: TODO_DATE
```

## Educational Content Only

```text
Trading On Wheels provides educational content, community discussion, training materials and general information related to options, the Wheel Strategy and the Gurman Method. Nothing published by Trading On Wheels should be interpreted as personalized financial, investment, tax, legal or accounting advice.
```

## No Financial Advice

```text
Any examples, trade ideas, market commentary, educational sessions, videos, articles, competitions or community discussions are provided for informational and educational purposes only. Users are responsible for evaluating their own financial situation, objectives, risk tolerance and local regulations before making any investment decision.
```

## Investment Risk

```text
Investing involves risk. Options trading involves additional risks, including but not limited to market losses, assignment risk, liquidity risk, volatility risk and the possibility of losing part or all of the capital allocated to a position. The Wheel Strategy and the Gurman Method do not eliminate risk.
```

## No Guarantees

```text
Trading On Wheels does not guarantee profits, income, performance, results or financial freedom. Past results, examples or case studies do not guarantee future results. Any reference to recurring income is educational and refers to the objective of the strategy, not a guaranteed outcome.
```

## User Responsibility

```text
Each user is responsible for their own decisions. Before trading options or making any investment, users should consider consulting with a qualified financial professional who understands their personal circumstances.
```

## Brokers and Third-Party Platforms

```text
Trading On Wheels may mention brokers, platforms, tools or third-party services for educational or operational purposes. Trading On Wheels is not responsible for the policies, availability, fees, execution, errors or decisions of any third-party provider.
```

## Membership, Course and Mentoring

```text
The TOW Membership, Gurman Method Course and Private Mentoring are educational services. Private Mentoring is also educational and does not constitute personalized investment advice or portfolio management.
```

## TOW Competitions

```text
TOW Competitions are educational community events. Rankings, awards, examples or participant stories are not guarantees of future performance and should not be interpreted as financial advice.
```

## Contact

```text
For questions about this disclaimer, contact Trading On Wheels through the contact page.
```

### 3. Footer disclaimer short version

Usar este texto corto en footer global y debajo de CTAs de compra:

```text
Educational content only. Not financial advice. Investing and options trading involve risk. Past results do not guarantee future results.
```

## Requisitos de implementación

- Enlazar `/legal.html` en footer de todas las páginas.
- Mostrar versión corta en footer.
- Mostrar versión corta cerca de checkout / CTAs de pago.
- No bloquear MVP, pero marcar como `needs_legal_review`.
- Si existen Terms, Privacy o Cookies separados en el futuro, enlazar desde esta página.

## Acceptance criteria

- Página accesible desde footer.
- Disclaimer corto visible en footer global.
- Copy no contradice la propuesta comercial.
- Se evita prometer resultados.
- Estado legal queda marcado para revisión profesional.
