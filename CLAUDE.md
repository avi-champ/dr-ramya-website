# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pediatric healthcare website for Dr. Ramya Bharathi R, a pediatrician in Perumbakkam, Chennai. Built with Next.js 15, React 18, TypeScript, and Tailwind CSS.

## Commands

```bash
# Development
npm run dev              # Start dev server at localhost:3000

# Build
npm run build           # Compress articles + build (production)
npm run build:fast      # Build without article compression

# Linting
npm run lint            # Run ESLint (next/core-web-vitals + next/typescript)

# Utilities
npm run compress-articles    # Pre-compress markdown articles (runs before build)
npm run clear-cache          # Clear .cache directory
npm run perf:analyze         # Build + run bundle analyzer
```

## Architecture

### Content System
- **Articles** are stored as Markdown files in `src/content/articles/` with YAML frontmatter
- `src/lib/article-server.ts` - Server-side article loading with slug-to-filename mapping
- `src/lib/article-cache.ts` - Caching layer for articles
- `src/scripts/compress-articles.ts` - Build-time compression script

### Article Slug Mapping
Articles use a slug mapping system in `article-server.ts`. When adding new articles:
1. Create the `.md` file in `src/content/articles/`
2. Add slug-to-filename mapping in `articleFileMap` object

### SEO Components
Heavy SEO focus with structured data components in `src/components/seo/`:
- `LocalBusinessSchema` - Local business JSON-LD
- `HealthArticleSchema` - Medical article structured data
- `BreadcrumbSchema` - Navigation breadcrumbs
- `GoogleMyBusinessOptimization` - GMB optimization

### API Routes
Located in `src/app/api/`:
- `/api/articles/` - Article listing and retrieval
- `/api/articles/[filename]` - Individual article by filename
- `/api/articles/by-slug` - Article lookup by slug
- `/api/views/` - View tracking

### Layout System
- `ResponsiveLayout` wraps all pages with navigation and footer
- Custom Tailwind breakpoints: `xs`, `mobile`, `tablet`, `laptop`, `desktop`
- Fonts: Playfair Display (serif headings), Inter (sans body)

## Path Aliases

Uses `@/*` alias pointing to `./src/*` (configured in tsconfig.json).

## Key Files

- `next.config.ts` - Image optimization, caching headers, URL rewrites
- `tailwind.config.ts` - Custom breakpoints, colors (`dark-*`, `accent-gold`), animations
- `src/app/layout.tsx` - Root layout with SEO metadata
- `src/app/sitemap.ts` - Dynamic sitemap generation
