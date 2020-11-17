import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './assets/tbh-logo.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import { WeekPlanner } from './pages/WeekPlanner';
import { HowToUse } from './pages/HowToUse';
import { Contact } from './pages/Contact';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Switch>
          <Route path="/">
            <WeekPlanner />
          </Route>
          <Route path="/howtouse">
            <HowToUse />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <a href="/" >
        Weekly Planner 
      </a>
      <a href="/howtouse" >
        How to Use 
      </a>
      <a href="/contact" >
        Contact 
      </a>
    </div>
  );
}

export default App;
