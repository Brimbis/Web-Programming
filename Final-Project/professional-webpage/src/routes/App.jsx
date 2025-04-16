import {useState} from 'react'; 
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BackToTopButton from '../components/BackToTopButton.jsx';
import AboutMe from '../views/AboutMe.jsx';

export default function App() {

  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-bold underline' : 'hover:underline'
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-bold underline' : 'hover:underline'
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-bold underline' : 'hover:underline'
              }
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-yellow-400 font-bold underline' : 'hover:underline'
              }
            >
              Contact Info
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Page content */}
      <div className="mt-14">
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<h2 className="text-3xl font-bold">Projects</h2>} />
          <Route path="/experience" element={<h2 className="text-3xl font-bold">Experience</h2>} />
          <Route path="/contact" element={<h2 className="text-3xl font-bold">Contact Info</h2>} />
        </Routes>
      </div>

      <BackToTopButton />
    </Router>
  );
}
