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

## Deployment

**See [DEPLOYMENT.md](DEPLOYMENT.md)** for step-by-step instructions to deploy to:
- Heroku
- Railway
- Render
- DigitalOcean App Platform

### Quick Production Build

```bash
# Build frontend
cd frontend
npm run build

# Test locally
cd ../backend
npm install
MONGO_URI=your_mongodb_uri npm start
# Visit http://localhost:5000
```

## Project Structure

```
.
├── backend/
│   ├── server.js          # Express app entry
│   ├── package.json
│   ├── .env.example
│   ├── models/
│   │   └── Contact.js     # MongoDB schema
│   └── routes/
│       └── contacts.js    # API endpoints
├── frontend/
│   ├── src/
│   │   ├── App.jsx        # Main React component
│   │   ├── main.jsx       # Entry point
│   │   └── components/
│   │       ├── ContactForm.jsx
│   │       └── ContactList.jsx
│   ├── index.html
│   ├── package.json
│   └── dist/              # Built files (after `npm run build`)
├── DEPLOYMENT.md          # Deployment guide
└── README.md
```

## Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/contacts_db
PORT=5000
```

## Notes

- In production, the backend serves the built frontend (`dist/`) at `/`.
- CORS is enabled for local development.
- The frontend uses `import.meta.env.VITE_API_URL` for API configuration (Vite standard).
- Form validation ensures name and phone are required; email is optional but must be valid if provided.

## License

MIT
