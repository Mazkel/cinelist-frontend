import { useState } from "react";

function NewMovieForm({ onAddMovie }) {

    const [formData, setFormData] = useState({
        title: "",
        year: "",
        genre: "",
        description : "",
        image: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const movieToSend = {
            ...formData,
            year: Number(formData.year)
        }

        fetch('http://localhost:3001/movies', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieToSend)
        })
            .then((r) => r.json())
            .then((newMovie) => {
                onAddMovie(newMovie);

                setFormData({
                    title: "",
                    year: "",
                    genre: "",
                    description: "",
                    image: ""
                });
            })
    }

    return (
        <div className="new-movie-form">
            <h2>New Movie Form</h2>
            <form 
            onSubmit={handleSubmit}
            className="movie-form"
            >

                <input
                    name="title"
                    value={formData.title}
                    placeholder="Title"
                    type="text"
                    onChange={handleChange}
                />
                <input
                    name="year"
                    value={formData.year}
                    placeholder="Year"
                    type="number"
                    onChange={handleChange}
                />
                <input
                    name="genre"
                    value={formData.genre}
                    placeholder="Genre"
                    type="text"
                    onChange={handleChange}
                />
                <input
                    name="description"
                    value={formData.description}
                    placeholder="Description"
                    type="text"
                    onChange={handleChange}
                />
                <input
                    name="image"
                    value={formData.image}
                    placeholder="Image-URL"
                    type="url"
                    onChange={handleChange}
                />

                <button type="submit">Add Movie</button>
            </form>
        </div>
    );
}

export default NewMovieForm;