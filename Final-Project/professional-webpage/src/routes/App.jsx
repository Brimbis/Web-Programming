import {useState} from 'react'; 
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import BackToTopButton from '../components/BackToTopButton.jsx';
import Footer from '../components/Footer.jsx';
import AboutMe from '../views/AboutMe.jsx';
import Projects from '../views/Projects.jsx';
import Experience from '../views/Experience.jsx';
import ContactInfo from '../views/ContactInfo.jsx';

export default function App() {
  const [navstyling, setNavstyling] = useState('bg-indigo-700 text-white font-semibold px-4 py-2 rounded-md transition');
  const [navstylingHover, setNavstylingHover] = useState('hover:bg-gray-800 px-4 py-2 rounded-md transition');

  return (
    <Router>
      <nav className="bg-gray-900 text-white fixed top-0 w-full z-50 shadow-md">
        <ul className="flex justify-center space-x-8 py-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive 
                  ? navstyling
                  : navstylingHover
              }
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive 
                  ? navstyling
                  : navstylingHover
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                isActive 
                  ? navstyling
                  : navstylingHover
              }
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive 
                  ? navstyling
                  : navstylingHover
              }
            >
              Contact Info
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="mt-14">
        <Routes>
          <Route path="/" element={<AboutMe/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/contact" element={<ContactInfo/>}/>
        </Routes>
      </div>
      <Footer/>
      <BackToTopButton />
    </Router>
  );
}
