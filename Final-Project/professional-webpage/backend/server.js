const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware

app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/profile_db', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then(() => {
    console.log('MongoDB Connected!');
})
.catch((err) => {
    console.error('MongoDB Error', err);
});

// Define Schema and Model

const profileSchema = new mongoose.Schema({
    name: String, 
    age: Number, 
    interests: Array, 
    biography: String, 
    education: Object, 
    contactInfo: Object
});

const Profile = mongoose.model('info', profileSchema, 'info');

// Add Routes

app.get('/info', async (req, res) => {
    try {
        const info = await Profile.findOne();
        res.json(info);
    } catch(err) {
        res.status(500).json({message: 'Failed to fetch posts.'});
    }
});

// Start server

app.listen(PORT, () => {console.log('Server is running on http://localhost:5000/')});