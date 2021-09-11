import React from "react";
import facebook from "../media/facebook.png";
import instagram from "../media/instagram.png"

function Footer() {
    return (
        <div className="footer">
            <a href="https://www.facebook.com/r.php?locale=fr_FR" target="_blank">
                <img src={facebook} alt="Facebook"/>;
            </a>
            <a href="https://www.instagram.com/" target="_blank">
                <img src={instagram} alt="Instagram"/>;
            </a>
        </div>
    );
}

export default Footer;