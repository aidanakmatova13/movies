import Page from "./views/Page";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Movie from "./views/Movie";
import Actor from "./views/Actor";
import Cast from "./views/Cast";

function App() {
  return (
      <Router>
          <Route exact path='/'><Page/></Route>
          <Route path='/movie/:id'><Movie/></Route>
          <Route path='/actor/:id'><Actor/></Route>
          <Route path='/cast/:id'><Cast/></Route>
      </Router>
  );
}

export default App;


//Название +
// Дата +
// Жанр +


