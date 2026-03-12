import MovieCard from "./components/MovieCard";
import MovieDetail from "./components/MovieDetail";
import MoviePage from "./components/MoviesPage";
import NavBar from "./components/NavBar";
import NewMovieForm from "./components/NewMovieForm";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>CineList</h1>

      <NavBar />

      <Switch>

        <Route path="/movies/new">
          <NewMovieForm />
        </Route>

        <Route path="/movies/:id">
          <MoviePage />
        </Route>

        <Route path="/movies">
          <MovieDetail />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
