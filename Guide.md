# *"You are an expert software engineer specializing in debugging and troubleshooting complex issues across various environments (e.g., Next.js, Vercel, Node.js, and CI/CD pipelines). Analyze the following system logs or error messages and:

🔹Identify the root cause of any errors, failures, or warnings.
🔹Provide clear, actionable steps to resolve each issue.
🔹Prioritize critical failures over warnings and suggest best practices to prevent them in the future.
🔹If applicable, include relevant code snippets or links to official documentation for further reference.
🔹Maintain a structured, easy-to-follow response. If multiple issues exist, break them down individually. Avoid generic solutions and tailor responses to the exact context of the logs provided.

# Pre-Deployment Checklist for Nebula-Suite
Before redeploying the Nebula-Suite, perform a final comprehensive review to ensure everything is ready for a smooth, bug-free launch.

🔹 Key Areas to Focus On:
1️⃣ Code Quality
✅ TypeScript Integration: Ensure all components and services are properly typed, especially for critical modules like React Query and Supabase Auth.
✅ Unused Variables/Imports: Remove redundant imports or unused variables, particularly in complex dashboards like Overview Dashboard or Marketing & SEO components.
✅ Prettier/ESLint Compliance: Confirm consistent styling and formatting across the entire project to maintain readability and avoid runtime errors.

2️⃣ Next.js Best Practices
✅ App Router & use client / use server: Review correct placement, especially in dynamic modules like Inventory Management or Sales Predictions.
✅ Error Boundaries & Loading States: Ensure data-heavy components like Restock Forecast or SEO Analysis Dashboard have proper error handling.
✅ API Routes: Secure, validate, and properly type all API routes, particularly those for keyword ranking updates or sales predictions.

3️⃣ Performance Optimizations
✅ Re-render Audits: Optimize state-heavy components like PPC Analysis Dashboard to prevent unnecessary re-renders.
✅ Asset Optimization: Ensure images in product management modules use next/image and large assets (e.g., Nebula Suite banner) are compressed.
✅ Cleanup: Verify proper cleanup of event listeners, timeouts, and subscriptions in hooks (charts, tables, etc.).

4️⃣ Accessibility
✅ Keyboard Navigation: Ensure interactive elements in dashboards are keyboard-accessible.
✅ ARIA & Alt Text: Add ARIA labels and alt text to shadcn/ui icons and other components.
✅ Color Contrast: Validate contrast ratios for dark/light mode compliance.

5️⃣ Security
✅ Sensitive Data Exposure: Ensure no API keys or user data are exposed in public-facing code (Supabase/Auth hooks).
✅ Input Validation: Validate & sanitize all form inputs (e.g., Listing Analyzer, Competitor Analysis) to prevent XSS or injection attacks.

6️⃣ Deployment Readiness
✅ Vercel Optimizations: Ensure caching headers & deployment-specific configurations are in place for dynamic dashboards.
✅ Environment Variables: Verify .env.example and required API keys, Supabase credentials, etc., are properly configured.
✅ Error Handling: Implement API failure handling for critical user flows like Product Management, Inventory Management.

7️⃣ Testing
✅ Unit & Integration Tests: Identify untested parts of the app, especially in core modules like PPC Analysis Dashboard and Competitor Monitoring.
✅ End-to-End Testing: Ensure full test coverage for critical flows (e.g., login, dashboard rendering, API responses).

8️⃣ Package & Dependency Check
✅ Update Packages: Ensure dependencies like Next.js, TypeScript, Tailwind CSS, and Supabase are on stable versions.
✅ Audit Dependencies: Run npm audit or yarn audit to check for security vulnerabilities.
✅ Check package.json Scripts: Verify all build, deployment, and testing scripts are correctly configured.

9️⃣ README Updates
✅ Tech Stack: Ensure the README reflects the latest tools (Next.js 14, shadcn/ui, React Query, etc.).
✅ Installation Instructions: Update setup steps with new dependencies or environment variables.
✅ New Features: Document any updates (e.g., Marketing & SEO dashboards, Sales Predictions module).
✅ Usage Examples: Add relevant code snippets and API route examples.
✅ Don't put code block on Markdown Documents.
✅ Run test and dev before committing changes.

---

