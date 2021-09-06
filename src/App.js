import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from "./views/Page";
import Movie from "./views/Movie";
import Actor from "./views/Actor";
import Cast from "./views/Cast";
import Header from "./views/Header";

function App() {
  return (
      <Router>
          <Header />
          <Route exact path='/'><Page/></Route>
          <Route path='/movie/:id'><Movie/></Route>
          <Route path='/actor/:id'><Actor/></Route>
          <Route path='/cast/:id'><Cast/></Route>
      </Router>
  );
}

export default App;
//поиск search по фильмам
//prev next
//сколько лет актеру год, года, лет
//известные фильм