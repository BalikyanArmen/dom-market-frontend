import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./components/About";
import "./styles/mainStyles.scss";
import {NavBar} from "./components/NavBar.jsx";
import {Footer} from "./components/Footer.jsx";
import {Banner} from "./components/Banner.jsx"; // Import the SVG file

const App = () => {
    return (<Router>
        <div>
            <NavBar/>
            {/*<HomepageCategory/>*/}
            {/*<nav>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to="/">Home</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to="/about">About</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
            <Footer/>
        </div>
    </Router>);
};

export default App;
