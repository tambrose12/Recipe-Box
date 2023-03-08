import { NavLink } from "react-router-dom";


function Home() {

    return (
        <div>
            <br />
            <h1>Welcome to Your Virtual Recipe Box!</h1>
            <h2>Where you can get all the recipe's you need... without the life stories!</h2>
            <br />
            <p>Check out  <NavLink exact to="/recipe-box" className="submit ui teal button">The Recipe Box</NavLink> where you can find a bunch of "recipe-cards" with great recipes to try.</p>
            <p>When you get to the Recipe Box, click on the recipe you like and it will show you the Ingredients and Directions on the back of the card.</p>
            <p> Or, if you don't see your favorite recipe in the Box yet, you can follow the link at the top to Add a New Recipe.</p>
            <p>Hang out a while and find some recipes, or share some with the rest of us!</p>
            <i class="coffee icon"></i>
        </div>
    )
}

export default Home;