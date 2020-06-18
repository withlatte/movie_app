import React from "react";
import axios from "axios";
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
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    // 같은 class 안의 state 오브젝트에 있는 isLoading을 불러와 사용할 수 있도록 선언
    const { isLoading } = this.state;
    return <div> {isLoading ? "Loading..." : "We are ready!"} </div>;
  }
}

export default App;
