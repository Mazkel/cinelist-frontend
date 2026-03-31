import { useParams } from "react-router-dom";

function MovieDetail({ movies, handleDeleteMovie }) {
    const { id } = useParams();

    const movie = movies.find((movie) => (
        movie.id === id
    ))

    if (!movie) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <h2>Movie Detail</h2>
            <button
            onClick={() => handleDeleteMovie(movie.id)}
            >Delete</button>
            <h3>Title: {movie.title}</h3>
            <h3>Year: {movie.year}</h3>
            <h3>Genre: {movie.genre}</h3>
            <img
                src={movie.image}
                alt={movie.title}
                height="400"
                width="600"
            /> 
        </div>
    );
}

export default MovieDetail;