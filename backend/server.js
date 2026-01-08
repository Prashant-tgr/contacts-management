const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const contactRoutes = require('./routes/contacts');
app.use('/api/contacts', contactRoutes);
/* *
// Serve built frontend
const distPath = path.join(__dirname, '../frontend/dist');
app.use(express.static(distPath));
app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});
*/
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/contacts_db';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
