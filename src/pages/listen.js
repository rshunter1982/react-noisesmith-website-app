import React from "react";
import { useNavigate } from "react-router-dom";

const Listen = () => {
    const navigate = useNavigate()
    const gotoNewPage = () => { navigate("/blogs"); }
    return (
        <div>
            <h1>
                Listen to me!
            </h1>
        </div>
    );
};

export default Listen;