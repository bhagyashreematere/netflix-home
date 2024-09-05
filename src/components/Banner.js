import React from "react";
import './Banner.css';

function Banner(){
    return(
    <div className="banner"> 

    <div className="banner-content">

    <h1>Featured Shows</h1>
    <div classname="banner-buttons"></div>
    <button>Play</button>
    <button>More Info</button>

    </div>

        <div className="banner-content">

    <h1>Hollywood Movies</h1>
    <div classname="banner-buttons"></div>
    <button>Play</button>
    <button>More Info</button>

    </div>
        
    </div>

    );
}

export default Banner;