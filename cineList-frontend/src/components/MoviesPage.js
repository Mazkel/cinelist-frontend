import { Link } from "react-router-dom";

function MoviePage({ movies }) {
    return (
        <div>
            <h2>Movie Page</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title}
                        </Link>
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default MoviePage;
