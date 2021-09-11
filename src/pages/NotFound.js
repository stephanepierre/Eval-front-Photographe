import React from 'react';
import { NavLink } from 'react-router-dom';

const notFound = () => {
  return (
    <div className="notFound">
        <h1> Désolé cette page n'existe pas !</h1>
            <NavLink exact to="/">
                    <h2>Revenir à l'accueil</h2>
            </NavLink>
    </div>
  );
};

export default notFound;