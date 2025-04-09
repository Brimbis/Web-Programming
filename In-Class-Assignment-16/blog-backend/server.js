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
    date: Date, 
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
        const {title, body, date} = req.body;
        const newPost = new Post({title, body, date});
        await newPost.save();
        res.status(200).json({message:'Post added successfully.'});
    } catch(err) {
        res.status(500).json({message: 'Failed to save post.'});
    }
});

app.put('/posts', async (req, res) => {
    try {
        const { _id, title, body, date } = req.body;
        const result = await Post.updateOne({ _id }, { title, body, date });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message:'Post not found.'});
        }

        res.status(200).json({message:'Post edited successfully.'});
    } catch (err) {
        res.status(500).json({message:'Failed to edit post.'});
    }
});

app.delete('/posts', async (req, res) => {
    try {
        const result = await Post.deleteOne({ _id: req.body._id });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'Post not found.' });
        }
        res.status(200).json({message:'Post deleted successfully.'});
    } catch (err) {
        res.status(500).json({message:'Failed to delete post.'});
    }
});

// Start server

app.listen(PORT, () => {console.log('Server is running on http://localhost:5000/')});