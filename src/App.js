import Page from "./Page";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Movie from "./Movie";

function App() {
  return (
      <Router>
          <Route exact path='/'><Page/></Route>
          <Route path='/movie/:id'><Movie/></Route>
      </Router>
  );
}

export default App;