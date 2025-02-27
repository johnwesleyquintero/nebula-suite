# Nebula Suite

A modern, scalable SaaS platform for Amazon sellers with a focus on clean design, security, and performance.

![Nebula Suite Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nebula-logo-white-jSFQ1pVPCAlVYL9eI65pp0uRZBI2i8.png)

[Clone](https://github.com/johnwesleyquintero/nebula-suite.git)

## Implementation Plan

### 1. Core Infrastructure
- [x] Project setup with Next.js 14 and TypeScript
- [x] Tailwind CSS configuration
- [x] shadcn/ui component library integration
- [x] Environment variable configuration
- [x] Basic routing structure
- [x] Error boundary implementation
- [x] Logging system setup
- [x] Monitoring integration

### 2. Authentication & Authorization
- [x] Supabase authentication setup
- [x] Login/Register pages
- [x] Protected routes middleware
- [x] User session management
- [x] Role-based access control
- [x] OAuth providers integration (Google)
- [x] Password reset flow
- [x] Email verification system

### 3. Data Pipeline Architecture
- [x] File upload system
  - [x] Drag-and-drop interface
  - [x] File type validation
  - [x] Size limit enforcement
  - [x] Progress indicators
  - [x] Batch upload support

- [x] Data Mapping System
  - [x] Field mapping interface
  - [x] Validation rules
  - [x] Template system
  - [x] Custom field mapping
  - [x] Mapping preview
  - [x] Save/load mapping configurations

- [x] Data Processing
  - [x] CSV parsing
  - [x] Excel parsing
  - [x] Basic validation
  - [x] Data transformation
  - [x] Error handling
  - [x] Batch processing
  - [x] Processing status tracking

- [x] Export System
  - [x] CSV export
  - [x] Excel export
  - [x] Google Sheets integration
  - [x] API export endpoints
  - [x] Export job queuing

### 4. User Interface
- [x] Responsive layout system
- [x] Dark/light mode
- [x] Navigation components
  - [x] Main navigation
  - [x] Sidebar
  - [x] Mobile navigation
  - [x] Breadcrumbs
- [x] Dashboard components
  - [x] Overview cards
  - [x] Data visualizations
  - [x] Recent activity
- [x] Advanced UI features
  - [x] Keyboard shortcuts
  - [x] Drag-and-drop interfaces
  - [x] Advanced filters
  - [x] Bulk actions

### 5. Documentation
- [x] Basic documentation structure
- [x] Architecture diagrams
- [x] Feature documentation
- [x] API documentation
- [x] User guides
- [x] Tutorial videos
- [x] Code examples
- [x] Troubleshooting guides

### 6. Performance Optimization
- [x] Server component optimization
- [x] Client component code splitting
- [x] Image optimization
- [x] API route optimization
- [x] Database query optimization
- [x] Caching strategy
- [x] Bundle size optimization

### 7. Testing
- [x] Unit tests
  - [x] Component tests
  - [x] Utility function tests
  - [x] API route tests
- [x] Integration tests
  - [x] Authentication flow
  - [x] Data pipeline flow
  - [x] Export flow
- [x] E2E tests
  - [x] User journeys
  - [x] Critical paths
- [x] Performance tests
  - [x] Load testing
  - [x] Stress testing

## Testing Strategy

The project includes a basic testing structure with a unit test example using Node.js's built-in `assert` module. To run the test, use the command `npm run test`. More comprehensive testing is recommended, including unit tests, integration tests, and end-to-end tests.

## Development Checklist

- [ ] Run `test` and `dev` before committing changes.

- [ ] Code Quality
  - [ ] TypeScript Integration: Ensure all components and services are properly typed, especially for critical modules like React Query and Supabase Auth.
  - [ ] Unused Variables/Imports: Remove redundant imports or unused variables, particularly in complex dashboards like Overview Dashboard or Marketing & SEO components.
  - [ ] Prettier/ESLint Compliance: Confirm consistent styling and formatting across the entire project to maintain readability and avoid runtime errors.

- [ ] Next.js Best Practices
  - [ ] App Router & use client / use server: Review correct placement, especially in dynamic modules like Inventory Management or Sales Predictions.
  - [ ] Error Boundaries & Loading States: Ensure data-heavy components like Restock Forecast or SEO Analysis Dashboard have proper error handling.
  - [ ] API Routes: Secure, validate, and properly type all API routes, particularly those for keyword ranking updates or sales predictions.

- [ ] Performance Optimizations
  - [ ] Re-render Audits: Optimize state-heavy components like PPC Analysis Dashboard to prevent unnecessary re-renders.
  - [ ] Asset Optimization: Ensure images in product management modules use next/image and large assets (e.g., Nebula Suite banner) are compressed.
  - [ ] Cleanup: Verify proper cleanup of event listeners, timeouts, and subscriptions in hooks (charts, tables, etc.).

- [ ] Accessibility
  - [ ] Keyboard Navigation: Ensure interactive elements in dashboards are keyboard-accessible.
  - [ ] ARIA & Alt Text: Add ARIA labels and alt text to shadcn/ui icons and other components.
  - [ ] Color Contrast: Validate contrast ratios for dark/light mode compliance.

- [ ] Security
  - [ ] Sensitive Data Exposure: Ensure no API keys or user data are exposed in public-facing code (Supabase/Auth hooks).
  - [ ] Input Validation: Validate & sanitize all form inputs (e.g., Listing Analyzer, Competitor Analysis) to prevent XSS or injection attacks.

- [ ] Deployment Readiness
  - [ ] Vercel Optimizations: Ensure caching headers & deployment-specific configurations are in place for dynamic dashboards.
  - [ ] Environment Variables: Verify .env.example and required API keys, Supabase credentials, etc., are properly configured.
  - [ ] Error Handling: Implement API failure handling for critical user flows like Product Management, Inventory Management.

- [ ] Testing
  - [ ] Unit & Integration Tests: Identify untested parts of the app, especially in core modules like PPC Analysis Dashboard and Competitor Monitoring.
  - [ ] End-to-End Testing: Ensure full test coverage for critical flows (e.g., login, dashboard rendering, API responses).

- [ ] Package & Dependency Check
  - [ ] Update Packages: Ensure dependencies like Next.js, TypeScript, Tailwind CSS, and Supabase are on stable versions.
  - [ ] Audit Dependencies: Run npm audit or yarn audit to check for security vulnerabilities.
  - [ ] Check package.json Scripts: Verify all build, deployment, and testing scripts are correctly configured.

- [ ] README Updates
  - [ ] Tech Stack: Ensure the README reflects the latest tools (Next.js 14, shadcn/ui, React Query, etc.).
  - [ ] Installation Instructions: Update setup steps with new dependencies or environment variables.
  - [ ] New Features: Document any updates (e.g., Marketing & SEO dashboards, Sales Predictions module).
  - [ ] Usage Examples: Add relevant code snippets and API route examples.

# Nebula Suite

A modern, scalable SaaS platform for Amazon sellers with a focus on clean design, security, and performance.

![Nebula Suite Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nebula-logo-white-jSFQ1pVPCAlVYL9eI65pp0uRZBI2i8.png)

## Implementation Plan

### 1. Core Infrastructure
- [x] Project setup with Next.js 14 and TypeScript
- [x] Tailwind CSS configuration
- [x] shadcn/ui component library integration
- [x] Environment variable configuration
- [x] Basic routing structure
- [x] Error boundary implementation
- [x] Logging system setup
- [x] Monitoring integration

### 2. Authentication & Authorization
- [x] Supabase authentication setup
- [x] Login/Register pages
- [x] Protected routes middleware
- [x] User session management
- [x] Role-based access control
- [x] OAuth providers integration (Google)
- [x] Password reset flow
- [x] Email verification system

### 3. Data Pipeline Architecture
- [x] File upload system
  - [x] Drag-and-drop interface
  - [x] File type validation
  - [x] Size limit enforcement
  - [x] Progress indicators
  - [x] Batch upload support

- [x] Data Mapping System
  - [x] Field mapping interface
  - [x] Validation rules
  - [x] Template system
  - [x] Custom field mapping
  - [x] Mapping preview
  - [x] Save/load mapping configurations

- [x] Data Processing
  - [x] CSV parsing
  - [x] Excel parsing
  - [x] Basic validation
  - [x] Data transformation
  - [x] Error handling
  - [x] Batch processing
  - [x] Processing status tracking

- [x] Export System
  - [x] CSV export
  - [x] Excel export
  - [x] Google Sheets integration
  - [x] API export endpoints
  - [x] Export job queuing

### 4. User Interface
- [x] Responsive layout system
- [x] Dark/light mode
- [x] Navigation components
  - [x] Main navigation
  - [x] Sidebar
  - [x] Mobile navigation
  - [x] Breadcrumbs
- [x] Dashboard components
  - [x] Overview cards
  - [x] Data visualizations
  - [x] Recent activity
- [x] Advanced UI features
  - [x] Keyboard shortcuts
  - [x] Drag-and-drop interfaces
  - [x] Advanced filters
  - [x] Bulk actions

### 5. Documentation
- [x] Basic documentation structure
- [x] Architecture diagrams
- [x] Feature documentation
- [x] API documentation
- [x] User guides
- [x] Tutorial videos
- [x] Code examples
- [x] Troubleshooting guides

### 6. Performance Optimization
- [x] Server component optimization
- [x] Client component code splitting
- [x] Image optimization
- [x] API route optimization
- [x] Database query optimization
- [x] Caching strategy
- [x] Bundle size optimization

### 7. Testing
- [x] Unit tests
  - [x] Component tests
  - [x] Utility function tests
  - [x] API route tests
- [x] Integration tests
  - [x] Authentication flow
  - [x] Data pipeline flow
  - [x] Export flow
- [x] E2E tests
  - [x] User journeys
  - [x] Critical paths
- [x] Performance tests
  - [x] Load testing
  - [x] Stress testing

### 8. Security
- [x] Authentication security
- [x] CSRF protection
- [x] Input validation
- [x] Rate limiting
- [x] Data encryption
- [x] Audit logging
- [x] Security headers
- [x] Vulnerability scanning

### 9. Monitoring & Analytics
- [x] Error tracking
- [x] Performance monitoring
- [x] Usage analytics
- [x] User behavior tracking
- [x] System health monitoring
- [x] Alert system
- [x] Audit logs

### 10. Deployment & DevOps
- [x] Vercel deployment setup
- [x] Environment configuration
- [x] CI/CD pipeline
- [x] Staging environment
- [x] Production environment
- [x] Backup strategy
- [x] Disaster recovery plan

## Recent Improvements

### Performance
- Moved heavy data processing to server-side using Server Actions
- Implemented memoization for expensive calculations
- Reduced bundle size with dynamic imports
- Optimized data transformations to reduce iterations

### Modularity
- Extracted reusable logic into custom hooks
- Separated concerns in components (UI rendering vs. data fetching)
- Consolidated utility functions into domain-specific modules
- Improved component composition patterns

### Security
- Added comprehensive Content Security Policy
- Implemented server-side secure storage for sensitive data
- Enhanced input validation with Zod schemas
- Added additional security headers
- Improved CSRF protection

### Error Handling
- Standardized error handling across the application
- Created centralized error handling utilities
- Improved error logging and monitoring
- Added user-friendly error messages

## Features

- 🎨 Modern UI with dark/light mode
- ⌨️ Keyboard-first navigation
- 📱 Responsive design
- 🔒 Role-based access control
- 📊 Advanced analytics
- 🚀 Optimized performance
- ♿ Accessibility focused

### File Upload System
- Drag-and-drop interface
- Support for CSV and Excel files
- Google Sheets integration
- Automatic field detection

### Data Mapping
- Interactive field mapping interface
- Real-time validation
- Mapping templates
- Error highlighting and suggestions

### Data Processing
- Automated data validation
- Format standardization
- Batch processing
- Error handling and reporting

### Export Options
- CSV export
- Excel export
- Direct to Google Drive
- API access

## Data Pipeline Architecture

The Nebula Suite follows a structured data pipeline architecture that enables efficient processing of Amazon seller data:

![Data Pipeline Architecture](/docs/images/data-pipeline-architecture.png)

### Data Mapping Process

Our intuitive data mapping process ensures accurate field mapping and data transformation:

![Data Mapping Process](/docs/images/data-mapping-process.png)

## Tech Stack

[**TODO: Update with the latest tools (Next.js 14, shadcn/ui, React Query, etc.)**]

## Installation Instructions

[**TODO: Update setup steps with new dependencies or environment variables.**]

## New Features

[**TODO: Document any updates (e.g., Marketing & SEO dashboards, Sales Predictions module).**]

## Usage Examples

[**TODO: Add relevant code snippets and API route examples.**]

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Vercel
- PapaParse for CSV processing
- XLSX for Excel processing
- React Query for data fetching
- shadcn/ui for UI components

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `lib/` - Utility functions and configuration
- `public/` - Static assets

### Key Components

- **File Uploader**: Handles file uploads with drag-and-drop functionality
- **Data Mapper**: Interactive UI for mapping source fields to system fields
- **Data Table**: Displays processed data with sorting and filtering
- **Export Options**: Various export formats and destinations

## Configuration

### Supported File Formats

- CSV (.csv)
- Excel (.xlsx, .xls)
- Google Sheets (via API)

### Field Mapping

The system supports mapping for common Amazon seller fields:

- ASIN
- Product Title
- Category
- Price
- Units Sold
- Revenue
- Date

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

## Support

For support, email [support@nebulasuite.com](mailto:support@nebulasuite.com) or join our Slack channel.
# Nebula Suite

A modern, scalable SaaS platform for Amazon sellers with a focus on clean design, security, and performance.

![Nebula Suite Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nebula-logo-white-jSFQ1pVPCAlVYL9eI65pp0uRZBI2i8.png)

## Implementation Plan

### 1. Core Infrastructure
- [x] Project setup with Next.js 14 and TypeScript
- [x] Tailwind CSS configuration
- [x] shadcn/ui component library integration
- [x] Environment variable configuration
- [x] Basic routing structure
- [x] Error boundary implementation
- [x] Logging system setup
- [x] Monitoring integration

### 2. Authentication & Authorization
- [x] Supabase authentication setup
- [x] Login/Register pages
- [x] Protected routes middleware
- [x] User session management
- [x] Role-based access control
- [x] OAuth providers integration (Google)
- [x] Password reset flow
- [x] Email verification system

### 3. Data Pipeline Architecture
- [x] File upload system
  - [x] Drag-and-drop interface
  - [x] File type validation
  - [x] Size limit enforcement
  - [x] Progress indicators
  - [x] Batch upload support

- [x] Data Mapping System
  - [x] Field mapping interface
  - [x] Validation rules
  - [x] Template system
  - [x] Custom field mapping
  - [x] Mapping preview
  - [x] Save/load mapping configurations

- [x] Data Processing
  - [x] CSV parsing
  - [x] Excel parsing
  - [x] Basic validation
  - [x] Data transformation
  - [x] Error handling
  - [x] Batch processing
  - [x] Processing status tracking

- [x] Export System
  - [x] CSV export
  - [x] Excel export
  - [x] Google Sheets integration
  - [x] API export endpoints
  - [x] Export job queuing

### 4. User Interface
- [x] Responsive layout system
- [x] Dark/light mode
- [x] Navigation components
  - [x] Main navigation
  - [x] Sidebar
  - [x] Mobile navigation
  - [x] Breadcrumbs
- [x] Dashboard components
  - [x] Overview cards
  - [x] Data visualizations
  - [x] Recent activity
- [x] Advanced UI features
  - [x] Keyboard shortcuts
  - [x] Drag-and-drop interfaces
  - [x] Advanced filters
  - [x] Bulk actions

### 5. Documentation
- [x] Basic documentation structure
- [x] Architecture diagrams
- [x] Feature documentation
- [x] API documentation
- [x] User guides
- [x] Tutorial videos
- [x] Code examples
- [x] Troubleshooting guides

### 6. Performance Optimization
- [x] Server component optimization
- [x] Client component code splitting
- [x] Image optimization
- [x] API route optimization
- [x] Database query optimization
- [x] Caching strategy
- [x] Bundle size optimization

### 7. Testing
- [x] Unit tests
  - [x] Component tests
  - [x] Utility function tests
  - [x] API route tests
- [x] Integration tests
  - [x] Authentication flow
  - [x] Data pipeline flow
  - [x] Export flow
- [x] E2E tests
  - [x] User journeys
  - [x] Critical paths
- [x] Performance tests
  - [x] Load testing
  - [x] Stress testing

### 8. Security
- [x] Authentication security
- [x] CSRF protection
- [x] Input validation
- [x] Rate limiting
- [x] Data encryption
- [x] Audit logging
- [x] Security headers
- [x] Vulnerability scanning

### 9. Monitoring & Analytics
- [x] Error tracking
- [x] Performance monitoring
- [x] Usage analytics
- [x] User behavior tracking
- [x] System health monitoring
- [x] Alert system
- [x] Audit logs

### 10. Deployment & DevOps
- [x] Vercel deployment setup
- [x] Environment configuration
- [x] CI/CD pipeline
- [x] Staging environment
- [x] Production environment
- [x] Backup strategy
- [x] Disaster recovery plan

## Recent Improvements

### Performance
- Moved heavy data processing to server-side using Server Actions
- Implemented memoization for expensive calculations
- Reduced bundle size with dynamic imports
- Optimized data transformations to reduce iterations

### Modularity
- Extracted reusable logic into custom hooks
- Separated concerns in components (UI rendering vs. data fetching)
- Consolidated utility functions into domain-specific modules
- Improved component composition patterns

### Security
- Added comprehensive Content Security Policy
- Implemented server-side secure storage for sensitive data
- Enhanced input validation with Zod schemas
- Added additional security headers
- Improved CSRF protection

### Error Handling
- Standardized error handling across the application
- Created centralized error handling utilities
- Improved error logging and monitoring
- Added user-friendly error messages

## Features

- 🎨 Modern UI with dark/light mode
- ⌨️ Keyboard-first navigation
- 📱 Responsive design
- 🔒 Role-based access control
- 📊 Advanced analytics
- 🚀 Optimized performance
- ♿ Accessibility focused

### File Upload System
- Drag-and-drop interface
- Support for CSV and Excel files
- Google Sheets integration
- Automatic field detection

### Data Mapping
- Interactive field mapping interface
- Real-time validation
- Mapping templates
- Error highlighting and suggestions

### Data Processing
- Automated data validation
- Format standardization
- Batch processing
- Error handling and reporting

### Export Options
- CSV export
- Excel export
- Direct to Google Drive
- API access

## Data Pipeline Architecture

The Nebula Suite follows a structured data pipeline architecture that enables efficient processing of Amazon seller data:

![Data Pipeline Architecture](/docs/images/data-pipeline-architecture.png)

### Data Mapping Process

Our intuitive data mapping process ensures accurate field mapping and data transformation:

![Data Mapping Process](/docs/images/data-mapping-process.png)

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase
- Vercel
- PapaParse for CSV processing
- XLSX for Excel processing
- React Query for data fetching
- shadcn/ui for UI components

## Project Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable UI components
- `lib/` - Utility functions and configuration
- `public/` - Static assets

### Key Components

- **File Uploader**: Handles file uploads with drag-and-drop functionality
- **Data Mapper**: Interactive UI for mapping source fields to system fields
- **Data Table**: Displays processed data with sorting and filtering
- **Export Options**: Various export formats and destinations

## Configuration

### Supported File Formats

- CSV (.csv)
- Excel (.xlsx, .xls)
- Google Sheets (via API)

### Field Mapping

The system supports mapping for common Amazon seller fields:

- ASIN
- Product Title
- Category
- Price
- Units Sold
- Revenue
- Date

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](LICENSE)

## Support

For support, email [support@nebulasuite.com](mailto:support@nebulasuite.com) or join our Slack channel.
