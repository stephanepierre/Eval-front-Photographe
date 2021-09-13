import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";



function Prices() {
    return (
        <>
            <Navigation/>
            <div className="pricesPage">
                <div className="titlePage">Tarifs et prestations</div>
                <ul>
                    <li> &#171;Juste moi&#187; 130euros <br/>
                    Séance pour une personne, en extérieur ou en studio.</li>
                    <li> &#171;Pour deux&#187; 195euros <br/>
                    Pour deux personnes, en extérieur ou en studio.</li>
                    <li> &#171;Famille&#187; 220euros <br/>
                    Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou en studio
                    30 euros en supplément par personne au-delà de 4 (hormis enfant jusqu’à 2 ans).</li>
                    <li> &#171;Il était une fois&#187; 160euros <br/>
                    Photo de grossesse (À votre domicile, en extérieur ou en studio).</li>
                    <li> &#171;Mon bébé&#187; 100euros <br/>
                    Photo d’enfant jusqu’à 3 ans (photo à domicile).</li>
                    <li> &#171;J’immortalise l’événement&#187; sur mesure <br/>
                    Prestation de mariage ou baptême sur devis.</li>
                </ul>
            </div>
            <Footer/>
        </>
    );
}

export default Prices;