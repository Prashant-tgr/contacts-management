# Contact Management (MERN Stack)

A minimal yet functional Contact Management app built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Create contacts** with name, email, phone, and message
- **View all contacts** in a live-updating table
- **Delete contacts** instantly
- **Form validation** for required fields
- **Responsive UI** using Bootstrap

## Tech Stack

- **Backend**: Node.js + Express + MongoDB
- **Frontend**: React + Vite + Axios + Bootstrap
- **Database**: MongoDB Atlas (or local MongoDB)

## Quick Start (Development)

### Prerequisites
- Node.js and npm installed
- MongoDB running locally OR MongoDB Atlas account

### Backend

```bash
cd backend
cp .env.example .env
# Edit .env and set MONGO_URI if needed
npm install
npm run dev    # uses nodemon for auto-reload
```

Server runs on `http://localhost:5000` by default.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Visit the URL printed in the console (typically `http://localhost:5173`).

## API Endpoints

- `GET /api/contacts` — Fetch all contacts
- `POST /api/contacts` — Create a new contact
- `DELETE /api/contacts/:id` — Delete a contact by ID


