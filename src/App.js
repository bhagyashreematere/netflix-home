import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Row from './components/Row';
import './App.css';

function App() {



const movies = [
{name: "movie1", image: "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"},
{name: "movie2", image: "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"},
{name: "movie3", image: "https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"},
];

  return (
    <div className="App">
      <Header />
      <Banner />
      <Row title="Netflix Originals" movies={movies}/>
    </div>
  );
}

export default App;
