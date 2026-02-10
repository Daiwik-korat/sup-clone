# SDE Intern Final Practical Test

## Superpower Clone - Full-Stack Next.js Application

---

## Overview

| Item | Details |
|------|---------|
| **Duration** | 3-4 Days (Maximum 32 working hours) |
| **Difficulty** | Intermediate |
| **Final Deliverable** | AWS Amplify Deployed Application |
| **Tech Stack** | Next.js 14+ (App Router), TypeScript, Tailwind CSS, Redux Toolkit/Zustand, Framer Motion/GSAP, GraphQL |

---

## Objective

Build a pixel-accurate clone of the Superpower website (2 pages) with dynamic data integration, professional animations, and deploy it to AWS Amplify. This test evaluates your complete understanding of modern frontend development, from design implementation to production deployment.

---

## Reference Materials

### Live Reference Sites
- **Homepage**: https://superpower.com/
- **How It Works**: https://superpower.com/how-it-works

### Provided Screenshots
- `superpower-home.png` - Homepage reference
- `superpower-how-it-works.png` - How It Works page reference

### API Endpoint
- **GraphQL Endpoint**: `https://api-staging.care360-next.carevalidate.com/graphql/`
- **Link Name**: `senavida`

---

## Pages to Build

### Page 1: Homepage (`/`)
Recreate the Superpower homepage with the following sections:

1. **Header/Navigation** (Custom - see requirements below)
2. **Hero Section** - Large banner with headline, subtitle, and CTA
3. **"It starts with YOU labs"** - Feature highlight section
4. **"How it works"** - 3-step process with icons/images
5. **Dynamic Products Section** (Custom - replaces "Developed by world-class medical professionals")
6. **"Superpower Membership"** - Pricing/features card
7. **Testimonials Slider** - "Superpower is changing thousands of lives"
8. **FAQ Section** - Accordion with expandable questions
9. **Footer** - Links, logo, copyright

### Page 2: How It Works (`/how-it-works`)
Recreate the How It Works page with the following sections:

1. **Header/Navigation** (Same as homepage)
2. **Hero Section** - "How it works" title with subtitle
3. **"Get clarity at every step"** - Section introduction
4. **Step-by-step Process** - Alternating left/right layout:
   - Book your lab test
   - Understand your results
   - Take action
5. **"We guide you to what you need"** - Feature section
6. **Statistics Section** - Metrics display (orange background)
7. **"Complete our Action Plans"** - CTA section
8. **"Superpower Membership"** - Same as homepage
9. **FAQ Section** - Same as homepage
10. **Footer** - Same as homepage

---

## Custom Requirements (Modifications from Reference)

### 1. Dynamic Header Menu

The header must be **custom built** with the following structure:

**Layout:** Logo (left) | Dynamic Categories (center) | Log In + CTA (right)

**Requirements:**
- **Logo**: Left-aligned, links to homepage
- **Dynamic Categories**: Center-aligned, fetched from API (extract unique categories from product bundles)
- **Log In**: Static button (no functionality required)
- **Get Started (CTA)**: Static button styled as primary CTA

**Category Dropdown Behavior:**
- Each category displays a dropdown on hover
- Dropdown contains:
  - Category image (use product image from that category)
  - List of products in that category
- Dropdown animation must match the smooth feel of superpower.com
- Use Framer Motion or GSAP for dropdown animations

### 2. Dynamic Products Section

**Replace** the "Developed by world-class medical professionals" section with a **Dynamic Products Slider**.

**Requirements:**
- Fetch products from the API
- Display as a horizontal slider (same style as testimonials slider)
- Each product card shows:
  - Product image
  - Product name
  - Price with unit
  - Category tag
- Slider must auto-scroll with manual navigation arrows
- Use the same slider animation style as the testimonials section

### 3. Dynamic Testimonials Slider

**Requirements:**
- Fetch testimonials from the API
- Display:
  - Customer name
  - Rating (as stars)
  - Title
  - Content
  - Verified badge (if applicable)
- Smooth sliding animation matching reference site

### 4. FAQ Section (Config-Based)

