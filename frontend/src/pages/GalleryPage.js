
import React from 'react';
import { useState } from "react";
import Gallery from "../components/Gallery";

// import images
import monroeStreet from "../images/21-monroe-street-new-york-ny.webp";
import apiProject from "../images/api-project-benjamin-moore-paints.webp";
import eastFishkill from "../images/east-fishkill-ultimate-frisbee.webp";
import theDowns from "../images/elizabeth-mcintire-the-downs-west-sussex-england.jpg"
import inChina from "../images/elizabeth-mcintire-tiananmen-square-beijing.webp";
import abandonedLot from "../images/graffiti-abandoned-lot-shanghai-china.webp";
import mums from "../images/mums-flowers-in-fall-sun-cloudy-sky.webp";
import myanmar from "../images/myanmar-border-crossing-kawthaung-wide.webp";
import atNight from "../images/queen-annes-lace-flower-at-night.jpg";
import beacon from "../images/waterfall-beacon-ny-hudson-valley.webp";


function GalleryPage() {

    const [galleryOpened, setGalleryOpened] = useState(true);
    const toggleGallery = () => setGalleryOpened(!galleryOpened);
    
  

    console.log("GalleryPage");

    const images = [
        { url: monroeStreet, caption: 'Beautiful Sunset' },
        { url: apiProject, caption: 'Mountains Landscape' },
        { url: eastFishkill, caption: 'City Skyline' },
        { url: theDowns, caption: 'City Skyline' },
        { url: inChina, caption: 'City Skyline' },
        { url: abandonedLot, caption: 'City Skyline' },
        { url: mums, caption: 'City Skyline' },
        { url: myanmar, caption: 'City Skyline' },
        { url: atNight, caption: 'City Skyline' },
        { url: beacon, caption: 'City Skyline' },
      ];

    return (
        <>
            <main className="App-main" id="index">
                <section>
                    <article id="">
                        <h3>Gallery</h3>
                            <Gallery images={images} />
                    </article>
                </section>
            </main>
        </>
    );
}

export default GalleryPage;