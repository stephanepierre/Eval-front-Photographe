import React from "react";
import Footer from "../components/Footer";
import PhotosNavigation from "../components/photosPages/PhotosNavigation";
import Navigation from "../components/Navigation";



function PhotosGallery() {
    return (
        <>
            <Navigation/>
            <div className="portfolioPhotos">
                <PhotosNavigation/>
            </div>
            <Footer/>
        </>
    );
}

export default PhotosGallery;