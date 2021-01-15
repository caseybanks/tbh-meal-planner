import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API } from '../common/Api';
import { RecipeCard } from './RecipeCard';
import { useStoredRecipes } from './useStoredRecipes';


export function RecipeSearch() {

  const [searchString, setSearchString] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [resultsMessage, setResultsMessage] = useState("");
  const [isSearchHidden, setIsSearchHidden] = useState(false);
  const [isRecipeButtonHidden, setIsRecipeButtonHidden] = useState(false);
  const [isRecipeDetailsHidden, setIsRecipeDetailsHidden] = useState(true);
  const mealTypeOptions = ['breakfast', 'lunch','dinner'].map(m => {return {key: m, value: m, text: m}});
  const weekdayOptions = ['monday','tuesday','wednesday','thursday', 'friday','saturday','sunday'].map(m => {return {key: m, value: m, text: m}});
  const [selectedMealEvent, setSelectedMealEvent] = useState('breakfast');
  const [selectedWeekday, setSelectedWeekday] = useState('monday');
  const [selectedRecipe, setSelectedRecipe] = useState({});
  const [storedMeal, setStoredMeal] = useState([]);
  const storedRecipeChoices = useStoredRecipes();
  console.log('storedRecipeChoices: ', storedRecipeChoices);

  //API call to Get recipes from https://www.themealdb.com
  const getRecipies = () => {
    fetch(API.API_SEARCH + '?s=' + searchString)
      .then((resp) => resp.json())
      .then((recipes) => {
        console.log(recipes);
        setRecipes(recipes.meals);
      })
      .catch((err) => console.error(err));
  };

  //Set search term for search form
  const handleChange = (e) => {
    if(e.currentTarget.id==='mealEvent') setSelectedMealEvent(e.currentTarget.value);
    else if(e.currentTarget.id==='weekday') setSelectedWeekday(e.currentTarget.value);
  };

  //Search form submit
  const onSubmitSeach = (e) => {
    e.preventDefault();
    getRecipies(searchString);
    setIsRecipeButtonHidden(false);
    if(recipes){
      return setResultsMessage(<div><h5>Results for "{searchString}"</h5></div>);
    } else {
      return setResultsMessage('');
    };
  };

  //Search form reset
  const onResetSearch = (e) => {    
    e.preventDefault();
    setIsSearchHidden(false);
    setIsRecipeDetailsHidden(true);
    setSearchString('');
    setRecipes([]);
    setResultsMessage('');
  };

  //Handle selected recipe from search results
  const handleSelect = () => { 
    setIsRecipeDetailsHidden(false);
    setIsRecipeButtonHidden(true);
    setIsSearchHidden(true);
  };

  //Set selected mealEvent and weekday options with selectedRecipe
  const handleSubmit = (e) => {
    const newMealData = {};
    const keys = ['weekday', 'mealEvent', 'recipe'];
    const values = [selectedWeekday, selectedMealEvent, selectedRecipe];
    
    for (let i = 0; i < keys.length; i++) {
      newMealData[keys[i]] = values[i];
    };

    const mealData = [...storedRecipeChoices].concat(newMealData);
    console.log('newMealData: ', mealData);
    setStoredMeal(mealData);
  };

  //Will store a list of meals data every time the value of storedMeal changes
  useEffect(() => {
    localStorage.setItem('storedMeal', JSON.stringify(storedMeal));
  }, [storedMeal]);

  return (
    <div>
      <Form
        hidden={isSearchHidden}
        inline
        onSubmit={onSubmitSeach}
        onReset={onResetSearch}
      >
        <Form.Control
          as="input"
          type="text"
          placeholder="Search Recipe"
          className="mr-sm-2"
          onChange={(e) => setSearchString(e.target.value)}
          value={searchString}
          required
        />
        <Button variant="warning" type="search">
          Search
        </Button>
        <Button variant="danger" type="reset">
          Clear
        </Button>
        <div><p>Please enter at least one letter into the search box to return a recipe</p></div>
        {resultsMessage}
      </Form>

      {(recipes) ? 
        (
          <div className="row" hidden={isRecipeButtonHidden}>
            {recipes.map((recipe) => (
              <Button key={recipe.idMeal} onClick={handleSelect} onClickCapture={()=>{setSelectedRecipe(recipe)}}>
                <img
                  src={recipe.strMealThumb + "/preview"}
                  alt={recipe.strMeal + " thumbnail"}
                />
                <p>{recipe.strMeal}</p>
              </Button>
            ))}
          </div>
        ):<h5>There are no results for '{searchString}', please try a different search term.</h5>}      

      <div hidden={isRecipeDetailsHidden}>
        <Button variant="danger" onClick={onResetSearch}>
              Search again
        </Button>
        <Form inline className="justify-content-center" onSubmit={handleSubmit} >
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="weekday"
            custom
            value={weekdayOptions.value}
            onChange={handleChange}
            placeholder="Select day of the week"
            name="weekday"
          >
            {weekdayOptions.map((d) => (<option key={d.key} value={d.value}>{d.text}</option>))}
          </Form.Control>
          <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="mealEvent"
            custom
            value={mealTypeOptions.value}
            onChange={handleChange}
            placeholder="Select meal event"
            name="mealEvent"
          >
            {mealTypeOptions.map((m) => (<option key={m.key} value={m.value}>{m.text}</option>
            ))}
          </Form.Control>
          <Button type="submit" className="my-1">Select</Button>
        </Form>
        <RecipeCard recipe={selectedRecipe}/>
        </div>
    </div>
  );
};

RecipeSearch.propTypes = {
  searchString: PropTypes.string,
  setSearchString: PropTypes.func,
};
