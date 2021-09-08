import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from "./views/Page";
import Movie from "./views/Movie";
import Actor from "./views/Actor";
import Cast from "./views/Cast";
import Header from "./views/Header";
import Search from "./components/Search";
import Footer from './views/Footer'

function App() {
  return (
      <Router>
          <Header />
          <Route exact path='/'><Page/></Route>
          <Route path='/movie/:id'><Movie/></Route>
          <Route path='/search/:name'><Search/></Route>
          <Route path='/actor/:id'><Actor/></Route>
          <Route path='/cast/:id'><Cast/></Route>
          <Footer/>
      </Router>
  );
}

export default App;
// поиск search по фильмам -
// footer -