import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import WeekPlanner from './WeekPlannerPage';
import { HowToUse } from './HowToUsePage';
import { Contact } from './ContactPage';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


ReactDOM.render(
  <React.StrictMode>

    <div className="App">
          <Router>
            <Switch>
              <Route exact path="/contact" render={() => <Contact />} ></Route>
              <Route exact path="/howtouse" render={() => <HowToUse />} ></Route>
              <Route exact path="/" render={() => <WeekPlanner />} ></Route>
            </Switch>
          </Router>
        </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
