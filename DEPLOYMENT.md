# Deployment Guide

This guide covers deploying the Contacts Management app to production.

## Pre-Deployment Setup

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```
   This generates `frontend/dist/` which the backend will serve.

2. **Create production .env file** in `backend/.env`:
   ```
   MONGO_URI=your_mongodb_atlas_uri
   PORT=5000
   ```
   - Replace `your_mongodb_atlas_uri` with your MongoDB Atlas connection string.
   - For MongoDB Atlas, sign up at https://www.mongodb.com/cloud/atlas and create a free cluster.

## Option 1: Deploy to Heroku

### Prerequisites
- Heroku account (free tier available)
- Heroku CLI installed

### Steps

1. **Commit your code to git** (if not already):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create a Heroku app**:
   ```bash
   heroku login
   heroku create your-app-name
   ```

3. **Add MongoDB Atlas URI as an env variable**:
   ```bash
   heroku config:set MONGO_URI=your_mongodb_atlas_uri
   ```

4. **Deploy**:
   ```bash
   git push heroku main
   ```

5. **Visit your app**:
   ```bash
   heroku open
   ```

---

## Option 2: Deploy to Railway

### Prerequisites
- Railway account (https://railway.app)

### Steps

1. **Connect your Git repository** to Railway:
   - Go to https://railway.app
   - Click "New Project" → "Deploy from GitHub"
   - Select your repository

2. **Add environment variable**:
   - In Railway dashboard, go to Variables
   - Add `MONGO_URI=your_mongodb_atlas_uri`
   - Add `PORT=5000` (Railway assigns a dynamic port, but this is a fallback)

3. **Set build and start commands**:
   - Build command: `cd frontend && npm run build && cd ../backend && npm install`
   - Start command: `cd backend && npm install && npm start`

4. **Deploy**:
   - Railway auto-deploys on git push

---

## Option 3: Deploy to Render

### Prerequisites
- Render account (https://render.com)

### Steps

1. **Create a new Web Service**:
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repo

2. **Configure**:
   - **Build Command**: `cd frontend && npm run build && cd ../backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Environment Variables**:
     - `MONGO_URI=your_mongodb_atlas_uri`

3. **Deploy**:
   - Render auto-deploys on git push

---

## Option 4: Deploy to DigitalOcean App Platform

### Prerequisites
- DigitalOcean account (https://digitalocean.com)

### Steps

1. **Create a new app**:
   - Go to DigitalOcean → App Platform
   - Connect your GitHub repo

2. **Configure**:
   - **Build Command**: `cd frontend && npm run build && cd ../backend && npm install`
   - **Run Command**: `cd backend && npm start`
   - **Environment Variables**:
     - `MONGO_URI=your_mongodb_atlas_uri`

3. **Deploy**:
   - DigitalOcean auto-deploys on git push

---

## Setup MongoDB Atlas (Free)

1. **Create an account** at https://www.mongodb.com/cloud/atlas
2. **Create a free cluster** (M0 tier, always free)
3. **Create a database user** with a strong password
4. **Whitelist your IP** (or allow access from anywhere for testing)
5. **Get your connection string**:
   - Click "Connect" → "Connect your application"
   - Copy the MongoDB URI
   - Replace `<password>` with your database user password
6. **Use this URI** as your `MONGO_URI` environment variable

---

## Local Testing Before Deploy

Before deploying, test the production build locally:

```bash
cd frontend
npm run build

cd ../backend
npm install
MONGO_URI=your_local_or_atlas_uri PORT=5000 npm start
```

Visit `http://localhost:5000` to verify everything works.

---

## Troubleshooting

- **App crashes on deploy?** Check logs in the platform's dashboard.
- **Database connection errors?** Verify `MONGO_URI` is correct and IP whitelist includes your deployment server.
- **Frontend not loading?** Ensure `frontend/dist/` was built before deployment.
- **API calls failing?** Frontend is served from backend—no CORS issues expected. Check MongoDB connection.

---

## Production Checklist

- [ ] Frontend built with `npm run build`
- [ ] MongoDB Atlas cluster created and URI configured
- [ ] `.env` configured with `MONGO_URI` and `PORT`
- [ ] Tested locally with production build
- [ ] Git repository initialized and committed
- [ ] Deployment platform configured
- [ ] Environment variables set on deployment platform
- [ ] Deployed and tested on live URL

