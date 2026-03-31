import { useParams, useHistory } from "react-router-dom";

function MovieDetail({ movies, handleDeleteMovie }) {
    const { id } = useParams();
    const history = useHistory();

    const movie = movies.find((movie) => (
        movie.id === id
    ))

    if (!movie) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="movie-detail">
            <h2>Movie Detail</h2>
            <button
                onClick={() => {
                    handleDeleteMovie(movie.id)
                    history.push("/movies")
                }}
            >Delete</button>
            <div className="movie-info">
                <p><strong>Title:</strong> {movie.title}</p>
                <p><strong>Year:</strong> {movie.year}</p>
                <p><strong>Genre:</strong> {movie.genre}</p>
                <p><strong>Description:</strong> {movie.description}</p>
            </div>
            <img
                src={movie.image}
                alt={movie.title}
            />
        </div>
    );
}

export default MovieDetail;