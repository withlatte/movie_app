import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  return (
    <HashRouter>
      <Navigation />
      {/* /about 의 주소를 열면 About 컴포넌트를 불러온다
      아래와 같이 두개의 라우트를 쓸때 path='/' 과 path='/about'은 리액트에서
      불러오는 순서에 따라 첫째 / 둘째 /about 이므로 부모-자식관계처럼 인식하고
      Home과 About 두개의 컴포넌트를 동일하게 해석하고 두 개의 컴포넌트를
      모두 한페이지에 보여준다. 이를 방지하기 위해 exact={true} 를 사용한다 */}
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
