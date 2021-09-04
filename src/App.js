import Page from "./Page";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Movie from "./Movie";
import Actor from "./Actor";



function App() {
  return (
      <Router>
          <Route exact path='/'><Page/></Route>
          <Route path='/movie/:id'><Movie/></Route>
          <Route path='/person/:id'><Actor/></Route>
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
// Сборы
// Вывести актеров, их должно быть максимум 10
// если их больше то кнопка смотреть больше
// Трейлер если он есть


// Актер +
// Имя +
// Биография +
// За что известен (с постерами)
// Хронология (Актерское искусство)
// Персональная инофрмация +
//
// Известность за +
// Известно авторство
// Пол +
// Дата рождения +
//
// Место рождения +
// Также известность как +