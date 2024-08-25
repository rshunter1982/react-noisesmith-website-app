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
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"


const App = () => {
    const comp = useRef(null)
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay:0.3,
            }).from(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "+=30",
                stagger: 0.5,
            }).to(["#title-1", "#title-2", "#title-3"], {
                opacity: 0,
                y: "-=30",
                delay: 0.3,
                stagger: 0.5,
            }).to("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                height:0,
            }).from("#application", {
                opacity: 0,
                duration: 0.5,
            })
        }, comp)
        return () => ctx.revert()
    }, [])
    return (
        <div className="relative" ref={comp}>
            <div id="intro-slider" className="intro-slider" style={{ background: "black" }}>
                <h1 className="text-9xl" id="title-1">Noisesmith</h1>
                <h1 className="text-9xl" id="title-2">is</h1>
                <h1 className="text-9xl" id="title-3">here</h1>
            </div>

            <div className="App" id="application">
                <video className="backgroundVideo" alt="background video" autoPlay="autoplay" loop="true" muted="true" playsinline="playsinline" controls={false} >
                    <source src={backVideo} type="video/mp4" />
                </video>
                <header className="App-header">
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
                <body className="App-body">

                </body>
                <footer className="App-footer">
                    <h1>Noisesmith Music</h1>
                </footer>
            </div>
        </div>
    );
}

export default App;
