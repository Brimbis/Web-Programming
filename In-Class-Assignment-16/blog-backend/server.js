const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware

app.use(cors());
app.use(express.json());

// Connect to MongoDB

mongoose.connect('mongodb://localhost:27017/blog_db', {
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

const postSchema = new mongoose.Schema({
    title: String, 
    body: String, 
});

const Post = mongoose.model('Post', postSchema);

// Add Routes

app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err) {
        res.status(500).json({message: 'Failed to fetch posts.'});
    }
});

app.post('/posts', async (req, res) => {
    try {
        const {title, body} = req.body;
        const newPost = new Post({title, body});
        await newPost.save();
    } catch(err) {
        res.status(500).json({message: 'Failed to save post.'});
    }
});

app.put('/posts', async (req, res) => {
    try {
        const {title, body} = req.body;
        const editedPost = await Post.updateOne(req._id, {title, body});
        await editedPost.save();
    } catch(err) {
        res.status(500).json({message: 'Failed to edit post.'});
    }
});

app.delete('/posts', async (req, res) => {
    try {
        await Post.deleteOne(req._id);
    } catch(err) {
        res.status(500).json({message: 'Failed to delete post.'})
    }
});

// Start server

app.listen(PORT, () => {console.log('Server is running on http://localhost:5000/')});