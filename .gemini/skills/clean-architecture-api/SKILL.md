---
name: clean-architecture-api
description: Architectural standards and guidelines for building modular, maintainable full-stack backend services and RESTful APIs.
---

# Clean Architecture & RESTful API Skill

## Core Principles
1. **Layered Architecture**:
   - **Controllers / Handlers**: Handle HTTP requests, payload parsing, and response status codes.
   - **Services / Use Cases**: Business logic, domain rules, and workflow orchestration.
   - **Repositories / Data Access**: Database queries, ORM interactions, and external data sources.

2. **API Design Standards**:
   - Use standard HTTP methods (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`).
   - Use plural nouns for resources (e.g., `/api/v1/users`, `/api/v1/orders`).
   - Return consistent JSON response structures:
     ```json
     {
       "success": true,
       "data": { ... },
       "message": "Operation completed successfully"
     }
     ```

3. **Standardized Error Handling**:
   - Return appropriate HTTP status codes (200, 201, 400, 401, 403, 404, 500).
   - Use structured error responses:
     ```json
     {
       "success": false,
       "error": {
         "code": "RESOURCE_NOT_FOUND",
         "message": "The requested item was not found"
       }
     }
     ```

4. **Data Transfer Objects (DTOs)**:
   - Validate incoming payloads before passing them to the business logic layer.
