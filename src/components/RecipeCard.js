export const RecipeCard = ({recipe}) => {
    return (
        <div className="recipe-card-container">
            <img
              src={recipe.strMealThumb + "/preview"}
              alt={recipe.strMeal + " thumbnail"}
            />
            <h3>{recipe.strMeal}</h3>
            <ul>
              {recipe.strIngredient1 ? (
                <li>{`${recipe.strMeasure1} ${recipe.strIngredient1}`}</li>
              ) : null}
              {recipe.strIngredient2 ? (
                <li>{`${recipe.strMeasure2} ${recipe.strIngredient2}`}</li>
              ) : null}
              {recipe.strIngredient3 ? (
                <li>{`${recipe.strMeasure3} ${recipe.strIngredient3}`}</li>
              ) : null}
              {recipe.strIngredient4 ? (
                <li>{`${recipe.strMeasure4} ${recipe.strIngredient4}`}</li>
              ) : null}
              {recipe.strIngredient5 ? (
                <li>{`${recipe.strMeasure5} ${recipe.strIngredient5}`}</li>
              ) : null}
              {recipe.strIngredient6 ? (
                <li>{`${recipe.strMeasure6} ${recipe.strIngredient6}`}</li>
              ) : null}
              {recipe.strIngredient7 ? (
                <li>{`${recipe.strMeasure7} ${recipe.strIngredient7}`}</li>
              ) : null}
              {recipe.strIngredient8 ? (
                <li>{`${recipe.strMeasure8} ${recipe.strIngredient8}`}</li>
              ) : null}
              {recipe.strIngredient9 ? (
                <li>{`${recipe.strMeasure9} ${recipe.strIngredient9}`}</li>
              ) : null}
              {recipe.strIngredient10 ? (
                <li>{`${recipe.strMeasure10} ${recipe.strIngredient10}`}</li>
              ) : null}
              {recipe.strIngredient11 ? (
                <li>{`${recipe.strMeasure11} ${recipe.strIngredient11}`}</li>
              ) : null}
              {recipe.strIngredient12 ? (
                <li>{`${recipe.strMeasure12} ${recipe.strIngredient12}`}</li>
              ) : null}
              {recipe.strIngredient13 ? (
                <li>{`${recipe.strMeasure13} ${recipe.strIngredient13}`}</li>
              ) : null}
              {recipe.strIngredient14 ? (
                <li>{`${recipe.strMeasure14} ${recipe.strIngredient14}`}</li>
              ) : null}
              {recipe.strIngredient15 ? (
                <li>{`${recipe.strMeasure15} ${recipe.strIngredient15}`}</li>
              ) : null}
              {recipe.strIngredient16 ? (
                <li>{`${recipe.strMeasure16} ${recipe.strIngredient16}`}</li>
              ) : null}
              {recipe.strIngredient17 ? (
                <li>{`${recipe.strMeasure17} ${recipe.strIngredient17}`}</li>
              ) : null}
              {recipe.strIngredient18 ? (
                <li>{`${recipe.strMeasure18} ${recipe.strIngredient18}`}</li>
              ) : null}
              {recipe.strIngredient19 ? (
                <li>{`${recipe.strMeasure19} ${recipe.strIngredient19}`}</li>
              ) : null}
              {recipe.strIngredient20 ? (
                <li>{`${recipe.strMeasure20} ${recipe.strIngredient20}`}</li>
              ) : null}
            </ul>
            <h4>{recipe.strCategory}</h4>
            <h5>{recipe.strArea}</h5>
            <p>{recipe.strInstructions}</p>
            <a href={recipe.strYoutube}>Link to Youtube Video</a>
        </div>
    )
};