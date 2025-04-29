import {useState, useEffect} from 'react';
import '../styles/App.css';
import LoadingBar from '../components/LoadingBar';
import axios from 'axios';

export default function Education() {
    const [loading, setLoading] = useState(true);
    const [hasTimedOut, setHasTimedOut] = useState(false);
    const [education, setEducation] = useState('');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHasTimedOut(true);
        }, 1000);

        axios.get('http://localhost:5000/education')
            .then(res => {
                clearTimeout(timeout);
                setEducation(res.data);
                setLoading(false);
            })
            .catch(err => {
                clearTimeout(timeout);
                console.error('Error fetching education:', err);
                setLoading(false);
            });
    }, []);

    if (loading && !hasTimedOut) {
        return (
            <LoadingBar type='loading'/>
        );
    } 

    if (hasTimedOut || !education) {
        return (
            <LoadingBar type='failed'/>
        );
    }

    return (
        <>
        <div className="min-h-screen w-full bg-gray-800 flex justify-center px-4">
            <div className="font-sans text-blue-100 flex flex-col items-center max-w-5xl w-full py-10">
                <h2 className="text-4xl font-bold mb-10">Education</h2>
            </div>
        </div>
        </>
    )
}