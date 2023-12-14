
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

        { url: apiProject, caption: 'A personal software engineering project, optimizing the Benjamin Moore Paints API for lookup in O(1) time', alt: 'personal software engineering project, optimizing the Benjamin Moore Paints API for lookup in O(1) time'  },
        { url: theDowns, caption: 'Self portrait - The Downs, England', alt: 'self-portrait of Elizabeth in The Downs, England'  },
        { url: inChina, caption: 'Elizabeth in Tiananmen Square, Beijing, PRC', alt: 'picture of Elizabeth taking a photo in Tiananmen Square, Beijing, China'  },
        { url: abandonedLot, caption: 'Seen in Shanghai, PRC', alt: 'graffiti in an abandoned lot on a brick wall covered in vines, Shanghai, China'  },
        { url: myanmar, caption: 'City Skyline', alt: ''  },
        { url: mums, caption: 'October chrysanthemums', alt: 'yellow, pink, and orange chrysanthemum in the afternoon sunlight against a dark fall sky'  },
        { url: eastFishkill, caption: 'East Fishkill Ultimate Frisbee', alt: 'nighttime photo of scoreboard at ultimate frisbee game at Lime Kiln Recreation Center, East Fishkill, NY'  },
        { url: atNight, caption: "Queen Anne's Lace by night", alt: "nighttime photo of Queen Anne's Lace (also known as wild carrot)"  },
        { url: beacon, caption: 'An urban waterfall in Beacon, NY', alt: 'urban waterfall in the Hudson Valley, in Beacon, NY'  },
        { url: monroeStreet, caption: '21 Monroe St, New York, NY', alt: 'the door of 21 Monroe Street, in New York City, painted red and covered in graffiti' },
    ];

    return (
        <>
            <main className="App-main" id="index">
                <section>
                    <article id="">
                        <h2>Gallery</h2>
                            <Gallery images={images} />
                    </article>
                </section>
            </main>
        </>
    );
}

export default GalleryPage;