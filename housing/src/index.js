import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import  Main from './views/Main'
import Dashboard from './views/Dashboard'
import FindRoomate from './views/FindRoomate'
const routing = (
  <Router>
    <div>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/findroomate" component={FindRoomate} />

      </Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'))



// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
