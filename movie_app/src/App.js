import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Titanic",
  "La La Land",
  "Forrest Gump",
  "Once"
]

const movieImages = [
  "https://i.pinimg.com/originals/12/ee/73/12ee73304dee230d487f8f4ad94d815c.jpg",
  "https://images.icanvas.com/2d/CKG729.jpg",
  "https://i.pinimg.com/originals/09/ba/48/09ba484b208eac8ce4a6b0abdfb1f3bc.jpg",
  "http://browseideas.com/wp-content/uploads/2012/03/Minimalist-Movie-Posters-12.jpg"
]

class App extends Component {
  render() {
    return (
      <div className = "App" >
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;