import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h2>NavBar</h2>

            <Link to="/movies">
                <h3>Movies</h3>
            </Link>

            <Link to="/movies/new">
                <h3>Add Movie</h3>
            </Link>

        </nav>
    );
}

export default NavBar;