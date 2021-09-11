import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../media/logo.PNG';



function Navigation() {
    return (
        <div className='navigation'>
            <img src={logo} alt="Logo"/>;
            <ul>
                <li>
                    <NavLink exact to="/" activeClassName="active">
                        <span>Accueil</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to="/photosGallery" activeClassName="active">
                        <span>Galerie</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to="/prices" activeClassName="active">
                        <span>Tarifs et prestations</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink exact to="/contact" activeClassName="active">
                        <span>Contact</span>
                    </NavLink>
                </li>

            </ul>
        </div>
    );
}

export default Navigation;