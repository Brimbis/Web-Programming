import {useState} from 'react';
import '../styles/App.css';
import axios from 'axios';

export default function Projects() {
    const [projects, setProjects] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/projects')
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => console.error('Error fetching projects:', err));
    }, []);

    return (
        <>
            <h2 className="text-3xl font-bold">Projects</h2>
        </>
    )
}