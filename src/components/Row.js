
import React from "react";
import './Row.css';

function Row({title,movies}){

    console.log('Movie',movies);
    return(
    <div className="row"> 

    <h1>{title}</h1>

    <div className="row-posters">

    {movies.map((movie,index) => () => (

        <img key={index} className="row-poster" src={movie.image} alt={movie.name} />

    ))}

    </div>
    
    </div>

    );
}

export default Row;

