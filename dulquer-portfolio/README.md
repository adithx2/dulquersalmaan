# Dulquer Salmaan Portfolio — MERN Stack

A full-stack portfolio website for actor Dulquer Salmaan, built with **MongoDB, Express, React, and Node.js**.

---

## Project Structure

```
dulquer-portfolio/
├── backend/
│   ├── config/
│   │   └── seed.js              # Database seeder
│   ├── controllers/
│   │   ├── aboutController.js
│   │   ├── awardController.js
│   │   └── filmController.js
│   ├── models/
│   │   ├── About.js
│   │   ├── Award.js
│   │   └── Film.js
│   ├── routes/
│   │   ├── about.js
│   │   ├── awards.js
│   │   └── films.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Awards/
│   │   │   │   ├── AwardItem.js
│   │   │   │   └── AwardItem.css
│   │   │   ├── Films/
│   │   │   │   ├── FilmCard.js
│   │   │   │   └── FilmCard.css
│   │   │   ├── Footer/
│   │   │   │   ├── Footer.js
│   │   │   │   └── Footer.css
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.js
│   │   │   │   └── Hero.css
│   │   │   └── Navbar/
│   │   │       ├── Navbar.js
│   │   │       └── Navbar.css
│   │   ├── hooks/
│   │   │   └── useFetch.js
│   │   ├── pages/
│   │   │   ├── About.js / About.css
│   │   │   ├── Awards.js / Awards.css
│   │   │   ├── FilmDetail.js / FilmDetail.css
│   │   │   ├── Films.js / Films.css
│   │   │   ├── Home.js / Home.css
│   │   │   └── NotFound.js / NotFound.css
│   │   ├── utils/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── .env.example
│   └── package.json
├── .gitignore
├── package.json
└── README.md
```

---

## Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- npm

---

## Quick Start

### 1. Clone & Install

```bash
# Install root + all dependencies
npm run install:all
```

### 2. Configure Environment

```bash
# Backend
cp backend/.env.example backend/.env
# Edit backend/.env and set your MONGO_URI

# Frontend
cp frontend/.env.example frontend/.env
```

### 3. Seed the Database

```bash
npm run seed
```

### 4. Run Both Servers

```bash
npm run dev
```

- Backend runs on: `http://localhost:5000`
- Frontend runs on: `http://localhost:3000`

---

## API Endpoints

| Method | Endpoint              | Description              |
|--------|-----------------------|--------------------------|
| GET    | /api/health           | Health check             |
| GET    | /api/about            | Get profile/bio data     |
| PUT    | /api/about            | Update profile data      |
| GET    | /api/films            | Get all films (filterable)|
| GET    | /api/films/:id        | Get single film          |
| POST   | /api/films            | Create a film            |
| PUT    | /api/films/:id        | Update a film            |
| DELETE | /api/films/:id        | Delete a film            |
| GET    | /api/awards           | Get all awards           |
| GET    | /api/awards/:id       | Get single award         |
| POST   | /api/awards           | Create an award          |
| PUT    | /api/awards/:id       | Update an award          |
| DELETE | /api/awards/:id       | Delete an award          |

### Film Query Params

```
GET /api/films?language=Malayalam&status=released&featured=true
```

---

## Pages

| Route          | Description                         |
|----------------|-------------------------------------|
| `/`            | Home — hero, featured films, awards |
| `/films`       | Full filmography with filters       |
| `/films/:id`   | Individual film detail page         |
| `/awards`      | All awards & honours                |
| `/about`       | Bio, personal info, social links    |

---

## Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Frontend  | React 18, React Router v6   |
| Styling   | Plain CSS with CSS Variables|
| HTTP      | Axios                       |
| Backend   | Express.js                  |
| Database  | MongoDB + Mongoose          |
| Dev Tools | Nodemon, Concurrently        |

---

## Deployment

### Backend (Render / Railway)
Set environment variables:
- `MONGO_URI` — your MongoDB Atlas connection string
- `CLIENT_URL` — your frontend URL
- `NODE_ENV=production`

### Frontend (Vercel / Netlify)
Set environment variable:
- `REACT_APP_API_URL` — your deployed backend URL + `/api`
