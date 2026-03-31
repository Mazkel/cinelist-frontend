import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">

            <div className="nav-links">
                <Link to="/movies">
                    <h3>Movies</h3>
                </Link>

                <Link to="/movies/new">
                    <h3>Add Movie</h3>
                </Link>
            </div>
            
        </nav>
    );
}

export default NavBar;