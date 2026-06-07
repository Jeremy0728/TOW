---
page_name: Contact / Book a Call
route: /contact.html
phase: MVP
base_html: contact.html
primary_cta: Send Message
secondary_cta: Book a Call
status: ready_for_codex
---

# Página MVP: Contact / Book a Call

## Objetivo de la página

Dar una vía clara de contacto para membresía, curso, mentoring, competiciones y dudas generales. Debe funcionar como página de conversión secundaria para usuarios que todavía no están listos para comprar.

Debe comunicar: `si tienes dudas, elige tu camino y te respondemos con claridad`.

## Base técnica recomendada

- Clonar `contact.html`.
- Mantener `section.page_header`.
- Reutilizar `.contact_section` para formulario.
- Añadir bloque de cards para elegir intención: Membership, Course, Mentoring, Competitions.
- Integrar Calendly como embed o botón externo cuando exista URL.
- Footer común `footer_layout_1`.

## SEO / metadata

- Title: `Contact Trading On Wheels | Book a Call`
- Meta description: `Contact Trading On Wheels, ask about the membership, the Gurman Method Course, private mentoring or TOW Competitions, and book a call.`
- Focus keywords: `contact Trading On Wheels`, `book a call TOW`, `Gurman Method mentoring`, `TOW membership contact`

## Estructura de la página

### 1. Page header

**H1:**
```text
Contact Trading On Wheels
```

**Breadcrumb:**
```text
Home / Contact
```

**Subcopy:**
```text
Questions about the membership, course, mentoring or competitions? Choose the best next step.
```

### 2. Selector de intención

**Clase base:** `.service_section` o cards antes del formulario.

**Section title:**
```text
What can we help you with?
```

**Cards:**

1. **Membership**
   ```text
   I want to join the private TOW community.
   ```
   CTA: `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

2. **Gurman Method Course**
   ```text
   I want to learn the full method step by step.
   ```
   CTA: `See Course` → `/gurman-method-course.html`

3. **Private Mentoring**
   ```text
   I want one-on-one educational support.
   ```
   CTA: `Book a Call` → `TODO_CALENDLY_URL`

4. **Competitions**
   ```text
   I want to join or learn about the next TOW Competition.
   ```
   CTA: `Join Waitlist` → `TODO_COMPETITION_FORM_URL`

### 3. Contact form

**Clase base:** `.contact_section`

**Section title:**
```text
Send us a message
```

**Body copy:**
```text
Tell us what you are interested in and we will point you to the right next step.
```

**Fields:**

| Field | Type | Required | Notes |
|---|---|---:|---|
| First name | text | yes | `first_name` |
| Last name | text | no | `last_name` |
| Email | email | yes | `email` |
| Country | text/select | no | `country` |
| Interest | select | yes | Membership, Course, Mentoring, Competitions, General |
| Experience level | select | no | Beginner, Intermediate, Advanced |
| Message | textarea | yes | `message` |
| Consent checkbox | checkbox | yes | Privacy/terms consent |

**Submit button:**
```text
Send Message
```

**Success message:**
```text
Thanks. Your message has been received. We will get back to you soon.
```

**Error message:**
```text
Something went wrong. Please try again or contact us through WhatsApp.
```

### 4. Calendly / Book a Call

**Section title:**
```text
Book a call
```

**Body copy:**
```text
If you are interested in private mentoring or need help choosing the right path, book a call using the calendar below.
```

**Implementation:**
```text
Use Calendly embed if TODO_CALENDLY_URL exists. Otherwise show a button linking to TODO_CALENDLY_URL.
```

**CTA:** `Book a Call` → `TODO_CALENDLY_URL`

### 5. WhatsApp / direct contact block

**Section title:**
```text
Prefer a quick message?
```

**Body copy:**
```text
Send us a quick message and tell us whether you are interested in the membership, course, mentoring or competitions.
```

**CTA:** `Message on WhatsApp` → `TODO_WHATSAPP_URL`

### 6. Trust / disclaimer note

```text
Trading On Wheels provides educational content and community support. We do not provide personalized financial advice through this form.
```

### 7. CTA final

**Headline:**
```text
Ready to join the community?
```

**Body:**
```text
If you already know TOW is for you, start with the membership.
```

**CTA:** `Buy Membership` → `TODO_CHECKOUT_MEMBERSHIP_URL`

## Integraciones / TODO para Codex

- Form action: `TODO_CRM_ENDPOINT` or static form provider.
- Add hidden field for route source: `source_page=contact`.
- If query param exists, preselect interest:
  - `?interest=membership`
  - `?interest=course`
  - `?interest=mentoring`
  - `?interest=competition`
- Calendly URL: `TODO_CALENDLY_URL`.
- WhatsApp URL: `TODO_WHATSAPP_URL`.
- Add tracking events:
  - `contact_form_submit`
  - `calendly_click`
  - `whatsapp_click`
  - `membership_cta_click`

## Acceptance criteria

- Contact form is functional or clearly wired to placeholder endpoint.
- User can choose interest type.
- Calendly/WhatsApp placeholders exist.
- Page does not imply financial advice.
- CTA to Membership remains visible.
