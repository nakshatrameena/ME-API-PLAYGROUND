# Me-API Playground – Track A (Backend Assessment)

This repository contains my submission for **Track A: Backend Assessment ("Me‑API Playground")** as part of the **Predusk Technology (ProcessVenue) – Intern Software & AI Developer** hiring process.

The goal of this assignment is to design, implement, and deploy a small but production‑minded backend system that stores *my own candidate profile* in a database, exposes it via APIs, and provides a minimal frontend playground to query and view the data.

---

## 🚀 Live URLs

* **Backend API**: `http://<your-backend-url>`
* **Frontend UI**: `http://<your-frontend-url>`
* **Health Check**: `GET /health`

> All URLs load without errors and are CORS‑enabled for frontend access.

---

## 🧠 High‑Level Architecture

```
Frontend (Next.js)
        │
        │  HTTP (REST APIs)
        ▼
Backend (Node.js + Express + TypeScript)
        │
        │  Prisma ORM
        ▼
PostgreSQL Database
```

* **Frontend**: Minimal UI to view profile, list projects, and query by skills
* **Backend**: RESTful API built with Express + TypeScript
* **Database**: PostgreSQL accessed via Prisma ORM

---

## 📂 Project Structure

```
me-api-playground/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── profile.ts     # Profile CRUD routes
│   │   │   ├── query.ts       # Search & filter endpoints
│   │   │   └── health.ts      # Health check
│   │   ├── controllers/       # Business logic
│   │   ├── prisma/
│   │   │   └── schema.prisma  # Database schema
│   │   ├── app.ts             # Express app configuration
│   │   └── server.ts          # Server bootstrap
│   ├── prisma/migrations/     # SQL migrations
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── pages/
│   │   └── index.tsx          # Minimal UI playground
│   └── package.json
│
└── README.md
```

---

## 🗄️ Database Design

### Entities

* **Profile** – Core candidate information
* **Skill** – Skills linked to profile
* **Project** – Projects with title, description, and links
* **Work** – Work/Internship history
* **Link** – GitHub, LinkedIn, Portfolio

### Relationships

* One **Profile** → many **Skills**, **Projects**, **Work**
* One **Profile** → one **Link**

### Schema

Database schema is defined using **Prisma** and versioned using migrations:

```
backend/prisma/schema.prisma
backend/prisma/migrations/
```

The database is **seeded with my real profile data**, as required.

---

## 🔌 API Endpoints

### Health

```
GET /health
```

Returns service liveness.

**Response**:

```json
{ "status": "ok" }
```

---

### Profile

```
GET    /profile        # Fetch my profile
POST   /profile        # Create profile (optional)
PUT    /profile        # Update profile (optional)
```

---

### Query Endpoints

```
GET /query/projects?skill=python
GET /query/skills/top
GET /query/search?q=node
```

Examples:

```bash
curl "http://localhost:4000/query/projects?skill=PostgreSQL"
```

---

## 🖥️ Frontend (Very Minimal UI)

The frontend is intentionally simple and focuses on functionality rather than design.

Features:

* View full profile
* List projects
* Search projects by skill
* Consume hosted backend APIs via fetch

Tech:

* **Next.js**
* **TypeScript**

---

## ⚙️ Local Setup

### Prerequisites

* Node.js (>=18)
* PostgreSQL
* npm

---

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Update `.env`:

```
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/me_api_db"
```

Run migrations:

```bash
npx prisma migrate dev
```

Start backend:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:4000
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:3000
```

---

## 📄 Sample cURL Requests

```bash
curl http://localhost:4000/health
curl http://localhost:4000/profile
curl "http://localhost:4000/query/projects?skill=Node.js"
```

---

## 🔐 Security & Limitations

* No authentication (single‑user system by design)
* Write APIs are not protected (acceptable for assignment scope)
* No pagination for large datasets
* Minimal UI without advanced error handling

---

## 🌟 Nice‑to‑Have (Optional Enhancements)

* Auth middleware for write operations
* Rate limiting
* Pagination
* Unit & integration tests
* Logging with Winston/Pino

---

## 📎 Resume

📄 **Resume Link**: `https://drive.google.com/file/d/1EP2nS2Oky0GcE3OgKxoYDIGxsWA6Zmvq/view?usp=drive_link`

---

## ✅ Acceptance Criteria Checklist

* [x] `GET /health` returns 200
* [x] Profile data stored in database
* [x] Query endpoints return filtered results
* [x] Seed data visible via UI
* [x] README complete & reproducible
* [x] Live URLs accessible

---

## 👤 Author

**Nakshatra Meena**
Software Development Engineer (Aspirant)

---

Thank you for reviewing my submission
