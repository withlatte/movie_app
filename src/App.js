import React from "react";
import axios from "axios";
import Movie from "./components/Movie";
import "./App.css";
// npm install axios
// axios = fetch() 와 같은 역할을 한다. url을 불러온다.
// https://yts-proxy.now.sh/list_movies.json

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // async 와 await : axios를 통해 url을 불러올때 약간의 시간이 걸린다.
  // axios 작업이 종료될 때까지 기다리는 방법이다. ES6에 추가된 기능
  getMovies = async () => {
    const {
      // 아래 구문은 movies.data.data.movies 와 동일하다.
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies);
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    // 같은 class 안의 state 오브젝트에 있는 isLoading을 불러와 사용할 수 있도록 선언
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
