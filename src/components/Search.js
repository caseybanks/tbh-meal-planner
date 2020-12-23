import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API } from '../common/Api';
import { RecipeList } from './RecipeList';


export function Search() {

  const [searchString, setSearchString] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [resultsMessage, setResultsMessage] = useState("");

  const getRecipies = () => {
    fetch(API.API_SEARCH + '?s=' + searchString)
      .then((resp) => resp.json())
      .then((recipes) => {
        console.log(recipes);
        setRecipes(recipes.meals);
      })
      .catch((err) => console.error(err));
  };

  const onSubmitSeach = (e) => {
    e.preventDefault();
    getRecipies(searchString);
    if(recipes){
      return setResultsMessage(<h5>Results for "{searchString}"</h5>)
    } else {
      return setResultsMessage('');
    }
  };  

  const onResetSearch = (e) => {
    e.preventDefault();
    setSearchString('');
    setRecipes([]);
    setResultsMessage('');
  };

  return (
    <div>
      <Form
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
      </Form>
      <p>Please enter at least one letter into the search box to return a recipe</p>
      {resultsMessage}
      {(recipes) ? <RecipeList recipes={recipes} />:<h5>There are no results for '{searchString}', please try a different search term.</h5>} 
    </div>
  );
};

Search.propTypes = {
  searchString: PropTypes.string,
  setSearchString: PropTypes.func,
};
