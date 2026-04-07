import MovieCard from "./MovieCard";

function MoviePage({ movies, search, setSearch, genre, setGenre, alphabeticalOrder, setAlphabeticalOrder }) {
    return (
        <div className="movie-page">
            <h2 className="movie-page-heading">Movie Page</h2>

            <div className="controls">
                <input
                    type="text"
                    placeholder="Search Movies"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)} >
                    <option value="Show All">Show All</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Love">Love</option>
                </select>

                <select
                    value={alphabeticalOrder}
                    onChange={(e) => setAlphabeticalOrder(e.target.value)}
                >
                    <option value="">Alphabetical Order</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>
            </div>

            <div className="movie-container">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default MoviePage;
