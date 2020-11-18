import { RecipeList } from '../components/RecipeList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TabNavigation } from '../components/TabNavigation';
import { RecipeDetails } from '../components/RecipeDetails';

function WeekPlanner() {
  return (
    <div>
      <h1>Week planner page</h1>
        <TabNavigation />
        <RecipeList />

        <Router>
          <Switch>
            <Route path="/weekplanner/recipedetails/:idMeal" >
              <RecipeDetails />
            </Route>
          </Switch>
        </Router>

    </div>
  );
}

export default WeekPlanner;