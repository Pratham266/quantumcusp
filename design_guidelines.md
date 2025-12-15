# QuantumCusp Design Guidelines

## Design Approach
**Reference-Based:** Drawing from Stripe's trust-building clarity, Linear's modern confidence, and Vercel's tech-forward aesthetic. This creates a professional SaaS/enterprise feel that positions QuantumCusp as a strategic technology partner.

## Typography System
**Font Stack:** Inter (primary) - professional, highly legible, modern
- Hero Headline: 3.5rem (56px), font-weight 700, tracking tight
- Section Headlines: 2.5rem (40px), font-weight 700
- Subsection Headers: 1.5rem (24px), font-weight 600
- Body Text: 1.125rem (18px), font-weight 400, line-height 1.7
- Small Text/Captions: 0.875rem (14px), font-weight 500

## Layout & Spacing System
**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section vertical padding: py-20 (desktop), py-12 (mobile)
- Container max-width: max-w-7xl with px-6
- Component spacing: gap-8 for cards, gap-12 between major sections
- Content max-width for text: max-w-3xl for readability

## Component Library

### Navigation
Fixed header with subtle backdrop blur, logo left, nav links center-right, CTA button far right. Height: h-20. Clean horizontal spacing between nav items (gap-8).

### Hero Section (Full-width, 85vh)
Large hero image showing modern technology/workspace as background with subtle overlay. Content positioned left-aligned within container. Headline + subheadline stack with generous spacing (gap-6). Two CTA buttons side-by-side (primary + secondary outline style). Buttons have blurred backdrop (backdrop-blur-md with semi-transparent background). Hero image conveys professionalism and modern technology environment.

### Service Cards (4-column grid on desktop, 2 on tablet, 1 on mobile)
Card structure: Icon at top, title (font-weight 600), description text. Clean borders, subtle hover lift effect. Grid layout with gap-6. Each card includes specific service focus with 2-3 line description.

### Value Proposition Section (2-column split)
Left: Large headline + descriptive content. Right: 3-4 key differentiators as stacked items with icon + text. Desktop uses grid-cols-2, mobile stacks.

### Solutions Showcase (3-column card grid)
Cards feature: Target audience label (Startups/Growth/Enterprise), headline, bullet points of outcomes, subtle CTA link. Grid with gap-8.

### About Section (Centered, max-w-4xl)
Single column, centered text with generous line-height. Company mission statement with confident, clear language.

### Contact CTA (Full-width section with split layout)
Left side: Compelling headline + supporting text. Right side: Clean contact form (Name, Email, Message fields) with single prominent submit button. Desktop: grid-cols-2, mobile: stacked.

### Footer (3-column layout on desktop)
Column 1: Logo + tagline. Column 2: Quick links. Column 3: Contact info + social placeholders. Bottom bar with copyright. Subtle top border to separate from content.

## Images

**Hero Image:** Modern technology workspace or abstract digital visualization. High-quality, professional photography showing innovation/collaboration. Full-width background with subtle gradient overlay for text readability. Position: Background of hero section, covering full viewport width.

**Optional Section Imagery:** Consider adding 1-2 supporting images in Solutions or About sections - modern office environment, team collaboration, or technology visualization. Use sparingly to maintain professional focus.

## Animation Strategy
Minimal, purposeful animations only:
- Subtle fade-in on scroll for section entries
- Smooth hover transitions on cards (transform scale 1.02)
- Navigation backdrop blur on scroll
- NO heavy scroll-triggered effects or parallax

## Accessibility
- Maintain WCAG AA contrast ratios
- Focus states on all interactive elements
- Form inputs with clear labels and validation states
- Semantic HTML structure throughout

**Overall Aesthetic:** Clean, spacious, confidence-inspiring. Premium SaaS feel with generous whitespace. Professional without being cold. Modern without being trendy. Enterprise-ready visual language.