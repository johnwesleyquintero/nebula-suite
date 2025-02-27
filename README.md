# Nebula Suite

[![Build Status](BADGE_URL_PLACEHOLDER)](BUILD_URL_PLACEHOLDER)
[![License: MIT](BADGE_URL_PLACEHOLDER)](LICENSE)

A modern, scalable SaaS platform for Amazon sellers with a focus on clean design, security, and performance.

![Nebula Suite Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nebula-logo-white-jSFQ1pVPCAlVYL9eI65pp0uRZBI2i8.png)

[Clone Repository](https://github.com/johnwesleyquintero/nebula-suite.git)

---

[TOC]

---

## Features

-   🎨 Modern UI with dark/light mode
-   ⌨️ Keyboard-first navigation
-   📱 Responsive design
-   🔒 Role-based access control
-   📊 Advanced analytics
-   🚀 Optimized performance
-   ♿ Accessibility focused

---
## Implementation Plan

### 1. Core Infrastructure

-   [x] Project setup with Next.js 14 and TypeScript
-   [x] Tailwind CSS configuration
-   [x] shadcn/ui component library integration
-   [x] Environment variable configuration
-   [x] Basic routing structure
-   [x] Error boundary implementation
-   [x] Logging system setup
-   [x] Monitoring integration

### 2. Authentication & Authorization

-   [x] Supabase authentication setup
-   [x] Login/Register pages
-   [x] Protected routes middleware
-   [x] User session management
-   [x] Role-based access control
-   [x] OAuth providers integration (Google)
-   [x] Password reset flow
-   [x] Email verification system

### 3. Data Pipeline Architecture

-   [x] File upload system
    -   [x] Drag-and-drop interface
    -   [x] File type validation
    -   [x] Size limit enforcement
    -   [x] Progress indicators
    -   [x] Batch upload support

-   [x] Data Mapping System
    -   [x] Field mapping interface
    -   [x] Validation rules
    -   [x] Template system
    -   [x] Custom field mapping
    -   [x] Mapping preview
    -   [x] Save/load mapping configurations

-   [x] Data Processing
    -   [x] CSV parsing
    -   [x] Excel parsing
    -   [x] Basic validation
    -   [x] Data transformation
    -   [x] Error handling
    -   [x] Batch processing
    -   [x] Processing status tracking

-   [x] Export System
    -   [x] CSV export
    -   [x] Excel export
    -   [x] Google Sheets integration
    -   [x] API export endpoints
    -   [x] Export job queuing

### 4. User Interface

-   [x] Responsive layout system
-   [x] Dark/light mode
-   [x] Navigation components
    -   [x] Main navigation
    -   [x] Sidebar
    -   [x] Mobile navigation
    -   [x] Breadcrumbs
-   [x] Dashboard components
    -   [x] Overview cards
    -   [x] Data visualizations
    -   [x] Recent activity
-   [x] Advanced UI features
    -   [x] Keyboard shortcuts
    -   [x] Drag-and-drop interfaces
    -   [x] Advanced filters
    -   [x] Bulk actions

### 5. Documentation

-   [x] Basic documentation structure
-   [x] Architecture diagrams
-   [x] Feature documentation
-   [x] API documentation
-   [x] User guides
-   [x] Tutorial videos
-   [x] Code examples
-   [x] Troubleshooting guides

### 6. Performance Optimization

-   [x] Server component optimization
-   [x] Client component code splitting
-   [x] Image optimization
-   [x] API route optimization
-   [x] Database query optimization
-   [x] Caching strategy
-   [x] Bundle size optimization

### 7. Testing

-   [x] Unit tests
    -   [x] Component tests
    -   [x] Utility function tests
    -   [x] API route tests
-   [x] Integration tests
    -   [x] Authentication flow
    -   [x] Data pipeline flow
    -   [x] Export flow
-   [x] E2E tests
    -   [x] User journeys
    -   [x] Critical paths
-   [x] Performance tests
    -   [x] Load testing
    -   [x] Stress testing

### 8. Security

-   [x] Authentication security
-   [x] CSRF protection
-   [x] Input validation
-   [x] Rate limiting
-   [x] Data encryption
-   [x] Audit logging
-   [x] Security headers
-   [x] Vulnerability scanning

### 9. Monitoring & Analytics

-   [x] Error tracking
-   [x] Performance monitoring
-   [x] Usage analytics
-   [x] User behavior tracking
-   [x] System health monitoring
-   [x] Alert system
-   [x] Audit logs

### 10. Deployment & DevOps

-   [x] Vercel deployment setup
-   [x] Environment configuration
-   [x] CI/CD pipeline
-   [x] Staging environment
-   [x] Production environment
-   [x] Backup strategy
-   [x] Disaster recovery plan

---

## Data Pipeline

### File Upload System

-   Drag-and-drop interface
-   Support for CSV and Excel files
-   Google Sheets integration
-   Automatic field detection

### Data Mapping

-   Interactive field mapping interface
-   Real-time validation
-   Mapping templates
-   Error highlighting and suggestions

### Data Processing

-   Automated data validation
-   Format standardization
-   Batch processing
-   Error handling and reporting

### Export Options

-   CSV export
-   Excel export
-   Direct to Google Drive
-   API access

### Architecture Diagram

The Nebula Suite follows a structured data pipeline architecture that enables efficient processing of Amazon seller data:

![Data Pipeline Architecture](/docs/images/data-pipeline-architecture.png)

### Data Mapping Process Diagram

Our intuitive data mapping process ensures accurate field mapping and data transformation:

![Data Mapping Process](/docs/images/data-mapping-process.png)

---

## Recent Improvements

### Performance

-   Moved heavy data processing to server-side using Server Actions
-   Implemented memoization for expensive calculations
-   Reduced bundle size with dynamic imports
-   Optimized data transformations to reduce iterations

### Modularity

-   Extracted reusable logic into custom hooks
-   Separated concerns in components (UI rendering vs. data fetching)
-   Consolidated utility functions into domain-specific modules
-   Improved component composition patterns

### Security

-   Added comprehensive Content Security Policy
-   Implemented server-side secure storage for sensitive data
-   Enhanced input validation with Zod schemas
-   Added additional security headers
-   Improved CSRF protection

### Error Handling

-   Standardized error handling across the application
-   Created centralized error handling utilities
-   Improved error logging and monitoring
-   Added user-friendly error messages

---

## Tech Stack

| Technology               | Description                               |
| ------------------------ | ----------------------------------------- |
| Next.js 14 (App Router)  | Frontend framework                        |
| TypeScript               | Programming language                      |
| Tailwind CSS             | Styling framework                         |
| Supabase                 | Backend-as-a-Service                     |
| Vercel                   | Deployment platform                       |
| PapaParse                | CSV processing library                    |
| XLSX                     | Excel processing library                  |
| React Query              | Data fetching and caching library         |
| shadcn/ui                | UI component library                      |

---

## Project Structure

-   `app/` - Next.js App Router pages and layouts
-   `components/` - Reusable UI components
-   `lib/` - Utility functions and configuration
-   `public/` - Static assets

### Key Components

-   **File Uploader**: Handles file uploads with drag-and-drop functionality
-   **Data Mapper**: Interactive UI for mapping source fields to system fields
-   **Data Table**: Displays processed data with sorting and filtering
-   **Export Options**: Various export formats and destinations

---

## Configuration

### Supported File Formats

-   CSV (.csv)
-   Excel (.xlsx, .xls)
-   Google Sheets (via API)

### Field Mapping

The system supports mapping for common Amazon seller fields:

-   ASIN
-   Product Title
-   Category
-   Price
-   Units Sold
-   Revenue
-   Date

---
## Installation Instructions

[**TODO: Provide detailed installation instructions here. Include steps for setting up dependencies, environment variables, and any necessary configurations.**]

---

## New Features

[**TODO: Document any new features or updates here. For example, describe the Marketing & SEO dashboards, Sales Predictions module, or any other recent additions.**]

---

## Usage Examples

[**TODO: Add relevant code snippets and API route examples here to demonstrate how to use the application. Include examples for common tasks and workflows.**]

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

[MIT](LICENSE)

---

## Support

For support, email [support@nebulasuite.com](mailto:support@nebulasuite.com) or join our Slack channel.

---

## Security Considerations

The following vulnerabilities were identified during the pre-deployment checklist:

-   **`xlsx`**: A high-severity vulnerability exists in the `xlsx` package due to Prototype Pollution and Regular Expression Denial of Service (ReDoS). No fix is currently available. Mitigation strategies should be investigated, or an alternative library should be considered.
-   **`dompurify`**: A moderate-severity vulnerability exists in the `dompurify` package, which is a dependency of `mermaid`. A fix is available by updating `mermaid`, but this introduces breaking changes.

Additionally, a peer dependency conflict exists between `react-day-picker` and `date-fns`. Downgrading `date-fns` did not resolve this conflict.

These issues should be addressed in a future release.