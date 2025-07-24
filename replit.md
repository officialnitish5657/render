# ModernBlog Application

## Overview

This is a full-stack blog application built with a modern React frontend and Express.js backend. The application follows a monorepo structure with shared components and uses PostgreSQL with Drizzle ORM for data persistence. The frontend is built with React, TypeScript, Tailwind CSS, and shadcn/ui components, while the backend uses Express.js with a clean storage abstraction layer.

## Recent Changes (March 2024)

✓ Fixed mobile navigation menu functionality - replaced Button component with native HTML button
✓ Added comprehensive SEO optimization with meta tags, Open Graph, and Twitter Cards
✓ Implemented dynamic SEO Head component for page-specific meta data
✓ Added structured data (JSON-LD) for improved search engine understanding
✓ Created sitemap.xml and robots.txt for better search engine crawling
✓ Enhanced dark mode support throughout the navigation component
✓ **NEW**: Created dynamic blog system with blog cards and detailed views
✓ **NEW**: Streamlined blog content with focused technology articles
✓ **NEW**: Added comprehensive AI tools blog: "10 AI Tools That Will Make Your Life 10x Faster and Easier"
✓ **NEW**: Added video editing software blog: "Top 10 Video Editing Software: Free and Paid Options"
✓ **NEW**: Added Chrome extensions blog: "Top 10 Chrome Extensions for Productivity: Supercharge Your Browser"
✓ **NEW**: Each blog includes practical tools with external website links for direct access
✓ **NEW**: Implemented dynamic routing (/blog/:id) for individual blog posts
✓ **NEW**: Blog listing page shows all available blogs as interactive cards
✓ **NEW**: Blog detail pages with full content, author bios, tags, and related articles
✓ **NEW**: Updated sitemap with individual blog post URLs for better SEO

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Architecture Pattern**: Clean storage abstraction with interface-based design
- **Current Implementation**: In-memory storage (MemStorage class)
- **Planned Database**: PostgreSQL with Drizzle ORM (configuration ready)
- **API Structure**: RESTful endpoints with `/api` prefix

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express.js backend
├── shared/          # Shared TypeScript schemas and types
├── migrations/      # Database migrations (Drizzle)
└── dist/           # Production build output
```

## Key Components

### Frontend Components
- **Navigation**: Responsive navigation with mobile menu support
- **Pages**: Home, Blog, and 404 pages with modern UI design
- **UI Library**: Complete shadcn/ui component set including forms, dialogs, tables, charts
- **Routing**: Client-side routing with Wouter
- **Styling**: Custom CSS variables for theming with dark mode support

### Backend Components
- **Storage Layer**: Abstract `IStorage` interface with pluggable implementations
- **Current Storage**: `MemStorage` class for development/testing
- **Route Registration**: Centralized route management in `registerRoutes`
- **Error Handling**: Global error middleware for consistent API responses
- **Logging**: Request/response logging with performance metrics

### Shared Components
- **Schema Definitions**: Drizzle schema definitions with Zod validation
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Database Models**: User model with username/password authentication structure

## Data Flow

### Current Implementation
1. **In-Memory Storage**: All data stored in memory using Map-based storage
2. **API Communication**: Frontend uses TanStack Query for server communication
3. **Type Safety**: Shared schemas ensure type consistency across the stack

### Planned Database Integration
1. **PostgreSQL**: Configured with Neon Database serverless connection
2. **Drizzle ORM**: Schema-first approach with automatic migrations
3. **Connection**: Environment-based database URL configuration

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Components**: Radix UI primitives with shadcn/ui
- **State Management**: TanStack Query for server state
- **Routing**: Wouter for lightweight routing
- **Forms**: React Hook Form with Zod validation

### Backend Dependencies
- **Server**: Express.js with TypeScript support
- **Database**: Drizzle ORM with PostgreSQL adapter
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Build Tools
- **Frontend**: Vite with React plugin and Replit integration
- **Backend**: esbuild for production bundling
- **Database**: Drizzle Kit for migrations and schema management

## Deployment Strategy

### Development Environment
- **Frontend**: Vite dev server with HMR and error overlay
- **Backend**: tsx with nodemon-like restarting
- **Database**: Environment variable configuration for easy switching

### Production Build
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: esbuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves frontend build in production
4. **Database**: PostgreSQL connection via environment URL

### Key Features
- **Hot Module Replacement**: Full HMR support in development
- **Type Checking**: Comprehensive TypeScript configuration
- **Code Splitting**: Automatic code splitting via Vite
- **Asset Optimization**: Tailwind CSS purging and asset optimization
- **Error Handling**: Development error overlays and production error boundaries

The application is designed to be easily deployable to platforms like Replit, with environment-based configuration and a single production build command that prepares both frontend and backend for deployment.