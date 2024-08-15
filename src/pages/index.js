import React from "react";
import { Link } from "react-router-dom";
import blowYourMindRemix from "../assets/BlowYourMindRemix.jpeg"

const Home = () => {
    return (
        <div>
            <h1>Welcome to Noisesmith</h1>
            <div>
                <Link to="https://www.beatport.com/track/blow-your-mind-feat-quannum-logic-burnboy-nikal-fieldz-q-the-music-remix/19275925">
                    <img src={blowYourMindRemix} alt="BlowYourMindRemix" type="image/jpeg" />
                </Link>
            </div>
        </div>
    );
};

export default Home;