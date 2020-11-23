import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { TabNavigation } from './components/TabNavigation';
import { RecipeList } from './components/RecipeList';
import { RecipeDetails } from './components/RecipeDetails';

function WeekPlanner() {
  return (
    <div>
      <header className="App-header">
        <Navigation activePageKey='weekplanner' />
      </header>
      <h1>Week planner page</h1>
        <TabNavigation />
        <RecipeList />

        <Router>
          <Switch>
            <Route path="/weekplanner/recipedetails/:idMeal" render={() => <RecipeDetails />} ></Route>
            <Route path="" >
              <h1>no recipe</h1>
            </Route>
          </Switch>
        </Router>

    </div>
  );
}

export default WeekPlanner;