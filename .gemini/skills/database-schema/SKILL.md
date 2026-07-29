---
name: database-schema
description: Best practices for database modeling, migrations, indexing, relational integrity, and ORM usage.
---

# Database Schema & Migration Skill

## Core Principles
1. **Schema Design & Normalization**:
   - Use proper data types and constraints (`NOT NULL`, `DEFAULT`, `CHECK`).
   - Use UUIDs or CUIDs for primary keys in distributed systems, or auto-incrementing big integers for internal entities.
   - Include standard timestamp fields (`created_at`, `updated_at`, `deleted_at` for soft deletes).

2. **Foreign Keys & Referential Integrity**:
   - Explicitly define foreign key relationships and cascade rules (`ON DELETE CASCADE` or `ON DELETE SET NULL`).

3. **Indexing Strategy**:
   - Create indexes on frequently queried fields, foreign keys, and filter parameters.
   - Use compound indexes for multi-column queries and unique constraints for unique fields.

4. **Migrations & ORM**:
   - Always use versioned migration scripts (e.g., Prisma, Drizzle, TypeORM, Flyway) instead of raw direct schema updates.
   - Keep migrations idempotent and write rollback mechanisms where applicable.
