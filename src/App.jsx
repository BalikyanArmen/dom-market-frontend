import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./components/About";
import "./styles/mainStyles.scss";
import {NavBar} from "./components/NavBar.jsx";
import {Footer} from "./components/Footer.jsx";
import {Banner} from "./components/Banner.jsx";
import {CategoryPage} from "./pages/CategoryPage.jsx";
import {ProductPage} from "./pages/ProductPage.jsx";
import {BasketPage} from "./pages/BasketPage.jsx";
import {OrderPlacement} from "./pages/OrderPlacement.jsx"; // Import the SVG file

const App = () => {
    return (<Router>
        <div>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/category" element={<CategoryPage/>}/>
                <Route path="/product" element={<ProductPage/>}/>
                <Route path="/basket" element={<BasketPage/>}/>
                <Route path="/orderplacement" element={<OrderPlacement/>}/>
            </Routes>
            <Footer/>
        </div>
    </Router>);
};

export default App;
