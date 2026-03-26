import MovieDetail from "./components/MovieDetail";
import MoviePage from "./components/MoviesPage";
import NavBar from "./components/NavBar";
import NewMovieForm from "./components/NewMovieForm";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/movies')
      .then((r) => r.json())
      .then((data) => {
        setMovies(data)
      });
  }, []);

  function onAddMovie(newMovie) {
    setMovies((prevMovies) => [...prevMovies, newMovie])
  }

  return (
    <div>
      <h1>CineList</h1>

      <NavBar />

      <Switch>

        <Route path="/movies/new">
          <NewMovieForm onAddMovie={onAddMovie}/>
        </Route>

        <Route path="/movies/:id">
          <MovieDetail movies={movies} />
        </Route>

        <Route path="/movies">
          <MoviePage movies={movies} />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
