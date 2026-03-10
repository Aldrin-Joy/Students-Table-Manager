# Backend Placeholder — NestJS + PostgreSQL

This folder is a **structural placeholder** showing how a NestJS + PostgreSQL
backend could be wired up to serve this Students Table Manager frontend.

> **Note:** No code is implemented here. This is a reference scaffold only.

## Proposed Structure

```
backend/
├── src/
│   ├── app.module.ts          # Root module importing StudentsModule
│   ├── main.ts                # NestJS bootstrap (port 3000)
│   └── students/
│       ├── students.module.ts      # Feature module
│       ├── students.controller.ts  # REST endpoints
│       ├── students.service.ts     # Business logic
│       ├── students.entity.ts      # TypeORM entity
│       └── dto/
│           ├── create-student.dto.ts
│           └── update-student.dto.ts
├── .env.example               # DATABASE_URL, PORT
└── package.json
```

## Proposed Endpoints

| Method | Path              | Description          |
|--------|-------------------|----------------------|
| GET    | /students         | List all students    |
| POST   | /students         | Create a student     |
| PATCH  | /students/:id     | Update a student     |
| DELETE | /students/:id     | Delete a student     |

## Tech Stack

- **Framework:** NestJS 10
- **ORM:** TypeORM
- **Database:** PostgreSQL 15
- **Validation:** class-validator + class-transformer

## Environment Variables

```env
DATABASE_URL=postgres://user:password@localhost:5432/students_db
PORT=3000
```

## How to Bootstrap (when implemented)

```bash
npm install -g @nestjs/cli
nest new backend
cd backend
npm install @nestjs/typeorm typeorm pg class-validator class-transformer
```
