import MovieCard from "./MovieCard";

function MoviePage({ movies }) {
    return (
        <div className="movie-page">
            <h2 className="movie-page-heading">Movie Page</h2>
            <div className="movie-container">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MoviePage;
