function RecipeCard({ name, image, ingredients, directions, time, cuisine }) {

    const renderIngredient = ingredients.map(ingredient => {
        return <li key={name + ingredient}>{ingredient}</li>
    })

    return (

        <div className="card">
            <h2>{name}</h2>
            <p>{time} | {cuisine}</p>
            <div className="ingredients" >
                <img src={image} alt={name} />

                <ul>
                    {renderIngredient}
                </ul>
            </div>
            <h3>Directions</h3>
            <p>{directions}</p>
        </div>

    )
}

export default RecipeCard;