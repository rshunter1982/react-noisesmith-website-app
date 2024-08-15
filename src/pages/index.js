import React from "react";
import { Link } from "react-router-dom";
import musicLink from "../assets/e79f0662-67b1-4d77-b9e1-cc88f867e702_70871fda-e69a-4743-83c1-177f6dbbc7bf.webp"

const Home = () => {
    return (
        <div>
            <h1>Welcome to Noisesmith</h1>
            <Link to="https://www.beatport.com/track/blow-your-mind-feat-quannum-logic-burnboy-nikal-fieldz-q-the-music-remix/19275925">
                <img src={musicLink} alt="musicLink" type="image/webp" />
            </Link>
        </div>
    );
};

export default Home;