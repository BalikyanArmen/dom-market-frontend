import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import "./styles/mainStyles.scss";
import { Button } from "@mui/material";
import LocationIcon from "./assets/locationIcon.svg";
import {HomepageCategory} from "./components/HomepageCategory.jsx";
import {ProductPage} from "./components/ProductPage.jsx";
import {CategoryPageLeftCategories} from "./components/CategoryPage.jsx"; // Import the SVG file

const App = () => {
    return (
        <Router>
            <div>
                <CategoryPageLeftCategories/>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
