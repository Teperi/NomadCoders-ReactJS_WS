import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

  state = {
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          // // 기존 state 내 movies 데이터 집어넣기
          // ...this.state.movies,
          // // 이후 추가
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
            },
            {
              title: "Thor",
              poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsfxaMreR8mYIKg5GV7M8xqo5bCbQrvFSuDOs5S_yluFV4qdsXuA"
            }
          ]
        
      })
    }, 1000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index}/>
    })
    return movies;
  }

  render() {
    return (
      <div className = "App" >
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;