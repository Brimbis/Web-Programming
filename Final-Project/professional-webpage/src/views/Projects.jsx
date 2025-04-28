import {useState, useEffect} from 'react';
import '../styles/App.css';
import Card from '../components/Card';
import axios from 'axios';

export default function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/projects')
            .then(res => {
                // Sort Projects by date
                const sortedProjects = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
                setProjects(sortedProjects);
            })
            .catch(err => console.error('Error fetching projects:', err));
    }, []);

    return (
        <div className="min-h-screen w-full bg-gray-800 flex justify-center px-4">
            <div className="font-sans text-blue-100 flex flex-col items-center max-w-5xl w-full py-10">
                <h2 className="text-4xl font-bold mb-10">Projects</h2>
        
                {projects.map((project, index) => (
                <Card
                    key={index}
                    type="project"
                    title={project.name}
                    description={project.description}
                    images={project.images}
                    date={project.date}
                    technologies={project.technologies}
                    link={project.link}
                />
                ))}
            </div>
        </div>
    );
}