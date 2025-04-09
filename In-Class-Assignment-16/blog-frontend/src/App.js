import React, { useEffect, useState } from 'react';
import BarLoader from 'react-spinners/BarLoader';
import axios from 'axios';

export default function App() {

  const getDateTime = () => {
    const now = new Date();
    return now.toISOString().replace('T', ' ').substring(0, 19);
  };

  const formatDateTime = (date) => {
    if (date) {
      const formattedDate = new Date(date).toISOString().replace('T', ' ').substring(0, 19);
      return formattedDate;
    }
  }

  const [posts, setPosts] = useState([]);
  const [form, setForm] = useState({title:'', body:'', date:getDateTime()});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('http://localhost:5000/posts')
    .then(res => setPosts(res.data))
    .catch(err => console.error('Error fetching posts: ', err));
    setLoading(false);
  }, [posts]);

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEditing) {
      axios.post('http://localhost:5000/posts', form)
      .then(res => {
        setPosts([...posts, res.data]);
        setForm({title:'', body:'', date:getDateTime()});
      })
      .catch(err => console.error('Error submitting the post: ', err));

    } else {
      axios.put('http://localhost:5000/posts', {...form, _id: editId})
      .then(() => {
        setPosts(posts.map(p => (p._id === editId ? { ...p, ...form } : p)));
        setForm({title:'', body:'', date:getDateTime()});
        setIsEditing(false);
        setEditId(null);
      })
      .catch(err => console.error('Error editing the post: ', err));
    }
  };

  const handleDelete = (_id, title) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${title}"?`);
    console.log(_id);

    if (confirmDelete) {
      axios.delete('http://localhost:5000/posts', { data: { _id } })
      .then(res => setPosts([...posts, res.data]))
      .catch(err => console.error('Error deleting the post: ', err));
    }
  };

  const handleEdit = (post) => {
    setForm({
      title: post.title, 
      body: post.body, 
      date: getDateTime()
    });
    setEditId(post._id);
    setIsEditing(true);
    window.scrollTo(0, 0);
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
        <button type='submit' style={{ padding: '10px 20px' }}>
          {isEditing ? 'Update Post' : 'Submit Post'}
        </button>
      </form>

      <h2>Blog Posts</h2>
      {loading ? (<BarLoader/>) : 
      ( posts.map(post => (
          <div key={post._id} style ={{border:'1px solid #ccc', padding:'10px', marginBottom:'15px', backgroundColor:'#222', borderRadius:'1rem'}}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
            <p style={{ fontSize: '15px', color: 'gray', margin: 0 }}>
              {formatDateTime(post.date)}
            </p>
            <div>
              <button
                onClick={() => handleDelete(post._id, post.title)}
                style={{ padding: '5px 15px', fontSize: '20px', marginRight: '10px', backgroundColor: 'pink', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
              >&#128465;</button>
              <button
                onClick={() => handleEdit(post)}
                style={{padding: '5px 15px', fontSize: '20px', backgroundColor: '#eee', border: 'none', borderRadius: '5px', cursor: 'pointer'}}
              >&#9998;</button>
            </div>
          </div>
          </div>
        ))
      )}
    </div>
  );

}