import RecipeCard from "./RecipeCard";
import Search from "./Search";

function RecipeBox({ recipes }) {

    const renderRecipeCard = recipes.map(recipe => {
        return <RecipeCard key={recipe.id} {...recipe} />
    })

    return (
        <div>
            <Search />
            {renderRecipeCard}
        </div>
    )
}
export default RecipeBox;