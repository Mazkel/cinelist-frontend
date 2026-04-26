import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";

function MovieDetail({ movies, handleDeleteMovie, handleUpdateMovie }) {
    const { id } = useParams();
    const history = useHistory();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        year: "",
        genre: "",
        image: ""
    })

    const movie = movies.find((movie) => (
        movie.id === id
    ))

    if (!movie) {
        return <h2>Loading...</h2>
    }

    function handleEditMovie() {
        setIsEditing(true);

        setFormData({
            title: movie.title,
            year: movie.year,
            genre: movie.genre,
            image: movie.image
        })
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/movies/${movie.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then((r) => r.json())
            .then((updatedMovie) => {
                handleUpdateMovie(updatedMovie);
                setIsEditing(false)
            });
    }

    return (
        <div className="movie-detail">
            <h2>Movie Detail</h2>
            <div className="button-group">
                <button onClick={handleEditMovie}>
                    Edit
                </button>

                <button
                    onClick={() => {
                        handleDeleteMovie(movie.id)
                        history.push("/movies")
                    }}
                >Delete</button>
            </div>

            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>Title</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <label>Year</label>
                    <input
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                    />

                    <label>Genre</label>
                    <input
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    />

                    <label>Image</label>
                    <input
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                    />

                    <label>Description</label>
                    <input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />

                    <div className="button-group">
                        <button type="submit">
                            Save
                        </button>

                        <button
                            type="button"
                            onClick={() => setIsEditing(false)}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            ) : (
                <div className="movie-info">
                    <p><strong>Title:</strong> {movie.title}</p>
                    <p><strong>Year:</strong> {movie.year}</p>
                    <p><strong>Genre:</strong> {movie.genre}</p>
                    <p><strong>Description:</strong> {movie.description}</p>
                </div>
            )}
            <img
                src={movie.image}
                alt={movie.title}
            />
        </div>
    );
}

export default MovieDetail;