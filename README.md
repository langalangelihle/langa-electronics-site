# Langa Electronics & Cell Phone Repairs — Website Project

## Student Information
- **Name:** Sphesihle Langa
- **Student Number:** ST10531999
- **Module:** WEDE5020 – Web Development (Introduction)
- **Submission:** Individual

## Project Overview
This project is a website built for Langa Electronics & Cell Phone Repairs, a small
local business in Scottburgh, KwaZulu-Natal South Coast, offering repair services
for smartphones, laptops, tablets, and desktop computers. The site aims to give the
business a professional online presence beyond WhatsApp and Facebook, making it
easier for customers to learn about services, get in touch, and request quotes.

## Website Goals and Objectives
- Establish a professional online presence beyond WhatsApp and Facebook
- Generate more repair enquiries and walk-in bookings through the website
- Build customer trust by clearly presenting services, pricing guidance, and
  turnaround expectations
- Reduce repetitive customer questions by making key information easily accessible

## Key Features and Functionality
- 5-page responsive website: Home, About, Services, Enquiry, Contact
- Enquiry form for customers to request a repair quote
- Contact form and two embedded Google Maps locations (Scottburgh + Park Rynie)
- Consistent navigation menu across all pages
- Fully styled, responsive layout (desktop, tablet, mobile) — added in Part 2

## Timeline and Milestones
| Milestone                                         | Target              |
|----------------------------------------------------|----------------------|
| Proposal research finalised and approved           | Week 1               |
| Sitemap, wireframes, and folder structure completed| Week 1               |
| HTML structure for all five pages completed        | Week 2               |
| Part 1 submission                                  | End of Part 1 window |
| CSS styling and responsive design implemented      | Part 2 window        |
| Part 2 submission                                  | End of Part 2 window |
| JavaScript functionality, forms, and SEO implemented| Part 3 window        |
| Part 3 submission and live deployment              | End of Part 3 window |

## Part 1 Details
Part 1 focused on building the HTML foundation of the website:
- Researching and sourcing content, images, and icons
- Creating a sitemap of the site structure
- Setting up a clean file and folder structure (css/, js/, images/)
- Building semantic HTML5 structure for all 5 pages
- Adding working navigation across every page
- Adding an enquiry form and a contact form with an embedded map

## Part 2 Details
Part 2 focused on CSS styling and responsive design across all five pages:
- Created and linked `css/style.css` to every HTML page (already linked in Part 1's `<head>`)
- Set base styles: CSS reset, root colour variables, base font (Segoe UI/Arial fallback), spacing
- Styled typography: headings, paragraphs, letter-spacing, line-height
- Built layout structure using CSS Grid (services grid, mission/vision grid) and Flexbox (nav bar, form fields)
- Added visual styling: colour scheme (deep blue + orange accent), background colours, borders, box-shadows on cards
- Added pseudo-classes: `:hover`, `:focus`, and `:active` states on nav links, buttons, and form fields
- Implemented responsive design with two breakpoints (tablet ≤768px, mobile ≤480px):
  - Services grid collapses from 3 columns → 2 columns → 1 column
  - Nav menu stacks vertically on mobile
  - About page mission/vision grid collapses to a single column
  - Font sizes and spacing reduce on smaller screens
  - Forms adjust padding and submit button width on mobile
- Styled both forms (enquiry-form, contact-form) with consistent input/label/focus styling
- Styled embedded Google Maps iframes on the Contact page to be full-width and responsive

### Still to add before Part 2 submission
- [ ] Take and insert desktop, tablet, and mobile screenshots into this README as evidence
- [ ] Replace `[Business Phone Number]` / `[Business Email]` placeholders on contact.html
- [ ] Test the site in DevTools responsive mode / on a real phone and fix anything that looks off

## Sitemap
![Sitemap of Langa Electronics website](./documents/sitemap.png)

## Responsive Design Screenshots
*(Add desktop, tablet, and mobile screenshots here before submitting Part 2 — required by the rubric.)*

- Desktop: 
- Tablet: 
- Mobile: 

## Changelog

### Part 2
- Created `css/style.css` with full styling for all 5 pages
- Added CSS reset and root colour/font variables
- Styled header, navigation, and footer (shared across all pages)
- Styled hero section and call-to-action button on index.html
- Built responsive grid layout for services preview (index.html) and full services list (services.html)
- Styled About page mission/vision layout as a two-column grid
- Styled Contact page location sections and embedded map iframes
- Styled enquiry-form and contact-form with consistent label/input/focus styling
- Added `:hover`, `:focus`, `:active` states to nav links, buttons, and form controls
- Added media queries for tablet (≤768px) and mobile (≤480px) breakpoints
- Updated README with Part 2 details and changelog

### Part 1
- Initial project folder structure created (css/, js/, images/)
- Created index.html, about.html, services.html, enquiry.html, contact.html
- Added semantic HTML5 structure with header, nav, main, section, article, footer
- Added enquiry form (index → enquiry.html) with HTML5 validation attributes
- Added contact form and 2 embedded Google Maps locations on contact.html
- Added code comments throughout all HTML files
- Sourced and added images and icons from free stock resources

## References
- Unsplash (2026). Free stock photos. Available at: https://unsplash.com [Accessed: 20 August 2026].
- Pexels (2026). Free stock photos and videos. Available at: https://www.pexels.com [Accessed: 20 August 2026].
- Flaticon (2026). Free icons. Available at: https://www.flaticon.com [Accessed: 20 August 2026].
- GitHub Pages (2026). Documentation. Available at: https://pages.github.com [Accessed: 20 August 2026].
- Netlify (2026). Documentation. Available at: https://docs.netlify.com [Accessed: 20 August 2026].
- Google Maps Embed (2026). Available at: https://www.google.com/maps [Accessed: 20 August 2026].
- MDN Web Docs (2026). CSS Grid Layout. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout [Accessed: 21 August 2026].
- MDN Web Docs (2026). Using media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed: 21 August 2026].