**Requirements:**
- Fetch FAQ data from the API
- **Also** create a local constants file as fallback for easy future modifications
- Use API data if available, fallback to constants
- Accordion expand/collapse with smooth animation
- Only one FAQ item open at a time

---

## Technical Requirements

### Next.js & React

| Requirement | Details |
|-------------|---------|
| Next.js Version | 14+ with App Router |
| Components | Functional components only |
| Server Components | Use where appropriate (data fetching) |
| Client Components | Use `"use client"` only when necessary |
| Layouts | Shared layout with header/footer |
| Loading States | Route-level `loading.tsx` files |
| Error Handling | Route-level `error.tsx` files |
| SEO | Metadata for both pages (title, description, Open Graph) |
| Images | Use `next/image` for all images with proper optimization |
| Environment Variables | Use `.env.local` for API endpoint and link name |

### TypeScript (STRICT REQUIREMENTS)

| Requirement | Details |
|-------------|---------|
| Strict Mode | Must be enabled in `tsconfig.json` |
| No `any` Type | **ZERO tolerance** - instant point deduction |
| Typed API Responses | Create interfaces for all GraphQL responses |
| Typed Props | All component props must be typed |
| Typed State | All useState must have explicit types |
| Error Handling | Use `unknown` type in catch blocks with proper type narrowing |

### Tailwind CSS

| Requirement | Details |
|-------------|---------|
| Styling | Tailwind CSS only (no plain CSS files except for animations if needed) |
| Theme Config | Extend theme in `tailwind.config.ts` with custom values |
| CSS Variables | Define color palette, spacing, fonts as CSS variables for centralized theming |
| Responsive | Mobile-first approach with proper breakpoints |
| No Inline Styles | Use Tailwind classes only |

### State Management

| Requirement | Details |
|-------------|---------|
| Library | Redux Toolkit OR Zustand (your choice) |
| Usage | Manage dynamic data (categories, products, testimonials, FAQ) |
| Structure | Proper organization with separate slices/stores |
| Async | Handle API calls with appropriate async patterns |

### Animations (CRITICAL)

| Requirement | Details |
|-------------|---------|
| Library | Framer Motion OR GSAP |
| Header Dropdown | Smooth open/close with fade and slide |
| Hero Section | Entrance animations on page load |
| Scroll Animations | Elements animate in on scroll (like reference) |
| Sliders | Smooth sliding transitions |
| FAQ Accordion | Smooth expand/collapse |
| Hover Effects | Buttons, cards, links have hover animations |
| Page Transitions | Smooth transitions between pages |

**Animation Checklist:**
- [ ] Header dropdown animation
- [ ] Hero text/image entrance animation
- [ ] "How it works" steps reveal on scroll
- [ ] Products slider smooth scrolling
- [ ] Testimonials slider with autoplay
- [ ] FAQ accordion smooth expand/collapse
- [ ] Button hover scale/color transitions
- [ ] Card hover lift effects
- [ ] Statistics counter animation (numbers count up)
- [ ] Footer elements fade in

### Semantic HTML & Accessibility

