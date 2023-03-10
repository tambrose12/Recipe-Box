import { NavLink } from "react-router-dom";

function Header() {

    return (
        <div>
            <header id="header">
                <div>
                    <h1><i class="material-symbols-outlined">restaurant_menu</i> Recipe Box</h1>
                </div>
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
                    <br />
                    <NavLink
                        exact to="/about"
                        className="submit ui teal button"
                    >
                        About
                    </NavLink>

                </div>
            </header>
        </div>
    )
}

export default Header;