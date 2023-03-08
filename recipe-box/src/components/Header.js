import { NavLink } from "react-router-dom";

function Header() {

    return (
        <header>
            <h1>Recipe Box</h1>
            <div className="navLink" >
                <NavLink
                    exact
                    to="/"
                    className="submit ui teal button"
                >
                    Home
                </NavLink>
                <br />
                <NavLink
                    exact
                    to="/recipe-box"
                    className="submit ui teal button"
                >
                    The Recipe Box
                </NavLink>
                <br />
                <NavLink
                    exact to="/recipe-box/new"
                    className="submit ui teal button"
                >
                    Add New Recipe
                </NavLink>
            </div>
        </header>
    )
}

export default Header;