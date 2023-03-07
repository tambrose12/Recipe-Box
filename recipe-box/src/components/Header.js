import { NavLink } from "react-router-dom";

function Header() {

    return (
        <header>
            <h1>Recipe Box</h1>
            <div>
                <NavLink
                    exact
                    to="/"
                >
                    Home
                </NavLink>
                <br />
                <NavLink
                    exact
                    to="/recipe-box">
                    Recipe Box
                </NavLink>
                <br />
                <NavLink
                    exact to="/recipe-box/new">
                    Add New Recipe
                </NavLink>
            </div>
        </header>
    )
}

export default Header;