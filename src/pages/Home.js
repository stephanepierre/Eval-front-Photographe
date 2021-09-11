import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../components/Navigation";

const home = () => {
    return (
        <div className="home">
            <Navigation/>
            <div className='home-body'>
                <h1>Charles Cantin - Photographe</h1>
            </div>
        </div>
    )
}

export default home;