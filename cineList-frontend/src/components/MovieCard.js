import { Link } from "react-router-dom";
function MovieCard({ movie }) {
    return (
        <div>
            <Link to={`/movies/${movie.id}`}>
            <img
                src={movie.image}
                alt={movie.title}
                height="300"
                width="300"
            />
            <h3>{movie.title}</h3>
            </Link>
            
            
        </div>
    );
}

export default MovieCard;