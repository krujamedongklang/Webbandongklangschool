---
name: testing-qa
description: Testing standards, unit testing, integration testing, and end-to-end testing guidelines.
---

# Testing & Quality Assurance Skill

## Core Principles
1. **Testing Pyramid Strategy**:
   - **Unit Tests**: Test business logic and helper functions in isolation (fast, high volume).
   - **Integration Tests**: Test API endpoints, controllers, and database interactions with test databases/mocks.
   - **E2E Tests**: Test complete critical user flows (login, checkout, dashboard) using headless browsers.

2. **Test Cleanliness & AAA Pattern**:
   - Follow Arrange-Act-Assert structure in every test.
   - Make tests independent and deterministic. Clean up test databases between test runs.

3. **Edge Case Coverage**:
   - Test both success paths and failure scenarios (invalid inputs, network timeouts, missing headers, unauthenticated calls).

4. **Tooling Standards**:
   - Use Vitest/Jest for unit and integration testing.
   - Use Playwright or Cypress for E2E testing.
