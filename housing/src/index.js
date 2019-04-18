import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import  Main from './views/Main';
import Dashboard from './views/Dashboard';
import FindRoomate from './views/FindRoomate';
import NavBar from './views/Navbar';
import Profile from './views/Profile';
import ListApt from './views/ListApt';
import FindApt from './views/FindApt';



const routing = (
  <Router>
    <div>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/profile" component={Profile} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/findroomate" component={FindRoomate} />
            <Route path="/listApt" component={ListApt} />
            <Route path="/findApt" component={FindApt} />


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
