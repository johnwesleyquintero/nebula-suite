# Nebula Suite

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/johnwesleyquintero/nebula-suite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, scalable SaaS platform for Amazon sellers with a focus on clean design, security, and performance.

![Nebula Suite Logo](https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nebula-logo-white-jSFQ1pVPCAlVYL9eI65pp0uRZBI2i8.png)

[Clone Repository](https://github.com/johnwesleyquintero/nebula-suite.git)

---

## Reported Issues and Status

### Security and Dependency Issues

| Issue ID | Description                                                        | Severity   | Status        | Assigned To | Last Updated | Fix/Mitigation                                                                  |
| :------- | :----------------------------------------------------------------- | :--------- | :------------ | :---------- | :----------- | :------------------------------------------------------------------------------ |
| #001     | Prototype Pollution in `xlsx` package                              | High       | Open          | John        | 2025-02-28   | No fix available. Investigate mitigation strategies or consider an alternative. |
| #002     | `dompurify` vulnerability in `mermaid` dependency                  | Moderate   | Open          | Jane        | 2025-02-28   | Fix available by updating `mermaid`, but introduces breaking changes.           |
| #003     | Peer dependency conflict between `react-day-picker` and `date-fns` | Medium     | In Progress   | Alex        | 2025-02-28   | Downgrading `date-fns` did not resolve this conflict.                           |

**Status Definitions:**

-   **Open:** The issue has been identified and is awaiting resolution.
-   **In Progress:** Work is underway to address the issue.
-   **Resolved:** The issue has been fixed.
-   **Mitigated:** Temporary measures are in place to reduce the impact of the issue.

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

-   \[x] Project setup with Next.js 14 and TypeScript
-   \[x] Tailwind CSS configuration
-   \[x] shadcn/ui component library integration
-   \[x] Environment variable configuration
-   \[x] Basic routing structure
-   \[x] Error boundary implementation
-   \[x] Logging system setup
-   \[x] Monitoring integration

### 2. Authentication & Authorization

-   \[x] Supabase authentication setup
-   \[x] Login/Register pages
-   \[x] Protected routes middleware
-   \[x] User session management
-   \[x] Role-based access control
-   \[x] OAuth providers integration (Google)
-   \[x] Password reset flow
-   \[x] Email verification system

### 3. Data Pipeline Architecture

-   \[x] File upload system

    -   \[x] Drag-and-drop interface
    -   \[x] File type validation
    -   \[x] Size limit enforcement
    -   \[x] Progress indicators
    -   \[x] Batch upload support

-   \[x] Data Mapping System

    -   \[x] Field mapping interface
    -   \[x] Validation rules
    -   \[x] Template system
    -   \[x] Custom field mapping
    -   \[x] Mapping preview
    -   \[x] Save/load mapping configurations

-   \[x] Data Processing

    -   \[x] CSV parsing
    -   \[x] Excel parsing
    -   \[x] Basic validation
    -   \[x] Data transformation
    -   \[x] Error handling
    -   \[x] Batch processing
    -   \[x] Processing status tracking

-   \[x] Export System

    -   \[x] CSV export
    -   \[x] Excel export
    -   \[x] Google Sheets integration
    -   \[x] API export endpoints
    -   \[x] Export job queuing

### 4. User Interface

-   \[x] Responsive layout system
-   \[x] Dark/light mode
-   \[x] Navigation components

    -   \[x] Main navigation
    -   \[x] Sidebar
    -   \[x] Mobile navigation
    -   \[x] Breadcrumbs

-   \[x] Dashboard components

    -   \[x] Overview cards
    -   \[x] Data visualizations
    -   \[x] Recent activity

-   \[x] Advanced UI features

    -   \[x] Keyboard shortcuts
    -   \[x] Drag-and-drop interfaces
    -   \[x] Advanced filters
    -   \[x] Bulk actions

### 5. Documentation

-   \[x] Basic documentation structure
-   \[x] Architecture diagrams
-   \[x] Feature documentation
-   \[x] API documentation
-   \[x] User guides
-   \[x] Tutorial videos
-   \[x] Code examples
-   \[x] Troubleshooting guides

### 6. Performance Optimization

-   \[x] Server component optimization
-   \[x] Client component code splitting
-   \[x] Image optimization
-   \[x] API route optimization
-   \[x] Database query optimization
-   \[x] Caching strategy
-   \[x] Bundle size optimization

### 7. Testing

-   \[x] Unit tests

    -   \[x] Component tests
    -   \[x] Utility function tests
    -   \[x] API route tests

-   \[x] Integration tests

    -   \[x] Authentication flow
    -   \[x] Data pipeline flow
    -   \[x] Export flow

-   \[x] E2E tests

    -   \[x] User journeys
    -   \[x] Critical paths

-   \[x] Performance tests

    -   \[x] Load testing
    -   \[x] Stress testing

### 8. Security

-   \[x] Authentication security
-   \[x] CSRF protection
-   \[x] Input validation
-   \[x] Rate limiting
-   \[x] Data encryption
-   \[x] Audit logging
-   \[x] Security headers
-   \[x] Vulnerability scanning

### 9. Monitoring & Analytics

-   \[x] Error tracking
-   \[x] Performance monitoring
-   \[x] Usage analytics
-   \[x] User behavior tracking
-   \[x] System health monitoring
-   \[x] Alert system
-   \[x] Audit logs

### 10. Deployment & DevOps

-   \[x] Vercel deployment setup
-   \[x] Environment configuration
-   \[x] CI/CD pipeline
-   \[x] Staging environment
-   \[x] Production environment
-   \[x] Backup strategy
-   \[x] Disaster recovery plan

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

| Technology              | Description                       |
| :---------------------- | :-------------------------------- |
| Next.js 14 (App Router) | Frontend framework                |
| TypeScript              | Programming language              |
| Tailwind CSS            | Styling framework                 |
| Supabase                | Backend-as-a-Service              |
| Vercel                  | Deployment platform               |
| PapaParse               | CSV processing library            |
| XLSX                    | Excel processing library          |
| React Query             | Data fetching and caching library |
| shadcn/ui               | UI component library              |

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

1.  Clone the repository: `git clone <repository_url>`
2.  Navigate to the project directory: `cd nebula-suite`
3.  Install dependencies: `npm install`
4.  Set up environment variables (see `.env.example`)
5.  Run the development server: `npm run dev`

---

## New Features

-   Marketing & SEO Dashboards: New dashboards for analyzing marketing performance and SEO metrics.
-   Sales Predictions Module: A new module for predicting sales trends.

---

## Usage Examples

```javascript
// Example: Fetching data using React Query
import { useQuery } from "react-query";
import { memo } from "react";

/**
 * Fetches data from the /api/data endpoint.
 * @async
 * @returns {Promise<Array<object>>} The fetched data as a JSON array.
 * @throws {Error} If the fetch request fails.
 */
const fetchData = async () => {
  try {
    const response = await fetch("/api/data");
    if (!response.ok) {
      // Log the error to the console for debugging purposes.  In a real application,
      // you would likely use a more robust error logging service (e.g., Sentry).
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    // Re-throw the error to be handled by the component.
    throw error;
  }
};

/**
 * Memoized loading spinner component.
 * @returns {JSX.Element} The loading spinner.
 */
const LoadingSpinner = memo(() => <div>Loading...</div>);

/**
 * Memoized error message component.
 * @param {object} props - The component props.
 * @param {string} props.message - The error message to display.
 * @returns {JSX.Element} The error message.
 */
const ErrorMessage = memo(({ message }) => (
  <p style={{ color: "red" }}>Error: {message}</p>
));

/**
 * Main component that fetches and displays data using React Query.
 * @returns {JSX.Element} The component.
 */
const MyComponent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["myData"], // Use an array for the query key for better cache invalidation
    queryFn: fetchData,
    // Add additional options for better performance and error handling
    staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
    cacheTime: 30 * 60 * 1000, // Cache data for 30 minutes
    retry: (failureCount, error) => {
      // Custom retry logic
      if (error instanceof Error && error.message.includes("404")) {
        return false; // Don't retry 404 errors
      }
      return failureCount < 3; // Retry up to 3 times
    },
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    refetchOnWindowFocus: false, // Prevent unnecessary refetches
  });

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <ul>
      {data?.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

// Memoize the entire component if parent re-renders are a concern
export default memo(MyComponent);
```

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## License

[MIT](LICENSE)

---

## Support

For support, email [support@nebulasuite.com](mailto:support@nebulasuite.com) or join our Slack channel.
