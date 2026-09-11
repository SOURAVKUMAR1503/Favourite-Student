import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { StudentProvider } from './StudentContext';
import StudentList from './StudentList';
import FavouriteStudents from './FavouriteStudents';

const App = () => {
    return (
        <StudentProvider>
            <Router>
                <div className="app-container">
                    <nav className="navbar">
                        <ul>
                            <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Student List</NavLink></li>
                            <li><NavLink to="/favourites" className={({ isActive }) => isActive ? 'active' : ''}>Favourite Students</NavLink></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<StudentList />} />
                        <Route path="/favourites" element={<FavouriteStudents />} />
                    </Routes>
                </div>
            </Router>
        </StudentProvider>
    );
};

export default App;