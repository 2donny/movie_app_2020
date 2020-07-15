import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./app.css"

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }
  getMovies = async () => {
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by:rating"); //API로부터 데이터를 fetching.
    this.setState({
      movies: movies,
      isLoading: false
    });
     //state에 저장하고, 로딩상태 변경.
    // movies: movies => movie로 변경가능 (자바스크립트 ES6 추가 기능)
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies} = this.state; //isLoading = true <-> ES6 문법.
    return ( 
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => ( 
            <Movie 
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres = {movie.genres}
            />
            ))}
          </div>
        )
        } 
      </section>
    )
  }
}


export default App;