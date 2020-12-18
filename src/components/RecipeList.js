import { useState, useEffect } from 'react';
import { Recipe } from './Recipe';


export function RecipeList({recipes}) {

  return (
    <div>
      {recipes ? (
        <div className="row">
          {recipes.map((recipe) => (
              <Recipe key={recipe.idMeal} recipe={recipe} />
            ))}
        </div>
      ) : null}
    </div>
  );
}
