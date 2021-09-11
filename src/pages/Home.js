import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const home = () => {
    return (
        <>
            <Navigation/>
                <div className="home">
                    <div className='home-body'>
                        <h1>Charles Cantin - Photographe</h1>
                    </div>
                </div>
            <Footer/>
        </>
    )
}

export default home;