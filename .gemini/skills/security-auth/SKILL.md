---
name: security-auth
description: Security guidelines, OWASP safeguards, input validation, authentication, and authorization standards.
---

# Security & Authentication Skill

## Core Principles
1. **Input Validation & Sanitization**:
   - Never trust client input. Validate all incoming data using schema validation libraries (e.g., Zod, Valibot, Joi).
   - Sanitize strings to prevent XSS (Cross-Site Scripting) and SQL Injection attacks.

2. **Authentication & Token Management**:
   - Hash passwords using strong algorithms (e.g., `argon2id` or `bcrypt` with appropriate cost factor).
   - Use short-lived Access Tokens (JWT) and HTTP-only, secure, SameSite Refresh Cookies.

3. **Authorization & RBAC**:
   - Enforce Role-Based Access Control (RBAC) at both API endpoints and database level.
   - Verify ownership before allowing mutation or access to specific records (prevent IDOR).

4. **Security Headers & Rate Limiting**:
   - Enable CORS with explicit origin whitelisting.
   - Set security headers (Helmet, Content Security Policy, X-Frame-Options).
   - Implement Rate Limiting on authentication and public endpoints to prevent brute-force attacks.
