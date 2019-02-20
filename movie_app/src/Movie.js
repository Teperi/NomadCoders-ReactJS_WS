import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    render(){
        return(
            <div>
                <h1>hello this is a movie</h1>
                <MoviePoster />
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return(
            <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.imWtF1YqHx97AOFpJz6GLAHaLP%26pid%3D15.1&f=1" alt=""/>
        );
    }
}

export default Movie;