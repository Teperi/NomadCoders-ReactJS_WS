import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {

    state = {}

    componentDidMount() {
        this._getMovies();
    }

    _renderMovies = () => {
      
        const movies = this.state.movies.map((movie, index) => {
          console.log(movie)
            return <Movie
            title = { movie.title }
            poster = { movie.medium_cover_image }
            genres = {movie.genres}
            synopsis = {movie.synopsis}
            key = { movie.id }/>
        })
        return movies;
    }

    _getMovies = async () => {
      const movies = await this._callApi()
      this.setState({
        movies
      })
    }

    _callApi = () => {
      // api 에서 받아오는 객체가 promise 로 넘어옴
      return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count")
      .then(response => response.json()) // 받아온 객체를 JSON 으로 바꾼 후
      .then(json => json.data.movies) // 이후 console.log
      .catch(err => console.log(err)) // error 가 생기면 여기서 처리
    }

    render() {
      
        return ( <div className = "App" > { this.state.movies ? this._renderMovies() : "Loading" } </div>
        );
    }
}

export default App;