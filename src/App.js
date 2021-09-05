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
// Длительность 2h 7m -
// Описание +
// Язык +
// Бюджет +
// Сборы +git
// Вывести актеров, их должно быть максимум 10
// если их больше то кнопка смотреть больше +
// Трейлер если он есть +

// Актер +
// Имя +
// Биография +
// За что известен (с постерами)
// Хронология (Актерское искусство)
// Персональная инофрмация +
// Известность за +
// Известно авторство +
// Пол +
// Дата рождения +
// Место рождения +
// Также известность как +