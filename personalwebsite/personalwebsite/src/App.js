import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
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
import Posts from "./pages/posts/posts";

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

            <div className="main-container" style={{backgroundColor: "aliceblue"}}>
                    <Navbar />
                    <Posts />
                </div>
            );
        </div>
        </Router>
        
    );
}

export default App;