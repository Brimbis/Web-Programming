import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title:'', body:''});

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.error('Error fetching posts: ', err));
  }, []);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/posts', form)
    .then(res => {
      setPosts([...posts, res.data]);
      setForm({title:'', body:''});
    })
    .catch(err => console.error('Error submitting the post: ', err));
  };

  return (
    <div style={{padding:'20px', maxWidth:'600px', margin:'auto'}}>
      <h2>Create a Blog Post</h2>
      <form onSubmit={handleSubmit} style={{marginBottom:'2rem'}}>
        <input
          name = 'title'
          placeholder = 'Post Title'
          value = {form.title}
          onChange = {handleChange}
          style = {{width:'100%', padding:'10px', marginBottom:'10px'}}
        />
        <textarea
          name = 'body'
          placeholder = 'Post Body'
          value = {form.body}
          onChange = {handleChange}
          style = {{width:'100%', padding:'10px', height:'100px', marginBottom:'10px'}}
        />
        <button type = 'submit' style = {{padding:'10px 20px'}}>Submit Post</button>
      </form>

      <h2>Blog Posts</h2>
      {posts.map(post => (
        <div key={post.id} style ={{border:'1px solid #ccc', padding:'10px', marginBottom:'15px'}}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );

}