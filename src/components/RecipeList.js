import { Recipe } from './Recipe';


export function RecipeList({ recipes }) {
  return (
    <div className="row">
      {recipes.map((recipe) => (
        <Recipe key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}
