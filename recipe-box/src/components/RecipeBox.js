import RecipeCard from "./RecipeCard";
import Search from "./Search";

function RecipeBox({ recipes, handleSearchQuery }) {

    const renderRecipeCard = recipes.map(recipe => {
        return <RecipeCard key={recipe.id} {...recipe} />
    })

    return (
        <div>
            <Search handleSearchQuery={handleSearchQuery} />
            {renderRecipeCard}
        </div>
    )
}
export default RecipeBox;