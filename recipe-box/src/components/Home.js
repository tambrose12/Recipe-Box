import { NavLink } from "react-router-dom";


function Home() {

    return (
        <div id="homePage">
            <img src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="pasta" />
            <div id="main">
                <br />
                <h1>Welcome to Your Virtual Recipe Box!</h1>
                <h2>Where you can get all the recipe's you need... without the life stories!</h2>
                <br />
                <p>Check out  <NavLink exact to="/recipe-box" className="submit ui teal button">The Recipe Box</NavLink> where you can find a bunch of "recipe-cards" with great recipes to try.</p>
                <p>When you get to the Recipe Box, click on the recipe you like and it will show you the Ingredients and Directions on the back of the card.</p>
                <p> Or, if you don't see your favorite recipe in the Box yet, you can follow the link at the top to Add a New Recipe.</p>
                <p>Hang out a while and find some recipes, or share some with the rest of us!</p>
                <img src="https://assets.bonappetit.com/photos/5b9a82a575b9f13affe5594e/16:9/w_2580,c_limit/hinge-food-lovers.gif" alt="food swipe gif" className="swipe" />
                <h3>Check Out The Creators:</h3>
                <div id="social">
                    <div id="grace">
                        <figure>
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331789348-38MXDDJ4C5HYWQ7H4NQG/peaches.gif"
                                className="gif"
                            />
                            <figcaption>
                                <h3>Grace</h3>
                            </figcaption>
                        </figure>
                        <a href="https://www.linkedin.com/in/gracenieboer/"><i class="linkedin icon"></i></a>
                        <a href="https://github.com/gnieb"><i class="github icon"></i></a>
                    </div>

                    <div id="taylor">
                        <figure>
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331786333-N2O4YIO3I4HDOEK6WNZ3/bacon.gif"
                                className="gif"
                            />
                            <figcaption>
                                <h3>Taylor</h3>
                            </figcaption>
                        </figure>
                        <a href="https://www.linkedin.com/in/taylor-ambrose-b268ab20a/"><i class="linkedin icon"></i></a>
                        <a href="https://github.com/tambrose12"><i class="github icon"></i></a>
                    </div>
                    <div id="duggan">
                        <figure>
                            <img
                                className="gif"
                                src="https://images.squarespace-cdn.com/content/v1/53c129c4e4b0c9cf4d63fe7b/1480331789992-7VWSLO09C8RKDUZ6FK1X/pizzahh.gif"
                            />
                            <figcaption>
                                <h3>Duggan</h3>
                            </figcaption>
                        </figure>
                        <a href="https://www.linkedin.com/in/kevin-duggan-420624164/"><i class="linkedin icon"></i></a>
                        <a href="https://github.com/Duggan1"><i class="github icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;