| Requirement | Details |
|-------------|---------|
| Semantic Elements | Use `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| Navigation Links | Use proper anchor tags (via Next.js Link), NOT paragraph or div elements |
| Images | ALL images must have descriptive `alt` attributes |
| ARIA Labels | Add to interactive elements (buttons, dropdowns, sliders) |
| Keyboard Navigation | Dropdowns and accordions accessible via keyboard |
| Focus States | Visible focus indicators on interactive elements |

### API Integration

**Data to Fetch:**

1. **Organization Public Info** - Including:
   - Product bundles with products and categories
   - FAQ items
   - Color configurations
   - Various text and link configurations

2. **Testimonials** - Including:
   - Rating, customer name, title, content
   - Creation date and verification status

**API Integration Requirements:**
- Fetch data from the provided GraphQL endpoint (method of fetching is your choice - native fetch, axios, GraphQL client, etc.)
- Handle loading states during API calls
- Handle error states with user-friendly messages
- Implement proper error boundaries

---

## Project Structure

Organize your project with a clean, scalable folder structure including:
- App router pages and layouts
- Reusable components (organized by feature/page)
- Shared/common components
- Constants for fallback data
- GraphQL client and queries
- State management store
- TypeScript type definitions
- Public assets

---

## Git Workflow Requirements

### Branch Strategy
- Work on a feature branch (not directly on main)
- Use appropriate branch naming convention

### Commit Requirements

| Requirement | Details |
|-------------|---------|
| Minimum Commits | **20 commits** (meaningful, atomic changes) |
| Commit Format | Follow Conventional Commits specification |
| No Large Commits | Each commit should represent ONE logical change |

### Advanced Git Requirements

You must demonstrate the following Git skills and document them in your README:

#### 1. Commit Amending
- Make a commit, then amend it to fix a typo or add a missed file
- Document with before/after commit hashes

#### 2. Cherry-picking
- Create a commit on a separate branch
- Cherry-pick it to your main feature branch
- Document with commit hashes

#### 3. Interactive Rebase (Squashing)
- Make 2-3 small related commits
- Squash them into one meaningful commit
- Document with before/after history

#### 4. Merge/Rebase Conflict Resolution
- Create a conflict scenario (can be intentional)
- Resolve it properly
- Document the conflict and resolution

---

## AWS Amplify Deployment

### Deployment Requirements

| Requirement | Details |
|-------------|---------|
| Platform | AWS Amplify |
| Source | GitHub repository connection |
| Build | Successful build with no errors |
| Environment Variables | Properly configured in Amplify |
| URL | Working public Amplify URL |

### Deployment Steps to Document

1. Connect GitHub repository to Amplify
2. Configure build settings
3. Add environment variables
4. Deploy and verify
5. Test all functionality on deployed version

---

## README Documentation Requirements

Your README must include:

1. **Project Overview** - Description, live demo link, screenshots
2. **Tech Stack** - All technologies with reasoning
3. **Setup Instructions** - Prerequisites, installation, environment variables, running locally
4. **Project Structure** - Folder organization explanation
5. **Features Implemented** - Checklist of all features
6. **API Integration** - Queries used, data flow explanation
7. **Git Workflow Proof** - Document each advanced Git operation with hashes/screenshots
8. **Known Issues** - Any bugs or limitations
9. **Deployment** - Amplify setup steps and any issues faced

---

## Evaluation Criteria & Scoring

### Total Points: 100

---

### 1. Design Accuracy (15 points)

| Criteria | Points |
|----------|--------|
| Layout Match | 5 |
| Spacing & Typography | 4 |
| Color Accuracy | 3 |
| Responsive Design | 3 |

**Deductions:** -1 per noticeable deviation, -2 for broken responsive

---

### 2. Technical Implementation (25 points)

| Criteria | Points |
|----------|--------|
| Next.js App Router | 5 |
| TypeScript | 5 |
| State Management | 5 |
| API Integration | 5 |
| Component Architecture | 5 |

**Critical Deductions:**
- **-5 for ANY usage of `any` type**
- -3 for missing loading/error states
- -2 per missing TypeScript interface

---

### 3. Animations (20 points)

| Criteria | Points |
|----------|--------|
| Header Dropdown | 4 |
| Hero Animations | 3 |
| Scroll Animations | 4 |
| Slider Animations | 4 |
| FAQ Accordion | 3 |
| Micro-interactions | 2 |

**Deductions:** -2 per janky animation, -3 for missing critical animation

---

### 4. Semantic HTML & Accessibility (10 points)

| Criteria | Points |
|----------|--------|
| Semantic Elements | 3 |
| Alt Attributes | 3 |
| ARIA Labels | 2 |
| Keyboard Navigation | 2 |

**Critical Deductions:**
- **-3 for using paragraph/div for navigation links**
- **-1 per image missing alt attribute**
- -2 for missing main element

---

### 5. Code Quality (10 points)

| Criteria | Points |
|----------|--------|
| Clean Code | 3 |
| No Commented Code | 2 |
| Consistent Naming | 2 |
| DRY Principle | 2 |
| Proper Error Handling | 1 |

**Deductions:**
- **-2 for ANY commented-out code**
- -1 per inconsistent naming

---

### 6. Git Workflow (10 points)

| Criteria | Points |
|----------|--------|
| Commit Quantity (20+) | 2 |
| Commit Quality | 2 |
| Commit Amending | 1.5 |
| Cherry-picking | 1.5 |
| Interactive Rebase | 1.5 |
| Conflict Resolution | 1.5 |

**Deductions:** -0.5 per vague message, -2 for <15 commits, -5 for <10 commits

---

### 7. Documentation (5 points)

| Criteria | Points |
|----------|--------|
| README Completeness | 2 |
| Setup Instructions | 1 |
| Git Proof | 1 |
| Code Comments (where needed) | 1 |

**Deductions:** -2 for generic README, -1 for missing Git proof

---

### 8. Deployment (5 points)

| Criteria | Points |
|----------|--------|
| Successful Deployment | 2 |
| Environment Variables | 1 |
| All Features Working | 2 |

**Deductions:** -5 for failed deployment, -2 per broken feature

---

### Bonus Points (Up to +5)

| Bonus | Points |
|-------|--------|
| Exceptional Animations | +2 |
| Perfect Pixel Match | +1 |
| Extra Accessibility | +1 |
| Performance (Lighthouse 90+) | +1 |

---

### Grading Scale

| Grade | Points |
|-------|--------|
| A+ | 95-100+ |
| A | 90-94 |
| B+ | 85-89 |
| B | 80-84 |
| C+ | 75-79 |
| C | 70-74 |
| F | <70 |

---

## Submission Requirements

### Deliverables

1. **GitHub Repository URL** - Public repo, clean history, complete README
2. **AWS Amplify URL** - Working deployed application

### Submission Checklist

- [ ] All pages match reference design
- [ ] Dynamic data loads from API
- [ ] All animations working smoothly
- [ ] Zero TypeScript `any` usage
- [ ] Zero commented-out code
- [ ] All images have alt attributes
- [ ] Semantic HTML used throughout
- [ ] 20+ meaningful commits
- [ ] All Git workflows documented in README
- [ ] AWS Amplify deployment successful
- [ ] README complete with all sections

---

## Timeline Suggestion

| Day | Focus |
|-----|-------|
| **Day 1** | Project setup, API integration, Header with dropdowns, Footer |
| **Day 2** | Homepage sections (Hero, How it works, Products slider, Membership, Testimonials) |
| **Day 3** | FAQ component, How It Works page (all sections), Statistics counter |
| **Day 4** | Responsive polish, animation refinements, accessibility fixes, Amplify deployment, README |

---

## Important Reminders

### DO:
- Commit frequently with meaningful messages
- Test responsive design at multiple breakpoints
- Use TypeScript strictly - define types for everything
- Match the reference animations as closely as possible
- Document everything in README
- Test on deployed Amplify URL before submission

### DON'T:
- Use `any` type (automatic -5 points)
- Leave commented code (automatic -2 points)
- Use paragraph or div elements for navigation links
- Skip alt attributes on images
- Make fewer than 20 commits
- Submit without testing deployment

---

## Final Notes

This test evaluates everything you've learned over the past 5 weeks:
- **Week 1**: Git, HTML semantics, CSS, responsive design
- **Week 2**: JavaScript, TypeScript, React fundamentals
- **Week 3**: Next.js, advanced Git, production patterns
- **Week 4**: CSS animations, Framer Motion/GSAP
- **Week 5**: AWS Amplify deployment

Your feedback from previous tests has been considered. Pay special attention to:
- **TypeScript strictness** - No `any` type
- **Semantic HTML** - Proper elements for navigation
- **Accessibility** - Alt attributes on ALL images
- **Git workflow** - Meaningful, frequent commits
- **Code cleanliness** - No commented code
- **Documentation** - Complete README

Good luck! Build something you're proud of.

---

**Test Version:** 1.0
**Created:** February 2026
