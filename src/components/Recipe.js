import { Link } from 'react-router-dom';

export function Recipe({ recipe }) {

    return (
        <Link to={`/weekplanner/recipedetails/${recipe.idMeal}`}>
            <img 
                src={recipe.strMealThumb + "/preview"}
                alt={recipe.strMeal + " thumbnail"}
            />        
        </Link>
    )
}