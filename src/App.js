import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// Importing the Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigation } from "./components/Navigation";
import WeekPlanner from "./pages/WeekPlanner";
import { HowToUse } from "./pages/HowToUse";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
      </header>

      <Router>
        <Switch>
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route exact path="/howtouse" component={HowToUse}>
            <HowToUse />
          </Route>
          <Route exact path="/" component={WeekPlanner}>
            <WeekPlanner />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
