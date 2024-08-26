import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import './App.css';  // Certifique-se de importar o CSS

const App = () => {
    return (
        <Router>
            <div className="navbar">
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/favorites">My Favorites</Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </Router>
    );
};

export default App;
