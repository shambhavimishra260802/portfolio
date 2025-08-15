# Overview

This is a professional portfolio website for Shambhavi Mishra, a Quality Analyst and Web Developer. The application is built as a full-stack web application featuring a React frontend with modern UI components and an Express.js backend. The portfolio showcases personal information, skills, work experience, projects, education, and includes a functional contact form that sends emails and stores messages in a database.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built using **React 18** with **TypeScript** and follows a component-based architecture:

- **Build Tool**: Vite for fast development and optimized production builds
- **Styling**: Tailwind CSS with custom CSS variables for theming and shadcn/ui component library for pre-built UI components
- **State Management**: React Query (TanStack Query) for server state management and data fetching
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod for validation and type safety
- **UI Components**: Comprehensive set of accessible components using Radix UI primitives

The application structure follows a modular pattern with components organized by functionality:
- Page components for different sections (home, about, skills, etc.)
- Reusable UI components built with shadcn/ui
- Custom hooks for functionality like toast notifications and mobile detection

## Backend Architecture

The backend uses **Express.js** with **TypeScript** in ESM format:

- **Server Framework**: Express.js with middleware for JSON parsing, CORS, and request logging
- **Development Setup**: Custom Vite integration for hot module replacement in development
- **API Design**: RESTful endpoints with structured error handling and response logging
- **Email Service**: Nodemailer integration for contact form email notifications
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database implementations

The server implements a clean separation of concerns:
- Route handlers for API endpoints
- Storage abstraction layer for data persistence
- Email service integration for notifications
- Development/production environment handling

## Data Storage Solutions

**Database**: PostgreSQL configured through Drizzle ORM:
- **ORM**: Drizzle ORM for type-safe database queries and schema management
- **Connection**: Neon Database serverless PostgreSQL
- **Schema**: Defined in shared TypeScript files with Zod validation
- **Migrations**: Managed through Drizzle Kit with migration files

**Schema Design**:
- Users table for authentication (currently unused but prepared)
- Contact messages table for storing form submissions
- UUID primary keys with automatic generation
- Timestamp tracking for message creation

**Development Fallback**: In-memory storage implementation for development scenarios where database connection is unavailable.

## External Dependencies

**Database Services**:
- Neon Database (@neondatabase/serverless) - Serverless PostgreSQL hosting
- Drizzle ORM (drizzle-orm) - Type-safe database toolkit
- PostgreSQL session store (connect-pg-simple) - Session management

**Email Services**:
- Nodemailer - Email sending capabilities for contact form notifications
- Configured for Gmail SMTP with app password authentication

**UI Framework**:
- Radix UI - Accessible component primitives for complex UI elements
- Tailwind CSS - Utility-first CSS framework for responsive design
- shadcn/ui - Pre-built component library built on Radix UI

**Development Tools**:
- Vite - Fast build tool and development server
- TypeScript - Type safety across the entire application
- ESBuild - Fast JavaScript bundler for production builds

**Third-party Integrations**:
- Replit-specific plugins for development environment integration
- Font loading from Google Fonts for typography
- Date manipulation via date-fns library

The application is designed to be deployment-ready with environment-based configuration and proper production build processes.