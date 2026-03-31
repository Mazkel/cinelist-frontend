import MovieCard from "./MovieCard";

function MoviePage({ movies }) {
    return (
        <div>
            <h2>Movie Page</h2>
            <div>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MoviePage;
