import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { API } from '../common/Api';

export function RecipeDetails() {
  const { idMeal } = useParams();
  const [recipe, setRecipe] = useState({});

  const getRecipe = async () => {
    try {
      const res = await fetch(API.API_LOOKUP + '?i=' + idMeal);
      const recipe = await res.json();
      setRecipe(recipe.meals);
      console.log('recipe details', recipe)
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getRecipe();
  }, [idMeal]);

  if (!recipe.strMeal) return null;

  return (
    <div>
      <h1>Recipe Details</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal + " recipe"} />
      <div>
        <h2>{recipe.strMeal}</h2>
        <p>{recipe.strCategory}</p>
        <p>{recipe.strArea}</p>
        <p>{recipe.strInstructions}</p>
        <p>{recipe.strCategory}</p>
      </div>
    </div>
  );
}
