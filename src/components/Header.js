import React from "react";
import './Header.css';
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';

function Header(){
    return(
  <div>
    //Routes coding in progress 
        {/* <Router>
        <div className="header">
        <div className="header-nav">
            <Link to="/">Home</Link>
            <Link to="/tv-shows">TV Shows</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/must-watch">Must Watch</Link>
            </div>
            </div>
        </Router>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tv-shows" element={<TVShows />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/must-watch" element={<MustWatch/>} />
        </Routes> */}
    

    <div className="header"> 

    <div className="header-nav">

        <span>Home</span>
        <span>TV Shows</span>
        <span>Movies</span>
        <span>Must Watch</span>

    </div>
    
    </div>

    </div>

    );
}

export default Header;