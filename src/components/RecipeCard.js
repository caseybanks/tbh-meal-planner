import { useState, useEffect } from 'react';

export function RecipeCard({recipe}) {

    const [currentRecipe, setRecipe] = useState(recipe);

    useEffect(
        () => {
            setRecipe(recipe);
        }, [recipe.idMeal]
    );

    return (
        <div >
            <img
              src={currentRecipe.strMealThumb + "/preview"}
              alt={currentRecipe.strMeal + " thumbnail"}
            />
            <ul>
              {currentRecipe.strIngredient1 ? (
                <li>{`${currentRecipe.strMeasure1} ${currentRecipe.strIngredient1}`}</li>
              ) : null}
              {currentRecipe.strIngredient2 ? (
                <li>{`${currentRecipe.strMeasure2} ${currentRecipe.strIngredient2}`}</li>
              ) : null}
              {currentRecipe.strIngredient3 ? (
                <li>{`${currentRecipe.strMeasure3} ${currentRecipe.strIngredient3}`}</li>
              ) : null}
              {currentRecipe.strIngredient4 ? (
                <li>{`${currentRecipe.strMeasure4} ${currentRecipe.strIngredient4}`}</li>
              ) : null}
              {currentRecipe.strIngredient5 ? (
                <li>{`${currentRecipe.strMeasure5} ${currentRecipe.strIngredient5}`}</li>
              ) : null}
              {currentRecipe.strIngredient6 ? (
                <li>{`${currentRecipe.strMeasure6} ${currentRecipe.strIngredient6}`}</li>
              ) : null}
              {currentRecipe.strIngredient7 ? (
                <li>{`${currentRecipe.strMeasure7} ${currentRecipe.strIngredient7}`}</li>
              ) : null}
              {currentRecipe.strIngredient8 ? (
                <li>{`${currentRecipe.strMeasure8} ${currentRecipe.strIngredient8}`}</li>
              ) : null}
              {currentRecipe.strIngredient9 ? (
                <li>{`${currentRecipe.strMeasure9} ${currentRecipe.strIngredient9}`}</li>
              ) : null}
              {currentRecipe.strIngredient10 ? (
                <li>{`${currentRecipe.strMeasure10} ${currentRecipe.strIngredient10}`}</li>
              ) : null}
              {currentRecipe.strIngredient11 ? (
                <li>{`${currentRecipe.strMeasure11} ${currentRecipe.strIngredient11}`}</li>
              ) : null}
              {currentRecipe.strIngredient12 ? (
                <li>{`${currentRecipe.strMeasure12} ${currentRecipe.strIngredient12}`}</li>
              ) : null}
              {currentRecipe.strIngredient13 ? (
                <li>{`${currentRecipe.strMeasure13} ${currentRecipe.strIngredient13}`}</li>
              ) : null}
              {currentRecipe.strIngredient14 ? (
                <li>{`${currentRecipe.strMeasure14} ${currentRecipe.strIngredient14}`}</li>
              ) : null}
              {currentRecipe.strIngredient15 ? (
                <li>{`${currentRecipe.strMeasure15} ${currentRecipe.strIngredient15}`}</li>
              ) : null}
              {currentRecipe.strIngredient16 ? (
                <li>{`${currentRecipe.strMeasure16} ${currentRecipe.strIngredient16}`}</li>
              ) : null}
              {currentRecipe.strIngredient17 ? (
                <li>{`${currentRecipe.strMeasure17} ${currentRecipe.strIngredient17}`}</li>
              ) : null}
              {currentRecipe.strIngredient18 ? (
                <li>{`${currentRecipe.strMeasure18} ${currentRecipe.strIngredient18}`}</li>
              ) : null}
              {currentRecipe.strIngredient19 ? (
                <li>{`${currentRecipe.strMeasure19} ${currentRecipe.strIngredient19}`}</li>
              ) : null}
              {currentRecipe.strIngredient20 ? (
                <li>{`${currentRecipe.strMeasure20} ${currentRecipe.strIngredient20}`}</li>
              ) : null}
            </ul>
            <h4>{currentRecipe.strCategory}</h4>
            <h5>{currentRecipe.strArea}</h5>
            <p>{currentRecipe.strInstructions}</p>
            <a href={currentRecipe.strYoutube}>Link to Youtube Video</a>
        </div>
    )
};