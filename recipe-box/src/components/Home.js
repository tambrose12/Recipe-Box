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
                <h3><u>What's Cookin'? Creator Favorites:</u></h3>
                <div id="favorites">
                    <div id="graceF">
                        <h4>Shrimp Scampi</h4>
                        <img
                            src="https://www.allrecipes.com/thmb/M_JD8gcZbIWk_TL0yBthlQ4zOs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/229960-Shrimp-Scampi-with-Pasta-mfs-048-70ffd08f7c4549ffb5367868b5fb7365.jpg"
                            className="fav"
                        />

                    </div>

                    <div id="taylorF">
                        <h4>Spicy Miso Ramen</h4>
                        <img
                            src="https://dishingouthealth.com/wp-content/uploads/2022/01/SpicyMisoRamen_Styled2.jpg"
                            className="fav"
                        />
                    </div>
                    <div id="dugganF">
                        <h4>Big Mac</h4>
                        <img
                            className="fav"
                            src="https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;