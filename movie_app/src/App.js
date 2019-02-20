import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Titanic",
    poster: "https://i.pinimg.com/originals/12/ee/73/12ee73304dee230d487f8f4ad94d815c.jpg"
  },
  {
    title: "La La Land",
    poster: "https://images.icanvas.com/2d/CKG729.jpg"
  },
  {
    title: "Forrest Gump",
    poster: "https://i.pinimg.com/originals/09/ba/48/09ba484b208eac8ce4a6b0abdfb1f3bc.jpg"
  },
  {
    title: "Once",
    poster: "http://browseideas.com/wp-content/uploads/2012/03/Minimalist-Movie-Posters-12.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className = "App" >
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster}/>
        })}
      </div>
    );
  }
}

export default App;