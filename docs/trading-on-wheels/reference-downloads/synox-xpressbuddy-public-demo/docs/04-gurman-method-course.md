---
page_name: TOW Membership
route: /membership.html
phase: MVP
base_html: pricing.html
primary_cta: Buy Membership
secondary_cta: Explore the Method
price: USD 100/month
status: ready_for_codex
---

# Página MVP: TOW Membership

## Objetivo de la página

Convertir visitantes en miembros. Esta página debe vender la membresía como el producto principal del MVP, mostrando claramente qué incluye, para quién es, cómo funciona y por qué es el siguiente paso natural para alguien que quiere aprender y aplicar el Método Gurman en comunidad.

Debe transmitir: `no estás comprando señales aisladas; estás entrando a una comunidad con método, contexto y seguimiento`.

## Base técnica recomendada

- Clonar `pricing.html`.
- Mantener `section.page_header`.
- Reutilizar `.policy_section` para beneficios principales.
- Reutilizar `.service_section` o los bloques de pricing existentes para el precio y features.
- Añadir FAQ específica usando `.faq_section` si ya está disponible en el template.
- Footer común `footer_layout_1`.

## SEO / metadata

- Title: `TOW Membership | Trading On Wheels`
- Meta description: `Join the Trading On Wheels Membership for private community access, trading ideas, Discord, trade monitoring and ongoing education around the Gurman Method.`
- Focus keywords: `TOW Membership`, `options trading community`, `Wheel Strategy community`, `Gurman Method membership`, `recurring income education`

## Estructura de la página

### 1. Page header

**H1:**
```text
TOW Membership
```

**Breadcrumb:**
```text
Home / Membership
```

**Subcopy:**
```text
Join the private community built around the Gurman Method.
```

### 2. Hero / pricing intro

**Clase base:** usar primer bloque de `pricing.html` o adaptar `.service_section`.

**Eyebrow:**
```text
Main offer
```

**H2:**
```text
Stop learning alone. Start following a structured process with a community.
```

**Body copy:**
```text
The TOW Membership gives you access to a private community focused on the Gurman Method, recurring income education and disciplined options trading. Members receive trade ideas, market context, ongoing analysis, Discord access and follow-up around the logic behind the operations.

The membership is designed for people who want clarity, structure and community while learning how the Wheel Strategy can be applied through the Gurman Method.
```

**Price block:**
```text
USD 100 / month
```

**CTA primary:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

**CTA secondary:** `Explore the Method` → `/gurman-method.html`

### 3. Qué incluye la membresía

**Clase base:** `.policy_section` cards.

**Section title:**
```text
What you get as a TOW member
```

**Cards:**

1. **Private community**
   ```text
   Access a focused group of investors learning and applying the same methodology.
   ```

2. **Trading ideas**
   ```text
   Receive structured trade proposals connected to the Gurman Method and the Wheel Strategy.
   ```

3. **Market context**
   ```text
   Understand why an idea may exist, what market context matters and what risks should be considered.
   ```

4. **Discord access**
   ```text
   Join the TOW community space for discussion, updates and shared learning.
   ```

5. **Trade monitoring**
   ```text
   Follow the evolution of ideas and learn how the process is reviewed over time.
   ```

6. **Continuous education**
   ```text
   Reinforce the method through articles, explanations, examples and community reviews.
   ```

### 4. Lo que NO es la membresía

**Section title:**
```text
What the membership is not
```

**Copy / bullets:**
```text
- It is not a guarantee of profits.
- It is not personalized financial advice.
- It is not a promise of stress-free results.
- It is not a day trading signal room.
- It is not a substitute for learning the method and understanding risk.
```

### 5. Cómo funciona

**Clase base:** cards de proceso.

**Section title:**
```text
How the membership works
```

**Steps:**

1. **Join the community**
   ```text
   Subscribe and receive access instructions for the private TOW environment.
   ```

2. **Follow the market context**
   ```text
   Review educational updates and trade logic based on the Gurman Method.
   ```

3. **Study the ideas**
   ```text
   Learn why a trade idea is considered, what risks exist and how it fits into the Wheel process.
   ```

4. **Review and improve**
   ```text
   Use follow-up, community discussion and education to improve your own process.
   ```

### 6. Para quién es

**Section title:**
```text
Is the membership right for you?
```

**Good fit:**
```text
- You want to learn options with structure.
- You are interested in recurring income through the Wheel Strategy.
- You want community and ongoing education.
- You prefer a rules-based process over market noise.
- You understand that investing involves risk and requires responsibility.
```

**Not a fit:**
```text
- You want guaranteed results.
- You want to blindly copy trades without learning.
- You are looking for high-frequency day trading.
- You are not willing to understand assignment and market risk.
```

### 7. Pricing card final

**Clase base:** `.pricing_section` / `.service_section` de `pricing.html`.

**Plan name:**
```text
TOW Membership
```

**Price:**
```text
$100 / month
```

**Features:**
```text
- Private community
- Trading ideas
- Discord access
- Trade monitoring
- Market context
- Educational content
- Community reviews
```

**CTA:**
```text
Buy Membership
```

**CTA URL:** `TODO_CHECKOUT_MEMBERSHIP_URL`

### 8. FAQ corta específica

1. **Do I need experience to join?**
   ```text
   No. The community is educational and can help beginners understand the process, but members should be willing to learn options and risk management.
   ```

2. **Will I receive buy and sell signals?**
   ```text
   Members receive trade ideas and explanations, but the goal is to understand the decision-making process, not blindly copy signals.
   ```

3. **Is this financial advice?**
   ```text
   No. TOW provides educational content and community discussion. It does not provide personalized financial advice.
   ```

4. **Can I cancel?**
   ```text
   Add cancellation terms according to the payment platform and final business policy.
   ```

### 9. CTA final

**Headline:**
```text
Buy back your time with a method, not more noise.
```

**Body:**
```text
Join Trading On Wheels and start learning the Gurman Method inside a focused community.
```

**CTA:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

## Integraciones / TODO para Codex

- Crear variable o placeholder para `TODO_CHECKOUT_MEMBERSHIP_URL`.
- Si Stripe todavía no está conectado, usar botón que apunte temporalmente a `contact.html` con query `?interest=membership`.
- Añadir placeholder de Discord: `TODO_DISCORD_INVITE_URL`.
- Medición: click en CTA principal debe poder etiquetarse como evento `membership_cta_click`.

## Acceptance criteria

- Precio y features visibles sin scroll excesivo.
- CTA `Buy Membership` visible en hero, pricing card y final.
- Queda claro que es educativo y no asesoría financiera.
- No se prometen resultados.
- Diseño compatible con `pricing.html` y SCSS existente.
