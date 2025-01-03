import React from "react";
import "./App.css";
import Navbar from "./compontents/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Blog from "./pages/blog";
import Portfolio from "./pages/portfolio";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <div className="App">
            <h1 className="gfg">GeeksforGeeks</h1>
            <h2>How to use Google fonts in React JS</h2>

            <div className="font-container">
                <p className="text">
                    This text is written in Monsterrat Font
                    from Google Fonts{" "}
                </p>
            </div>
        </div>
        </Router>
        
    );
}

export default App;