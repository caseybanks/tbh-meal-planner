import { useState, useEffect } from 'react';
import { Recipe } from './Recipe';
import { Filter } from './Filter';
import { API } from '../common/Api';

export function RecipeList() {
  const [filter, setFilter] = useState('');
  const [recipies, setRecipies] = useState([]);

  const getRecipies = async () => {
    try {
      const res = await fetch(API.API_SEARCH + '?f=' + filter);
      const recipies = await res.json();
      setRecipies(recipies.meals);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getRecipies();
  });

  return (
    <div>
      <Filter filter={filter} setFilter={setFilter} />
      {filter ? (
        <ul>
          {recipies
            .filter((recipe) =>
              recipe.strMeal.toLowerCase().includes(filter.toLowerCase())
            )
            .map((recipe) => (
              <Recipe key={recipe.idMeal} recipe={recipe} />
            ))}
        </ul>
      ) : null}
    </div>
  );
}
