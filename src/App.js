import logo from './assets/NoiseSmith_Logo.svg';
import backVideo from './assets/54327e82-0d80-45a5-94db-20fa65e1566e_production-id-4990319--1080p-.mp4'
import './App.css';
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Listen from "./pages/listen";
import Connect from "./pages/connect";
import Shop from "./pages/shop";
import Blogs from "./pages/blogs";



const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <video className="backgroundVideo" alt="background video" autoPlay="autoplay" loop="true" muted="true" playsinline="playsinline" controls={false} >
                    <source src={backVideo} type="video/mp4" />
                </video>
                <img src={logo} className="App-logo" alt="logo" />
                <Router>
                    <Navbar />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/listen" element={<Listen />} />
                        <Route path="/connect" element={<Connect />} />
                        <Route path="/shop" element={<Shop />} />
                        <Route path="/blogs" element={<Blogs />} />
                    </Routes>
                </Router>
            </header>
            <footer className="App-footer">
                <h1>Noisesmith Music</h1>
            </footer>
        </div>
    );
}

export default App;
