import "./App.css";
import MovieDetail from "./components/MovieDetail";
import MoviePage from "./components/MoviesPage";
import NavBar from "./components/NavBar";
import NewMovieForm from "./components/NewMovieForm";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [genre, setGenre] = useState("Show All")
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("")

  let displayedMovies = movies;

  displayedMovies = displayedMovies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )

  displayedMovies = displayedMovies.filter((movie) => {
    return genre === "Show All" || movie.genre === genre
  })

  displayedMovies = [...displayedMovies].sort((a, b) => {
    if (alphabeticalOrder === "A-Z") {
      return a.title.localeCompare(b.title)
    }

    if (alphabeticalOrder === "Z-A") {
      return b.title.localeCompare(a.title)
    }

    return 0
  })

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

  function handleDeleteMovie(id) {
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(() => {
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== id)
        );
      });
  }

  function handleUpdateMovie(updatedMovie) {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === updatedMovie.id ? updatedMovie : movie
      )
    );
  }

  return (
    <div className="app">
      <h1 >Cine List</h1>

      <NavBar />
      <Switch>

        <Route path="/movies/new">
          <NewMovieForm onAddMovie={onAddMovie} />
        </Route>

        <Route path="/movies/:id">
          <MovieDetail
            movies={movies}
            handleDeleteMovie={handleDeleteMovie}
            handleUpdateMovie={handleUpdateMovie}
          />
        </Route>

        <Route path="/movies">
          <MoviePage
            movies={displayedMovies}
            search={search}
            setSearch={setSearch}
            genre={genre}
            setGenre={setGenre}
            alphabeticalOrder={alphabeticalOrder}
            setAlphabeticalOrder={setAlphabeticalOrder}
          />
        </Route>

      </Switch>

      <h4>Created By: SILONGO VAILOLO</h4>

    </div>
  );
}

export default App;
